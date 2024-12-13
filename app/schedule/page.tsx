'use client'
import Tab from '@/components/Tab'
import Logo from '@/components/Logo'
import $ from './style.module.scss'
import { ScheduleFilterGroup } from '@/components/FilterGroup'
import { useDisclosure } from '@mantine/hooks'
import { ScheduleDrawer } from '@/components/Drawer'
import { useQueryParams } from '@/utils/useQueryParams'
import { useEffect, useState } from 'react'
import { initialState } from '@/store/useChipStore'
import { useCompetitions } from '@/service/competition/useCompetitionService'
import Checkbox from '@/components/Checkbox'
import CompetitionCard from '@/components/CompetitionCard'
import Link from 'next/link'

const TABS = [
  { url: 'record', label: '기록 검색' },
  { url: 'schedule', label: '대회 일정' },
]

function Page() {
  const { queryParams, setQueryParams } = useQueryParams<{
    scheduleSort: string;
    location: string;
    meter: string;
    date: string;
  }>()
  const sort = queryParams.get('scheduleSort')
  const location = queryParams.get('location')
  const meter = queryParams.get('meter')
  const date = queryParams.get('date')
  const [isAccepting, setIsAccepting] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const pageSize = 50
  const [opened, { open, close }] = useDisclosure(false)
  const { data, fetchNextPage, hasNextPage } = useCompetitions({ page, pageSize, meter })

  useEffect(() => {
    const { scheduleSort, location, meter, date } = initialState

    setQueryParams({
      scheduleSort,
      location: location.toString(),
      meter: meter.toString(),
      date,
    })
  }, [])

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setIsAccepting(target.checked)
  }

  return (
    <main className={$['schedule-page']}>
      <div className={$['sticky-header']}>
        <Logo />
        <Tab values={TABS} />
        <div className={$['schedule-wrapper']}>
          <ScheduleFilterGroup {...{ open }} />
          {opened && <ScheduleDrawer {...{ opened, close }} />}
          <Checkbox label={'모집중인 대회만'} onClick={handleCheckboxClick} />
        </div>
      </div>
      <div className={$['competitions']}>
        {data?.pages.flatMap((page) =>
          page.data.map((competition) => (
            <Link key={competition.id} href={`/schedule/${competition.id}`}>
              <CompetitionCard competition={competition.attributes} />
            </Link>
          )),
        )}
      </div>
    </main>
  )
}

export default Page
