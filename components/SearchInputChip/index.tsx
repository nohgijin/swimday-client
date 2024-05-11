import $ from './style.module.scss'
import Back from '@/assets/back.svg'
import { ActionIcon, Input } from '@mantine/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Search from '@/assets/search.svg'
import { parseAsString, useQueryStates } from 'nuqs'
import ChipGroup from '@/components/ChipGroup'

type Props = {
  setIsClickInput: Dispatch<SetStateAction<boolean>>
}

function SearchInputChip({ setIsClickInput }: Props) {
  const [queries, setQueries] = useQueryStates(
    {
      sort: parseAsString,
      sex: parseAsString,
      event: parseAsString,
      name: parseAsString,
    },
    { history: 'push' },
  )
  const [sort, setSort] = useState(queries.sort)
  const [sex, setSex] = useState(
    (queries.sex || '').split(',').map((value) => value),
  )
  const [event, setEvent] = useState(
    (queries.event || '').split(',').map((value) => value),
  )
  const [name, setName] = useState(queries.name)

  useEffect(() => {
    console.log(sort, sex, event, queries, '쿼리즈즈')
  }, [])

  const handleSearch = () => {
    setIsClickInput(false)
    setQueries({ sort, sex: sex.toString(), event: event.toString(), name })
  }

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
            <ActionIcon variant={'transparent'} onClick={handleSearch}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              handleSearch()
            }
          }}
        />
      </div>
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
    </div>
  )
}

export default SearchInputChip
