"use client";

import { Tabs } from "@mantine/core";
import $ from "./style.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { DefaultProps } from "@/types";
import classNames from "classnames";

type Props = {
  values: { url: string; label: string }[];
} & DefaultProps;

function Tab({ values, className }: Props) {
  const pathname = usePathname().replace("/", "");
  const router = useRouter();

  return (
    <Tabs
      variant="unstyled"
      value={pathname}
      onChange={(value) => {
        router.push(`${value}`);
      }}
      className={classNames($["tabs"], className)}
    >
      <Tabs.List className={$["list"]}>
        {values.map((value) => (
          <Tabs.Tab className={$.tab} value={value.url} key={value.url}>
            {value.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}

export default Tab;
