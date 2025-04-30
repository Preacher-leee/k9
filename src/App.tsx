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

// Context
import { DogProvider } from './context/DogContext';

const GA_MEASUREMENT_ID = 'G-J41HGFEHNQ';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Inject Google Analytics script
  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(inlineScript);
    }
  }, []);

  // Track route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DogProvider>
      {isLoading ? (
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-lg font-medium text-primary-600">Loading K9Kompare...</p>
          </div>
        </div>
      ) : (
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
        </Layout>
      )}
    </DogProvider>
  );
}

export default App;
