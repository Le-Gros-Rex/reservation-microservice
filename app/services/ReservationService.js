import { Types } from 'mongoose';
import ReservationRepository from '../repositories/ReservationRepository.js';
import ReservationsServiceModel from './ReservationsServiceModel.js';


class ReservationService {
    constructor() {
        this.reservationRepository = new ReservationRepository();
        this.reservationsServiceModel = new ReservationsServiceModel();
    }

    async getReservations() {
        try {
            const reservations = await this.reservationRepository.findAll();
            return reservations.map(reservation => this.reservationsServiceModel.formatReservation(reservation));
        } catch (error) {
            throw error;
        }
    }

    async getReservation(id) {
        try {
            const objectId = new Types.ObjectId(id);
            const reservation = await this.reservationRepository.findById(objectId);
            if (!reservation) {
                throw new Error('reservation not found');
            }
            return reservation;
        } catch (error) {
            throw error;
        }
    }
}

export default ReservationService;