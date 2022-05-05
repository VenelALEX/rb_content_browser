import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Base from './components/base/base.js';
import Login from './components/login/login.js';
import MyNavbar from './components/navbar/navbar.js';
import MyFooter from './components/footer/footer.js';
import Ratings from './components/ratings/ratings.js';
import Profile from './components/profile/profile';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/rb_content_browser" element={<Login />} />
          <Route path="/rb_content_browser/content" element={<><MyNavbar/><Base/><MyFooter/></>} />
          <Route path="/rb_content_browser/ratings" element={<><MyNavbar/><Ratings/><MyFooter/></>} />
          <Route path="/rb_content_browser/profile" element={<><MyNavbar/><Profile/><MyFooter/></>} />
        </Routes>
      </div>
    );
  }
}

export default App;
