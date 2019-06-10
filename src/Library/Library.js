import React from 'react';
import Book from "./Book";

const Library = (props) => {
    return (
        <div>
            {
                props.library.length !== 0 &&
                Object.entries( props.library).map(
                    ([id, book]) => (
                        <Book
                            book={book}
                            key={id}
                        />
                    )
                )
            }
        </div>
    );
};

export default Library;