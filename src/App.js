import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Base from './components/base/base.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import MyNavbar from './components/navbar/navbar.js';
import MyFooter from './components/footer/footer.js';
import Ratings from './components/ratings/ratings.js';
import Profile from './components/profile/profile.js';
import GDPR from './components/gdpr/gdpr.js';
import ProtectedRoute from './components/protectedRoute/protectedRoute.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {userAllowed: true}
    this.userAllowedFalseHandler = this.userAllowedFalseHandler.bind(this)
    this.userAllowedTrueHandler = this.userAllowedTrueHandler.bind(this)
  }

  componentDidMount(){
    this.setToken();
  }

  setToken(){
    var token = sessionStorage.getItem("Auth Token")
    if(token){
      this.userAllowedTrueHandler();
    }else{
      this.userAllowedFalseHandler();
    }
  }

  userAllowedTrueHandler(){
    this.setState({userAllowed: true});
  }

  userAllowedFalseHandler(){
    this.setState({userAllowed: false});
  }

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/rb_content_browser/register" element={<Register userAllowedTrueHandler={this.userAllowedTrueHandler}/>} />
          <Route path="/rb_content_browser" element={<Login userAllowedTrueHandler={this.userAllowedTrueHandler}/>} />
          <Route element={<ProtectedRoute isAllowed={this.state.userAllowed} />}>
            <Route path="/rb_content_browser/content" element={<><MyNavbar/><Base/><MyFooter/></>} />
            <Route path="/rb_content_browser/ratings" element={<><MyNavbar/><Ratings/><MyFooter/></>} />
            <Route path="/rb_content_browser/profile" element={<><MyNavbar/><Profile userAllowedFalseHandler={this.userAllowedFalseHandler}/><MyFooter/></>} />
            <Route path="/rb_content_browser/gdpr" element={<><MyNavbar/><GDPR/><MyFooter/></>} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
