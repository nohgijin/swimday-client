import CompetitionService from '@/service/competition/CompetitionService'

const queryKeys = {
  all: ['competitions'] as const,
  detail: (competitionId: string) => [...queryKeys.all, competitionId] as const,
}

const queryOptions = {
  all: ({ meter }: { meter?: string }) => ({
    queryKey: queryKeys.all,
    queryFn: () => CompetitionService.getCompetitions({ meter }),
  }),
  detail: (competitionId: string) => ({
    queryKey: queryKeys.detail(competitionId),
    queryFn: () => CompetitionService.getCompetition(competitionId),
  }),
}

export default queryOptions
