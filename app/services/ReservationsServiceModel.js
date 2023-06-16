class ReservationsServiceModel {
    createReservation(id, idSeance, idPaiement) {
        return {
            id,
            idSeance,
            idPaiement
        };
    }

    formatReservation(reservation) {
        const id = reservation._id;
        const idSeance = reservation.idSeance;
        const idPaiement = reservation.idPaiement;

        return this.createReservation(id, idSeance, idPaiement);
    }
}

export default ReservationsServiceModel;