import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/api/v1/profile',
});

export class ProfileService {
    async getDriversByDestination(destination) {
        const token = localStorage.getItem('token');  // Ensure the token is correctly retrieved
        console.log(localStorage.getItem('token'));

        if (!token) {
            throw new Error('No token found');
        }
        try {
            const response = await http.get('/drivers/destination', {
                params: { destination },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching drivers by destination:", error);
            throw error;
        }
    }
}
