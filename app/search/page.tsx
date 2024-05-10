'use client'
import Tab from '@/components/Tab'
import { Button } from '@mantine/core'
import Plus from '@/assets/plus.svg'
import Close from '@/assets/close.svg'
import $ from './style.module.scss'
import color from '@/styles/color'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import { useState } from 'react'
import ChipGroup from '@/components/ChipGroup'

function Page() {
  const values = [
    { target: 'record', label: '기록 검색' },
    { target: 'schedule', label: '대회 일정' },
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <Logo />
      <Tab values={values} />
      <div className={$.search}>
        <Input></Input>
        {isOpen && <ChipGroup />}
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
