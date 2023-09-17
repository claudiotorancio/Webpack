class BookService {
    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        try {
            const response = await fetch(this.URI);
            if (!response.ok) {
                throw new Error('La solicitud para obtener libros no fue exitosa');
            }
            const books = await response.json();
            return books;
        } catch (error) {
            console.error('Error al obtener libros:', error);
            throw error; // Propaga el error para que se maneje en el lugar donde se llama a esta función.
        }
    }

    async postBook(book) {
        try {
            const res = await fetch(this.URI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book) // Asegúrate de enviar el libro como JSON
            });

            if (!res.ok) {
                throw new Error('La solicitud para agregar un libro no fue exitosa');
            }

            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al agregar un libro:', error);
            throw error;
        }
    }

    async deleteBook(bookId) {
        try {
            const res = await fetch(`${this.URI}/${bookId}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                throw new Error('La solicitud para eliminar un libro no fue exitosa');
            }

            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al eliminar un libro:', error);
            throw error;
        }
    }
}

export default BookService;
