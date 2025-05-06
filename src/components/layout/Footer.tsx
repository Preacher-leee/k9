import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><a href="https://k9kompare.com/">Home</a></li>
            <li><a href="https://k9kompare.com/about">About</a></li>
            <li><a href="https://k9kompare.com/kompare">Kompare</a></li>
            <li><a href="https://k9kompare.com/facts">Fun Dog Facts</a></li>
            <li><a href="https://k9kompare.com/quiz">Quiz</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="https://www.akc.org/">American Kennel Club</a></li>
            <li><a href="https://www.aspca.org/">ASPCA</a></li>
            <li><a href="https://www.petfinder.com/">Petfinder</a></li>
            <li><a href="https://dogtime.com/">DogTime</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">For Trainers</h3>
          <ul className="space-y-2">
            <li><a href="https://academyfordogtrainers.com/">The Academy for Dog Trainers</a></li>
            <li><a href="https://dogbizsuccess.com/">Dogbiz</a></li>
            <li><a href="https://www.dogmaacademy.com/">Dogma Academy</a></li>
            <li><a href="https://www.thedogtrainerscrucible.ca/">The Dog Trainer’s Crucible</a></li>
            <li><a href="https://e-trainingfordogs.com/">E-Training for Dogs</a></li>
            <li><a href="https://www.puppyworks.com/">Puppy Works</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 pt-6 pb-4 px-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img src="/favicon.svg" alt="K9Kompare" className="h-4" />
          <span>© K9Kompare.com | TLee Apps 2025</span>
        </div>
          <a
            href="https://www.x.com/k9mpare"
            className="text-gray-300 hover:text-black transition-colors"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/k9mpare"
            className="text-gray-300 hover:text-pink-600 transition-colors"
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
