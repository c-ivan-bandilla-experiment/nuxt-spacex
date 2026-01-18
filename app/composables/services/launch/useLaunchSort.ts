import { useSort } from '~/composables/useSort'
import type { SortOrderOpts } from '~/types/sortOrderOpts'

export function useLaunchSort(
  data: Readonly<Ref<readonly any[]>>,
  sortOrder: Ref<SortOrderOpts>
): ComputedRef<any[]> {
  const sortFn = (a: any, b: any) => {
    const dateA = new Date(a.launch_date_utc)
    const dateB = new Date(b.launch_date_utc)
    return sortOrder.value === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
  }

  return useSort(data, sortFn)
}