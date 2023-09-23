class BookService {
    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        try {
            const response = await fetch(this.URI);
            if (!response.ok) {
                throw new Error('Error al obtener libros');
            }
            const books = await response.json();
            return books;
        } catch (error) {
            throw new Error('Error al obtener libros: ' + error.message);
        }
    }

    async postBook(book) {
        try {
            const res = await fetch(this.URI, {
                method: 'POST',
                body: JSON.stringify(book),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error('Error al guardar el libro');
            }
            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error('Error al guardar el libro: ' + error.message);
        }
    }

    async deleteBook(bookId) {
        try {
            const res = await fetch(`${this.URI}/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error('Error al eliminar el libro');
            }
            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error('Error al eliminar el libro: ' + error.message);
        }
    }
}

export default BookService;
