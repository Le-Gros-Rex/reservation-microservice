import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idPlace: mongoose.Schema.Types.Number,
    idSeance: mongoose.Schema.Types.ObjectId,
    idPaiement: mongoose.Schema.Types.ObjectId,
    type: mongoose.Schema.Types.String,
});

const ReservationEntity = mongoose.model('réservations', reservationSchema);

export default ReservationEntity;
