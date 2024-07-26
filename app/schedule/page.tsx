'use client'
import Tab from '@/components/Tab'
import Logo from '@/components/Logo'
import './style.scss'
import { ScheduleFilterGroup } from '@/components/FilterGroup'
import { useDisclosure } from '@mantine/hooks'
import { ScheduleDrawer } from '@/components/Drawer'
import { useQueryParams } from '@/utils/useQueryParams'
import { useEffect } from 'react'
import { initialState } from '@/store/useChipStore'


//TODO: 대회일정 페이지 해야함
const TABS = [
  { url: 'record', label: '기록 검색' },
  { url: 'schedule', label: '대회 일정' },
]

// const a = useCompetitions()

function Page() {
  const {
    setQueryParams,
  } = useQueryParams<{ scheduleSort: string; location: string; meter: string; date: string; depth: string }>()

  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    const { scheduleSort, location, meter, date, depth } = initialState

    setQueryParams({
      scheduleSort,
      location: location.toString(),
      meter: meter.toString(),
      date,
      depth,
    })
  }, [])

  return (
    <main className={'schedule-page'}>
      <Logo />
      <Tab values={TABS} />
      <div className={'schedule-wrapper'}>
        <ScheduleFilterGroup {...{ open }} />
        {opened && <ScheduleDrawer {...{ opened, close }} />}
      </div>
    </main>
  )
}

export default Page
