import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://randomuser.me/api/");
      const data = response.data.results[0];
      setUser({ name: `${data.name.first} ${data.name.last}`, email: data.email });
      localStorage.setItem("user", JSON.stringify(user));
    };
    fetchData();
  }, []);

  const refreshUser = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    const data = response.data.results[0];
    setUser({ name: `${data.name.first} ${data.name.last}`, email: data.email });
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>User</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className='button' onClick={refreshUser}>Refresh</button>
      </header>
    
    </div>
  );
}

export default App;
