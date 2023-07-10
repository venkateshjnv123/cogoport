import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NavbarMain from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/MainPage';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import TrustedBy from './components/TrustedBy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path :'home',
    element : <Homepage/>
  },
  {
    path:'howitworks',
    element : <HowItWorks/>
  },
  {
    path : 'industries',
    element : <Industries/>
  },
  {
    path : 'trustedby',
    element : <TrustedBy/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
