import React, { Component } from 'react';
import AppBarHeader from '../components/AppBarHeader';
import { connect } from 'react-redux';
import Main from './Main';
import { withRouter } from 'react-router-dom';
import '../App.css';

class App extends Component {

  state = { users: [] , open: false}

  componentDidMount() {
    const { dispatch } = this.props
    dispatch.users.getUsers();
  }

  OpenModael() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div className="App">
        <AppBarHeader title="Users"/>
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
