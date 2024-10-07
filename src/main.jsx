import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/class.css';
import './assets/css/styles.css';
import '@clayui/css/lib/css/atlas.css';
import './main.scss';
import { App } from './pages/app';
import { AppTest } from './pages/teste';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <AppTest /> */}
  </React.StrictMode>
);
