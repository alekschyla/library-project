import React from 'react';

const Book = ({book}) => {
    return (
        <div>
            <strong>{book.title}</strong> - {book.author}
        </div>
    );
};

export default Book;