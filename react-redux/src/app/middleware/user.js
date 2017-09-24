import { ACTION_CONST } from "../config/actions";
import axios from "axios";

const userMiddleware = (store) => (next) => (action) => {
    if (action.type === ACTION_CONST.users.fetch) {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                store.dispatch({
                    type: ACTION_CONST.users.fetchSuccess,
                    payload: res.data
                });
            }, (err) => {
                store.dispatch({
                    type: ACTION_CONST.users.fetchError,
                    payload: err
                });
            });
    }

    next(action);
};

export default userMiddleware;