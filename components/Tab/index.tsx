"use client";

import { Tabs } from "@mantine/core";
import { useQueryParams } from "@/utils/useQueryParams";
import "./style.scss";

type Props = {
  values: { query: string; label: string }[];
};

function Tab({ values }: Props) {
  const { queryParams, setQueryParams } = useQueryParams<{
    tab: string;
  }>();
  const tab = queryParams.get("tab") || "record";

  return (
    <Tabs variant="unstyled" value={tab} onChange={(value) => setQueryParams({ tab: value || "record" })}>
      <Tabs.List>
        {values.map((value) => (
          <Tabs.Tab value={value.query} key={value.query}>
            {value.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}

export default Tab;
