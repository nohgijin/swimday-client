import './style.scss'
import {CloseIcon, Drawer as MantineDrawer} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import ChipGroup from "@/components/ChipGroup";
import {parseAsString, useQueryStates} from "nuqs";
import {useState} from "react";

type Props = {
    opened:boolean
    close:()=>void;
}

function Drawer({opened,close}:Props){
    const [queries, setQueries] = useQueryStates(
        {
            sort: parseAsString,
            sex: parseAsString,
            event: parseAsString,
            name: parseAsString,
        },
        { history: 'push' },
    )
    const [sort, setSort] = useState(queries.sort)
    const [sex, setSex] = useState(
        (queries.sex || '').split(',').map((value) => value),
    )
    const [event, setEvent] = useState(
        (queries.event || '').split(',').map((value) => value),
    )
    const [name, setName] = useState(queries.name)


    return(
        <MantineDrawer opened={opened} onClose={close} title="필터" position={"bottom"} closeButtonProps={{icon:<CloseIcon width={16} height={16} />}}>
            <ChipGroup
                {...{
                    sort,
                    sex,
                    event,
                    setSort,
                    setSex,
                    setEvent,
                }}
            />
        </MantineDrawer>
    )
}

export default Drawer
