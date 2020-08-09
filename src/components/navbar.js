import { NavLink } from 'react-router-dom';
import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Nav = (props) => {
    return (
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
    );
  };

  export default Nav;
