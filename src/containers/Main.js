import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';


export default class Main extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" render={ props => <UserList {...this.props} {...props} /> } />
                    <Route path="/user/:id" render={ props => <UserDetails {...this.props} {...props} /> } />   
                </Switch>
            </div>
        )
    }
}