import $ from "./style.module.scss";
import { Button, CloseIcon, Drawer as MantineDrawer } from "@mantine/core";
import { ResultChipGroup, ScheduleChipGroup } from "@/components/ChipGroup";
import { useChipStore } from "@/store/useChipStore";
import { useQueryParams } from "@/utils/useQueryParams";

type Props = {
  opened: boolean;
  close: () => void;
};

function ResultDrawer({ opened, close }: Props) {
  const store = useChipStore();
  const { resultSort, gender, event } = store;
  const { setQueryParams } = useQueryParams<{
    resultSort: string;
    gender: string | null;
    event: string | null;
  }>();

  const handleClose = () => {
    close();
    setQueryParams({
      resultSort,
      gender: gender.toString() === "" ? null : gender.toString(),
      event: event.toString() === "" ? null : event.toString(),
    });
  };

  return (
    <MantineDrawer
      classNames={{
        header: $["mantine-Drawer-header"],
        title: $["mantine-Drawer-title"],
        body: $["mantine-Drawer-body"],
        content: $["mantine-Drawer-content"],
      }}
      opened={opened}
      onClose={handleClose}
      title="필터"
      position={"bottom"}
      closeButtonProps={{
        icon: <CloseIcon width={16} height={16} />,
      }}
    >
      <ResultChipGroup />
      <div className={$["button-wrapper"]}>
        <Button className={$.button} onClick={handleClose}>
          적용하기
        </Button>
      </div>
    </MantineDrawer>
  );
}

function ScheduleDrawer({ opened, close }: Props) {
  const store = useChipStore();
  const { scheduleSort, location, meter, date, depth } = store;
  const { setQueryParams } = useQueryParams<{
    scheduleSort: string;
    location: string;
    meter: string;
    date: string;
    depth: string;
  }>();

  const handleClose = () => {
    close();
    setQueryParams({
      scheduleSort,
      location: location.toString(),
      meter: meter.toString(),
      date,
      depth,
    });
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
      classNames={{
        header: $["mantine-Drawer-header"],
        title: $["mantine-Drawer-title"],
        body: $["mantine-Drawer-body"],
        content: $["mantine-Drawer-content"],
      }}
    >
      <ScheduleChipGroup />
      <div className={$["button-wrapper"]}>
        <Button className={$.button} onClick={handleClose}>
          적용하기
        </Button>
      </div>
    </MantineDrawer>
  );
}

export { ScheduleDrawer, ResultDrawer };
