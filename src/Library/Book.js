import React from 'react';
import {Link} from 'react-router-dom'

const Book = ({book, deleteBook}) => {
    return (
        <tr>
            <td data-th="Title"> {book.title}</td>
            <td data-th="Author"> {book.author}</td>
            <td>
                <Link
                    className={"book--link"}
                    to={{
                        pathname: `/book/${book.id}`,
                        state: {book: book}
                    }}
                >
                    <button className={"book--button button--button__edit"}>edit</button>

                    </Link>
            </td>
            <td>
                <button
                    className={"book--button button--button__delete"}
                    onClick={() => deleteBook(book.id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default Book;