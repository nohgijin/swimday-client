import { Chip } from '@mantine/core'
import './style.scss'
import { useEffect } from 'react'
import { useQueryParams } from '@/utils/useQueryParams'
import { useChipStore } from '@/store/useChipStore'

export const FILTERS = [
  [
    {
      value: 'new',
      label: '최신순',
    },
    {
      value: 'old',
      label: '오래된순',
    },
    {
      value: 'fast',
      label: '최고기록순',
    },
  ],
  [
    {
      value: 'male',
      label: '남성',
    },
    {
      value: 'female',
      label: '여성',
    },
  ],
  [
    {
      value: 'free',
      label: '자유형',
    },
    {
      value: 'back',
      label: '배영',
    },
    {
      value: 'breast',
      label: '평영',
    },
    {
      value: 'butterfly',
      label: '접영',
    },
    {
      value: 'im',
      label: '개인혼영',
    },
  ],
  [
    { value: 'relay', label: '계영' },
    { value: 'imRelay', label: '혼계영' },
    { value: 'mixedGenderRelay', label: '혼성계영' },
    { value: 'mixedGenderImRelay', label: '혼성혼계영' },
  ],
]

type Props = {
  type: 'schedule' | 'record'
}

function ChipGroup({ type }: Props) {
  const { queryParams } = useQueryParams()
  const store = useChipStore()
  const { sort, gender, event, setSort, setGender, setEvent } = store
  const {
    scheduleSort,
    location,
    meter,
    date,
    depth,
    setScheduleSort,
    setLocation,
    setMeter,
    setDate,
    setDepth,
  } = store
  const isTeam = queryParams.get('isTeam')


  useEffect(() => {
    if (type === 'record') {
      const sortParam = queryParams.get('sort')
      const genderParam = (queryParams.get('gender') || '').split(',')
      const eventParam = (queryParams.get('event') || '').split(',')

      sortParam && setSort(sortParam)
      genderParam && setGender(genderParam)
      eventParam && setEvent(eventParam)
    }
    if (type === 'schedule') {
      const scheduleSortParam = queryParams.get('scheduleSort')
      const locationParams = (queryParams.get('location') || '').split(',')
      const meterParams = (queryParams.get('meter') || '').split(',')
      const dateParams = queryParams.get('date')
      const depthParams = (queryParams.get('depth') || '').split(',')

      scheduleSortParam && setScheduleSort(scheduleSortParam)
      locationParams && setLocation(locationParams)
      meterParams && setMeter(meterParams)
      dateParams && setDate(dateParams)
      depthParams && setDepth(depthParams)
    }
  }, [type, isTeam])

  return (
    <div className={'chip-group'}>
      <div className={'title'}>정렬</div>
      <div className='group'>
        <Chip.Group onChange={(value) => setSort(value)}>
          {FILTERS[0].map(({ label, value }) => (
            <Chip key={value} value={value} checked={sort === value}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      {!isTeam && <>
        <div className={'title'}>성별</div>
        <div className='group'>
          <Chip.Group multiple value={gender} onChange={(value) => setGender(value)}>
            {FILTERS[1].map(({ label, value }) => (
              <Chip key={value} value={value} checked={gender?.includes(value)}>
                {label}
              </Chip>
            ))}
          </Chip.Group>
        </div>
      </>}
      {!isTeam && <>
        <div className={'title'}>종목</div>
        <div className='group' style={{ flexDirection: 'column' }}>
          <Chip.Group multiple value={event} onChange={(value) => setEvent(value)}>
            <div className='personal-event'>
              {FILTERS[2].map(({ label, value }) => (
                <Chip key={value} value={value} checked={event?.includes(value)}>
                  {label}
                </Chip>
              ))}
            </div>
            <div className='team-event'>
              {FILTERS[3].map(({ label, value }) => (
                <Chip key={value} value={value} checked={event?.includes(value)}>
                  {label}
                </Chip>
              ))}
            </div>
          </Chip.Group>
        </div>
      </>}

    </div>
  )
}

export default ChipGroup
