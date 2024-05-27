import Filter from "@/assets/filter.svg";
import Dropdown from "@/assets/dropdown.svg";
import "./style.scss";
import { useState } from "react";
import { useQueryParams } from "@/utils/useQueryParams";

type Props = {
  open: () => void;
};

function FilterGroup({ open }: Props) {
  const { queryParams } = useQueryParams();
  const isTeam = !!queryParams.get("team") || false;
  const FILTERS = isTeam ? ["정렬"] : ["정렬", "성별", "종목"];

  return (
    <>
      <div className={"filter-group"}>
        <div className={"filter"} onClick={open}>
          <Filter width={16} height={16} className={"filter-icon"} />
          전체 필터
          <Dropdown width={16} height={16} className={"dropdown-icon"} />
        </div>
        {FILTERS.map((filter) => (
          <div className={"filter"} onClick={open}>
            {filter}
            <Dropdown width={16} height={16} className={"dropdown-icon"} />
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterGroup;
