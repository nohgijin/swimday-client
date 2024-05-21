import { Chip } from '@mantine/core'
import $ from './style.module.scss'
import {Dispatch, SetStateAction, useState} from 'react'
import {parseAsString, useQueryStates} from "nuqs";
import {useQueryParams} from "@/utils/useQueryParams";

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

//TODO: 그룹칩해야함. 지금 타입 하나도 안맞음.
function ChipGroup() {
  const { queryParams,setQueryParams  } = useQueryParams<{sort:string,gender:string,event:string}>();
  const sort = queryParams.get('sort')
  const gender = queryParams.get('gender')
  const event = queryParams.get('event')

  return (
    <>
      <div className={$.title}>정렬</div>
      <div className={$['chip-group']}>
        <Chip.Group onChange={(value) => setQueryParams({sort: value})}>
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
        <Chip.Group multiple value={gender||[]} onChange={(value) => setQueryParams({gender: value})}>
          {FILTERS[1].map(({ label, value }) => (
            <Chip
              className={$.chip}
              key={value}
              value={value}
              checked={gender?.includes(value)}
            >
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={$.title}>종목</div>
      <div className={$['chip-group']} style={{ flexDirection: 'column' }}>
        <Chip.Group
          multiple
          value={event||[]}
          onChange={(value) => setQueryParams({event: value})}
        >
          <div className={$['personal-event']}>
            {FILTERS[2].map(({ label, value }) => (
              <Chip
                className={$.chip}
                key={value}
                value={value}
                checked={event?.includes(value)}
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
                checked={event?.includes(value)}
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
