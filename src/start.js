import React from "react";
import {Link} from "react-router-dom"

function Start() {

    return (
        <Link to="/Questions">
        <div className="start--start-button">
            <h1 className="link-text">Start</h1>
        </div>
        </Link>
    )
}
export default Start;