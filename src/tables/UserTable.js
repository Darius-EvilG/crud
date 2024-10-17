
import React from 'react'
import './UserTable.css';

const UserTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Elmer</td>
                    <td>ElmerGama</td>
                    <td>
                        <button className='button-styles'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserTable
