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
    return(
        <MantineDrawer opened={opened} onClose={close} title="필터" position={"bottom"} closeButtonProps={{icon:<CloseIcon width={16} height={16} />}}>
            <ChipGroup />
        </MantineDrawer>
    )
}

export default Drawer
