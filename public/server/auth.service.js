import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambia al puerto 3000 para usar json-server
});

export class AuthService {

    async authenticate(email, password) {
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
            console.error('Error en la autenticación:', error);
            throw error;
        }
    }

    async registerPassenger(Passenger) {
        const response = await http.post('/Users', Passenger); // Ajustado para json-server
        return response.data;
    }

    async registerDriver(Driver) {
        const response = await http.post('/Users', Driver); // Ajustado para json-server
        return response.data;
    }
}