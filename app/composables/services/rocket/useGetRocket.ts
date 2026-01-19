import { GetRocketDocument } from '~/graphql/generated/graphql'

export function useGetRocket(rocketId: string | undefined) {
	const { data, pending, error } = useAsyncQuery(GetRocketDocument, { rocketId })

	const rocket = computed(() => data.value?.rocket)

	return {
		rocket,
		pending,
		error,
	}
}
