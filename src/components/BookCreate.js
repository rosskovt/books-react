import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();

    const handleInputChange = (event) => {
        setTitle(event.target.value);
    };
    console.log(title);

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleInputChange} />
                <button className="button">Submit book</button>
            </form>

        </div>
    )
}

export default BookCreate;