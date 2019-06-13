import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import library from './state/library'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    library
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

