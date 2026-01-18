export function useLaunchFilter(
  data: Ref<any[]>,
  year: Ref<any>,
  missionName: Ref<any>
): ComputedRef<any[]> {
  const filterFn = (launch: any, filters: any) => {
    if (
      filters.year &&
      launch?.launch_date_utc &&
      new Date(launch.launch_date_utc).getFullYear() !== filters.year
    )
      return false
    if (
      filters.missionName &&
      launch?.mission_name &&
      !launch.mission_name.toLowerCase().includes(filters.missionName.toLowerCase())
    )
      return false
    return true
  }

  const filters = { year, missionName }

  return useFilter(data, filterFn, filters)
}