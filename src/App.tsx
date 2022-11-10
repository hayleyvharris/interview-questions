import React from 'react';

import './App.css';
import users from './users';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold">Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
