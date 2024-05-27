"use client";

import "./style.scss";
import { ActionIcon, Button } from "@mantine/core";
import Back from "@/assets/back.svg";

function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <main className={"result-detail-page"}>
      <ActionIcon variant={"transparent"} onClick={() => window.history.go(-1)}>
        <Back width={24} height={24} />
      </ActionIcon>
      <div className={"result-detail"}>
        {id}
        상세는 여기에 들어감
      </div>
    </main>
  );
}

export default Page;
