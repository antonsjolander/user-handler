import React, { Component } from 'react';
import UserCard from '../UserCard';
import Grid from '@material-ui/core/Grid';

import './userlist.css';

const styles = {
    container: {
      maxWidth: 1200,
      margin: '1rem auto 0 auto',
      paddig: '0 1rem'
    }
}

const UserList = (props) => {
    const { dispatch , classes } = props
    const users = props.users.users
    const person = users.map((item, index) => {
        return <Grid key={index} item xs><UserCard  {...props} name={item.name} dispatch={dispatch} picture={item.picture}  id={item.id}/></Grid>;
      })
    return (
        <Grid 
        style={styles.container} 
        container 
        spacing={8}
        justify="space-evenly">
            {person}
        </Grid>
        
    )
}



export default UserList;