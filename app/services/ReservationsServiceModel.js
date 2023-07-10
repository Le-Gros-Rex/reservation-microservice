class ReservationsServiceModel {
    createReservation(id, idSeance, idPlace, idPaiement, type) {
        return {
            id,
            idPlace: idPlace || null,
            idSeance,
            idPaiement: idPaiement || null,
            type: type || null,
        };
    }

    formatReservation(reservation) {
        const id = reservation._id;
        const idSeance = reservation.idSeance;
        const idPlace = reservation.idPlace;
        const type = reservation.type;
        const idPaiement = reservation.idPaiement;

        return this.createReservation(id, idSeance, idPlace, idPaiement, type);
    }
}

export default ReservationsServiceModel;