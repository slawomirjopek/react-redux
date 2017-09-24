import React from "react";

const UserLoader = (props) => {
    if (!props.loading) {
        return null
    }

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
};

export default UserLoader;