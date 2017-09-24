import { ACTION_CONST } from "../config/actions";
import initState from "../config/state";

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_CONST.users.fetch: {
            state = {...state, fetching: true};
            break;
        }
    }

    return state;
};

export default UsersReducer;