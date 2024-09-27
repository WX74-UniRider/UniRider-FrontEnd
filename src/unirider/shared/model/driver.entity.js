export class Driver {
    firstName;
    lastName;
    phoneNumber;
    vehiclePlate;
    insurance;
    vehicleModel;

    constructor(driver) {
        this.firstName = driver.firstName || '';
        this.lastName = driver.lastName || '';
        this.phoneNumber = driver.phoneNumber || '';
        this.vehiclePlate = driver.vehiclePlate || '';
        this.insurance = driver.insurance || '';
        this.vehicleModel = driver.vehicleModel || '';
    }
}
