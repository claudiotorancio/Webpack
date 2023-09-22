

class BookService {
    constructor() {
        this.MONGODB_URI ='/api/books'
    }

    async getBooks() {
        const response = await fetch(this.MONGODB_URI);
        console.log(response)
        const books = await response.json();
        return books
    }
    async postBook(book) {
        const res = await fetch(this.MONGODB_URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data)
    }
    async deleteBook(bookId) {
        const res = await fetch(`${this.MONGODB_URI}/${bookId}`, {
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

