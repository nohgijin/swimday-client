'use client'
import Tab from '@/components/Tab'
import { ActionIcon, Button, Input } from '@mantine/core'
import Plus from '@/assets/plus.svg'
import Close from '@/assets/close.svg'
import color from '@/styles/color'
import Logo from '@/components/Logo'
import { useEffect, useState } from 'react'
import ChipGroup from '@/components/ChipGroup'
import Search from '@/assets/search.svg'
import { useRouter } from 'next/navigation'
import { useChipStore } from '@/store/useChipStore'
import './style.scss'
import { useCompetitions } from '@/service/competition/useCompetitionService'

const TABS = [
  { query: 'record', label: '기록 검색' },
  { query: 'schedule', label: '대회 일정' },
]

function Page() {
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const store = useChipStore()
  const { sort, gender, event, setSort, setGender, setEvent } = store
  const router = useRouter()
  const a = useCompetitions()

  console.log(process.env.NEXT_PUBLIC_TOKEN, '토큰값')

  console.log(a, '대회')

  useEffect(() => {
    setSort('new')
    setGender([])
    setEvent([])
  }, [])

  const handleSearch = () => {
    router.push(`/result?name=${name}&sort=${sort}&gender=${gender.toString()}&event=${event.toString()}`)
  }

  return (
    <main className={'search-page'}>
      <Logo />
      <Tab values={TABS} />
      <div className='search-wrapper'>
        <div className='description'>
          기록을 확인하고 싶은
          <br />
          수영 선수/팀 이름을 적어주세요.
        </div>
        <Input
          placeholder='선수/대회 검색하기'
          rightSectionPointerEvents={'all'}
          rightSection={
            <ActionIcon variant={'transparent'} component={'div'} onClick={handleSearch}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              handleSearch()
            }
          }}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
        />
        {isOpen && <ChipGroup />}
        <Button
          leftSection={isOpen ? <Close width={12} height={12} /> : <Plus width={12} height={12} />}
          variant={'transparent'}
          color={color['$text-black-30']}
          onClick={() => setIsOpen(!isOpen)}
        >
          상세검색 {isOpen ? '닫기' : '열기'}
        </Button>
      </div>
    </main>
  )
}

export default Page
