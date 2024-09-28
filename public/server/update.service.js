import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

export class UpdateService {
    async updatePassenger(passengerId, passengerData) {
        const token = localStorage.getItem('token'); // Ensure the token is correctly retrieved
        if (!token) {
            throw new Error('No token found');
        }
        const response = await http.put(`/profile/passenger/${passengerId}`, passengerData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }

    async updateDriver(driverId, driverData) {
        const token = localStorage.getItem('token'); // Ensure the token is correctly retrieved
        if (!token) {
            throw new Error('No token found');
        }
        const response = await http.put(`/profile/driver/${driverId}`, driverData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
}
