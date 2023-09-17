class BookService {
    constructor() {
        this.URI ='/api/books'
    }

    async getBooks() {
        try {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books
        }catch (error) {
            console.error('Error durante la solicitud:', error);
          }
    }
    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data)
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