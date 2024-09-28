// User-books.service.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/reservations';

export const BooksApiService = {
    async createReservation(reservationData) {
        try {
            const token = localStorage.getItem('token'); // Obtener el token almacenado
            if (!token) {
                throw new Error('No token found');
            }
            const response = await axios.post(API_URL, reservationData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Incluir el token en el encabezado
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error en createReservation:', error);
            throw error;
        }
    }
};
