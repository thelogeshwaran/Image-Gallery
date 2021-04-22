import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";
import { PirvacyProvider } from "./Context/PrivacyContext";



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <PirvacyProvider>
           <App/>
        </PirvacyProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

