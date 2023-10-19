import React, { useState, useEffect } from 'react';
import './App.css'; // You can create your custom CSS or use styled-components here
import Navbar from './Navbar';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar getUsers={getUsers} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-card-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
