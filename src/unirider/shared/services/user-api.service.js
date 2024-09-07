import axios from 'axios';

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/DevUniRider/UniRider-Server',
});

export class UserApiService {
    static async login(email, password) {
        try {
            const response = await http.get('/Users', {
                params: { email, password }
            });
            return response.data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    static async register(user) {
        try {
            const response = await http.post('/Users', user);
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }

    static async addCard(card) {
        try {
            const response = await http.post('/Cards', card);
            return response.data;
        } catch (error) {
            console.error("Error adding card:", error);
            throw error;
        }
    }

    static async addQualify(qualify) {
        try {
            const response = await http.post('/Qualify', qualify);
            return response.data;
        } catch (error) {
            console.error("Error adding qualify:", error);
            throw error;
        }
    }
}
