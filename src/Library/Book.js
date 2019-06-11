import React from 'react';

const Book = ({book, deleteBook, editBook}) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
                <button
                    onClick={() => editBook(book)}
                >
                    edytuj
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