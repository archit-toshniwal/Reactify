import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';


ReactDOM.render(
    <>
    <ToastContainer/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </>
  ,
  document.getElementById('root')
);
