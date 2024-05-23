import { useState } from "react";
import { Chip as MantineChip } from "@mantine/core";
import $ from "./style.module.scss";
import Check from "@/assets/check.svg";

type Props = {
  value: string;
  children: string;
};

function Chip({ value, children }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <MantineChip
      icon={<Check width={12} height={12} />}
      value={value}
      checked={checked}
      onChange={() => setChecked((v) => !v)}
      className={$.chip}
    >
      {children}
    </MantineChip>
  );
}

export default Chip;
