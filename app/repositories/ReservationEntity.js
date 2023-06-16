import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idSeance: mongoose.Schema.Types.ObjectId,
    idPaiement: mongoose.Schema.Types.ObjectId,
});

const ReservationEntity = mongoose.model('réservations', reservationSchema);

export default ReservationEntity;
