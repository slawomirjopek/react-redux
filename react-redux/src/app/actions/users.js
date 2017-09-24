import { ACTION_CONST } from "../config/actions";

const UsersFetch = () => {
    return {
        type: ACTION_CONST.users.fetch
    }
};

const UsersFetchSuccess = () => {
    return {
        type: ACTION_CONST.users.fetchSuccess
    }
};

const UsersFetchError = () => {
    return {
        type: ACTION_CONST.users.fetchError
    }
};

export default UsersFetch;
