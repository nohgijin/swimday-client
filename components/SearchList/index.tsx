'use client'


import {parseAsString, useQueryStates} from "nuqs";
import {useState} from "react";
import FilterGroup from "@/components/FilterGroup";

function SearchList(){
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


    console.log({sort,sex,event})

    return(
        <>
        </>
)
}

export default SearchList
