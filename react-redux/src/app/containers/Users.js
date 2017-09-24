import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from "react";

import FetchUsers from "../actions/users";
import UsersList from "../components/UsersList";
import UsersLoader from "../components/UsersLoader";

class Users extends React.Component {
    constructor() {
        super();
    };

    render() {
        const { fetching, users } = this.props;

        return (
            <div>
                <button onClick={this.props.actions.fetch}>Fetch users</button>
                <UsersLoader loading={fetching}/>
                <UsersList users={users}/>
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string
};

function mapStateToProps(state) {
    return {
        fetching: state.fetching,
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetch: bindActionCreators(FetchUsers, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
