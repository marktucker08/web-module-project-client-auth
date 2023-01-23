import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Login from './components/login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <div className="App">
        <div className='app-header'>
          <header>
          <h2>Friends Database</h2>
          <nav>
                <Link className="link" to="/login">Login</Link>
              
                <Link className="link" to="/logout">Logout</Link>
        
                <Link className="link" to="/friends">Friend List</Link>
             
                <Link className="link" to="/friends/add">Add Friend</Link>
          </nav>
        </header>
      </div>
        <Routes>
          {/* <PrivateRoute exact path="/friends" element={<FriendsList />} />
          <PrivateRoute exact path="/friends/add" element={<AddFriend />} /> */}
          <Route exact path="/friends" element={<FriendsList />}/>
          <Route exact path="/friends/add" element={<AddFriend />}/> 
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />    
        </Routes>
      </div>
  );
}

export default App;
