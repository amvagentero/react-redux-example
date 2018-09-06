import React from 'react';
import { Router, Route, Link } from "react-router-dom";
//import {Nav, Navbar, NavItem} from "react-bootstrap";

const Header = () => {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>

        <hr />
      </div>
  );
};

export default Header;

/* old menu:
      <div>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={200} dots={10}/>}
      </div>
 */

/*
Current menu
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/courses">
          Courses
        </NavItem>
        <NavItem >
          <Link to="/about" activeClassName="active">About</Link>
        </NavItem>
      </Nav>
    </Navbar>
 */
