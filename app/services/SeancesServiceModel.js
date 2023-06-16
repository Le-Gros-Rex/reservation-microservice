class SeancesServiceModel {
    createSeance(id, idFilm, date, salle, placeDispo) {
        return {
            id,
            idFilm,
            date,
            salle,
            placeDispo
        };
    }

    formatSeance(reservation) {
        const id = reservation._id;
        const idFilm = reservation.idFilm;
        const date = reservation.date;
        const salle = reservation.salle;
        const placeDispo = reservation.placeDispo;

        return this.createSeance(id, idFilm, date, salle, placeDispo);
    }
}

export default SeancesServiceModel;