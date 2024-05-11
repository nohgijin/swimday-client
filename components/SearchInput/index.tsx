import $ from './style.module.scss'
import Back from '@/assets/back.svg'
import { ActionIcon, Input } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import Search from '@/assets/search.svg'
import { parseAsString, useQueryStates } from 'nuqs'

type Props = {
  setIsClickInput: Dispatch<SetStateAction<boolean>>
}

function SearchInput({ setIsClickInput }: Props) {
  const [queries, setQueries] = useQueryStates({
    sort: parseAsString,
    sex: parseAsString,
    event: parseAsString,
    name: parseAsString,
  })
  return (
    <div className={$['search-input']}>
      <div className={$['input-wrapper']}>
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
          onClick={() => setIsClickInput(true)}
        />
      </div>
    </div>
  )
}

export default SearchInput
