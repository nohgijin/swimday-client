'use client'

import { ActionIcon } from '@mantine/core'
import Back from '@/assets/back.svg'
import SearchInput from '@/components/SearchInput'
import './style.scss'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


function Page() {
  const router = useRouter()

  return (
    <main className={'duplicate-page'}>
      <div className={'input-wrapper'}>
        <ActionIcon className={'back'} variant={'transparent'} onClick={() => router.back()}>
          <Back width={24} height={24} />
        </ActionIcon>
        <SearchInput />
      </div>
      <div className={'guide'}>선수 검색결과와 팀 검색결과가 있습니다.</div>
      <div className={'options'}>
        <Link href={`/result?name=${name}&isTeam=false`} className={'option'}>
          선수 검색결과 보기(12)
        </Link>
        <Link href={`/result?name=${name}&isTeam=true`} className={'option'}>
          팀 검색결과 보기(12)
        </Link>
      </div>
    </main>
  )
}

export default Page