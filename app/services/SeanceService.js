import { Types } from 'mongoose';
import SeanceRepository from '../repositories/SeanceRepository.js';
import SeancesServiceModel from './SeancesServiceModel.js';


class SeanceService {
    constructor() {
        this.seanceRepository = new SeanceRepository();
        this.seancesServiceModel = new SeancesServiceModel();
    }

    async getSeances() {
        try {
            const seances = await this.seanceRepository.findAll();
            return seances.map(seance => this.seancesServiceModel.formatSeance(seance));
        } catch (error) {
            throw error;
        }
    }

    async getSeance(id) {
        try {
            const objectId = new Types.ObjectId(id);
            const seance = await this.seanceRepository.findById(objectId);
            if (!seance) {
                throw new Error('seance not found');
            }
            return seance;
        } catch (error) {
            throw error;
        }
    }

    async getSeanceFilm(id) {
        try {
            const objectId = new Types.ObjectId(id);
            const seance = await this.seanceRepository.findByIdFilm(objectId);
            if (!seance) {
                throw new Error('seance not found');
            }
            return seance;
        } catch (error) {
            throw error;
        }
    }
}

export default SeanceService;