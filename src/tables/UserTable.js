import React from 'react'
import './UserTable.css';

const UserTable = ({ users, deleteUser }) => {
  return (
    <table>
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