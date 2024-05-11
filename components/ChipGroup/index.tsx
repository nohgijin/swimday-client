import { Chip } from '@mantine/core'
import $ from './style.module.scss'
import { Dispatch, SetStateAction } from 'react'

export const FILTERS = [
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

type Props = {
  sort: string
  sex: string[]
  event: string[]
  setSort: Dispatch<SetStateAction<string>>
  setSex: Dispatch<SetStateAction<string[]>>
  setEvent: Dispatch<SetStateAction<string[]>>
}

function ChipGroup({ sort, sex, event, setSort, setSex, setEvent }: Props) {
  const handleAllChange = (value: boolean, kind: 'SEX' | 'EVENT') => {
    const setValue = kind === 'SEX' ? setSex : setEvent
    if (!value) {
      return setValue([])
    }
    if (kind === 'SEX') {
      const allValue = FILTERS[1].map(({ value }) => value)
      setSex(allValue)
      return
    }

    const allValue = [
      ...FILTERS[2].map(({ value }) => value),
      ...FILTERS[3].map(({ value }) => value),
    ]
    setEvent(allValue)
  }

  return (
    <>
      <div className={$.title}>정렬</div>
      <div className={$['chip-group']}>
        <Chip.Group onChange={(value) => setSort(value)}>
          {FILTERS[0].map(({ label, value }) => (
            <Chip
              className={$.chip}
              key={value}
              value={value}
              checked={sort === value}
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
          checked={sex.length === FILTERS[1].length}
          onChange={(value) => handleAllChange(value, 'SEX')}
        >
          전체
        </Chip>
        <Chip.Group multiple value={sex} onChange={(value) => setSex(value)}>
          {FILTERS[1].map(({ label, value }) => (
            <Chip
              className={$.chip}
              key={value}
              value={value}
              checked={sex.includes(value)}
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
          checked={event.length === FILTERS[2].length + FILTERS[3].length}
          onChange={(value) => handleAllChange(value, 'EVENT')}
        >
          전체
        </Chip>
        <Chip.Group
          multiple
          value={event}
          onChange={(value) => setEvent(value)}
        >
          <div className={$['personal-event']}>
            {FILTERS[2].map(({ label, value }) => (
              <Chip
                className={$.chip}
                key={value}
                value={value}
                checked={event.includes(value)}
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
                checked={event.includes(value)}
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
