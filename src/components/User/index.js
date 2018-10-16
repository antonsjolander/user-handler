import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './user.css';
import red from '@material-ui/core/colors/red';

const User = (props) => {
    
    return (
        <div className="user-cont">
            <div className="thumbnail-cont">
                <img src={props.picture} alt=""/>
            </div>
            <Link to={`/user/${props.id}`}>
                <h3 className="name">{props.name.first} {props.name.last}</h3>
            </Link>
            
            <Button variant="contained" color="primary" onClick={() => props.dispatch.users.removeUser(props.id)}>
            Remove
            </Button>  
            
        </div>
    )
}

export default User;