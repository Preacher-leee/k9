import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Kompare from './pages/Kompare';
import Facts from './pages/Facts';
import Newsletter from './pages/Newsletter';
import About from './pages/About';
import Success from './pages/checkout/Success';
import Cancel from './pages/checkout/Cancel';
import NotFound from './pages/NotFound';

// Components
import DoggoBot from './components/chatbot/DoggoBot';

// Context
import { DogProvider } from './context/DogContext';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const location = useLocation();

  return (
    <DogProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/kompare" element={<Kompare />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/about" element={<About />} />
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
