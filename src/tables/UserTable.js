
import React from 'react'
import './UserTable.css';

const UserTable = props => {
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
                    <td>props.userName</td>
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
