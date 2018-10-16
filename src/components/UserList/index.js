import React, { Component } from 'react';
import User from '../User';
import './userlist.css';


const UserList = (props) => {
    const { dispatch } = props
    const users = props.users.users
    const person = users.map((item, index) => {
        return <li key={index} ><User name={item.name} dispatch={dispatch} picture={item.picture}  id={item.id}/></li>;
      })
    return (
        <ul className="user-list">
            {person}
        </ul>
    )
}

export default UserList;