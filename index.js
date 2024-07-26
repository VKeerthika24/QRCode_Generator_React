import React from 'react';
import ReactDOM from 'react-dom/client';
import UseEffect from './components/UseEffect';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Header from './components/Header';

import './components/Appprops.jsx';
//import Appprops from './components/Appprops.jsx';
import { UserCard } from './components/UserCard.jsx';
import { QrCode } from './components/QrCode.jsx';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/QrCode.css';
import { Cart } from 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/Cart.jsx';
import { UserDetails } from 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/UserDetails.jsx';
import Regform from './regform';
//import { ChildComponent } from './components/ChildComponent.jsx';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/UseEffect.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <QrCode/>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
