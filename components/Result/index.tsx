"use client";
import $ from "./style.module.scss";

const MOCK_DATA = {
  name: "도영성",
  team: "OLTA",
  event: "자유형",
  result: "24.44",
  ranking: -1,
  sex: "male",
  age: 2,
  isFin: false,
  meter: 50,
};

function Result() {
  return <div className={$.result}>gdgd</div>;
}

export default Result;
