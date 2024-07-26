import './style.scss'
import { Button, CloseIcon, Drawer as MantineDrawer } from '@mantine/core'
import { ResultChipGroup, ScheduleChipGroup } from '@/components/ChipGroup'
import { useChipStore } from '@/store/useChipStore'
import { useQueryParams } from '@/utils/useQueryParams'

type Props = {
  type: 'schedule' | 'result'
  opened: boolean;
  close: () => void;
};

function Drawer({ type, opened, close }: Props) {
  const store = useChipStore()
  const { resultSort, gender, event } = store
  const {
    setQueryParams,
  } = useQueryParams<{ resultSort: string; gender: string | null; event: string | null }>()

  const handleClose = () => {
    close()
    setQueryParams({
      resultSort,
      gender: gender.toString() === '' ? null : gender.toString(),
      event: event.toString() === '' ? null : event.toString(),
    })
  }

  return (
    <MantineDrawer
      opened={opened}
      onClose={handleClose}
      title='필터'
      position={'bottom'}
      closeButtonProps={{
        icon: <CloseIcon width={16} height={16} />,
      }}
    >
      {type === 'result' ? <ResultChipGroup /> : <ScheduleChipGroup />}
      <div className={'button-wrapper'}>
        <Button onClick={handleClose}>적용하기</Button>
      </div>
    </MantineDrawer>
  )
}

export default Drawer
