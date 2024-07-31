import "./style.scss";

function CompetitionCard() {
  const STATUS = {
    reservationStart: { title: "접수 시작", color: "#e0eeff" },
    reservationFinished: { title: "접수 마감", color: "#c4deff" },
    competitionStart: { title: "대회 시작", color: "#93c2ff" },
    ongoing: { title: "진행중", color: "#1d7bf3" },
    finished: { title: "종료", color: "#4276b8" },
  };
  return (
    <div className={"competition-card"}>
      <div className={"d-day"}>
        <div className={"status"}>접수 시작</div>
        <div className={"remain"}>D-36</div>
      </div>
      <div className={"info"}>
        <div className={"name"}>제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)</div>
        <div className={"date"}>2022-12-18</div>
      </div>
    </div>
  );
}

export default CompetitionCard;
