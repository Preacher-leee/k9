import { Link } from 'react-router-dom';
import { Twitter, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div>
            <Logo className="h-12 w-auto mb-4" isWhite />
            <p className="text-sm text-gray-600 mb-4">
              Compare a breed. Rescue a friend.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.x.com/k9mpare" className="text-gray-600 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/k9mpare" className="text-gray-600 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/kompare" className="text-gray-300 hover:text-white transition-colors">Compare Dog Breeds</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/facts" className="text-gray-300 hover:text-white transition-colors">Fun Dog Facts</Link></li>
              <li><Link to="/quiz" className="text-gray-300 hover:text-white transition-colors">Quiz</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>
        
        <section>
  <h2>Resources</h2>
  <ul>
    <li><a href="https://www.akc.org/" target="_blank" rel="noopener noreferrer">American Kennel Club</a></li>
    <li><a href="https://www.aspca.org/" target="_blank" rel="noopener noreferrer">ASPCA</a></li>
    <li><a href="https://www.petfinder.com/" target="_blank" rel="noopener noreferrer">Petfinder</a></li>
    <li><a href="https://dogtime.com/" target="_blank" rel="noopener noreferrer">DogTime</a></li>
  </ul>
</section>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe to our weekly newsletter.</p>
            <Link to="/newsletter" className="btn btn-secondary inline-block">Subscribe Now!</Link>
          </div>
        </div>
        
          import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        {/* Left: Logo and Copyright */}
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <img src="/path/to/fiverr-logo.svg" alt="K9Kompare" className="h-5" />
          <span>© K9 Kompare Ltd. 2025</span>
        </div>

        {/* Middle: Policy Links */}
        <div className="flex space-x-4 text-sm text-green-600">
          <a href="https://www.termsfeed.com/live/f7885e6c-d04a-4f66-b6e6-bfd4b5530cec" className="hover:underline">Privacy Policy</a>
          <span className="text-gray-300">|</span>
          <a href="https://www.termsfeed.com/live/68a4f8b0-9e4c-478c-87f4-ef5e919b45df" className="hover:underline">Cookie Policy</a>
          <span className="text-gray-300">|</span>
          <a href="https://www.termsfeed.com/live/f7854bbc-cb72-41dd-b2f3-263b1dd613e5" className="hover:underline">Terms of Service</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-gray-500">
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

        </div>
     </footer>
  );
};

export default Footer;
