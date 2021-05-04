import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/common/header/Header.js'
import './logo.svg'
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <div>
    <Header/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
