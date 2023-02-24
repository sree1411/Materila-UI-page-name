import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function Informationtable( { refresh , setUserDetails }) {


const [users, setUsers]= useState([]);

const deleteUser = (id) => { 

    axios.delete(`http://localhost:4022/employee/${id}`)
    .then( (res) => {
        getUsers()

    } )
    .catch(() => {} )


}


const getUsers = () => {
    axios.get('http://localhost:4022/employee')
    .then( (res) => {
        setUsers(res.data.data)

    } )
    .catch(() => {} )

}





useEffect(  ()=>{  

    getUsers()

}, [refresh, setUserDetails])


  return (
    <div>
        
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>age</th>
          <th>email</th>
          <th>Phone</th>
          <th>Action</th>

          
          
        </tr>
      </thead>
      
      <tbody>

          {users.map( (user, i) => (

                    <tr key={ user._id}    >
                    <td>{i+1}</td>
                    <td> {user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
  
                    <Button variant="primary" onClick={ () => { setUserDetails(user) }}>Edit</Button>{' '}
                    <Button variant="danger" onClick={ () => { deleteUser(user._id) }}>Delete</Button>{' '}
                           </td>
                    </tr>
                            ))}

        
      </tbody>

     



    </Table>
   
  


    </div>
  )
}
