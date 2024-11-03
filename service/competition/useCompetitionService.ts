import { useQuery } from '@tanstack/react-query'
import queryOptions from '@/service/competition/queries'

export function useCompetitions({ meter }: { meter?: string }) {
  return useQuery(queryOptions.all({ meter }))
}

export function useCompetition({ competitionId }: { competitionId: string }) {
  return useQuery(queryOptions.detail(competitionId))
}
