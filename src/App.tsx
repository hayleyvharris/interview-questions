import React from 'react';

import users from './users';
import UserList from './UserList';

function App() {
    return (
        <div className="flex flex-col items-center m-11">
            <h1 className="text-3xl font-bold mb-5">Users</h1>
            <UserList users={users} />
        </div>
  );
}

export default App;
