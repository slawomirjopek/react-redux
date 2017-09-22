import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initState = {
    fetching: false,
    fetched: true,
    users: [],
    error: null
};

const ACTIONS = {
    start: "USERS_FETCH_START",
    receive: "USERS_RECEIVE",
    error: "USERS_FETCH_ERROR"
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ACTIONS.start: {
            return {
                ...state,
                fetching: true
            };
            break;
        }
        case ACTIONS.receive: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            };
            break;
        }
        case ACTIONS.error: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
            break
        }
    }

    return state;
};

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({ type: ACTIONS.start });

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            dispatch({ type: ACTIONS.receive, payload: res.data });
        }, (err) => {
            dispatch({ type: ACTIONS.error, payload: err });
        });
});