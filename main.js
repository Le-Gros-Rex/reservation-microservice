import * as dotenv from 'dotenv'
import express from 'express';
import ReservationController from './app/controllers/ReservationController.js';
import SeanceController from './app/controllers/SeanceController.js';
import mongoose from 'mongoose';
import authMiddleware from './app/middleware/authMiddleware.js';

dotenv.config();
const app = express();
const reservationController = new ReservationController();
const seanceController = new SeanceController();

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log('connected')
}

app.get('/reservations', authMiddleware, reservationController.getReservations.bind(reservationController));
app.get('/reservations/:id', reservationController.getReservation.bind(reservationController));
app.delete('/reservations/:id', authMiddleware, reservationController.deleteReservation.bind(reservationController));
app.get('/reservations/:id/sessions', reservationController.getReservationSessions.bind(reservationController));

app.get('/seances', seanceController.getSeances.bind(seanceController));
app.get('/seances/:id', seanceController.getSeance.bind(seanceController));
app.get('/seancesFilm/:id', seanceController.getSeancesFilm.bind(seanceController));
app.get('/seances/:id/sessions', seanceController.getSeanceSessions.bind(seanceController));

app.listen(3005, () => {
  main().catch(err => console.log(err));
  console.log('Server running');
});