import React from "react";

const UsersList = (props) => (
    <ul>
        {makeList.bind(props)()}
    </ul>
);

function makeList() {
    const list = this.users.map((user, index) => {
        return (
            <li key={index}>
                <span>
                    <b>Name: </b>
                    {user.name}
                </span><br/>
                <span>
                    <b>Username: </b>
                    {user.username}
                </span><br/>
                <span>
                    <b>Email: </b>
                    {user.email}
                </span><br/>
                <span>
                    <b>Phone: </b>
                    {user.phone}
                </span>
            </li>
        )
    });

    return list;
}

export default UsersList;