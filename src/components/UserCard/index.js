import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



const styles = {
  card: {
    maxWidth: 200,
    height:280,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    jusifyContent: 'center',
    margin: 'auto'
  },
  media: {
    height: 120,
    width: 120,
    borderRadius: '100%'

  },
  action: {
      marginTop:'auto'
  }
};

function UserCard(props) {
  const { classes } = props;
  const MyLink = props => <Link to={`/user/${props.id}`} {...props}></Link>; 
  return (
    <Card className={classes.card}>
     
        <CardMedia
          className={classes.media}
          image={props.picture}
          title="User picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name.first} {props.name.last}
          </Typography>
          
        </CardContent>
      
      <CardActions className={classes.action} >
        <Button
            component={MyLink} 
            size="small"
            variant="contained"  
            color="primary"
            id={props.id}>
          Edit
        </Button>
        <Button 
            size="small"
            variant="contained" 
            color="secondary"
            onClick={() => props.dispatch.users.removeUser(props.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(UserCard);