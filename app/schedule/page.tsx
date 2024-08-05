"use client";
import Tab from "@/components/Tab";
import Logo from "@/components/Logo";
import "./style.scss";
import { ScheduleFilterGroup } from "@/components/FilterGroup";
import { useDisclosure } from "@mantine/hooks";
import { ScheduleDrawer } from "@/components/Drawer";
import { useQueryParams } from "@/utils/useQueryParams";
import { useEffect, useState } from "react";
import { initialState } from "@/store/useChipStore";
import { useCompetitions } from "@/service/competition/useCompetitionService";
import Checkbox from "@/components/Checkbox";
import CompetitionCard from "@/components/CompetitionCard";
import dayjs from "dayjs";

const MOCKS = [
  {
    name: "접수 시작 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().add(3, "month").valueOf(),
    end_date: dayjs().add(4, "month").valueOf(),
    registration_start_date: dayjs().add(1, "month").valueOf(),
    registration_end_date: dayjs().add(2, "month").valueOf(),
  },
  {
    name: "접수 시작 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().add(3, "month").valueOf(),
    end_date: dayjs().add(4, "month").valueOf(),
    registration_start_date: dayjs().add(1, "month").valueOf(),
    registration_end_date: dayjs().add(2, "month").valueOf(),
    isClosed: true,
  },
  {
    name: "접수마감 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().add(3, "month").valueOf(),
    end_date: dayjs().add(4, "month").valueOf(),
    registration_start_date: dayjs().subtract(1, "month").valueOf(),
    registration_end_date: dayjs().add(1, "month").valueOf(),
    isClosed: true,
  },
  {
    name: "대회시작 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().add(1, "month").valueOf(),
    end_date: dayjs().add(2, "month").valueOf(),
    registration_start_date: dayjs().subtract(2, "month").valueOf(),
    registration_end_date: dayjs().subtract(1, "month").valueOf(),
  },
  {
    name: "진행중 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().valueOf(),
    end_date: dayjs().add(7, "day").valueOf(),
    registration_start_date: dayjs().subtract(2, "month").valueOf(),
    registration_end_date: dayjs().subtract(1, "month").valueOf(),
  },
  {
    name: "종료 제11회 김해시수영연맹회장배 전국마스터즈 수영대회 (단수로)",
    start_date: dayjs().subtract(1, "day").valueOf(),
    end_date: dayjs().subtract(2, "day").valueOf(),
    registration_start_date: dayjs().subtract(2, "month").valueOf(),
    registration_end_date: dayjs().subtract(1, "month").valueOf(),
  },
];

//TODO: 대회일정 페이지 해야함
const TABS = [
  { url: "record", label: "기록 검색" },
  { url: "schedule", label: "대회 일정" },
];

function Page() {
  const { setQueryParams } = useQueryParams<{
    scheduleSort: string;
    location: string;
    meter: string;
    date: string;
    depth: string;
  }>();
  const [isAccepting, setIsAccepting] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  // const a = useCompetitions();

  useEffect(() => {
    const { scheduleSort, location, meter, date, depth } = initialState;

    setQueryParams({
      scheduleSort,
      location: location.toString(),
      meter: meter.toString(),
      date,
      depth,
    });
  }, []);

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setIsAccepting(target.checked);
  };

  return (
    <main className={"schedule-page"}>
      <div className={"sticky-header"}>
        <Logo />
        <Tab values={TABS} />
        <div className={"schedule-wrapper"}>
          <ScheduleFilterGroup {...{ open }} />
          {opened && <ScheduleDrawer {...{ opened, close }} />}
          <Checkbox label={"모집중인 대회만"} onClick={handleCheckboxClick} />
        </div>
      </div>
      <div className={"competitions"}>
        {MOCKS.map((mock) => (
          <CompetitionCard key={mock.name} value={mock} />
        ))}
      </div>
    </main>
  );
}

export default Page;
