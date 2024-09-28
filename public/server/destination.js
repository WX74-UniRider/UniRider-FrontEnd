export class Destination{
    id;
    createdAt;
    updatedAt;
    firstName;
    lastName;
    phoneNumber;
    vehiclePlate;
    insurance;
    vehicleModel;
    destino;
    user;
    userId;
    constructor(destination) {
        this.id = destination.id || 0;
        this.createdAt = destination.createdAt || '';
        this.updatedAt = destination.updatedAt || '';
        this.firstName = destination.firstName || '';
    }
}