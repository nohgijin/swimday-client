import { Input as MantineInput } from '@mantine/core'
import $ from './style.module.scss'
import Search from '@/assets/search.svg'
import { useQueryState } from 'nuqs'

function Input() {
  const [value, setValue] = useQueryState('name')

  return (
    <MantineInput
      className={$.input}
      placeholder="선수/대회 검색하기"
      rightSection={<Search width={16} height={16} />}
      value={value || ''}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  )
}

export default Input
