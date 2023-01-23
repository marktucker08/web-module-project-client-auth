import React, {useEffect} from "react";

function Logout() {

    // useEffect(() => {
    //     localStorage.clear()
    // }, [])

    localStorage.setItem('token', '');

    return(
        <div>You have been successfully logged out!</div>
    )
}

export default Logout;