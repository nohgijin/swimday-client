import Service from '@/service/Service';
import {Competition} from '@/model/competition';

class CompetitionService extends Service {
    getCompetitions() {
        return this.http.get<Competition[]>(
            `/competitions`,
        );
    }

    getCompetition(competitionId: string) {
        return this.http.get<Competition>(
            `/competitions/${competitionId}`,
        );
    }


}

export default new CompetitionService();
