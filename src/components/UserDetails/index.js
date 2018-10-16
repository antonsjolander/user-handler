import React from 'react';
// import './userlist.css';


const UserDetails = (props) => {
    const users = props.users.users
    const person = users.find((item) => {
        return item.id == props.match.params.id;
      })
     
    return (
        <div>
           <h1>HEJ</h1>
        </div>
    )
}

export default UserDetails;