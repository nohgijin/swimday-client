'use client'

import {useCompetitions} from "@/service/competition/useCompetitionService";

function SearchList(){
console.log(useCompetitions())
return(
    <div>서치결과</div>
)
}

export default SearchList
