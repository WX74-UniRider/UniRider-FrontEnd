import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

export class BooksApiService {
    static async getAllBooks() {
        try {
            const response = await http.get('/books');
            return response.data;
        } catch (error) {
            console.error("Error fetching books:", error);
            throw error;
        }
    }

    static async getBookById(id) {
        try {
            const response = await http.get(`/books/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching book with id ${id}:`, error);
            throw error;
        }
    }

    static async createBook(book) {
        try {
            const response = await http.post('/books', book);
            return response.data;
        } catch (error) {
            console.error("Error creating book:", error);
            throw error;
        }
    }

    static async updateBook(id, book) {
        try {
            const response = await http.put(`/books/${id}`, book);
            return response.data;
        } catch (error) {
            console.error(`Error updating book with id ${id}:`, error);
            throw error;
        }
    }

    static async deleteBook(id) {
        try {
            const response = await http.delete(`/books/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting book with id ${id}:`, error);
            throw error;
        }
    }
}