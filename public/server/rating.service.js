import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

export class RatingService {
    async addRating(rating) {
        const token = localStorage.getItem('token'); // Ensure the token is correctly retrieved
        if (!token) {
            throw new Error('No token found');
        }
        const response = await http.post('/ratings', rating, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
}
