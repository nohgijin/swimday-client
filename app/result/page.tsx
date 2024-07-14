'use client'

import './style.scss'
import { ActionIcon } from '@mantine/core'
import Back from '@/assets/back.svg'
import { useState } from 'react'
import FilterGroup from '@/components/FilterGroup'
import { useQueryParams } from '@/utils/useQueryParams'
import Drawer from '@/components/Drawer'
import { useDisclosure } from '@mantine/hooks'
import { PersonProps, PersonSearchResultItem, TeamProps, TeamSearchResultItem } from '@/components/SearchResultItem'
import { useRouter } from 'next/navigation'
import SearchInput from '@/components/SearchInput'

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
  const { queryParams } = useQueryParams<{ isTeam: boolean; }>()
  const [opened, { open, close }] = useDisclosure(false)
  const [name] = useState(queryParams.get('name') || '')
  const router = useRouter()
  const isTeam = !!queryParams.get('team')

  const MOCK_DATA = isTeam ? TEAM_MOCK_DATA : PERSON_MOCK_DATA

  return (
    <main className={'result-page'}>
      <div className={'input-wrapper'}>
        <ActionIcon
          component={'button'}
          className={'back'}
          variant={'transparent'}
          onClick={() => {
            router.back()
          }}
        >
          <Back width={24} height={24} />
        </ActionIcon>
        <SearchInput />
      </div>
      <FilterGroup {...{ open }} />
      {opened && <Drawer type={'record'} {...{ opened, close }} />}
      <div className='results'>
        {MOCK_DATA.map((data) => {
          if (isTeam) {
            const itemData = data as TeamProps
            const { id, name, team, ranking, member, gold, silver, bronze } = itemData
            return <TeamSearchResultItem {...{ id, name, team, ranking, member, gold, silver, bronze }} />
          }
          const itemData = data as PersonProps
          const { id, name, team, event, result, ranking, sex, age, isFin, meter } = itemData
          return <PersonSearchResultItem {...{ id, name, team, event, result, ranking, sex, age, isFin, meter }} />
        })}
      </div>
    </main>
  )
}

export default Page
