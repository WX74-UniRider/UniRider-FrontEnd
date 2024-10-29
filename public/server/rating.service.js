import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambiado al puerto 3000 para json-server
});

export class RatingService {
    async addRating(rating) {
        try {
            const response = await http.post('/Qualify', rating); // Cambiado a '/Qualify' según tu db.json
            return response.data;
        } catch (error) {
            console.error('Error al agregar la calificación:', error);
            throw error;
        }
    }
}