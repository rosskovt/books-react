import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const BooksContext = createContext();


function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const allBooks = await axios.get('http://localhost:3001/books');
        console.log(allBooks);
        setBooks(allBooks.data);
    }, []);

    // const stableFetchBooks = useCallback(fetchBooks, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',
            {
                title,
            })
            .catch((error) => {
                console.log(error);
                return
            });
        const updatedBooks = [
            ...books,
            response.data
        ];
        console.log(response);

        setBooks(updatedBooks);
    };

    console.log(books);

    const editBookById = async (idToUpdate, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${idToUpdate}`,
            {
                title: newTitle,
            })
            .catch((error) => {
                console.log(error);
                return
            });
        const updatedBooks = books.map((book) => {
            if (book.id === idToUpdate) {
                return { ...book, ...response.data }
            };
            return book;
        })

        setBooks(updatedBooks);
    };

    const deleteBookById = async (idToRemove) => {
        await axios.delete(`http://localhost:3001/books/${idToRemove}`)
            .then(() => {
                const updatedBooks = books.filter((book) => {
                    return book.id !== idToRemove;
                });

                setBooks(updatedBooks);
            })
            .catch((error) => {
                console.log('There was an error, check logs', error);
                return
            });
    };

    const valueToShare = {
        fetchBooks,
        books,
        editBookById,
        createBook,
        deleteBookById
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;