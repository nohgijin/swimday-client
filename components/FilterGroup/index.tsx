import Filter from '@/assets/filter.svg'
import Dropdown from '@/assets/dropdown.svg'
import './style.scss'
import classNames from 'classnames'
import { useQueryParams } from '@/utils/useQueryParams'
import { initialState } from '@/store/useChipStore'

type Props = {
  open: () => void;
};

const INITIAL_RESULT_SORT = initialState.resultSort
const INITIAL_GENDER_COUNT = initialState.gender.length
const INITIAL_EVENT_COUNT = initialState.event.length

const RESULT_SORT = {
  new: '최신순',
  old: '오래된순',
  fast: '최고기록순',
}

function ResultFilterGroup({ open }: Props) {
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
      <div className={'filter-group'}>
        <div className={classNames('filter', isAllActive && 'active')} onClick={open}>
          <Filter width={16} height={16} className={'filter-icon'} />
          전체 필터
          <Dropdown width={16} height={16} className={'dropdown-icon'} />
        </div>
        <div className={classNames('filter', isResultSortActive && 'active')} onClick={open}>
          정렬&nbsp;({RESULT_SORT[resultSortParams]})
          <Dropdown width={16} height={16} className={'dropdown-icon'} />
        </div>
        {!teamParams && (
          <>
            <div className={classNames('filter', isGenderActive && 'active')} onClick={open}>
              성별&nbsp;{genderParamsNumber}
              <Dropdown width={16} height={16} className={'dropdown-icon'} />
            </div>
            <div className={classNames('filter', isEventActive && 'active')} onClick={open}>
              종목&nbsp;{eventParamsNumber}
              <Dropdown width={16} height={16} className={'dropdown-icon'} />
            </div>
          </>
        )}
      </div>
    </>
  )
}

function ScheduleFilterGroup() {
  return <div>스케쥴필터그룹</div>
}

export { ResultFilterGroup, ScheduleFilterGroup }
