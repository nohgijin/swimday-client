import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import queryOptions from '@/service/competition/queries'

export function useCompetitions({ meter, page, pageSize }: {
  meter: string | null;
  page?: number;
  pageSize?: number;
}) {
  return useInfiniteQuery(queryOptions.all({ meter, page, pageSize }))
}

export function useCompetition({ competitionId }: { competitionId: string }) {
  return useQuery(queryOptions.detail(competitionId))
}

