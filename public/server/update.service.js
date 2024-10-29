import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambiado al puerto 3000 para json-server
});

export class UpdateService {
    async updatePassenger(passengerId, passengerData) {
        try {
            const response = await http.put(`/passenger/${passengerId}`, passengerData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar pasajero:', error);
            throw error;
        }
    }

    async updateDriver(driverId, driverData) {
        try {
            const response = await http.put(`/driver/${driverId}`, driverData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar conductor:', error);
            throw error;
        }
    }
}