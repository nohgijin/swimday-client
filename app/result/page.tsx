"use client";

import "./style.scss";
import { ActionIcon, Input } from "@mantine/core";
import Back from "@/assets/back.svg";
import Link from "next/link";
import Search from "@/assets/search.svg";
import { useEffect, useState } from "react";
import Result from "@/components/Result";
import FilterGroup from "@/components/FilterGroup";
import SearchInputChipGroup from "@/components/SearchInputChipGroup";
import { useQueryParams } from "@/utils/useQueryParams";
import Drawer from "@/components/Drawer";
import { useDisclosure } from "@mantine/hooks";

function Page() {
  const { queryParams } = useQueryParams();
  const name = queryParams.get("name") || "";
  const [isClickInput, setIsClickInput] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  if (isClickInput) {
    return <SearchInputChipGroup {...{ setIsClickInput }} />;
  }

  return (
    <main className={"result-page"}>
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
      <FilterGroup {...{ open }} />
      {opened && <Drawer opened={opened} close={close} />}
      <Result />
    </main>
  );
}

export default Page;
