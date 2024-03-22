'use client'
import Tab from '@/components/Tab'
import { Button } from '@mantine/core'

function Page() {
  const values = [
    { target: 'record', label: '기록 검색' },
    { target: 'schedule', label: '대회 일정' },
  ]

  return (
    <main>
      <Tab values={values} />
      <Button>상세검색 열기</Button>
    </main>
  )
}

export default Page
