import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

window.addEventListener('load', () => {
  const splashScreen = document.querySelector('.ajax-loader');
  setTimeout(() => {
    splashScreen.style.display = 'none'; // Hide splash screen
  }, 3000); // Adjust time as needed
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
