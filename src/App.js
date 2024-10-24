import logo from './logo.svg';
import './App.css';
import UserTable from './tables/UserTable';
import { useState } from 'react';

function App() {

  const usersData = [
    { id: 1, name: "Elmer", userName: "Elmer1"},
    { id: 2, name: "Bryan", userName: "Bryan1"},
    { id: 3, name: "Andres", userName: "Andres1"},
    { id: 4, name: "Ricardo", userName: "Ricardo1"},
    { id: 5, name: "Jhoao", userName: "Jhoao1"},
  ];
  const initialformstate = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(usersData);

  const [CurrentUser, setCurrentUser] = useState(initialformstate);

 // Función para eliminar un usuario
 const deleteUser = (id) => {
  // Filtrar la lista de usuarios y remover el usuario con el id correspondiente
  const updatedUsers = users.filter(user => user.id !== id);
  setUsers(updatedUsers);
};

  return (
    <div className="App">
      <h1>CRUD DE USUARIOS</h1>
      <UserTable
      users={users}
      deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;