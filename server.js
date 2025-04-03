const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { id: 2, title: "1984", author: "George Orwell", year: 1949 },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
