import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { filterPost } from '../actions/index';

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

  render() {
    return (
      <div>
          <div id="filter">
            <input id="taginput" onChange={this.onInputChange} value={this.state.filter} placeholder="search for a post!" />
            <button className="tagbtn" type="button" onClick={this.handleBtnClick}>SEARCH</button>
          </div>
        <div>
          <nav>
            <div id="navstuff">
              <ul>
                <NavLink exact to="/"><Fab id="all" color="primary" aria-label="add">
                  <LibraryBooksIcon />
                                      </Fab>
                </NavLink>

                <NavLink to="/posts/new">
                  <Fab color="secondary" id="newbut" aria-label="add">
                    <AddIcon />
                  </Fab>
                </NavLink>

              </ul>
            </div>
          </nav>
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

export default connect(null, { filterPost })(FilterBar);
