import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { filterPost, signoutUser } from '../actions/index';

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  handleBtnClick = () => {
    this.props.filterPost(this.state.filter);
  }

  signout = () => {
    this.props.signoutUser(this.props.history);
  }

  renderthis() {
    if (!this.props.authenticated) {
      return (
        <nav>
        <div id="navstuff">
          <ul>
            <NavLink exact to="/">
              <Fab id="all" color="primary" aria-label="add">
                <LibraryBooksIcon />
              </Fab>
            </NavLink>
            <button type="button"
              className="signinbutton"
              id="fill"
              onClick={this.signin}
            ><NavLink exact to="/signin">
                    Sign In
             </NavLink>
            </button>
            <button type="button"
              id="fill"
              className="signupbutton"
              onClick={this.signout}
            >
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </button>

          </ul>
        </div>
        </nav>
      );
    } else {
      return (
        <nav>
        <div id="navstuff">
          <ul>
            <NavLink exact to="/">
              <Fab id="all" color="primary" aria-label="add">
                <LibraryBooksIcon />
              </Fab>
            </NavLink>

            <NavLink to="/posts/new">
              <Fab color="secondary" id="newbut" aria-label="add">
                <AddIcon />
              </Fab>
            </NavLink>
            <li onClick={() => this.signout()} className="signout">
              <NavLink exact to="/">
                <Fab color="default" id="logout" aria-label="add">
                  <ExitToAppIcon />
                </Fab>
              </NavLink>
            </li>
          </ul>
        </div>
        </nav>
      );
    }
  }

  render() {
    return (
      <div>
          <div id="filter">
            <input id="taginput" onChange={this.onInputChange} value={this.state.filter} placeholder="search for a post!" />
            <button className="tagbtn" type="button" onClick={this.handleBtnClick}>SEARCH</button>
          </div>
        <div>
         {this.renderthis()}
          <div className="typewriter">
            <h1><blockquote>The coolest blog ever.</blockquote></h1>
          </div>
          <div className="bro">
            <p> — my 3yr old brother</p>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

export default connect(mapStateToProps, { filterPost, signoutUser })(FilterBar);
