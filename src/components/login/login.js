/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     login.js
*/

import './login.scss';
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends React.Component {

  constructor(props){
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }

  userLogin(){
    console.log("Test")
  }

  render(){
    return (
      <div className="login-page">
        <div className="login-wrap">
          <div className="login-mask">
            <Container fluid="md">
              <Row>
                <Col>
                    <h1>WingBrowser</h1>
                    <div className="login-input-fields">
                      <div className="login-input">
                        <Form.Label htmlFor="inp-username">Username</Form.Label>
                        <Form.Control type="text" id="inp-username"/>
                      </div>
                      <div className="login-input">
                        <Form.Label htmlFor="inp-password">Password</Form.Label>
                        <Form.Control type="password" id="inp-password"/>
                      </div>
                    </div>

                    <Button variant="primary" className="login-btn" onClick={() => this.userLogin()}>Login</Button>
                    <a href="/home" className="forgot-pwd">Forgot Password? Click here to reset.</a>
                    
                  
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    </div>
    );
  }
}

export default Login;
