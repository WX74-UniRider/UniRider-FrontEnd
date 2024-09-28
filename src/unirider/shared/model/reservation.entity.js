export class Reservation {
    tripId;
    passengerId;
    driverId;
    tripStartTime;
    destination;
    reservationTime;
    status;
    constructor(reservation) {
        this.tripId = reservation.tripId || 0;
        this.passengerId = reservation.passengerId || 0;
        this.driverId = reservation.driverId || 0;
        this.tripStartTime = reservation.tripStartTime || '';
        this.destination = reservation.destination || '';
        this.reservationTime = reservation.reservationTime || '';
        this.status = reservation.status || '';
    }
}