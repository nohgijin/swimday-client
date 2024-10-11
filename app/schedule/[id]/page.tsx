//TODO: 대회일정 상세 페이지 해야함
'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@mantine/core'
import Download from '@/assets/download.svg'
import { useCompetition } from '@/service/competition/useCompetitionService'
import $ from './style.module.scss'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PdfViewer from '@/components/PdfViewer'
import { usePinchZoomStore } from '@/store/usePinchZoomStore'
import BackButton from '@/components/Back'

function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter()
  const [showToast, setShowToast] = useState(false)
  const { data } = useCompetition({ competitionId: id })
  const { setEnablePinchZoom } = usePinchZoomStore()

  useEffect(() => {
    setEnablePinchZoom(true)

    return () => setEnablePinchZoom(false)
  }, [setEnablePinchZoom])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [showToast])

  const noRenderCondition = !data?.data.attributes;
  if (noRenderCondition) {
    return null;
  }

  const { name, start_date, end_date, location, meter, documentation, depth } = data?.data.attributes;

  const handleCopy = async () => {
    setShowToast(true)
    await navigator.clipboard.writeText(window.location.href)
  }

  return (
    <main className={$['competition-detail-page']}>
      <div className={$['competition-fixed']}>
        <BackButton />
        <div className={$['competition-title-wrapper']}>
          <div className={$.title}>{name}</div>
          <div className={$['update-date']}>{start_date}</div>
        </div>
      </div>
      <div className={$['competition-detail-wrapper']}>
        <div className={$.file}>
          <div className={$['file-title']}>첨부파일</div>
          <Link
            href={documentation}
            className={$['file-content']}
            target={'_blank'}
            rel='noopener noreferrer'
            locale={false}
            download
          >
            <Download width={16} height={16} />
            대회요강
          </Link>
        </div>
        <div className={$.pdf}>
          <PdfViewer path={documentation} />
        </div>
        {showToast && <div className={$.toast}>링크가 복사되었습니다.</div>}
        <div className={$['button-wrapper']}>
          <Button className={$.button} onClick={handleCopy}>
            공유하기
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Page
