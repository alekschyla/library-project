import React from 'react';
import {Link} from 'react-router-dom'

const Book = ({book, deleteBook, editBook}) => {
    return (
        <tr>
            <td data-th="Title"> {book.title}</td>
            <td data-th="Author"> {book.author}</td>
            <td>
                <button>
                    <Link
                        className={"book--link"}
                        to={{
                            pathname: `/book/${book.id}`,
                            state: {book: book}
                        }}
                    >
                        edytuj
                    </Link>
                </button>
            </td>
            <td>
                <button
                    onClick={() => deleteBook(book.id)}
                >
                    usuń
                </button>
            </td>
        </tr>
    );
};

export default Book;