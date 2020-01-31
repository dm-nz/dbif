import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DBIF
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-md-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/books/page/1">Books</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/characters/page/1">Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/houses/page/1">Houses</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;