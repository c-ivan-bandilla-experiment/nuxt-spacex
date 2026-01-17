import { GetLaunchesDocument, type GetLaunchesQueryVariables } from '~/graphql/generated/graphql'

export function useGetLaunch(customVariables?: Partial<GetLaunchesQueryVariables>) {
  const defaultVariables: GetLaunchesQueryVariables = {
    limit: 5,
    offset: 0,

	// Its seems not working even a valid LaunchFind object
    find: {
      launch_year: '2023',
    },
  }

  const variables = { ...defaultVariables, ...customVariables }

  const { data, pending, error } = useAsyncQuery(GetLaunchesDocument, variables)

  const launches = computed(() => data.value?.launches ?? [])

  return {
    launches,
    pending,
    error,
  }
}