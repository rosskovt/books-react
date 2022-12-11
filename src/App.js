import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([])

    const editBookById = (idToUpdate, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === idToUpdate) {
                return { ...book, title: newTitle }
            };
            return book;
        })
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        console.log('Need to add book with a title of ', title);
        const updatedBooks = [
            ...books, {
                id: Math.round(Math.random() * 9999),
                title
            }
        ];

        setBooks(updatedBooks);
    };

    console.log(books);

    const deleteBookById = (idToRemove) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== idToRemove;
        });

        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;