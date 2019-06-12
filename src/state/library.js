const SET_LIBRARY = 'library/SET_LIBRARY';
const IS_LIBRARY_SET = 'library/IS_LIBRARY_SET';
const DELETE_BOOK = 'library/DELETE_BOOK';
const EDIT_BOOK = 'library/EDIT_BOOK';

export const setLibraryAsyncActionCreator = (library) => (dispatch, getState) => {
    dispatch(setLibraryActionCreator(library));
};

export const setLibraryActionCreator = (library) => ({
    type: SET_LIBRARY,
    library
});
export const isLibrarySetActionCreator = () => ({
    type: IS_LIBRARY_SET,
});
export const deleteBookActionCreator = (bookId) => ({
    type: DELETE_BOOK,
    bookId
});
export const editBookActionCreator = (bookId, newTitle, newAuthor) => ({
    type: EDIT_BOOK,
    bookId,
    newTitle,
    newAuthor
});

const initialState = {
    library: [],
    isLibrarySet: false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LIBRARY:
            return {
                ...state,
                library: action.library
            };
        case IS_LIBRARY_SET:
            return {
                ...state,
                isLibrarySet: true
            };
        case DELETE_BOOK:
            return {
                ...state,
                library: state.library.filter(book => book.id !== action.bookId)
            };
        case EDIT_BOOK:
            return {
                ...state,
                library: state.library.map(
                    book => (book.id === action.bookId) ?
                        {...book, title: action.newTitle, author: action.newAuthor}
                        :
                        book
                )
            };

        default:
            return state;
    }
};
