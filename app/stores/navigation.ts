import type { RouteLocationNormalized, Router } from 'vue-router'
import { defineStore } from 'pinia'
import { nextTick } from 'vue'

type PageState = {
	path: string
	params: Record<string, any>
	query: Record<string, any>
	scrollY?: number
	extras?: Record<string, any>
}

export const useNavigationStore = defineStore('navigation', {
	state: () => ({
		stack: [] as PageState[],
		map: {} as Record<string, PageState>,
	}),
	actions: {
		push(route: RouteLocationNormalized, extras: Record<string, any> = {}) {
			const key = route.fullPath
			const s: PageState = {
				path: route.path,
				params: route.params as Record<string, any>,
				query: route.query as Record<string, any>,
				extras,
			}
			this.stack.push(s)
			this.map[key] = s
		},
		saveScroll(routeKey: string, y: number) {
			const s = this.map[routeKey]
			if (s) s.scrollY = y
		},
		updateExtras(routeKey: string, extras: Record<string, any>) {
			const s = this.map[routeKey]
			if (s) s.extras = { ...s.extras, ...extras }
		},
		pop() {
			const popped = this.stack.pop()
			if (popped) {
				// Reconstruct the fullPath key used in push()
				let key = popped.path
				const queryString = Object.keys(popped.query).length
					? '?' + new URLSearchParams(popped.query as Record<string, string>).toString()
					: ''
				key += queryString
				delete this.map[key]
			}
			return popped
		},
		peek() {
			return this.stack.length > 1 ? this.stack[this.stack.length - 2] : null
		},
		async back(router: Router) {
			// Pop current page first
			this.pop()
			// Get the previous page (now at top of stack)
			const prev = this.stack[this.stack.length - 1]
			if (!prev) {
				router.back()
				return
			}

			await router.push({ path: prev.path, params: prev.params, query: prev.query })
			nextTick(() => {
				window.scrollTo({ top: prev.scrollY ?? 0 })
			})
		},
	},
})
