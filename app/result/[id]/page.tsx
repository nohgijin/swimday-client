"use client";

import $ from "./style.module.scss";
import { ActionIcon } from "@mantine/core";
import Back from "@/assets/back.svg";
import { useRouter } from "next/navigation";

function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <main className={$["result-detail-page"]}>
      <div className={$.back}>
        <ActionIcon variant={"transparent"} onClick={() => router.back()} className={$["back-icon"]}>
          <Back width={24} height={24} />
        </ActionIcon>
      </div>
      <div className={"result-detail"}>
        {id}
        상세는 여기에 들어감
      </div>
    </main>
  );
}

export default Page;
