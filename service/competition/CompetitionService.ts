import Service from '@/service/Service'
import { Competition } from '@/model/competition'
import { Strapi, Strapis } from '@/service/Strapi'

class CompetitionService extends Service {
  getCompetitions({ meter }: { meter?: string }): Promise<Strapis<Competition>> {
    // const queryObject = {
    //   'filters[meter][$in]': meter.split(','),
    // }
    //
    // const queryString = qs.stringify(queryObject, { arrayFormat: 'brackets', encodeValuesOnly: true })
    //
    // const url = `/competitions?${queryString}`
    const url = `/competitions`

    return this.http.get<Strapis<Competition>>(url)
  }

  getCompetition(competitionId: string) {
    return this.http.get<Strapi<Competition>>(`/competitions/${competitionId}`)
  }
}

export default new CompetitionService()
