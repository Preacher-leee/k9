import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './components/PawLoader.css';
import PawLoader from './components/PawLoader';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Kompare from './pages/Kompare';
import Facts from './pages/Facts';
import Newsletter from './pages/Newsletter';
import Quiz from './pages/Quiz';
import Success from './pages/checkout/Success';
import Cancel from './pages/checkout/Cancel';
import NotFound from './pages/NotFound';

// Components
import DoggoBot from './components/chatbot/DoggoBot';

// Context
import { DogProvider } from './context/DogContext';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

 useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto';
      const splash = document.getElementById('splash-screen');
      if (splash) splash.classList.add('hide');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  
   return (
    <DogProvider>
      <Layout>
         {/* PawLoader is shown until the loading is complete */}
        {loading && <PawLoader />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kompare" element={<Kompare />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="/checkout/cancel" element={<Cancel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <DoggoBot />
      </Layout>
    </DogProvider>
  );
}

export default App;
