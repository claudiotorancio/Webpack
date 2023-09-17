class BookService {
    constructor() {
        this.URI ='/api/books'
    }

    async getBooks() {
        const response = await fetch(this.URI);
        console.log(this.URI)
        const books = await response.json();
        return books
    }
    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
    
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
        } else {
            // Manejar el error, mostrar un mensaje al usuario, etc.
            console.error('Error al realizar la solicitud POST:', res.status);
        }
    }
    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;