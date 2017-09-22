import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const initState = {
    fetching: false,
    fetched: true,
    users: [],
    error: null
};

const USER_ACTIONS = {
    type: "USERS",
    pending: "USERS_PENDING",
    receive: "USERS_FULFILLED",
    error: "USERS_REJECTED"
};

console.log(USER_ACTIONS);

const reducer = (state = initState, action) => {
    switch(action.type) {
        case USER_ACTIONS.pending: {
            return {
                ...state,
                fetching: true
            };
            break;
        }
        case USER_ACTIONS.receive: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload.data
            };
            break;
        }
        case USER_ACTIONS.error: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload.message
            };
            break;
        }
    }

    return state;
};

const middleware = applyMiddleware(promise(), logger);
const store = createStore(reducer, middleware);

store.dispatch({
    type: USER_ACTIONS.type,
    payload: axios.get("https://jsonplaceholder.typicode.com/users")
});