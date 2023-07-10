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

    async deleteReservation(id) {
        try {
            const objectId = new Types.ObjectId(id);
            const reservation = await this.reservationRepository.deleteById(objectId);
            if (!reservation) {
                throw new Error('reservation not found');
            }
            return reservation;
        } catch (error) {
            throw error;
        }
    }

    async createReservation(reservation) {
        try {
            const reservationCreated = await this.reservationRepository.create(reservation);
            return reservationCreated;
        } catch (error) {
            throw error;
        }
    }

    async updateReservation(id, reservation) {
        try {
            const objectId = new Types.ObjectId(id);
            const reservationUpdated = await this.reservationRepository.updateOne(objectId, reservation);
            if (!reservationUpdated) {
                throw new Error('reservation not found');
            }
            return reservationUpdated;
        } catch (error) {
            throw error;
        }

    }
}

export default ReservationService;