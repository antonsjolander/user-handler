import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

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
    constructor(props) {
        super(props);
    }

    state = { 
        first: "",
        last: "",
        picture: ""
    }

    
    componentDidMount() {
        const users = this.props.users.users
        console.log('its here', users);
        const person = users.find((item) => {
            return item.id == this.props.match.params.id;
        })
        if(person){
            sessionStorage.setItem('first', person.name.first)
            sessionStorage.setItem('last', person.name.last)
            sessionStorage.setItem('picture', person.picture)
            this.setState({
                first: person.name.first,
                last: person.name.last,
                picture: person.picture
            })
        }
        else{
            this.setState({
                first: sessionStorage.getItem("first"),
                last: sessionStorage.getItem("last"),
                picture: sessionStorage.getItem("picture")
            })
        }
    }
    
    handleChange = val => event => {
        this.setState({
        [val]: event.target.value,
        });
    };
    


    render() {
        console.log('this is the props', this.props)
        const { first, last, picture } = this.state;
        return (
            <Grid style={styles.container} 
                container 
                direction="column" 
                justify="space-evenly"
                spacing={24}
                >
                {picture && (
                <Grid item style={styles.col} xs={12}>
                    <div style={styles.imgCont}>
                        <img 
                            src={picture}
                            ref={img => this.img = img}
                            onError={() => this.img.src = 'https://image.flaticon.com/icons/svg/21/21104.svg'}    
                        />
                    </div>
                    <TextField
                        style={styles.textField}
                        fullWidth
                        id="outlined-name"
                        label="Image url"
                        value={this.state.picture}
                        onChange={this.handleChange('picture')}
                        margin="normal"
                        variant="outlined"
                    />
                   
                </Grid>
                )}
                {first && (
                <Grid item style={styles.col} xs={12}>
                
                <TextField
                    style={styles.textField}    
                    fullWidth
                    id="outlined-name"
                    label="First name"
                    value={this.state.first}
                    onChange={this.handleChange('first')}
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    style={styles.textField}
                    fullWidth
                    id="outlined-name"
                    label="last name"
                    value={this.state.last}
                    onChange={this.handleChange('last')}
                    margin="normal"
                    variant="outlined"
                    />    
                    </Grid>
                )}
            </Grid>
        )
    }
}

export default UserDetails;