import { combineReducers, createStore } from 'redux';

const booksReducer = (state = 0, action) => {
    if (action.type === 'INC') {
        return state + (checkPayload(action.payload) ? action.payload : 1);
    }

    if (action.type === 'DEC') {
        return state - (checkPayload(action.payload) ? action.payload : 1);
    }

    return state;
};

const userReducer = (state = {}, action) => {
    if (action.type === 'SET_NAME') {
        return {...state, name: action.payload};
    }

    if (action.type === 'SET_AGE') {
        return {...state, age: action.payload};
    }

    return state;
};

const reducers = combineReducers({
    books: booksReducer,
    user: userReducer
});

const store = createStore(reducers, {
    books: 0,
    user: {
        name: 'user1',
        age: 30
    }
});

store.subscribe(() => {
    console.log('store changed...', store.getState());
});

function checkPayload(payload) {
    return typeof payload === 'number';
}

store.dispatch({ type: 'INC'}); // books 1
store.dispatch({ type: 'DEC'}); // books 0

store.dispatch({ type: 'INC', payload: 10}); // books 10
store.dispatch({ type: 'DEC', payload: 5}); // books 5

store.dispatch({ type: 'INC', payload: 'not number'}); // books 6
store.dispatch({ type: 'DEC', payload: {}}); // books 5

store.dispatch({ type: 'SET_NAME', payload: 'John Doe' }); // books 5
store.dispatch({ type: 'SET_AGE', payload: 50 }); // books 5