import axios from 'axios';
import SeanceService from '../services/SeanceService.js';
class seanceController {
    constructor() {
        this.seanceService = new SeanceService();
    }
    async getSeances(request, response) {
        try {
            const seances = await this.seanceService.getSeances();
            response.status(200).json(seances);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getSeance(request, response) {
        const seanceId = request.params.id;

        try {
            const seance = await this.seanceService.getSeance(seanceId);
            response.status(200).json(seance);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getSeancesFilm(request, response) {
        const idFilm = request.params.id;

        try {
            const seances = await this.seanceService.getSeanceFilm(idFilm);
            response.status(200).json(seances);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getSeanceSessions(request, response) {
        const seanceId = request.params.id;

        try {
            const seance = await this.seanceService.getseance(seanceId);

            // replace with good api
            const sessionsResponse = await axios.get(`https://random-data-api.com/api/v2/addresses?size=10`);
            const sessions = sessionsResponse.data;

            response.status(200).json(sessions);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }
}

export default seanceController;