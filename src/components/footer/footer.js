/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     footer.js
*/

import './footer.scss';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component {

  render(){
    return (
      <div className="footer">
                <Container>
                    <Row>
                        <Col lg="4" className="wb-footer-block">
                            <h4 className="wb-headline">Navigation</h4>
                            <a href="/rb_content_browser/content" className="wb-nav-link wb-footer-link">Content</a><br/>
                            <a href="/rb_content_browser/ratings" className="wb-nav-link wb-footer-link">Ratings</a><br/>
                            <a href="/rb_content_browser/profile" className="wb-nav-link wb-footer-link">Profile</a><br/>
                        </Col>
                        <Col lg="4" className="wb-footer-block">
                            <h4 className="wb-headline">Support</h4>
                            <a href="/rb_content_browser/gdpr" className="wb-nav-link wb-footer-link">GDPR</a>
                            <p className="wb-footer-text">Imprint | Maintainer </p>
                            <p className="wb-footer-text">Alexander Brenner </p>
                            <p className="wb-footer-text">5020 Salzburg</p>
                            <p className="wb-footer-text">a.reinhardbrenner@gmail.com</p>
                        </Col>
                        <Col lg="4" className="wb-footer-block">
                            <h4 className="wb-headline">Technologies</h4>
                            <a href="https://react-bootstrap.github.io/" className="wb-nav-link wb-footer-link">React Bootstrap</a><br/>
                            <a href="https://www.npmjs.com/package/react-player" className="wb-nav-link wb-footer-link">React Player</a><br/>
                            <a href="https://firebase.google.com/?gclid=Cj0KCQjw1N2TBhCOARIsAGVHQc708Hn1wXMsayb9Pm1EhZSmSmJVApctN3AprLUWRJEqnLeuvEpfBDcaAnoMEALw_wcB&gclsrc=aw.ds" className="wb-nav-link wb-footer-link">Firebase</a><br/>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
  }
}

export default Footer;
