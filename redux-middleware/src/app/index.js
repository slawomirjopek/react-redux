import { applyMiddleware, createStore } from "redux";

const initState = {
    fetching: false
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "FETCHING":
            state = {...state, fetching: true};
            break;
        case "FETCHING_END":
            state = {...state, fetching: false};
            break;
    }

    return state;
};

const logger = (store) => (next) => (action) => {
    next(action);
};

const middleware = applyMiddleware(logger);

window.store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log(store.getState());
});