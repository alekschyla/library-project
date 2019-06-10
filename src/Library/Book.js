import React from 'react';

const Book = ({book}) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    );
};

export default Book;