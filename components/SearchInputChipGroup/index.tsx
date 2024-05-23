import Back from "@/assets/back.svg";
import { ActionIcon, Input } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Search from "@/assets/search.svg";
import ChipGroup from "@/components/ChipGroup";
import { useChipStore } from "@/store/useChipStore";
import { useQueryParams } from "@/utils/useQueryParams";
import "./style.scss";

type Props = {
  setIsClickInput: Dispatch<SetStateAction<boolean>>;
};

function SearchInputChipGroup({ setIsClickInput }: Props) {
  const store = useChipStore();
  const { sort, gender, event } = store;
  const { queryParams, setQueryParams } = useQueryParams<{
    name: string;
    sort: string;
    gender: string;
    event: string;
  }>();
  const [name, setName] = useState(queryParams.get("name") || "");

  const handleSearch = () => {
    setIsClickInput(false);
    setQueryParams({ sort, gender: gender.toString(), event: event.toString() });
  };

  return (
    <div className="search-input-chip-group">
      <div className={"input-wrapper"}>
        <ActionIcon className={"back"} variant={"transparent"} onClick={() => setIsClickInput(false)}>
          <Back width={24} height={24} />
        </ActionIcon>
        <Input
          autoFocus={true}
          placeholder="선수/대회 검색하기"
          rightSectionPointerEvents={"all"}
          rightSection={
            <ActionIcon variant={"transparent"} onClick={handleSearch}>
              <Search width={16} height={16} />
            </ActionIcon>
          }
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <ChipGroup />
    </div>
  );
}

export default SearchInputChipGroup;
