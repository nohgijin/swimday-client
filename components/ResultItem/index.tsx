"use client";
import "./style.scss";
import Link from "next/link";

type Props = {
  data: {
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
};

function ResultItem({ data: { id, name, team, event, result, ranking, sex, age, isFin, meter } }: Props) {
  const infos = [sex === "male" ? "남자" : "여자", `성인부 ${age}그룹`, `${event} ${meter}m`, isFin ? "핀경기" : ""];
  const results = `${result} ${ranking === -1 ? "(번외)" : `(${ranking}위)`}`;

  console.log(infos);
  return (
    <Link className="result-item" href={`/result/${id}`}>
      <div className={"team"}>{team}</div>
      <div className={"name"}>{name}</div>
      <div className={"infos"}>{infos.map((info) => info && <div className={"info"}>{info}</div>)}</div>
      <div className={"result"}>{results}</div>
    </Link>
  );
}

export default ResultItem;
