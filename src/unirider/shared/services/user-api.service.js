import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambia la URL al servidor local de json-server
});

export class UserApiService {
    static async login(email, password) {
        try {
            const response = await http.get('/Users', {
                params: { email, password }
            });
            const user = response.data.find(u => u.email === email && u.password === password);
            if (user) {
                return user;
            } else {
                throw new Error('Credenciales incorrectas.');
            }
        } catch (error) {
            console.error("Error durante el inicio de sesión:", error);
            throw error; // Asegúrate de lanzar el error para que sea capturado en login-user.vue
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
