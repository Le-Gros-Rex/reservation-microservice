import axios from 'axios';
import SeanceService from '../services/SeanceService.js';
import ReservationService from '../services/ReservationService.js';
class seanceController {
    constructor() {
        this.seanceService = new SeanceService();
        this.reservationService = new ReservationService();
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

    async createSeanceReservation(request, response) {
        const reservationBody = request.body;

        try {
            const seance = await this.seanceService.getSeance(reservationBody.seanceId);
            if (!seance) throw new Error('Seance not found');

            if (!reservationBody || !reservationBody.seanceId || !reservationBody.placeId || !reservationBody.type) throw new Error('Reservation body is missing');

            const reservation = await this.reservationService.createReservation({
                idPlace: reservationBody.placeId,
                idSeance: reservationBody.seanceId,
                type: reservationBody.type,
                idPaiement: null
            });


            const paymentResponse = await axios.post(`${process.env.PAYMENT_URL}/payments`,
                {
                    reservationId: reservation._id,
                    amount: 5
                },
                {
                    headers: {
                        Authorization: request.headers.authorization
                    }
                }
            );

            const payment = paymentResponse.data;

            await this.reservationService.updateReservation(reservation._id, {
                idPlace: reservationBody.placeId,
                idSeance: reservationBody.seanceId,
                type: reservationBody.type,
                idPaiement: payment._id
            });

            const reservationUpdated = await this.reservationService.getReservation(reservation._id);


            response.status(200).json({
                reservation: reservationUpdated,
                payment: payment
            });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
    }
}

export default seanceController;