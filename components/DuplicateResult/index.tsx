import { ActionIcon, Input } from "@mantine/core";
import Link from "next/link";
import Back from "@/assets/back.svg";
import "./style.scss";
import { useQueryParams } from "@/utils/useQueryParams";
import SearchInput from "@/components/SearchInput";

function DuplicateResult() {
  const { setQueryParams } = useQueryParams<{ isTeam: boolean; isDuplicate: boolean | null }>();

  const handleResultClick = (isTeam: boolean) => {
    setQueryParams({ isTeam, isDuplicate: null });
  };

  return (
    <div className={"duplicate-result"}>
      <div className={"input-wrapper"}>
        <ActionIcon component={Link} className={"back"} variant={"transparent"} href={"/"}>
          <Back width={24} height={24} />
        </ActionIcon>
        <SearchInput />
      </div>
      <div className={"guide"}>선수 검색결과와 팀 검색결과가 있습니다.</div>
      <div className={"options"}>
        <div onClick={() => handleResultClick(false)} className={"option"}>
          선수 검색결과 보기(12)
        </div>
        <div onClick={() => handleResultClick(true)} className={"option"}>
          팀 검색결과 보기(12)
        </div>
      </div>
    </div>
  );
}

export default DuplicateResult;
