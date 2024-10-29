import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambiado al puerto 3000 para json-server
});

export class ReservationService {
    async addReservation(reservation) {
        try {
            const response = await http.post('/books', reservation); // Cambiado a '/books' según db.json
            return response.data;
        } catch (error) {
            console.error('Error al agregar la reserva:', error);
            throw error;
        }
    }

    async deleteReservation(id) {
        try {
            const response = await http.delete(`/books/${id}`); // Corregido para que coincida con json-server
            return response.data;
        } catch (error) {
            console.error('Error al eliminar la reserva:', error);
            throw error;
        }
    }
}