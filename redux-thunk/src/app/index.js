import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

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

// thunk function
const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_FETCHING.start: {
            state = { ...state, fetching: true, error: false };
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

// effect
const fetchData = () => (dispatch) => {
    dispatch(fetchingStart());

    return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => dispatch(fetchingSuccess(res.data)))
        .catch((err) => {
            dispatch(fetchingFailure(err));
            return Promise.reject(err);
        })
};

// store
const store = createStore(reducer, applyMiddleware(logger, thunk));

store.dispatch(fetchData()).then((res) => {
    console.log("response: ", res);
}, (err) => {
    console.log("error: ", err);
});