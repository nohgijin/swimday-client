import $ from './style.module.scss'
import Back from '@/assets/back.svg'
import { ActionIcon, Input } from '@mantine/core'
import { Dispatch, SetStateAction, useState } from 'react'
import Search from '@/assets/search.svg'
import { parseAsString, useQueryStates } from 'nuqs'
import ChipGroup from '@/components/ChipGroup'

type Props = {
  setIsClickInput: Dispatch<SetStateAction<boolean>>
}

function SearchInputChip({ setIsClickInput }: Props) {
  const [queries, setQueries] = useQueryStates({
    sort: parseAsString,
    sex: parseAsString,
    event: parseAsString,
    name: parseAsString,
  })
  const [sex, setSex] = useState(
    (queries.sex as string)?.split(',').map((value) => value),
  )
  const [event, setEvent] = useState(
    (queries.event as string)?.split(',').map((value) => value),
  )

  return (
    <div className={$['search-input-chip']}>
      <div className={$['search-input']}>
        <ActionIcon
          className={$.back}
          variant={'transparent'}
          onClick={() => setIsClickInput(false)}
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
          value={queries.name}
          onChange={(e) => setQueries({ name: e.currentTarget.value })}
        />
      </div>
      <ChipGroup
        sort={queries.sort as string}
        sex={(queries.sex as string)?.split(',')}
        event={(queries.event as string)?.split(',')}
        setSort={(value: string) => setQueries({ ...queries, sort: value })}
        setSex={(value) => {
          setSex(value)
          setQueries({ ...queries, sex: value.toString() })
        }}
        setEvent={(value) => {
          setEvent(value)
          setQueries({ ...queries, event: value.toString() })
        }}
      />
    </div>
  )
}

export default SearchInputChip
