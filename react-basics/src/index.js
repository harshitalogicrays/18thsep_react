import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router';
import Routing from './Routing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routing/>
   </BrowserRouter>
);


// url path - / means base url (http://localhost:4000)