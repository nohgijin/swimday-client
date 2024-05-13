import CompetitionService from '@/service/competition/CompetitionService';

const queryKeys = {
    all: ['competitions'] as const,
    detail: (competitionId: string) => [...queryKeys.all, competitionId] as const,
};

const queryOptions = {
    all: () => ({
        queryKey: queryKeys.all,
        queryFn: () => CompetitionService.getCompetitions(),
    }),
    detail: (competitionId: string) => ({
        queryKey: queryKeys.detail(competitionId),
        queryFn: () => CompetitionService.getCompetition(competitionId),
    }),
};

export default queryOptions;
