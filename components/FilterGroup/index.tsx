import $ from './style.module.scss'
import Filter from '@/assets/filter.svg'
import Dropdown from '@/assets/dropdown.svg'
import { useDisclosure } from '@mantine/hooks';
import Drawer from "@/components/Drawer";

function FilterGroup(){
    const [opened, { open,close }] = useDisclosure(false);

    return(
        <>
        <div className={$['filter-group']} onClick={open}>
            <div className={$.filter}>
                <Filter width={16} height={16} className={$['filter-icon']}/>
                전체 필터
                <Dropdown width={16} height={16} className={$['dropdown-icon']}/>
            </div>
            <div className={$.filter}>정렬
                <Dropdown width={16} height={16} className={$['dropdown-icon']}/></div>
            <div className={$.filter}>성별
                <Dropdown width={16} height={16} className={$['dropdown-icon']}/></div>
            <div className={$.filter}>종목
                <Dropdown width={16} height={16} className={$['dropdown-icon']}/>
            </div>
        </div>
            {opened && <Drawer opened={opened} close={close}/>}

        </>
    )
}
export default FilterGroup
