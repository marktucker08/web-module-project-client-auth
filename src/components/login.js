import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
    
    const navigate = useNavigate()
    const [state, setState] = useState({
        credentials: {
          username: '',
          password: ''
        }
      });
    
    const handleChange = e => {
        console.log(params)
        setState({
          credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };
    
    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', state.credentials)
        .then(res => {
            // console.log(res.data)
            const token = res.data.token
            localStorage.setItem('token', token)
            navigate('/friends')
        })
        .catch(err => {
            console.log(err)
        })
      };

    return (
        <div>
          <form onSubmit={login}>
            <label>Username: <input
              type="text"
              name="username"
              value={state.credentials.username}
              onChange={handleChange}
            />
            </label>
            <label>Password: 
            <input
              type="password"
              name="password"
              value={state.credentials.password}
              onChange={handleChange}
            />
            </label>
            <button>Log in</button>
          </form>
        </div>
      );
}

export default Login;