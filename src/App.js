import React, { useState } from 'react';
import NewUser from './tables/NewUser';
import UserTable from './tables/UserTable';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div>
      <h1>CRUD de Usuarios</h1>
      <NewUser addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} updateUser={updateUser} />
    </div>
  );
}

export default App;
