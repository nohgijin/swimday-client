'use client'
import Tab from '@/components/Tab'
import Logo from '@/components/Logo'
import { useCompetitions } from '@/service/competition/useCompetitionService'
import './style.scss'
import FilterGroup from '@/components/FilterGroup'
import { useDisclosure } from '@mantine/hooks'
import Drawer from '@/components/Drawer'

const TABS = [
  { url: 'record', label: '기록 검색' },
  { url: 'schedule', label: '대회 일정' },
]

function Page() {
  const a = useCompetitions()
  const [opened, { open, close }] = useDisclosure(false)

  console.log(a, 'ㅁㅁㅁㅁㄴ')

  return (
    <main className={'schedule-page'}>
      <Logo />
      <Tab values={TABS} />
      <div className={'schedule-wrapper'}>
        <FilterGroup type={'schedule'} {...{ open }} />
        {opened && <Drawer {...{ opened, close }} />}
      </div>


    </main>
  )
}

export default Page
