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
  const a = useCompetitions();

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
      <Logo />
      <Tab values={TABS} />
      <div className={"schedule-wrapper"}>
        <ScheduleFilterGroup {...{ open }} />
        {opened && <ScheduleDrawer {...{ opened, close }} />}
        <Checkbox label={"모집중인 대회만"} onClick={handleCheckboxClick} />
      </div>
    </main>
  );
}

export default Page;
