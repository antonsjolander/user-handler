import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Sidebar from '../components/Sidebar';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
import { withRouter } from 'react-router-dom';

class App extends Component {

  state = { users: [] }

  componentDidMount() {
    const { dispatch, users } = this.props
    dispatch.users.getUsers();
    
  }

  render() {
    const { users } = this.props.users;
    console.log(users)
    return (
      <div className="App">
        <Sidebar/>
        <Main {...this.props}/>
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
