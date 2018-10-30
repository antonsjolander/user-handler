import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
    container: {
      maxWidth: 1200,
      margin: '1rem auto 0 auto',
      paddig: '0 1rem'
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        maxWidth: 300
    },
    imgCont: {
        width:200,
        height:200,
    }
    
}

class UserDetails extends Component {
    
    state = { 
        first: "",
        last: "",
        picture: ""
    }

    
    componentDidMount() {
        const users = this.props.users.users
        const person = users.find((item) => {
            return item.id === this.props.match.params.id;
        })
        if(person){
            sessionStorage.setItem('first', person.name.first)
            sessionStorage.setItem('last', person.name.last)
            sessionStorage.setItem('picture', person.picture)
            sessionStorage.setItem('id', person.id)
            this.setState({
                first: person.name.first,
                last: person.name.last,
                picture: person.picture,
                id: person.id
            })
        }
        else{
            this.setState({
                first: sessionStorage.getItem("first"),
                last: sessionStorage.getItem("last"),
                picture: sessionStorage.getItem("picture"),
                id: sessionStorage.getItem("id")
            })
        }
    }
    
    handleChange = val => event => {
        this.setState({
        [val]: event.target.value,
        });
    };
    


    render() {
        const { classes } = this.props
        const { picture, id } = this.state;
        const { dispatch } = this.props;
        
        return (
            <Grid className={classes.container} 
                container 
                direction="column" 
                justify="space-evenly"
                spacing={24}
                >
                <Grid item className={classes.col} xs={12}>
                    <div className={classes.imgCont}>
                        <img 
                            src={picture}
                            ref={img => this.img = img}
                            onError={() => this.img.src = 'https://image.flaticon.com/icons/svg/21/21104.svg'}    
                        />
                    </div>
                    <TextField
                        className={classes.textField}
                        fullWidth
                        id="outlined-name"
                        label="Image url"
                        value={this.state.picture}
                        onChange={this.handleChange('picture')}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item className={classes.col} xs={12}>
                
                <TextField
                    className={classes.textField}    
                    fullWidth
                    id="outlined-name"
                    label="First name"
                    value={this.state.first}
                    onChange={this.handleChange('first')}
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    className={classes.textField}
                    fullWidth
                    id="outlined-name"
                    label="last name"
                    value={this.state.last}
                    onChange={this.handleChange('last')}
                    margin="normal"
                    variant="outlined"
                    />    
                    </Grid>
                    <Grid item xs={12}>
                    <Button 
                        size="small"
                        variant="contained" 
                        color="primary"
                        onClick={() => dispatch.users.updateUser(id, {
                            "name": {
                                "first": this.state.first, 
                                "last": this.state.last
                            },
                            "picture": this.state.picture,
                            "id": this.state.id
                        })}>
                        Save
                    </Button>
                    </Grid>
            </Grid>

        )
    }
}

UserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(UserDetails);