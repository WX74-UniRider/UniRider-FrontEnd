export class Passenger {
    id;
    username;
    password;
    roles;
    firstName;
    lastName;
    preferences;
    phoneNumber;
    address;
    userId;
    constructor(passenger) {
        this.id = passenger.id || 0;
        this.username = passenger.username || '';
        this.password = passenger.password || '';
        this.roles = passenger.roles || [];
        this.firstName = passenger.firstName || '';
        this.lastName = passenger.lastName || '';
        this.preferences = passenger.preferences || '';
        this.phoneNumber = passenger.phoneNumber || '';
        this.address = passenger.address || '';
        this.userId = passenger.userId || 0;
    }
}