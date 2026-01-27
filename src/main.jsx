/**
 * Main Entry Point
 *
 * This is the application entry point that:
 * - Renders the React app to the DOM
 * - Wraps the app in StrictMode for development warnings
 * - Wraps the app in BrowserRouter for client-side routing
 * - Imports global styles
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import logo from './assets/pictures/logo.png';

// Set favicon dynamically so it updates with HMR
const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = logo;
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
