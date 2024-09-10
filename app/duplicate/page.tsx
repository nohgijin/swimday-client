"use client";

import { ActionIcon } from "@mantine/core";
import Back from "@/assets/back.svg";
import SearchInput from "@/components/SearchInput";
import $ from "./style.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useQueryParams } from "@/utils/useQueryParams";
import BackButton from "@/components/Back";

function Page() {
  const router = useRouter();
  const { queryParams } = useQueryParams<{ name: string }>();
  const name = queryParams.get("name");

  return (
    <main className={$["duplicate-page"]}>
      <BackButton className={$["input-wrapper"]}>
        <SearchInput />
      </BackButton>
      <div className={$["guide"]}>선수 검색결과와 팀 검색결과가 있습니다.</div>
      <div className={$["options"]}>
        <Link href={`/result?name=${name}`} className={$["option"]}>
          선수 검색결과 보기(12)
        </Link>
        <Link href={`/result?name=${name}&isTeam=true`} className={$["option"]}>
          팀 검색결과 보기(12)
        </Link>
      </div>
    </main>
  );
}

export default Page;
