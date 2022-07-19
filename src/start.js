import React from "react";
import {useNavigate} from "react-router-dom";
function Start() {
    let navigate = useNavigate()
    return (
        
        <div onClick={()=>{navigate("/Questions")}} className="start--start-button">
            <h1>Start</h1>
        </div>
    )
}
export default Start;