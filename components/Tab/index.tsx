"use client";

import { Tabs } from "@mantine/core";
import $ from "./style.module.scss";
import { parseAsString, useQueryState } from "nuqs";

type Props = {
  values: { target: string; label: string }[];
};

function Tab({ values }: Props) {
  const [targetValue, setTargetValue] = useQueryState("target", parseAsString.withDefault("record"));

  return (
    <Tabs variant="unstyled" className={$.tabs} value={targetValue || ""} onChange={(value) => setTargetValue(value)}>
      <Tabs.List className={$["tab-list"]}>
        {values.map((value) => (
          <Tabs.Tab className={$.tab} value={value.target} key={value.target}>
            {value.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}

export default Tab;
