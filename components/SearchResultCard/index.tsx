'use client'
import './style.scss'
import Link from 'next/link'

export type PersonProps = {
  id: number;
  name: string;
  team: string;
  event: string;
  result: string;
  ranking: number;
  sex: string;
  age: number;
  isFin: boolean;
  meter: number;
};

export type TeamProps = {
  id: number;
  name: string;
  team: string;
  ranking: number;
  member: number;
  gold: number;
  silver: number;
  bronze: number;
};

function TeamSearchResultCard({ id, name, team, ranking, member, gold, silver, bronze }: TeamProps) {
  return (
    <Link className='result-item' href={`/result/${id}`}>
      <div className={'team'}>{team}</div>
      <div className={'name'}>{name}</div>
      <div className={'result'}>{ranking}위</div>
    </Link>
  )
}

function PersonSearchResultCard({ id, name, team, event, result, ranking, sex, age, isFin, meter }: PersonProps) {
  const infos = [sex === 'male' ? '남자' : '여자', `성인부 ${age}그룹`, `${event} ${meter}m`, isFin && '핀경기']
  const results = `${result} ${ranking === -1 ? '(번외)' : `(${ranking}위)`}`

  return (
    <Link className='result-item' href={`/result/${id}`}>
      <div className={'team'}>{team}</div>
      <div className={'name'}>{name}</div>
      <div className={'infos'}>
        {infos.map((info) => (
          <div className={'info'}>{info}</div>
        ))}
      </div>
      <div className={'result'}>{results}</div>
    </Link>
  )
}

export { TeamSearchResultCard, PersonSearchResultCard }
