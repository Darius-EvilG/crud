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
  const initialFormState = { id: null, name: "", userName: ""};

  const [users, setUsers] = useState(usersData); //estado de los usuarios
  
  const [currentUser, setCurrenUser] = useState(initialFormState);  
  
  return (
    <div>
      <h1>CRUD DE USUARIOS</h1>
      <UserTable
        currentUser={currentUser}
      />
    </div>
  );
}

export default App;