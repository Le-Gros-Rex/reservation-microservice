import { Types } from 'mongoose';
import ReservationEntity from './ReservationEntity.js';

class ReservationRepository {
    async findAll() {
        return ReservationEntity.find();
    }

    async findById(reservationId) {
        return ReservationEntity.findById(reservationId);
    }

    async deleteById(reservationId) {
        return ReservationEntity.deleteOne(reservationId);
    }

    async create(reservation) {
        return ReservationEntity.create({
            _id: new Types.ObjectId(),
            ...reservation
        });
    }

    async updateOne(reservationId, reservation) {
        return ReservationEntity.updateOne({
            _id: reservationId
        }, reservation);
    }
}

export default ReservationRepository;