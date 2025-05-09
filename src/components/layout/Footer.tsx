import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1: Pages */}
        <nav aria-label="Pages">
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><a href="https://k9kompare.com/" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="https://k9kompare.com/about" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a href="https://k9kompare.com/kompare" target="_blank" rel="noopener noreferrer">Kompare</a></li>
            <li><a href="https://k9kompare.com/facts" target="_blank" rel="noopener noreferrer">Fun Dog Facts</a></li>
            <li><a href="https://k9kompare.com/quiz" target="_blank" rel="noopener noreferrer">Quiz</a></li>
          </ul>
        </nav>

        {/* Column 2: Resources */}
        <nav aria-label="Resources">
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://www.akc.org/" target="_blank" rel="noopener noreferrer">American Kennel Club</a></li>
            <li><a href="https://www.aspca.org/" target="_blank" rel="noopener noreferrer">ASPCA</a></li>
            <li><a href="https://www.petfinder.com/" target="_blank" rel="noopener noreferrer">Petfinder</a></li>
            <li><a href="https://dogtime.com/" target="_blank" rel="noopener noreferrer">DogTime</a></li>
          </ul>
        </nav>

        {/* Column 3: For Trainers */}
        <nav aria-label="For Trainers">
          <h3 className="font-semibold mb-4">For Trainers</h3>
          <ul className="space-y-2">
            <li><a href="https://academyfordogtrainers.com/" target="_blank" rel="noopener noreferrer">The Academy for Dog Trainers</a></li>
            <li><a href="https://dogbizsuccess.com/" target="_blank" rel="noopener noreferrer">Dogbiz</a></li>
            <li><a href="https://www.dogmaacademy.com/" target="_blank" rel="noopener noreferrer">Dogma Academy</a></li>
            <li><a href="https://www.thedogtrainerscrucible.ca/" target="_blank" rel="noopener noreferrer">The Dog Trainer’s Crucible</a></li>
            <li><a href="https://e-trainingfordogs.com/" target="_blank" rel="noopener noreferrer">E-Training for Dogs</a></li>
            <li><a href="https://www.puppyworks.com/" target="_blank" rel="noopener noreferrer">Puppy Works</a></li>
          </ul>
        </nav>
        </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 pt-6 pb-4 px-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img src="/favicon.svg" alt="K9Kompare logo" className="h-4" />
          <span>© K9Kompare.com | TLee Apps 2025</span>
        </div>

        <div className="flex space-x-4 text-lg">
          <a
            href="https://twitter.com/k9mpare"
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/k9mpare"
            className="text-gray-500 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
