import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Login from './components/login';
import FriendsList from './components/FriendsList';

function App() {
  return (
      <div className="App">
        <div className='app-header'><header>
          <h2>Friends Database</h2>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/friends">Friend List</Link>
            </li>
            <li>
              <Link to="/addfriend">Add Friend</Link>
            </li>
          </ul>
        </header>
      </div>
        <Routes>
          <Route exact path="/friends" element={FriendsList()}/>
          {/* <Route exact path="/addfriend" component={addFriend}/> 
          <Route path="/logout" component={Logout} /> */}
          <Route path="/login" element={Login()} />
          <Route path="/" element={Login()} />    
        </Routes>
      </div>
  );
}

export default App;
