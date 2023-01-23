import React, { useEffect, useState } from "react";

import { axiosAuth } from "../util/axiosAuth";


function FriendsList() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        getData();
    }, [friends])

function getData() {
    axiosAuth().get('http://localhost:9000/api/friends')
    .then(res => {
        // console.log(res.data)
        setFriends(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

    return(
            <div className="friendslist">
                <h1>Friends List</h1>
                {friends ? friends.map((friend, idx) => (<div key={idx}>- {friend.name} - {friend.email}</div>
                )) : <div>Loading friends...</div> }
            </div>

        )
}

export default FriendsList;