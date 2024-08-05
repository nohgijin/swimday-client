"use client";

import "./style.scss";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

function CompetitionCard({ value }: { value: any }) {
  const { name, start_date, end_date, registration_start_date, registration_end_date } = value;
  const STATUS = {
    reservationStart: { title: "접수 시작", color: "#e0eeff" },
    reservationFinished: { title: "접수 마감", color: "#c4deff" },
    competitionStart: { title: "대회 시작", color: "#93c2ff" },
    ongoing: { title: "진행중", color: "#1d7bf3" },
    finished: { title: "종료", color: "#4276b8" },
  };
  const status = (() => {
    if (dayjs().isBefore(registration_start_date, "day")) {
      return "reservationStart";
    }
    if (dayjs().isBetween(registration_start_date, registration_end_date, "day")) {
      return "reservationFinished";
    }
    if (dayjs().isBetween(registration_end_date, start_date, "day")) {
      return "competitionStart";
    }
    if (dayjs().isBetween(start_date, end_date, "day")) {
      return "ongoing";
    }
    return "finished";
  })();

  console.log(name, status, "ㅋㅋㅋ");

  return (
    <div className={"competition-card"}>
      <div className={"d-day"}>
        <div className={"status"}>{STATUS[status].title}</div>
        <div className={"remain"}>D-36</div>
      </div>
      <div className={"info"}>
        <div className={"name"}>{name}</div>
        <div className={"date"}>{start_date}</div>
      </div>
    </div>
  );
}

export default CompetitionCard;
