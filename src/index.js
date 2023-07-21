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
import TrustedBy from './components/TrustedBy';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
    path : 'trustedby',
    element : <TrustedBy/>
  }
]);

const firebaseConfig = {
  apiKey: "AIzaSyAevoliKX3OiXq4fPNovZhkNmgMDrkF-iU",
  authDomain: "patnala1-8482d.firebaseapp.com",
  databaseURL: "https://patnala1-8482d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "patnala1-8482d",
  storageBucket: "patnala1-8482d.appspot.com",
  messagingSenderId: "870911648161",
  appId: "1:870911648161:web:9f35de5f485e240fadebe0",
  measurementId: "G-EQDVCJZCF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
