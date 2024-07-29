import "./style.scss";
import { Checkbox as MantineCheckbox, CheckboxProps } from "@mantine/core";

function Checkbox({ label, onClick }: CheckboxProps) {
  return <MantineCheckbox label={label} onClick={onClick} />;
}

export default Checkbox;
