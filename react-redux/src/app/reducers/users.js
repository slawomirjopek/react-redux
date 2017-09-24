import { ACTION_CONST } from "../config/actions";
import initState from "../config/state";

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_CONST.users.fetch: {
            state = {
                ...state,
                fetching: true
            };
            break;
        }
        case ACTION_CONST.users.fetchSuccess: {
            state = {
                ...state,
                fetching: false,
                users: action.payload
            };
            break;
        }
        case ACTION_CONST.users.fetchError: {
            state = {
                ...state,
                fetching: false,
                error: action.payload
            };
            break;
        }
    }

    return state;
};

export default UsersReducer;