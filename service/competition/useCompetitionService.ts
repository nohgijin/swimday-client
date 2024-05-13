import { useQuery } from '@tanstack/react-query';
import queryOptions from "@/service/competition/queries";

export function useCompetitions() {
    return useQuery(queryOptions.all());
}

export function useCompetition({competitionId}: {competitionId: string}) {
    return useQuery(queryOptions.detail(competitionId));
}
