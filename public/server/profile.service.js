import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:8080/api/v1',
})

export class ProfileService {
    async editProfilePassenger(Passenger){
        const response = await http.put(`/profile/passenger`, Passenger);
        return response.data;
    }

    async editProfileDriver(Driver){
        const response = await http.put(`/profile/passenger`, Driver);
        return response.data;
    }

    async getProfileDrivers(){
        const response = await http.get(`/profile/drivers`);
        return response.data;
    }

    async getDriverDestination(){
        const response = await http.get(`/profile/drivers/destination`);
        return response.data;
    }

    async getProfileDriverById(id){
        const response = await http.get(`/profile/driver/:${id}`);
        return response.data;
    }

}