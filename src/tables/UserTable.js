import React from 'react'
import './UserTable.css';

const UserTable = ({ users, deleteUser, addUser }) => {
  return (
    <table>
        <button>onClick={()=>addUser ({ name: "Jhoao", userName: "Jhoao1",})}
          Add user
        </button>
        <tr>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Usuario</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className='button-styles'onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
        </tr>
    </table>
  )
}

export default UserTable