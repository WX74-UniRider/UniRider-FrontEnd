export class Passenger {
    firstName;
    lastName;
    preferences;
    phoneNumber;
    address;
    constructor(passenger) {
        this.firstName = passenger.firstName || ' ';
        this.lastName = passenger.lastName || '';
        this.preferences = passenger.preferences || '';
        this.phoneNumber = passenger.phoneNumber || '';
        this.address = passenger.address || '';
    }
}