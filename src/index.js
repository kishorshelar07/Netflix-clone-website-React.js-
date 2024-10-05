import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Carousel from './Carousel';
import Card from './Card';
import Qustions from './Qustions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <App />
     <Header/>
     <Body/>
     <Carousel/>
     <Card/>
     <Qustions/>
     <Footer/>

    </>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
