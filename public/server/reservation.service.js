import axios from "axios";

const http= axios.create({
    baseURL:'http://localhost:8080/api/v1',
})

export class ReservationService{
    async addReservation(Reservation){
        const response = await http.post(`/reservations`, Reservation);
        return response.data;
    }

    async deleteReservation(id){
        const response = await http.delete(`/reservations:/${id}`);
        return response.data;
    }
}