import { Input as MantineInput } from '@mantine/core'
import $ from './style.module.scss'
import Search from '@/assets/search.svg'

function Input() {
  return (
    <MantineInput
      className={$.input}
      placeholder="선수/대회 검색하기"
      rightSection={<Search />}
    />
  )
}

export default Input
