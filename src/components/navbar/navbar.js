/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     navbar.js
*/

import './navbar.scss';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class MyNavbar extends React.Component {

  render(){
    return (
      <div className="navbar-wrap">
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="wb-nav">
          <Container>
            <Navbar.Brand href="/rb_content_browser/content" className="wb-headline">
              WingBrowser
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link className="wb-nav-link" href="/rb_content_browser/content">Content</Nav.Link>
                  <Nav.Link className="wb-nav-link" href="/rb_content_browser/ratings">Ratings</Nav.Link>
                  <Nav.Link className="wb-nav-link" href="/rb_content_browser/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
