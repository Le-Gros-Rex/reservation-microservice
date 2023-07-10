import axios from 'axios';
import ReservationService from '../services/ReservationService.js';
class ReservationController {
    constructor() {
        this.reservationService = new ReservationService();
    }
    async getReservations(request, response) {
        try {
            const reservations = await this.reservationService.getReservations();
            response.status(200).json(reservations);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }

    async getReservation(request, response) {
        const reservationId = request.params.id;

        try {
            const reservation = await this.reservationService.getReservation(reservationId);
            response.status(200).json(reservation);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }


    async deleteReservation(request, response) {
        const reservationId = request.params.id;

        try {
            const reservation = await this.reservationService.deleteReservation(reservationId);
            response.status(200).json(reservation);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }
}

export default ReservationController;