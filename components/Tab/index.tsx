'use client'

import { Tabs } from '@mantine/core'
import $ from './style.module.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  values: { target: string; label: string }[]
}

function Tab({ values }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const target = searchParams.get('target') || values[0].target

  return (
    <Tabs
      variant="unstyled"
      className={$.tabs}
      value={target}
      onChange={(value) => router.push(`${pathname}?target=${value}`)}
    >
      <Tabs.List className={$['tab-list']}>
        {values.map((value) => (
          <Tabs.Tab className={$.tab} value={value.target} key={value.target}>
            {value.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default Tab
