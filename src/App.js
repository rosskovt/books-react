import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";

function App() {
    const [book, setBook] = useState([])

    const editBook = () => {

    };

    const createBook = (title) => {
        console.log('Need to add book with a title of ', title);
    };

    const deleteBook = () => {

    };

    return (
        <div>
            <BookCreate onCreate={createBook} />
            <BookShow />
        </div>
    )
}

export default App;