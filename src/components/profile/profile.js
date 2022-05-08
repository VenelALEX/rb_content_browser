/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     profile.js
*/

import './profile.scss';
import React from 'react';
import {withRouter} from "../withRouter/withRouter"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.userLogout = this.userLogout.bind(this);
    this.state = {email: ""}
  }

  componentDidMount(){
    var email_s = sessionStorage.getItem("Email")
    this.setState({email: email_s})
  }

  userLogout(){
    sessionStorage.removeItem('Auth Token');
    this.props.navigate('/rb_content_browser/')
  }

  render(){
    return (
      <div className="profile-wrap">
        <Container>
          <Row>
            <Col>
              <div className="profile-mask-wrap">
                  <h1 className="wb-headline">Your profile</h1>
                  <div className="login-input">
                    <Form.Label htmlFor="inp-username" className="wb-label">E-Mail address</Form.Label>
                    <Form.Control type="text" id="inp-username" placeholder={this.state.email} disabled/>
                  </div>
                  <Button variant="primary" className="login-btn" onClick={() => this.userLogout()}>Logout</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Profile);
