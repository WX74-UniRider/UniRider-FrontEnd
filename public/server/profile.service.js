import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000', // Cambiado al puerto 3000 para json-server
});

export class ProfileService {
    async getDriversByDestination(destination) {
        try {
            // Suponiendo que json-server puede filtrar con el parámetro 'destination'
            const response = await http.get('/Users', {
                params: { plan: 'conductor', destination } // Usa 'destination' si está configurado en la data
            });
            // Filtrar localmente si json-server no permite filtrar por destination
            const drivers = response.data.filter(user => user.plan === 'conductor' && user.destination === destination);
            return drivers;
        } catch (error) {
            console.error("Error fetching drivers by destination:", error);
            throw error;
        }
    }
}