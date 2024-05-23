import "./style.scss";
import { CloseIcon, Drawer as MantineDrawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ChipGroup from "@/components/ChipGroup";
import { parseAsString, useQueryStates } from "nuqs";
import { useState } from "react";
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

  return (
    <MantineDrawer
      opened={opened}
      onClose={() => {
        close();
        setQueryParams({ sort, gender: gender.toString(), event: event.toString() });
      }}
      title="필터"
      position={"bottom"}
      closeButtonProps={{
        icon: <CloseIcon width={16} height={16} />,
      }}
    >
      <ChipGroup />
    </MantineDrawer>
  );
}

export default Drawer;
