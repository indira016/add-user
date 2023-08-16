import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
const [users, setUser]=useState([])



const addUserHandler=(username,age)=>{
setUser([...users,{username , age, id:Math.random().toString()}])
}

const deletUser=(userInfo)=>{
  setUser([...userInfo])
}

  return (
    <div className="App">
      <AddUser onAdd={addUserHandler}/>
      <UserList  users={users} onDelete={deletUser} />
    </div>
  );
}

export default App;
