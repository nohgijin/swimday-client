import Service from '@/service/Service'
import { Competition } from '@/model/competition'
import { Strapi } from '@/service/Strapi'

class CompetitionService extends Service {
  getCompetitions() {
    return this.http.get<Strapi<Competition[]>>(`/competitions`)
  }

  getCompetition(competitionId: string) {
    return this.http.get<Strapi<Competition>>(`/competitions/${competitionId}`)
  }
}

export default new CompetitionService()
