import { Input as MantineInput } from '@mantine/core'
import $ from './style.module.scss'
import Search from '@/assets/search.svg'
import { useState } from 'react'

function Input() {
  const [value, setValue] = useState('')

  return (
    <MantineInput
      className={$.input}
      placeholder="선수/대회 검색하기"
      rightSection={<Search />}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  )
}

export default Input
