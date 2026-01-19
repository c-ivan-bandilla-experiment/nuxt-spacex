import { computed } from 'vue'
import { GetRocketsDocument, type GetRocketsQueryVariables } from '~/graphql/generated/graphql'

export function useGetRockets(variables?: GetRocketsQueryVariables) {
    const { result, loading, error, refetch } = useQuery(GetRocketsDocument, variables ?? {}, {
        fetchPolicy: 'cache-and-network',
    })

    const rockets = computed(() => result.value?.rockets ?? [])

    return {
        rockets,
        pending: loading,
        error,
        refresh: refetch,
    }
}
