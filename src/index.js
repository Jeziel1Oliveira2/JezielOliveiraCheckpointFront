import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.scss";
import App from './components/App';
import LandingA from './components/LandingA';
import LandingB from './components/LandingB';
import LandingC from './components/LandingC';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <LandingA />
    <LandingB />
    <LandingC />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

