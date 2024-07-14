import Filter from '@/assets/filter.svg'
import Dropdown from '@/assets/dropdown.svg'
import './style.scss'
import classNames from 'classnames'
import { useQueryParams } from '@/utils/useQueryParams'

type Props = {
  type: 'schedule' | 'record'
  open: () => void;
};

function FilterGroup({ type, open }: Props) {
  const { queryParams } = useQueryParams<{ isTeam: boolean; sort: string; gender: string; event: string }>()

  const teamParams = queryParams.get('isTeam')
  const sortParams = queryParams.get('sort')?.toString()?.split(',')?.length
  const genderParamsNumber = queryParams.get('gender')?.toString()?.split(',')?.length
  const eventParamsNumber = queryParams.get('event')?.toString()?.split(',')?.length

  const isActive = !!sortParams || !!genderParamsNumber || !!eventParamsNumber

  const filterActive = { '정렬': sortParams, '성별': genderParamsNumber, '종목': eventParamsNumber }

  const FILTERS = (() => {
    if (type === 'schedule') {
      return ['정렬', '지역', '거리', '대회 날짜', '수심']
    }
    if (teamParams) {
      return ['정렬']
    }
    return ['정렬', '성별', '종목']
  })()

  return (
    <>
      <div className={'filter-group'}>
        <div className={classNames('filter', isActive && 'active')} onClick={open}>
          <Filter width={16} height={16} className={'filter-icon'} />
          전체 필터
          <Dropdown width={16} height={16} className={'dropdown-icon'} />
        </div>
        {FILTERS.map((filter) => {
          const localActive = filterActive[filter]
          return (
            <div className={classNames('filter', localActive && 'active')} onClick={open}>
              {filter}&nbsp;{localActive}
              <Dropdown width={16} height={16} className={'dropdown-icon'} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FilterGroup
