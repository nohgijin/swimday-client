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
  const sortParams = queryParams.get('sort') || ''
  const genderParamsNumber = queryParams.get('gender')?.toString()?.split(',')?.length
  const eventParamsNumber = queryParams.get('event')?.toString()?.split(',')?.length

  const isActive = !!sortParams || !!genderParamsNumber || !!eventParamsNumber

  const filterActive = { '정렬': sortParams, '성별': genderParamsNumber, '종목': eventParamsNumber }

  const FILTERS_TITLE = (() => {
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
        {FILTERS_TITLE.map((filterTitle) => {
          const filterContent = filterActive[filterTitle]
          const sort = { 'new': '최신순', 'old': '오래된순', 'fast': '최고기록순' }
          
          const content = filterTitle === '정렬' ? sort[filterContent] : `${filterTitle} ${filterContent}`
          return (
            <div className={classNames('filter', filterContent && 'active')} onClick={open}>
              {content}
              <Dropdown width={16} height={16} className={'dropdown-icon'} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FilterGroup
