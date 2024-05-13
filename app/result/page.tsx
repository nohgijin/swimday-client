'use client'
import $ from './style.module.scss'
import { ActionIcon, Input } from '@mantine/core'
import Back from '@/assets/back.svg'
import Link from 'next/link'
import Search from '@/assets/search.svg'
import { useQueryState } from 'nuqs'
import { useState } from 'react'
import SearchInput from '@/components/SearchInputChip'
import {getDehydratedQuery, Hydrate} from "@/utils/react-query";
import queryOptions from "@/service/competition/queries";

async function Page() {
  const [name, setName] = useQueryState('name')
  const [isClickInput, setIsClickInput] = useState(false)
    const { queryKey, queryFn } = queryOptions.all();
    const query = await getDehydratedQuery({ queryKey, queryFn });

  if (isClickInput) {
    return <SearchInput {...{ setIsClickInput }} />
  }

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
          onClick={() => setIsClickInput(true)}
        />
      </div>

        <Hydrate state={{queries:[query]}}>


        </Hydrate>
    </section>
  )
}

export default Page
