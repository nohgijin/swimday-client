"use client";

import './style.scss'
import { ActionIcon } from '@mantine/core'
import Back from '@/assets/back.svg'
import { useRouter } from 'next/navigation'

function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <main className={"result-detail-page"}>
      <ActionIcon variant={"transparent"} onClick={() => router.back()}>
        <Back width={24} height={24} />
      </ActionIcon>
      <div className={"result-detail"}>
        {id}
        상세는 여기에 들어감
      </div>
    </main>
  );
}

export default Page;
