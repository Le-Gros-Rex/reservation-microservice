import ReservationEntity from './ReservationEntity.js';

class ReservationRepository {
    async findAll() {
        return ReservationEntity.find();
    }

    async findById(reservationId) {
        return ReservationEntity.findById(reservationId);
    }
}

export default ReservationRepository;