import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav2 from './navbar.jsx';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';


ReactDOM.render(
  <Router> 
  <Nav2/>
  <App />

   <Footer
  columns={

    [
      {
        title:"Connect With Us",
        items:[
    {
      icon: (
        <img src="https://img.icons8.com/fluent/96/000000/facebook-new.png"/>
      ),
      title: 'Facebook',
      url:'https://facebook.com',
      
      
      openExternal: true,
    },

    {
      icon: (
        <img src="https://img.icons8.com/fluent/96/000000/instagram-new.png"/>
      ),
      title: 'Instagram',
      url: 'https://instagram.com',
      
      openExternal: true,
    },

    {
      icon: (
        <img src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
      ),
      title: 'Youtube',
      url: 'https://youtube.com',
      
      openExternal: true,
    },

   

    


  ]
  
      },

      {
        title:"Find Us",
        items:[
    {
      icon: (
        <img src="https://img.icons8.com/fluent/96/000000/facebook-new.png"/>
      ),
      title: 'Facebook',
      url:'https://facebook.com',
      
      
      openExternal: true,
    },

    {
      icon: (
        <img src="https://img.icons8.com/fluent/96/000000/instagram-new.png"/>
      ),
      title: 'Instagram',
      url: 'https://instagram.com',
      
      openExternal: true,
    },

    {
      icon: (
        <img src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
      ),
      title: 'Youtube',
      url: 'https://youtube.com',
      
      openExternal: true,
    },

   

    


  ]
  
      },

     

      
    ]
    
    
    
    
    
    
  }
  bottom="Made with ❤️"
  


  /> 



  </Router> 

 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
