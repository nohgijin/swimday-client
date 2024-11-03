'use client'

import $ from './style.module.scss'
import dayjs from 'dayjs'
import { Competition } from '@/model/competition'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

//접수 시작 전
//접수 시작 되고 접수 날짜 마감 전 || 접수 마감 전
//접수 선착순 마감되고 대회 시작 전 || 접수 날짜 마감되고 대회 시작 전
//대회 시작 함
//대회 끝남

export const MOCKS = [
  //접수 시작 전
  {
    name: '광교복합체육센터1 광교복합체육센터2 광교복합체육센터3 광교복합체육센터4 광교복합체육센터5 광교복합체육센터6',
    start_date: '2024-11-1',
    end_date: '2024-11-2',
    registration_start_date: '2024-10-1',
    registration_end_date: '2024-10-12',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
  },
  // 접수 시작되고 접수 날짜 마감  전
  {
    name: '2',
    start_date: '2024-11-1',
    end_date: '2024-11-2',
    registration_start_date: '2024-9-4',
    registration_end_date: '2024-10-12',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: false,
  },
  // 선착순 접수 마감 전
  {
    name: '2',
    start_date: '2024-11-1',
    end_date: '2024-11-2',
    registration_start_date: '2024-9-4',
    registration_end_date: '2024-10-12',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: false,
  },
  //접수 날짜 마감되고 대회 시작 전
  {
    name: '3',
    start_date: '2024-11-1',
    end_date: '2024-11-2',
    registration_start_date: '2024-9-1',
    registration_end_date: '2024-9-2',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: false,
  },
  //접수 선착순 마감되고 대회 시작 전
  {
    name: '3',
    start_date: '2024-11-1',
    end_date: '2024-11-2',
    registration_start_date: '2024-9-1',
    registration_end_date: '2024-9-4',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: true,
  },
  {
    name: '4',
    start_date: '2024-9-4',
    end_date: '2024-9-12',
    registration_start_date: '2024-8-1',
    registration_end_date: '2024-8-4',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: false,
  },
  {
    name: '5',
    start_date: '2024-8-4',
    end_date: '2024-8-12',
    registration_start_date: '2024-6-1',
    registration_end_date: '2024-6-4',
    location: '광교복합체육센터',
    meter: 50,
    documentation: '',
    depth: 2,
    isRegistrationClosed: false,
  },
]

type Props = {
  competition: Competition;
};
const STATUS = {
  beforeRegistration: { title: '접수 시작까지', color: '#e0eeff' },
  duringRegistration: { title: '접수 마감까지', color: '#c4deff' },
  beforeCompetition: { title: '대회 시작까지', color: '#93c2ff' },
  duringCompetition: { title: '진행중', color: '#1d7bf3' },
  afterCompetition: { title: '종료', color: '#4276b8' },
}
type StatusKey = keyof typeof STATUS;

function CompetitionCard({ competition }: Props) {
  const today = dayjs()

  const {
    name,
    registration_start_date,
    registration_end_date,
    start_date,
    end_date,
    isRegistrationClosed = false,
  } = competition

  const registrationStartDate = dayjs(registration_start_date)
  const registrationEndDate = dayjs(registration_end_date)
  const startDate = dayjs(start_date)
  const endDate = dayjs(end_date)

  const status: { key: string; remain?: string } = (() => {
    console.log(competition)
    if (today.isBefore(registrationStartDate)) {
      return { key: 'beforeRegistration', remain: `D - ${registrationStartDate.diff(today, 'day')}` }
    }
    if (today.isBetween(registrationStartDate, registrationEndDate, null, '[]') && !isRegistrationClosed) {
      return { key: 'duringRegistration', remain: `D - ${registrationEndDate.diff(today, 'day')}` }
    }
    if (today.isBetween(registrationEndDate, startDate, null, '()') || isRegistrationClosed) {
      return { key: 'beforeCompetition', remain: `D - ${startDate.diff(today, 'day')}` }
    }
    if (today.isBetween(startDate, endDate, null, '[]')) {
      return { key: 'duringCompetition' }
    }
    return { key: 'afterCompetition' }
  })()

  return (
    <div className={$['competition-card']}>
      <div className={$['d-day']} style={{ background: STATUS[status.key].color }}>
        <div className={$.status}>{STATUS[status.key].title}</div>
        <div className={$.remain}>{status.remain}</div>
      </div>
      <div className={$.info}>
        <div className={$.name}>{name}</div>
        <div className={$['all-date']}>
          <div className={$.date}>{start_date}</div>
          {start_date !== end_date && <div className={$.date}>&nbsp;~&nbsp;{end_date}</div>}
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
