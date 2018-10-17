import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AppBarHeader from '../components/AppBarHeader';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
import { withRouter } from 'react-router-dom';

class App extends Component {

  state = { users: [] , open: false}

  componentDidMount() {
    const { dispatch, users } = this.props
    dispatch.users.getUsers();
    
  }

  OpenModael() {
    this.setState({ open: true });
  }

  render() {
    const { users } = this.props.users;
    console.log("is this rerendered?", users)
    return (
      <div className="App">
        <AppBarHeader title="User handler"/>
        <div className="container">
          <Main {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => {
  return {
    users
  }
}

export default withRouter(connect(mapStateToProps)(App));
