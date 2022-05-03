import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Base from './components/base/base.js'
import Footer from './components/footer/footer.js'
import Login from './components/login/login.js'
import Navbar from './components/navbar/navbar.js'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Base />} />
        </Routes>
      </div>
    );
  }
}

export default App;
