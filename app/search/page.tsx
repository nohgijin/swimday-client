'use client'
import Tab from '@/components/Tab'

function Page() {
  const values = [
    { target: 'record', label: '기록 검색' },
    { target: 'schedule', label: '대회 일정' },
  ]

  return (
    <main>
      <Tab values={values} />
    </main>
  )
}

export default Page
