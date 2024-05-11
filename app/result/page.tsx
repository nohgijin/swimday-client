'use client'
import $ from './style.module.scss'
import { ActionIcon, Input } from '@mantine/core'
import Back from '@/assets/back.svg'
import Link from 'next/link'
import Search from '@/assets/search.svg'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

function Page() {
  const [name, setName] = useState(useQueryState('name'))

  return (
    <section className={$.result}>
      <div className={$['input-wrapper']}>
        <ActionIcon
          component={Link}
          className={$.back}
          variant={'transparent'}
          href={'/'}
        >
          <Back width={24} height={24} />
        </ActionIcon>
        <Input
          className={$.input}
          placeholder="선수/대회 검색하기"
          rightSectionPointerEvents={'all'}
          rightSection={
            <ActionIcon variant={'transparent'}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
        />
      </div>
    </section>
  )
}

export default Page
