import SeanceEntity from './SeanceEntity.js';

class SeanceRepository {
    async findAll() {
        return SeanceEntity.find();
    }

    async findById(seanceId) {
        return SeanceEntity.findById(seanceId);
    }

    async findByIdFilm(seanceId) {
        return SeanceEntity.find({idFilm: seanceId});
    }
}

export default SeanceRepository;