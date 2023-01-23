import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { axiosAuth } from "../util/axiosAuth";

function AddFriend() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        friend: {
          name: '',
          email: ''
        }
      });
    
    const handleChange = e => {
        setForm({
          friend: {
            ...form.friend,
            [e.target.name]: e.target.value
          }
        });
      };

    const handleSubmit = e => {
        e.preventDefault();
        axiosAuth().post('http://localhost:9000/api/friends', form.friend)
        .then(res => {
            console.log(res.data)
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
      };

    return(
        <div>
            <h1>Add Friend</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Friend Name: <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                    </label>
                    <label>Friend Email: 
                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddFriend;