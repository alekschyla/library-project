const SET_LIBRARY = 'library/SET_LIBRARY';

export const setLibraryAsyncActionCreator = (library) => (dispatch, getState) => {
    dispatch(setLibraryActionCreator(library));
};

export const setLibraryActionCreator = (library) => ({
    type: SET_LIBRARY,
    library
});

const initialState = {
    library: [],
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LIBRARY:
            return {
                ...state,
                library: action.library
            };

        default:
            return state;
    }
};
