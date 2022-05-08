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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import $ from "jquery"
import {withRouter} from "../withRouter/withRouter"

class Login extends React.Component {

  constructor(props){
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }

  userLogin(){

    var email = $("#inp-username").val();
    var pwd = $("#inp-password").val();

    var authentification = getAuth();
    signInWithEmailAndPassword(authentification, email, pwd).then((response) => {
      sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
      sessionStorage.setItem("Email", email)
      this.props.navigate("/rb_content_browser/content");
    }).catch((error) => {
      if(error.code === 'auth/wrong-password'){
        $(".wb-notification-center").text("Check your password.");
        $(".wb-notification-center").css("display", "block")
      }if(error.code === "auth/user-not-found"){
        $(".wb-notification-center").text("Check your e-mail address.");
        $(".wb-notification-center").css("display", "block")
      }else{
        $(".wb-notification-center").text("An error occured while signing you in.");
        $(".wb-notification-center").css("display", "block")
      }
    })
  }


  render(){
    return (
      <div className="login-page">
        <div className="login-wrap">
          <div className="login-mask">
            <Container fluid="md">
              <Row>
                <Col>
                    <h1 className="wb-headline">WingBrowser</h1>
                    <div className="login-input-fields">
                      <div className="login-input">
                        <Form.Label htmlFor="inp-username" className="wb-label">E-Mail address</Form.Label>
                        <Form.Control type="text" id="inp-username"/>
                      </div>
                      <div className="login-input">
                        <Form.Label htmlFor="inp-password" className="wb-label">Password</Form.Label>
                        <Form.Control type="password" id="inp-password"/>
                      </div>
                    </div>

                    <div className="wb-notification-center">
                      The passwords do not match. Please verify two type in identical passwords.
                    </div>

                    <Button variant="primary" className="login-btn" onClick={() => this.userLogin()}>Login</Button>
                    <a href="/rb_content_browser/register" className="forgot-pwd">New to WingBrowser? Register now.</a>
                    
                  
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    </div>
    );
  }
}

export default withRouter(Login);
