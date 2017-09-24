import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import Users from "./conrainers/Users";
import UsersReducer from  "./reducers/users";

const store = createStore(UsersReducer);

ReactDOM.render(
    <Provider store={store}>
        <Users/>
    </Provider>,
    document.getElementById("app")
);

