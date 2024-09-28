export class Rating {
    tripId;
    passengerId;
    driverId;
    score;
    comment;
    createdAt;
    updatedAt;
    driver;
    passenger;
    trip;

    constructor(rating) {
        this.tripId = rating.tripId || 0;
        this.passengerId = rating.passengerId || 0;
        this.driver = rating.driverId || 0;
        this.score = rating.score || 0;
        this.comment = rating.comment || '';
        this.createdAt = rating.createdAt || '';
        this.updatedAt = rating.updatedAt || '';
        this.driver = rating.driver || {};
        this.passenger = rating.passenger || {};
        this.trip = rating.trip || {};
    }
}