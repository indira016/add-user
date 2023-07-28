import React, { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/ui/UserList';

function App() {
const [users, setUser]=useState([])



const addUserHandler=(username,age)=>{
setUser([...users,{username , age, id:Math.random().toString()}])
}

  return (
    <div className="App">
      <AddUser onAdd={addUserHandler}/>
      <UserList  users={users}/>
    </div>
  );
}

export default App;
