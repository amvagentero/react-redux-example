import React from 'react';
import {IndexLink, Link} from "react-router";
import {Nav, Navbar, NavItem} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
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
