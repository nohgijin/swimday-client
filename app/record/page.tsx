"use client";
import Tab from "@/components/Tab";
import Logo from "@/components/Logo";
import $ from "./style.module.scss";
import SearchInput from "@/components/SearchInput";

const TABS = [
  { url: "record", label: "기록 검색" },
  { url: "schedule", label: "대회 일정" },
];

function Page() {
  return (
    <main className={$["search-page"]}>
      <Logo />
      <Tab className={$.tab} values={TABS} />
      <div className={$["search-wrapper"]}>
        <div className={$["description"]}>
          기록을 확인하고 싶은
          <br />
          수영 선수/팀 이름을 적어주세요.
        </div>
        <SearchInput />
      </div>
    </main>
  );
}

export default Page;
