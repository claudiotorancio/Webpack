

class BookService {
    constructor() {
        this.URI = MONGODB_URI
    }

    async getBooks() {
        const response = await fetch(this.URI);
        console.log(response)
        const books = await response.json();
        return books
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

