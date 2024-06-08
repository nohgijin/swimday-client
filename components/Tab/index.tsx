'use client'

import { Tabs } from '@mantine/core'
import './style.scss'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  values: { url: string; label: string }[];
};

function Tab({ values }: Props) {
  const pathname = usePathname().replace('/', '')
  const router = useRouter()

  return (
    <Tabs variant='unstyled' value={pathname} onChange={(value: string) => {
      router.push(value)
    }}>
      <Tabs.List>
        {values.map((value) => (
          <Tabs.Tab value={value.url} key={value.url}>
            {value.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

export default Tab
