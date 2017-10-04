import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const initState = {
    data: null,
    fetching: false,
    error: false
};

// action types
const ACTION_FETCHING = {
    start: "FETCHING_START",
    success: "FETCHING_SUCCESS",
    failure: "FETCHING_FAILURE"
};

// action creators
const fetchingStart = () => {
    return {
        type: ACTION_FETCHING.start
    }
};
const fetchingSuccess = (data) => {
    return {
        type: ACTION_FETCHING.success,
        payload: data
    }
};
const fetchingFailure = (error) => {
    return {
        type: ACTION_FETCHING.failure,
        payload: error
    }
};

// reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_FETCHING.start: {
            state = { ...state, fetching: true };
            break;
        }
        case ACTION_FETCHING.success: {
            state = { ...state, fetching: false, error: false, data: action.payload };
            break;
        }
        case ACTION_FETCHING.failure: {
            state = { ...state, fetching: false, error: action.payload };
            break;
        }
    }
    return state;
};

// store
const store = createStore(reducer, applyMiddleware(logger));