import CompetitionService from '@/service/competition/CompetitionService'

const queryKeys = {
  all: ['competitions'] as const,
  detail: (competitionId: string) => [...queryKeys.all, competitionId] as const,
}

const queryOptions = {
  all: ({ meter, page, pageSize }: {
    meter: string | null;
    page: number;
    pageSize: number;
  }) => ({
    queryKey: queryKeys.all,
    queryFn: () => CompetitionService.getCompetitions({ meter, page, pageSize }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPageExists = lastPage?.data?.length === pageSize
      return nextPageExists ? allPages.length + 1 : undefined
    },
  }),
  detail: (competitionId: string) => ({
    queryKey: queryKeys.detail(competitionId),
    queryFn: () => CompetitionService.getCompetition(competitionId),
  }),
}

export default queryOptions
