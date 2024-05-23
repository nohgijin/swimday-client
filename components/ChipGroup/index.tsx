import { Chip } from "@mantine/core";
import $ from "./style.module.scss";
import { useEffect } from "react";
import { useQueryParams } from "@/utils/useQueryParams";
import { useChipStore } from "@/store/useChipStore";

export const FILTERS = [
  [
    {
      value: "new",
      label: "최신순",
    },
    {
      value: "old",
      label: "오래된순",
    },
    {
      value: "fast",
      label: "최고기록순",
    },
  ],
  [
    {
      value: "male",
      label: "남성",
    },
    {
      value: "female",
      label: "여성",
    },
  ],
  [
    {
      value: "free",
      label: "자유형",
    },
    {
      value: "back",
      label: "배영",
    },
    {
      value: "breast",
      label: "평영",
    },
    {
      value: "butterfly",
      label: "접영",
    },
    {
      value: "im",
      label: "개인혼영",
    },
  ],
  [
    { value: "relay", label: "계영" },
    { value: "imRelay", label: "혼계영" },
    { value: "mixedGenderRelay", label: "혼성계영" },
    { value: "mixedGenderImRelay", label: "혼성혼계영" },
  ],
];

function ChipGroup() {
  const { queryParams } = useQueryParams();
  const store = useChipStore();
  const { sort, gender, event, setSort, setGender, setEvent } = store;

  useEffect(() => {
    const sortParam = queryParams.get("sort");
    const genderParam = queryParams.get("gender")?.split(",");
    const eventParam = queryParams.get("event")?.split(",");

    sortParam && setSort(sortParam);
    genderParam && setGender(genderParam);
    eventParam && setEvent(eventParam);
  }, []);

  return (
    <>
      <div className={$.title}>정렬</div>
      <div className={$["chip-group"]}>
        <Chip.Group multiple={false} onChange={(value) => setSort(value)}>
          {FILTERS[0].map(({ label, value }) => (
            <Chip className={$.chip} key={value} value={value} checked={sort === value}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={$.title}>성별</div>
      <div className={$["chip-group"]}>
        <Chip.Group multiple value={gender} onChange={(value) => setGender(value)}>
          {FILTERS[1].map(({ label, value }) => (
            <Chip className={$.chip} key={value} value={value} checked={gender?.includes(value)}>
              {label}
            </Chip>
          ))}
        </Chip.Group>
      </div>
      <div className={$.title}>종목</div>
      <div className={$["chip-group"]} style={{ flexDirection: "column" }}>
        <Chip.Group multiple value={event} onChange={(value) => setEvent(value)}>
          <div className={$["personal-event"]}>
            {FILTERS[2].map(({ label, value }) => (
              <Chip className={$.chip} key={value} value={value} checked={event?.includes(value)}>
                {label}
              </Chip>
            ))}
          </div>
          <div className={$["team-event"]}>
            {FILTERS[3].map(({ label, value }) => (
              <Chip className={$.chip} key={value} value={value} checked={event?.includes(value)}>
                {label}
              </Chip>
            ))}
          </div>
        </Chip.Group>
      </div>
    </>
  );
}

export default ChipGroup;
