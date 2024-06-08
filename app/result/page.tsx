'use client'

import './style.scss'
import { ActionIcon, Input } from '@mantine/core'
import Back from '@/assets/back.svg'
import Link from 'next/link'
import Search from '@/assets/search.svg'
import { useState } from 'react'
import FilterGroup from '@/components/FilterGroup'
import SearchInputChipGroup from '@/components/SearchInputChipGroup'
import { useQueryParams } from '@/utils/useQueryParams'
import Drawer from '@/components/Drawer'
import { useDisclosure } from '@mantine/hooks'
import { PersonResultItem, TeamResultItem } from '@/components/ResultItem'

const PERSON_MOCK_DATA = [
  {
    id: 1,
    name: '제4회 수원시체육회장배 수영대회 (24.05.19)',
    team: 'Swimdevil',
    event: '자유형',
    result: '35.38',
    ranking: 7,
    sex: 'female',
    age: 1,
    isFin: true,
    meter: 50,
  },
  {
    id: 2,
    name: '제34회 수원특례시장배 (23.10.11)',
    team: '어쩌다수영',
    event: '자유형',
    result: '37.11',
    ranking: 10,
    sex: 'female',
    age: 1,
    isFin: false,
    meter: 50,
  },
]

const TEAM_MOCK_DATA = [
  {
    id: 1,
    name: '제4회 수원시체육회장배 수영대회 (24.05.19)',
    team: 'Swimdevil',
    ranking: 7,
    member: 35,
    gold: 3,
    silver: 5,
    bronze: 10,
  },
  {
    id: 2,
    name: '제4회 수원시체육회장배 수영대회 (24.05.19)',
    team: '어쩌다수영',
    ranking: 7,
    member: 35,
    gold: 3,
    silver: 5,
    bronze: 10,
  },
]

function Page() {
  const { queryParams } = useQueryParams()
  const [name, setName] = useState(queryParams.get('name') || '')
  const [isClickInput, setIsClickInput] = useState(false)
  const [opened, { open, close }] = useDisclosure(false)
  const [isTeam, setIsTeam] = useState(false)

  const MOCK_DATA = isTeam ? TEAM_MOCK_DATA : PERSON_MOCK_DATA
  const handleSearch = () => {
    // router.push(`/result?name=${name}&sort=${sort}&gender=${gender.toString()}&event=${event.toString()}`)
  }


  if (isClickInput) {
    return <SearchInputChipGroup {...{ setIsClickInput }} />
  }

  return (
    <main className={'result-page'}>
      <div className={'input-wrapper'}>
        <ActionIcon component={Link} className={'back'} variant={'transparent'} href={'/'}>
          <Back width={24} height={24} />
        </ActionIcon>
        <Input
          placeholder='선수/대회 검색하기'
          rightSectionPointerEvents={'all'}
          rightSection={
            <ActionIcon variant={'transparent'}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              isTeam && handleSearch()
            }
          }}
          onChange={(e) => {
            isTeam && setName(e.currentTarget.value)
          }}
          onClick={() => !isTeam && setIsClickInput(true)}
        />
      </div>
      <FilterGroup type={'record'} {...{ isTeam, open }} />
      {opened && <Drawer type={'record'} {...{ opened, close, isTeam }} />}
      <div className='results'>
        {MOCK_DATA.map((data) => {
          const Component = isTeam ? TeamResultItem : PersonResultItem

          return (
            <Component key={data.id} {...{ data }} />
          )
        })}
      </div>
    </main>
  )
}

export default Page
