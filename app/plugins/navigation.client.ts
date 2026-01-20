import { useNavigationStore } from '~/stores/navigation'

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter()

    router.afterEach((to, from) => {
        // Only run on client and when it's a real navigation (not initial page load)
        if (from.name) {
            const navStore = useNavigationStore()
            navStore.push(to)
        }
    })

    // Push initial route on first load
    router.isReady().then(() => {
        const navStore = useNavigationStore()
        const currentRoute = router.currentRoute.value
        // Only push if stack is empty (initial load)
        if (navStore.stack.length === 0) {
            navStore.push(currentRoute)
        }
    })
})
