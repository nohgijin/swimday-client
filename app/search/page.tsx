'use client'
import Tab from '@/components/Tab'
import { ActionIcon, Button, Input } from '@mantine/core'
import Plus from '@/assets/plus.svg'
import Close from '@/assets/close.svg'
import $ from './style.module.scss'
import color from '@/styles/color'
import Logo from '@/components/Logo'
import { useState } from 'react'
import ChipGroup, { FILTERS } from '@/components/ChipGroup'
import Search from '@/assets/search.svg'
import { parseAsString, useQueryStates } from 'nuqs'

const TABS = [
  { target: 'record', label: '기록 검색' },
  { target: 'schedule', label: '대회 일정' },
]

function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const [sort, setSort] = useState('new')
  const [sex, setSex] = useState(FILTERS[1].map(({ value }) => value))
  const [event, setEvent] = useState([
    ...FILTERS[2].map(({ value }) => value),
    ...FILTERS[3].map(({ value }) => value),
  ])
  const [name, setName] = useState('')
  const [search, setSearch] = useQueryStates(
    {
      sort: parseAsString.withDefault('null'),
      sex: parseAsString.withDefault('null'),
      event: parseAsString.withDefault('null'),
      name: parseAsString.withDefault('null'),
    },
    {
      history: 'push',
    },
  )

  return (
    <main>
      <Logo />
      <Tab values={TABS} />
      <div className={$.search}>
        <Input
          className={$.input}
          placeholder="선수/대회 검색하기"
          rightSectionPointerEvents={'all'}
          rightSection={
            <ActionIcon
              variant={'white'}
              onClick={() => {
                setSearch({
                  sort,
                  sex: sex.toString(),
                  event: event.toString(),
                  name,
                })
              }}
            >
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              setSearch({
                sort,
                sex: sex.toString(),
                event: event.toString(),
                name,
              })
            }
          }}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
        />
        {isOpen && (
          <ChipGroup
            {...{
              sort,
              sex,
              event,
              setSort,
              setSex,
              setEvent,
            }}
          />
        )}
        <Button
          className={$['detail-search']}
          leftSection={
            isOpen ? (
              <Close width={12} height={12} />
            ) : (
              <Plus width={12} height={12} />
            )
          }
          variant={'white'}
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
