import React from 'react';
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
    padding: "10px 20px",
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'flex-start',
    margin: 'auto'
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: '100%'

  },
  type: {
    margin: '10px 4px',
    textTransform: 'capitalize'
  }, 
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  action: {
     padding:0
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
        <CardContent className={classes.content}>
          <Typography className={classes.type} gutterBottom variant="h6" component="h6">
            {props.name.first} {props.name.last}
          </Typography>
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
        </CardContent>
      
      
    </Card>
  );
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(UserCard);