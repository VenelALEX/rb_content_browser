/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     register.js
*/

import './register.scss';
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import $ from "jquery"
import {withRouter} from "../withRouter/withRouter"

class Register extends React.Component {

  constructor(props){
    super(props);
    this.userLogin = this.registerUser.bind(this);
  }

  registerUser(){

    var email = $("#inp-username").val();
    var pwd = $("#inp-password").val();
    var pwdWH = $("#inp-password-wh").val();

    if(pwd === pwdWH){
      var authentification = getAuth();
      createUserWithEmailAndPassword(authentification, email, pwd).then((response) => {
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
        sessionStorage.setItem("Email", email)
        this.props.userAllowedTrueHandler();
        this.props.navigate("/rb_content_browser/content");
      }).catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
          $(".wb-notification-center").text("This e-mail address is already in use");
          $(".wb-notification-center").css("display", "block")
        }else{
          $(".wb-notification-center").text("An error occured while creating your account. Make sure to use a password with a length of at least 6 characters.");
          $(".wb-notification-center").css("display", "block")
        }
      })
    }else{
      $(".wb-notification-center").css("display", "block")
    }
    
  }

  render(){
    return (
      <div className="login-page">
        <div className="login-wrap">
          <div className="login-mask">
            <Container fluid="md">
              <Row>
                <Col>
                    <h1 className="wb-headline"> Register for your WingBrowser</h1>
                    <div className="login-input-fields">
                      <div className="login-input">
                        <Form.Label htmlFor="inp-username" className="wb-label">E-Mail address</Form.Label>
                        <Form.Control type="text" id="inp-username"/>
                      </div>
                      <div className="login-input">
                        <Form.Label htmlFor="inp-password" className="wb-label">Password</Form.Label>
                        <Form.Control type="password" id="inp-password"/>
                      </div>
                      <div className="login-input">
                        <Form.Label htmlFor="inp-password" className="wb-label">Repeat password</Form.Label>
                        <Form.Control type="password" id="inp-password-wh"/>
                      </div>
                    </div>

                    <div className="wb-notification-center">
                      The passwords do not match. Please verify two type in identical passwords.
                    </div>

                    <Button variant="primary" className="login-btn" onClick={() => this.registerUser()}>Login</Button>
                    <a href="/rb_content_browser/" className="forgot-pwd">Already have an Account? Sign in.</a>
                    
                  
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    </div>
    );
  }
}

export default withRouter(Register);
