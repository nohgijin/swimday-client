import Service from '@/service/Service'
import { Competition } from '@/model/competition'
import { Strapi, Strapis } from '@/service/Strapi'

class CompetitionService extends Service {
  getCompetitions({ meter, page, pageSize }: {
    meter: string | null;
    page: number;
    pageSize: number;
  }): Promise<Strapis<Competition>> {
    const queryObject = {
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
    }

    if (meter) {
      queryObject['filters[meter][$in]'] = meter.split(',')
    }

    const queryString = Object.entries(queryObject)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map(val => `${key}=${encodeURIComponent(val)}`).join('&')
        }
        return `${key}=${encodeURIComponent(value)}`
      })
      .join('&')


    const url = `/competitions?${queryString}`
    return this.http.get<Strapis<Competition>>(url)

  }

  getCompetition(competitionId: string) {
    return this.http.get<Strapi<Competition>>(`/competitions/${competitionId}`)
  }
}

export default new CompetitionService()
