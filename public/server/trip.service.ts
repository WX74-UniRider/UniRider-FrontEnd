import axios from 'axios';
import {format, parse} from 'date-fns';
import { es } from 'date-fns/locale';

const API_URL = 'http://localhost:8080/api/v1/trips';

export const TripService = {
    async createTrip(tripData) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Error: No se encontró el token en el localStorage.');
                throw new Error('No token found');
            }
            const response = await axios.post(API_URL, tripData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error creando viaje:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    async getAllTrips() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Error: No se encontró el token en el localStorage.');
                throw new Error('No token found');
            }
            const response = await axios.get(API_URL, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error obteniendo viajes:', error.response ? error.response.data : error.message);
            throw error;
        }
    },
    async getFrequentTrips() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Error: No se encontró el token en el localStorage.');
                throw new Error('No token found');
            }
            const response = await axios.get(`${API_URL}/status/FREQUENT`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data.map(trip => {
                try {
                    // Limpia el string para asegurarte de que no haya caracteres extraños
                    const cleanedDate = trip.departureTime
                        .replace(/\u202F/g, ' ') // Reemplaza espacios no estándar (si existen)
                        .replace(/\s*a\.m\./i, ' AM') // Reemplaza "a.m." con "AM"
                        .replace(/\s*p\.m\./i, ' PM'); // Reemplaza "p.m." con "PM"

                    // Parsea el string de fecha con el formato específico
                    const formattedDate = parse(cleanedDate, 'dd/MM/yy, h:mm a', new Date(), { locale: es });

                    return {
                        ...trip,
                        tripTime: format(formattedDate, 'HH:mm'), // Hora en formato 24h
                        tripDate: format(formattedDate, 'dd/MM/yyyy') // Fecha en formato dd/MM/yyyy
                    };
                } catch (error) {
                    console.error('Error al formatear la fecha:', trip.departureTime, error);
                    return trip; // Devuelve el viaje sin formatear en caso de error
                }
            });
        } catch (error) {
            console.error('Error obteniendo viajes frecuentes:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};
