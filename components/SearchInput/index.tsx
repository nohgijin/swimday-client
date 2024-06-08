import { ActionIcon, Input } from "@mantine/core";
import Search from "@/assets/search.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryParams } from "@/utils/useQueryParams";
import "./style.scss";

function SearchInput() {
  const { queryParams } = useQueryParams<{ isTeam: boolean; isDuplicate: boolean }>();
  const [name, setName] = useState(queryParams.get("name") || "");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/result?name=${name}`);
  };

  return (
    <Input
      placeholder="선수/대회 검색하기"
      rightSectionPointerEvents={"all"}
      rightSection={
        <ActionIcon variant={"transparent"} onClick={handleSearch}>
          <Search width={16} height={16} />
        </ActionIcon>
      }
      value={name}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          handleSearch();
        }
      }}
      onChange={(e) => {
        setName(e.currentTarget.value);
      }}
    />
  );
}

export default SearchInput;
