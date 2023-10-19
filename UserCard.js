import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <p>Avatar:</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </div>
  );
};

export default UserCard;
