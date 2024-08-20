import $ from "./style.module.scss";
import { Checkbox as MantineCheckbox, CheckboxProps } from "@mantine/core";

function Checkbox({ label, onClick }: CheckboxProps) {
  return (
    <MantineCheckbox
      classNames={{
        body: $["mantine-Checkbox-body"],
        input: $["mantine-Checkbox-input"],
        label: $["mantine-Checkbox-label"],
      }}
      label={label}
      onClick={onClick}
    />
  );
}

export default Checkbox;
