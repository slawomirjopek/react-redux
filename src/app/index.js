import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === 'INC') {
        return state + (checkPayload(action.payload) ? action.payload : 1);
    }

    if (action.type === 'DEC') {
        return state - (checkPayload(action.payload) ? action.payload : 1);
    }

    return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log('store changed...', store.getState());
});

function checkPayload(payload) {
    return typeof payload === 'number';
}

store.dispatch({ type: 'INC'}); // 1
store.dispatch({ type: 'DEC'}); // 0

store.dispatch({ type: 'INC', payload: 10}); // 10
store.dispatch({ type: 'DEC', payload: 5}); // 5

store.dispatch({ type: 'INC', payload: 'not number'}); // 6
store.dispatch({ type: 'DEC', payload: {}}); // 5