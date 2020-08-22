import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {users.map(user =>
           <RandomPeople
            profile={user.picture.large}
            fname={user.name.first} 
            lname={user.name.last}
            gender={user.gender} 
            email={user.email}>
           </RandomPeople>)}
      </header>
    </div>
  );
}

function RandomPeople(props){
  const imgStyle = {
    borderRadius : '50%',
  }
  return(
    <div>
      <img style={imgStyle} src={props.profile} alt=""/>
      <h3>Name: {props.fname} {props.lname}</h3>
      <p>Gender: {props.gender}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
