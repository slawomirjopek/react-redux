import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from "react";

import FetchUsers from "../actions/users";

class Users extends React.Component {
    constructor() {
        super();
    };

    render() {
        const { fetching, users } = this.props;

        return (
            <div>
                <button onClick={this.props.actions.fetch}>Fetch users</button>
            </div>
        )
    }
}

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
