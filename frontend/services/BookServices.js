class BookService {
    constructor() {
        this.URI ='/api/books'
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await JSON.parse(response);
        return books
    }
    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await JSON.parse(response);
        console.log(data)
    }
    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = await JSON.parse(response);
        console.log(data);
    }
}

export default BookService;