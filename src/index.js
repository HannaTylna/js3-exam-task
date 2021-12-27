import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
   * {
      margin: 0 auto;
      padding: 0;
      box-sizing: border-box;
      background: #FFEFD5;
      font-family: "Times New Roman", Times, serif;
   }
`

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Global/>
         <App />
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
