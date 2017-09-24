import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import middleware from "./middleware/middleware";
import Users from "./containers/Users";
import UsersReducer from  "./reducers/users";

const store = createStore(UsersReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Users/>
    </Provider>,
    document.getElementById("app")
);

