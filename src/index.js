import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from "aos";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/rb_content_browser/" >
    <App />
  </BrowserRouter>
);

AOS.init();

reportWebVitals();
