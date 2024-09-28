// User-books.service.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/trips';

export const TripService = {
    async createReservation(reservationData) {
    },
    async getAllTrips() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            const response = await axios.get(API_URL, {
                headers: {
                    'Authorization': `Bearer ${token}` // Incluye el token
                }
            });
            return response.data; // Devuelve los datos de los viajes
        } catch (error) {
            console.error('Error obteniendo viajes:', error);
            throw error;
        }
    }
};
