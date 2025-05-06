import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Hide the splash screen after the app has loaded
window.addEventListener('load', () => {
  const splashScreen = document.querySelector('.ajax-loader') as HTMLElement;
  if (splashScreen) {
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 3000); // Adjust this delay (ms) as needed for your animation
  }
});

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
