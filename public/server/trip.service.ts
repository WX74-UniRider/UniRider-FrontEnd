import axios from 'axios';

const API_URL = 'http://localhost:3000/trips'; // Cambiado al puerto 3000 para json-server

export const TripService = {
    async createReservation(reservationData) {
        try {
            const response = await axios.post(API_URL, reservationData); // Endpoint para crear una reserva
            return response.data;
        } catch (error) {
            console.error('Error al crear la reserva:', error);
            throw error;
        }
    },
    async getAllTrips() {
        try {
            const response = await axios.get(API_URL); // Eliminado el token en los headers
            return response.data; // Devuelve los datos de los viajes
        } catch (error) {
            console.error('Error obteniendo viajes:', error);
            throw error;
        }
    }
};