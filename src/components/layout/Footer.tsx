import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

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

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Trade Associations</h3>
          <ul className="space-y-2">
            <li>Association of Professional Dog Trainers <a href="https://apdt.com/">(APDT)</a></li>
            <li>Australian Association of Professional Dog Trainers <a href="https://aapdt.org/">(AAPDT)</a></li>
            <li>Canadian Association of Professional Pet Dog Trainers <a href="https://capdt.ca/">(CAPPDT)</a></li>
            <li>Certified Applied Animal Behaviorists <a href="#">(CAAB)</a></li>
            <li>International Association of Canine Training Professionals <a href="https://iacpdogs.org/">(IACP)</a></li>
            <li>National Association of Dog Obedience Instructors <a href="https://nadoi.org/">(NADOI)</a></li>
            <li>New Zealand Association of Professional Dog Trainers <a href="https://www.apdtnz.org.nz/">(NZAPDT)</a></li>
            <li>Pet Professionals Guild <a href="https://www.petprofessionalguild.com/">(PPG)</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 pt-6 pb-4 px-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img src="/public/favicon.svg" alt="K9Kompare" className="h-4" />
          <span>© K9Kompare.com | TLee Apps 2025</span>
        </div>

        <div className="flex space-x-4 text-lg">
          <div class="social-icons">
  <a href="https://www.x.com/k9mpare" class="social-link" aria-label="Twitter">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-twitter">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  </a>
  <a href="https://www.instagram.com/k9mpare" class="social-link" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-instagram">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  </a>
      </div>
    </footer>
  );
};

export default Footer;
