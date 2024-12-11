import React, { useState } from 'react';
import './UserTable.css';

function UserTable({ users, deleteUser, updateUser }) {
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({ name: '', email: '' });

  const startEditing = (user) => {
    setEditingId(user.id);
    setEditingData({ name: user.name, email: user.email });
  };

  const saveEdit = (id) => {
    updateUser(id, { ...editingData, id });
    setEditingId(null);
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editingData.name}
                      onChange={(e) =>
                        setEditingData({ ...editingData, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={editingData.email}
                      onChange={(e) =>
                        setEditingData({ ...editingData, email: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => saveEdit(user.id)}>Guardar</button>
                    <button onClick={() => setEditingId(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => startEditing(user)}>Editar</button>
                    <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
