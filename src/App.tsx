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
import SplashScreen from './components/SplashScreen';

// Context
import { DogProvider } from './context/DogContext';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const location = useLocation();

  // Optional: hide splash after a max timeout in case onFinish fails
  useEffect(() => {
    const timeout = setTimeout(() => setIsSplashVisible(false), 6000); // Failsafe
    return () => clearTimeout(timeout);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen onFinish={() => setIsSplashVisible(false)} />;
  }

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
