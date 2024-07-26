import { Chip } from '@mantine/core'
import './style.scss'
import { useEffect, useRef } from 'react'
import { useQueryParams } from '@/utils/useQueryParams'
import { useChipStore } from '@/store/useChipStore'

function ResultChipGroup() {
  const RESULT_FILTERS = [
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
  const { queryParams } = useQueryParams()
  const store = useChipStore()
  const { resultSort, gender, event, setResultSort, setGender, setEvent } = store
  const isTeam = queryParams.get('isTeam')

  useEffect(() => {
    const resultSortParam = queryParams.get('resultSort')
    const genderParam = queryParams.get('gender') ? (queryParams.get('gender') as string)?.split(',') : []
    const eventParam = queryParams.get('event') ? (queryParams.get('event') as string)?.split(',') : []

    resultSortParam && setResultSort(resultSortParam)
    genderParam && setGender(genderParam)
    eventParam && setEvent(eventParam)
  }, [])

  return (
    <div className={'chip-group'}>
      <div className={'title'}>정렬</div>
      <div className='group'>
        <Chip.Group onChange={(value) => setResultSort(value)}>
          {RESULT_FILTERS[0].map(({ label, value }) => (
            <Chip key={value} value={value} checked={resultSort === value}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      {!isTeam && <>
        <div className={'title'}>성별</div>
        <div className='group'>
          <Chip.Group multiple value={gender} onChange={(value) => {
            if (!value.length) return
            setGender(value)
          }}>
            {RESULT_FILTERS[1].map(({ label, value }) => (
              <Chip key={value} value={value} checked={gender?.includes(value)}>
                {label}
              </Chip>
            ))}
          </Chip.Group>
        </div>
        <div className={'title'}>종목</div>
        <div className='group' style={{ flexDirection: 'column' }}>
          <Chip.Group multiple value={event} onChange={(value) => {
            if (!value.length) return
            setEvent(value)
          }}>
            <div className='personal-event'>
              {RESULT_FILTERS[2].map(({ label, value }) => (
                <Chip key={value} value={value} checked={event?.includes(value)}>
                  {label}
                </Chip>
              ))}
            </div>
            <div className='team-event'>
              {RESULT_FILTERS[3].map(({ label, value }) => (
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

//TODO: 스케쥴 칩 그룹 변수명 스키마랑 맞추기

function ScheduleChipGroup() {
  const SCHEDULE_FILTERS = [
    [
      {
        value: 'deadline',
        label: '마감임박순',
      },

      {
        value: 'new',
        label: '신규등록순',
      },
    ],
    [
      {
        value: 'seoul',
        label: '서울',
      },
      {
        value: 'gyeonggi',
        label: '경기',
      },
      {
        value: 'incheon',
        label: '인천',
      },
      {
        value: 'chungbuk',
        label: '충북',
      },
      {
        value: 'chungnam',
        label: '충남',
      },
      {
        value: 'daejeon',
        label: '대전',
      },
      {
        value: 'sejong',
        label: '세종',
      },
      {
        value: 'gangwon',
        label: '강원',
      },
      {
        value: 'daegu',
        label: '대구',
      },
      {
        value: 'gyeongbuk',
        label: '경북',
      },
      {
        value: 'gyeongnam',
        label: '경남',
      },
      {
        value: 'busan',
        label: '부산',
      },
      {
        value: 'ulsan',
        label: '울산',
      },
      {
        value: 'jeonbuk',
        label: '전북',
      },
      {
        value: 'jeonnam',
        label: '전남',
      },
      {
        value: 'gwangju',
        label: '광주',
      },
      {
        value: 'jeju',
        label: '제주',
      },
    ],
    [
      {
        value: 'half',
        label: '25m',
      },
      {
        value: 'full',
        label: '50m',
      },
    ],
    [
      {
        value: 'all',
        label: '전체',
      },
      {
        value: 'choice',
        label: '날짜 선택',
      },
    ],
  ]

  const { queryParams } = useQueryParams()
  const store = useChipStore()
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
  const dateRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scheduleSortParam = queryParams.get('scheduleSort')
    const locationParam = queryParams.get('location') ? (queryParams.get('location') as string)?.split(',') : []
    const meterParam = queryParams.get('meter') ? (queryParams.get('meter') as string)?.split(',') : []
    const dateParam = queryParams.get('date')
    const depthParam = queryParams.get('depth')

    setScheduleSort && setScheduleSort(scheduleSortParam)
    setLocation && setLocation(locationParam)
    setMeter && setMeter(meterParam)
    setDate && setDate(dateParam)
    setDepth && setDepth(depthParam)
  }, [])

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current!.scrollIntoView({ behavior: 'smooth', block: 'center' })
      dateRef.current!.querySelector('input')?.focus()
    }
  }, [date])

  return (
    <div className={'chip-group'}>
      <div className={'title'}>정렬</div>
      <div className='group'>
        <Chip.Group onChange={(value) => setScheduleSort(value)}>
          {SCHEDULE_FILTERS[0].map(({ label, value }) => (
            <Chip key={value} value={value} checked={scheduleSort === value}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={'title'}>지역</div>
      <div className='group'>
        <Chip.Group multiple value={location} onChange={(value) => {
          if (!value.length) return
          setLocation(value)
        }}>
          {SCHEDULE_FILTERS[1].map(({ label, value }) => (
            <Chip key={value} value={value} checked={location?.includes(value)}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={'title'}>거리</div>
      <div className='group'>
        <Chip.Group multiple value={meter} onChange={(value) => {
          if (!value.length) return
          setMeter(value)
        }}>
          {SCHEDULE_FILTERS[2].map(({ label, value }) => (
            <Chip key={value} value={value} checked={meter?.includes(value)}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={'title'}>날짜</div>
      <div className='group'>
        <Chip.Group multiple value={date} onChange={(value) => {
          if (!value.length) return
          setDate(value)
        }}>
          {SCHEDULE_FILTERS[3].map(({ label, value }) => (
            <Chip key={value} value={value} checked={date === value}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
        {date === 'choice' &&
          <div className='date-wrapper'>
            <div className='date' ref={dateRef}>
              <input type='number' placeholder={'YYYY'} className={'year'} autoFocus></input>
              <div className={'unit'}>년</div>
              <input type='number' placeholder={'MM'} className={'month'}></input>
              <div className={'unit'}>월</div>
              <input type='number' placeholder={'DD'} className={'day'}></input>
              <div className={'unit'}>일</div>
            </div>
            부터 개최되는 대회 보기
          </div>
        }
      </div>
    </div>
  )
}

export { ResultChipGroup, ScheduleChipGroup }