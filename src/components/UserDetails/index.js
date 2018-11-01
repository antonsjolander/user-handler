import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as yup from 'yup';




const styles = {
    formCont: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        maxWidth: '100%'
    },
    title: {
        textTransform: 'capitalize'
    },
    textField: {
        maxWidth: 300
    },
    imgCont: {
        width:100,
        height:100,
        margin: "auto"
    }
    
}

const schema = yup.object().shape({
    first: yup.string().required(),
    last: yup.string().required(),
    picture: yup.string().url(),
})

class UserDetails extends Component {
    
    state = { 
        first: "",
        last: "",
        picture: "",
        firstErr:false,
        lastErr: false,
        pictureErr: false
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
        else if (this.props.match.params.id === 'newUser') {
            this.setState({
                first: '',
                last: '',
                picture: '',
                id: '',
                newUser: true
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
        [val + "Err"] : false
        });

    };
    
    handleSubmit = () => {
        const { history, dispatch } = this.props;
        const { id, newUser } = this.state
        schema.validate({
            first: this.state.first,
            last: this.state.last,
            picture: this.state.picture,
        }).then((value) => {
            console.log(value)
            if(newUser) {
                dispatch.users.addUser(id,{
                    "name": {
                        "first": this.state.first, 
                        "last": this.state.last
                    },
                    "picture": this.state.picture,
                    "id": this.state.id
                })
            }
            else {
                dispatch.users.updateUser(id, {
                    "name": {
                        "first": this.state.first, 
                        "last": this.state.last
                    },
                    "picture": this.state.picture,
                    "id": this.state.id
                })
            }
            history.goBack();
        }).catch((err) => {
            
            switch (err.path) {
                case "first":
                    this.setState({
                        firstErr: true
                    })
                    break;
                case "last":
                    this.setState({
                        lastErr: true
                    })
                    break;
                case "picture":
                    this.setState({
                        pictureErr: true
                    })
                    break;    
            }

        })
    }

    handleClose = () => {
        const { history } = this.props;
        history.goBack();
    }


    render() {
        const { classes , location } = this.props
        const { picture, first, last , firstErr, lastErr, pictureErr} = this.state; 
        return (
            <Dialog
                open={location.state.modal}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle className={classes.title}>
                    {first} {last}
                </DialogTitle>
                <DialogContent>
                    <div className={classes.imgCont}>
                        <img 
                            alt=""
                            src={picture}
                            ref={img => this.img = img}
                            onError={() => this.img.src = 'https://image.flaticon.com/icons/svg/21/21104.svg'}    
                        />
                    </div>
                    <div className={classes.formCont}>
                        <TextField
                            className={classes.textField}
                            fullWidth
                            id="outlined-name"
                            label="Image url"
                            value={picture}
                            error={pictureErr}
                            onChange={this.handleChange('picture')}
                            margin="normal"
                            
                        />
                        <TextField
                            error={firstErr}
                            className={classes.textField}    
                            fullWidth
                            id="outlined-name"
                            label="First name"
                            value={first}
                            onChange={this.handleChange('first')}
                            margin="normal"
                           
                            />
                        <TextField
                            error={lastErr}
                            className={classes.textField}
                            fullWidth
                            id="outlined-name"
                            label="last name"
                            value={last}
                            onChange={this.handleChange('last')}
                            margin="normal"
                            />
                    </div>        
                </DialogContent>
                <DialogActions>
                    <Button 
                        size="small"
                        variant="contained" 
                        color="secondary"
                        onClick={this.handleClose}>
                        Close
                    </Button>   
                    <Button 
                        size="small"
                        variant="contained" 
                        color="primary"
                        onClick={this.handleSubmit}>
                        Save
                    </Button>
                    
                </DialogActions>    
            </Dialog>
        )
    }
}

UserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(UserDetails);