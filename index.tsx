import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/assets/fonts/Bronzier-Medium.ttf';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Preloader from "./Preloader";
import responsiveModule from "./responsiveModule";
import Watermark from './Watermark';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Watermark />
    <Preloader />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//
responsiveModule();
//
