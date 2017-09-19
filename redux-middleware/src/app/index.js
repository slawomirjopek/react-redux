import { applyMiddleware, createStore } from "redux";

const loggedActions = [];

const initState = {
    status: false
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "STATUS_SET":
            state = {...state, status: true};
            break;
        case "STATUS_UNSET":
            state = {...state, status: false};
            break;
        case "THROW_ERROR":
            throw new Error("Some error...");
            break;
    }

    return state;
};

const logger = (store) => (next) => (action) => {
    loggedActions.push(action);
    next(action);
};

const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log(`Error occurred in: ${action.type} action`);
    }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: "STATUS_SET" }); // status true
store.dispatch({ type: "STATUS_UNSET" }); // status false
store.dispatch({ type: "THROW_ERROR" }); // Error occurred in: THROW_ERROR action

console.log(loggedActions); // [{type: "STATUS_SET"}, {type: "STATUS_UNSET"}, {type: "THROW_ERROR"}]
