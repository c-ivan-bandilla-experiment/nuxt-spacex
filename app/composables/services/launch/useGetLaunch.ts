import { computed, toValue, watch, type MaybeRefOrGetter } from 'vue'
import { GetLaunchesDocument, type GetLaunchesQueryVariables } from '~/graphql/generated/graphql'

export function useGetLaunch(customVariables?: MaybeRefOrGetter<GetLaunchesQueryVariables>) {
	const defaultVariables: Partial<GetLaunchesQueryVariables> = {
		offset: 0,
	}

	const variables = computed(() => {
		const vars = { ...defaultVariables, ...toValue(customVariables) }
		if (vars.limit === undefined) {
			delete vars.limit
		}
		return vars as GetLaunchesQueryVariables
	})

	const { result, loading, error, refetch } = useQuery(GetLaunchesDocument, variables, {
		fetchPolicy: 'cache-and-network',
	})

	watch(variables, (newVars) => {
		refetch(newVars)
	})

	const launches = computed(() => result.value?.launches ?? [])

	return {
		launches,
		pending: loading,
		error,
		refresh: refetch,
	}
}
