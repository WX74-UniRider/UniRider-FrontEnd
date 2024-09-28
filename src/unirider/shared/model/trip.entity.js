export class Trip {
    id;
    tripId;
    destination;
    driverId;
    passengerId;
    status;
    createdAt;
    updatedAt;
    departureTime;
    passenger;
    driver;
    constructor(trip) {
        this.id = trip.id || 0;
        this.tripId = trip.tripId || 0;
        this.destination = trip.destination || '';
        this.driverId = trip.driverId || 0;
        this.passengerId = trip.passengerId || 0;
        this.status = trip.status || '';
        this.createdAt = trip.createdAt || '';
        this.updatedAt = trip.updatedAt || '';
        this.departureTime = trip.departureTime || '';
        this.passenger = trip.passenger || {};
        this.driver = trip.driver || {};
    }
}