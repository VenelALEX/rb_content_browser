import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Base from './components/base/base.js'
import Login from './components/login/login.js'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Routes>
          <Route path="/rb_content_browser" element={<Login />} />
          <Route path="/rb_content_browser/home" element={<Base />} />
        </Routes>
      </div>
    );
  }
}

export default App;
