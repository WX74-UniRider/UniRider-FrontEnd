import axios from 'axios';

const http= axios.create({
    baseURL:'http://localhost:8080/api/v1',
})

export class RatingService{
    async addRating(Rating){
        const response = await http.post(`/ratings`, Rating);
        return response.data;
    }
}