import { ActionIcon, Input } from "@mantine/core";
import Link from "next/link";
import Back from "@/assets/back.svg";
import Search from "@/assets/search.svg";
import { Dispatch, SetStateAction } from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
import { useQueryParams } from "@/utils/useQueryParams";

type Props = {
  name: string;
  setIsClickInput: Dispatch<SetStateAction<boolean>>;
};

function DuplicateResult({ name, setIsClickInput }: Props) {
  const { setQueryParams } = useQueryParams<{ isTeam: boolean; isDuplicate: boolean | null }>();

  const handleSearch = (isTeam: boolean) => {
    setQueryParams({ isTeam, isDuplicate: null });
  };

  return (
    <div className={"duplicate-result"}>
      <div className={"input-wrapper"}>
        <ActionIcon component={Link} className={"back"} variant={"transparent"} href={"/"}>
          <Back width={24} height={24} />
        </ActionIcon>
        <Input
          placeholder="선수/대회 검색하기"
          rightSectionPointerEvents={"all"}
          rightSection={
            <ActionIcon variant={"transparent"}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onClick={() => setIsClickInput(true)}
        />
      </div>
      <div className={"guide"}>선수 검색결과와 팀 검색결과가 있습니다.</div>
      <div className={"options"}>
        <div onClick={() => handleSearch(false)} className={"option"}>
          선수 검색결과 보기(12)
        </div>
        <div onClick={() => handleSearch(true)} className={"option"}>
          팀 검색결과 보기(12)
        </div>
      </div>
    </div>
  );
}

export default DuplicateResult;
