import Filter from '@/assets/filter.svg'
import Dropdown from '@/assets/dropdown.svg'
import $ from './style.module.scss'
import classNames from 'classnames'
import { useQueryParams } from '@/utils/useQueryParams'
import { initialState } from '@/store/useChipStore'

type Props = {
  open: () => void;
};

function ResultFilterGroup({ open }: Props) {
  const INITIAL_RESULT_SORT = initialState.resultSort
  const INITIAL_GENDER_COUNT = initialState.gender.length
  const INITIAL_EVENT_COUNT = initialState.event.length

  const RESULT_SORT = {
    new: '최신순',
    old: '오래된순',
    fast: '최고기록순',
  }

  const { queryParams } = useQueryParams<{ isTeam: boolean; resultSort: string; gender: string; event: string }>()

  const teamParams = queryParams.get('isTeam')
  const resultSortParams = queryParams.get('resultSort') as keyof typeof RESULT_SORT
  const genderParamsNumber = (queryParams.get('gender') || '')?.split(',')?.length
  const eventParamsNumber = (queryParams.get('event') || '')?.split(',')?.length

  const noRenderCondition = !resultSortParams

  if (noRenderCondition) {
    return null
  }

  const isResultSortActive = resultSortParams !== INITIAL_RESULT_SORT
  const isGenderActive = genderParamsNumber !== INITIAL_GENDER_COUNT
  const isEventActive = eventParamsNumber !== INITIAL_EVENT_COUNT

  const isAllActive = teamParams ? isResultSortActive : isResultSortActive || isGenderActive || isEventActive

  return (
    <>
      <div className={$['filter-group']}>
        <div className={classNames($.filter, isAllActive && $.active)} onClick={open}>
          <Filter width={16} height={16} className={$['filter-icon']} />
          전체 필터
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
        <div className={classNames($.filter, isResultSortActive && $.active)} onClick={open}>
          정렬&nbsp;({RESULT_SORT[resultSortParams]})
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
        {!teamParams && (
          <>
            <div className={classNames($.filter, isGenderActive && $.active)} onClick={open}>
              성별&nbsp;{genderParamsNumber}
              <Dropdown width={16} height={16} className={$['dropdown-icon']} />
            </div>
            <div className={classNames($.filter, isEventActive && $.active)} onClick={open}>
              종목&nbsp;{eventParamsNumber}
              <Dropdown width={16} height={16} className={$['dropdown-icon']} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

function ScheduleFilterGroup({ open }: Props) {
  const INITIAL_SCHEDULE_SORT = initialState.scheduleSort
  const INITIAL_LOCATION_COUNT = initialState.location.length
  const INITIAL_METER_COUNT = initialState.meter.length
  const INITIAL_DATE_SORT = initialState.date

  const SCHEDULE_SORT = {
    deadline: '마감임박순',
    new: '신규기록순',
  }

  const { queryParams } = useQueryParams<{
    scheduleSort: string;
    location: string;
    meter: string;
    date: string;
  }>()

  const scheduleSortParams = queryParams.get('scheduleSort') as keyof typeof SCHEDULE_SORT
  const locationParamsNumber = (queryParams.get('location') || '')?.split(',')?.length
  const meterParamsNumber = (queryParams.get('meter') || '')?.split(',')?.length
  const dateParams = queryParams.get('date')

  const noRenderCondition = !scheduleSortParams

  if (noRenderCondition) {
    return null
  }

  const isScheduleSortActive = scheduleSortParams !== INITIAL_SCHEDULE_SORT
  const isLocationActive = locationParamsNumber !== INITIAL_LOCATION_COUNT
  const isMeterActive = meterParamsNumber !== INITIAL_METER_COUNT
  const isDateActive = dateParams !== INITIAL_DATE_SORT

  const isAllActive = isScheduleSortActive || isLocationActive || isMeterActive || isDateActive

  return (
    <>
      <div className={$['filter-group']}>
        <div className={classNames($.filter, isAllActive && $.active)} onClick={open}>
          <Filter width={16} height={16} className={$['filter-icon']} />
          전체 필터
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
        <div className={classNames($.filter, isScheduleSortActive && $.active)} onClick={open}>
          정렬&nbsp;({SCHEDULE_SORT[scheduleSortParams]})
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
        <div className={classNames($.filter, isLocationActive && $.active)} onClick={open}>
          지역&nbsp;{locationParamsNumber}
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
        <div className={classNames($.filter, isMeterActive && $.active)} onClick={open}>
          거리&nbsp;{meterParamsNumber}
          <Dropdown width={16} height={16} className={$['dropdown-icon']} />
        </div>
      </div>
    </>
  )
}

export { ResultFilterGroup, ScheduleFilterGroup }
