import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idFilm: mongoose.Schema.Types.ObjectId,
    date: Date,
    salle: Number,
    placeDispo: Number
});

const ReservationEntity = mongoose.model('séances', reservationSchema);

export default ReservationEntity;
