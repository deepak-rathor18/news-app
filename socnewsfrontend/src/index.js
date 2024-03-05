import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from './Context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
        <BrowserRouter>
           <AppContextProvider>
            <App />
            </AppContextProvider>
            <ToastContainer position="top-center" />
        </BrowserRouter>



);


