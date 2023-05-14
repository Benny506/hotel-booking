import React from "react";

export default function CustomErrorMsg({ errorMsg }){
    return(
        <div className="mb-4 d-flex justify-content-center align-items-center text-uppercase">
            <p className="login-error-msg my-2 mx-1">{errorMsg}</p>        
        </div>
    )
}