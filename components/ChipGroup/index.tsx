import { useState } from 'react'
import { Chip } from '@mantine/core'
import $ from './style.module.scss'

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
      label: '최고기록순',
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
  ],
  [
    { value: 'relay', label: '계영' },
    { value: 'imRelay', label: '혼계영' },
    { value: 'mixedGenderRelay', label: '혼성계영' },
    { value: 'mixedGenderImRelay', label: '혼성혼계영' },
  ],
]

function ChipGroup() {
  const [sortValue, setSortValue] = useState('new')
  const [sexValue, setSexValue] = useState(FILTERS[1].map(({ value }) => value))
  const [eventValue, setEventValue] = useState([
    ...FILTERS[2].map(({ value }) => value),
    ...FILTERS[3].map(({ value }) => value),
  ])

  const handleAllChange = (value: boolean, kind: 'SEX' | 'EVENT') => {
    const setValue = kind === 'SEX' ? setSexValue : setEventValue

    if (value) {
      const FILTER_INDEX = kind === 'SEX' ? 1 : 2
      const allValue = FILTERS[FILTER_INDEX].map(({ value }) => value)
      setValue(allValue)
      return
    }

    setValue([])
  }

  console.log(sortValue, sexValue, eventValue)

  return (
    <>
      <div className={$.title}>정렬</div>
      <div className={$['chip-group']}>
        <Chip.Group onChange={(value) => setSortValue(value)}>
          {FILTERS[0].map(({ label, value }) => (
            <Chip
              className={$.chip}
              key={value}
              value={value}
              checked={sortValue === value}
            >
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={$.title}>성별</div>
      <div className={$['chip-group']}>
        <Chip
          className={$.chip}
          value={'all'}
          checked={sexValue.length === FILTERS[1].length}
          onChange={(value) => handleAllChange(value, 'SEX')}
        >
          전체
        </Chip>
        <Chip.Group
          multiple
          value={sexValue}
          onChange={(value) => setSexValue(value)}
        >
          {FILTERS[1].map(({ label, value }) => (
            <Chip
              className={$.chip}
              key={value}
              value={value}
              checked={sexValue.includes(value)}
            >
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={$.title}>종목</div>
      <div className={$['chip-group']} style={{ flexDirection: 'column' }}>
        <Chip
          className={$.chip}
          value={'all'}
          checked={eventValue.length === FILTERS[2].length}
          onChange={(value) => handleAllChange(value, 'EVENT')}
        >
          전체
        </Chip>
        <Chip.Group
          multiple
          value={eventValue}
          onChange={(value) => setEventValue(value)}
        >
          <div className={$['personal-event']}>
            {FILTERS[2].map(({ label, value }) => (
              <Chip
                className={$.chip}
                key={value}
                value={value}
                checked={eventValue.includes(value)}
              >
                {label}
              </Chip>
            ))}
          </div>
          <div className={$['team-event']}>
            {FILTERS[3].map(({ label, value }) => (
              <Chip
                className={$.chip}
                key={value}
                value={value}
                checked={eventValue.includes(value)}
              >
                {label}
              </Chip>
            ))}
          </div>
        </Chip.Group>
      </div>
    </>
  )
}

export default ChipGroup
