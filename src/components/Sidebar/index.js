import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = (props) => {
    console.log(props.picture)
    return (
        <div className="sidebar">
          <ul>
              <li>
                  <Link to="/"><Icon>account_box</Icon></Link>
              </li>
          </ul>
        </div>
    )
}

export default Sidebar;
