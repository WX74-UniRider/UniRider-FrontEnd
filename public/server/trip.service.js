import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:8080/api/v1',
})

export class TripService{
    async getTripsById(id){
        const response = await http.post(`/trips/:${id}`);
        return response.data;
    }

    async editTripsById(id){
        const response = await http.post(`/trips/:${id}`);
        return response.data;
    }

    async deleteTripById(id){
        const response = await http.delete(`/trips/${id}`);
        return response.data;
    }

    async getTrips(id){
        const response = await http.delete(`/trips`);
        return response.data;
    }

    async postTrip(Trip){
        const response = await http.post(`/trips`, Trip);
        return response.data;
    }
}