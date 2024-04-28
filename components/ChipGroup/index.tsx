import { useState } from 'react'
import { Chip } from '@mantine/core'

const FILTERS = [
  [
    {
      value: 'new',
      label: '최신순',
    },
    {
      value: 'old',
      label: '오래된순',
    },
    {
      value: 'fast',
      label: '빠른순',
    },
  ],
  [
    {
      value: 'male',
      label: '남성',
    },
    {
      value: 'female',
      label: '여성',
    },
  ],
  [
    {
      value: 'free',
      label: '자유형',
    },
    {
      value: 'back',
      label: '배영',
    },
    {
      value: 'breast',
      label: '평영',
    },
    {
      value: 'butterfly',
      label: '접영',
    },
    {
      value: 'im',
      label: '개인혼영',
    },
    { value: 'relay', label: '계영' },
    { value: 'imRelay', label: '혼계영' },
    { value: 'mixedGenderRelay', label: '혼성계영' },
    { value: 'mixedGenderImRelay', label: '혼성혼계영' },
  ],
]

function AChipGroup() {
  const [sortValue, setSortValue] = useState('new')
  const [sexValue, setSexValue] = useState(['all'])
  const [eventValue, setEventValue] = useState(['all'])

  const handleSexValue = (value) => {
    setSexValue(value)
  }

  const handleEventValue = (value) => {
    setEventValue(value)
  }

  return (
    <>
      <Chip.Group value={sortValue} onChange={setSortValue}>
        {FILTERS[0].map(({ label, value }) => (
          <Chip key={value} value={value} checked={sortValue.includes(value)}>
            {label}
          </Chip>
        ))}
      </Chip.Group>
      <Chip.Group multiple onChange={handleSexValue}>
        {FILTERS[1].map(({ label, value }) => (
          <Chip key={value} value={value} checked={sexValue.includes(value)}>
            {label}
          </Chip>
        ))}
      </Chip.Group>
      <Chip.Group multiple onChange={handleEventValue}>
        {FILTERS[2].map(({ label, value }) => (
          <Chip key={value} value={value} checked={eventValue.includes(value)}>
            {label}
          </Chip>
        ))}
      </Chip.Group>
    </>
  )
}

export default AChipGroup
