import "./style.scss";
import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import Back from "@/assets/back.svg";

function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <main className={"result-detail-page"}>
      <ActionIcon component={Link} variant={"transparent"} href={"/"}>
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
