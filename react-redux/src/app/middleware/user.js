import { ACTION_CONST } from "../config/actions";

const userMiddleware = (store) => (next) => (action) => {
    if (action.type === ACTION_CONST.users.fetch) {
        // TODO fetch user data
    }

    next(action);
};

export default userMiddleware;