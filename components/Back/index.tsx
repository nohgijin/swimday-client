import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/navigation";
import Back from "@/assets/back.svg";
import $ from "./style.module.scss";
import { DefaultProps } from "@/types";
import classNames from "classnames";

function BackButton({ className, children }: DefaultProps) {
  const router = useRouter();

  return (
    <div className={classNames($["back-button"], className)}>
      <ActionIcon
        component={"button"}
        className={$["back"]}
        variant={"transparent"}
        onClick={() => {
          router.back();
        }}
      >
        <Back width={24} height={24} />
      </ActionIcon>
      {children}
    </div>
  );
}
export default BackButton;
