import React from 'react';
import Book from "./Book";
import Labels from "./Labels";

const Library = (props) => {
    return (
        <table>
            <tbody>
            <Labels/>
            {
                props.library.length !== 0 &&
                Object.entries( props.library).map(
                    ([id, book]) => (
                        <Book
                            book={book}
                            key={book.id}
                            deleteBook={props.deleteBook}
                            editBook={props.editBook}
                        />
                    )
                )
            }
            </tbody>
        </table>
    );
};

export default Library;