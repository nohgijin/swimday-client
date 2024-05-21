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
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const TABS = [
  { target: 'record', label: '기록 검색' },
  { target: 'schedule', label: '대회 일정' },
]

function Page() {
  const [name, setName] = useState('')

  const router = useRouter()

  return (
    <main className={$['search-wrapper']}>
      <Logo />
      <Tab values={TABS} />
      <div className={$.search}>
        <Input
          className={$.input}
          placeholder="선수/대회 검색하기"
          rightSectionPointerEvents={'all'}
          rightSection={
            <ActionIcon
              variant={'transparent'}
              component={Link}
              href={`/result?name=${name}`}
            >
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              router.push(
                `/result?name=${name}`,
              )
            }
          }}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
        />
      </div>
    </main>
  )
}

export default Page
