import "./style.scss";
import { Button, CloseIcon, Drawer as MantineDrawer } from "@mantine/core";
import ChipGroup from "@/components/ChipGroup";
import { useChipStore } from "@/store/useChipStore";
import { useQueryParams } from "@/utils/useQueryParams";

type Props = {
  opened: boolean;
  close: () => void;
};

function Drawer({ opened, close }: Props) {
  const store = useChipStore();
  const { sort, gender, event } = store;
  const { setQueryParams } = useQueryParams<{ sort: string; gender: string; event: string }>();

  const handleClose = () => {
    close();
    setQueryParams({ sort, gender: gender.toString(), event: event.toString() });
  };

  return (
    <MantineDrawer
      opened={opened}
      onClose={handleClose}
      title="필터"
      position={"bottom"}
      closeButtonProps={{
        icon: <CloseIcon width={16} height={16} />,
      }}
    >
      <ChipGroup />
      <div className={"button-wrapper"}>
        <Button onClick={handleClose}>적용하기</Button>
      </div>
    </MantineDrawer>
  );
}

export default Drawer;
