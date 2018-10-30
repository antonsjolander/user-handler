import React from 'react';
import UserCard from '../UserCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const UserList = (props) => {
    const { dispatch } = props
    const users = props.users.users
    const person = users.map((item, index) => {
        return <Grid key={index} item lg={4} md={6} xs={12}><UserCard  {...props} name={item.name} dispatch={dispatch} picture={item.picture}  id={item.id}/></Grid>;
      })
    return (
        <Grid 
        container 
        spacing={24}
        justify="space-evenly">
            {/* <h1>Users</h1> */}
            {person}
            <Grid item xs={12}>        
                <Button variant="fab" color="primary" aria-label="Add">
                    <AddIcon />
                </Button>
            </Grid>
        </Grid>
        
        
    )
}



export default UserList;