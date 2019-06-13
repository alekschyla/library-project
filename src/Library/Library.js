import React from 'react';
import Book from "./Book";
import Labels from "./Labels";

const Library = ({library, deleteBook}) => {
    return (
        <table>
            <tbody>
            <Labels/>
            {
               library.length !== 0 &&
                library.map(
                    book => (
                        <Book
                            book={book}
                            key={book.id}
                            deleteBook={deleteBook}
                        />
                    )
                )
            }
            </tbody>
        </table>
    );
};

export default Library;