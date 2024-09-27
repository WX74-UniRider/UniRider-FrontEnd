import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:8080/api/v1',
})

export class AuthService{


    async authenticate(email, password) {
        try {
            const response = await http.post(`/authentication/sign-in`, {
                username: email,
                password: password
            });
            return response.data;
        } catch (error) {
            console.error('Error en la autenticación:', error);
            throw error;
        }
    }

    async registerPassenger(Passenger) {
        const response = await http.post('/Auth/register-developer', Passenger);
        return response.data;
    }

    async registerDriver(Driver) {
        const response = await http.post('/Auth/register-enterprise', Driver);
        return response.data;
    }


}