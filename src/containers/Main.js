import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';



export default class Main extends Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        if (
          nextProps.history.action !== "POP" &&
          (!location.state || !location.state.modal)
        ) {
          this.previousLocation = this.props.location;
        }
      }

    render() {
        let { location } = this.props;
        let isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
          );
        return (
            <div className="container">
                <Switch location={isModal ? this.previousLocation : location} >
                    <Route exact path="/" render={ props => <UserList {...this.props} {...props} /> } />
                    <Route path="/user/:id" render={ props => <UserDetails {...this.props} {...props} /> } />   
                </Switch>
                {isModal ? <Route path="/user/:id" render={ props => <UserDetails {...this.props} {...props} /> } /> : null}
            </div>
        )
    }
}