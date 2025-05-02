import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const breedData: { [key: string]: { image: string; info: string; profile: string } } = {
  "German Shepherd": {
    image: "/images/breeds/german-shepherd.jpg",
    info: "German Shepherds are intelligent, loyal, and versatile working dogs.",
    profile: "German Shepherds excel in service roles due to their trainability and loyalty. They're great for active owners who want a smart companion."
  },
  "Labrador Retriever": {
    image: "/images/breeds/labrador-retriever.jpg",
    info: "Labradors are friendly, outgoing, and great with families.",
    profile: "Labradors love people, water, and exercise. They're perfect for active families and first-time dog owners."
  },
  "Golden Retriever": {
    image: "/images/breeds/golden-retriever.jpg",
    info: "Golden Retrievers are friendly, intelligent, and eager to please.",
    profile: "Goldens are beloved for their sweet nature and patience. They make excellent family dogs and therapy animals."
  },
  "French Bulldog": {
    image: "/images/breeds/french-bulldog.jpg",
    info: "French Bulldogs are compact, playful, and low-energy.",
    profile: "Ideal for apartment living, Frenchies are affectionate and adapt well to quiet or busy households."
  },
  "Bulldog": {
    image: "/images/breeds/bulldog.jpg",
    info: "Bulldogs are calm, courageous, and affectionate.",
    profile: "A great companion for city living, Bulldogs require minimal exercise and love snuggles."
  },
  "Beagle": {
    image: "/images/breeds/beagle.jpg",
    info: "Beagles are curious, energetic, and great with kids.",
    profile: "Their strong nose and playful attitude make Beagles great for families and outdoor lovers."
  },
  "Poodle": {
    image: "/images/breeds/poodle.jpg",
    info: "Poodles are smart, proud, and hypoallergenic.",
    profile: "Poodles come in all sizes and love mental challenges. Great for allergy-sensitive homes."
  },
  "Rottweiler": {
    image: "/images/breeds/rottweiler.jpg",
    info: "Rottweilers are confident, protective, and loyal.",
    profile: "Rottweilers are natural guardians. Best for experienced owners who want a strong, intelligent dog."
  },
  "Yorkshire Terrier": {
    image: "/images/breeds/yorkshire-terrier.jpg",
    info: "Yorkies are small, bold, and full of personality.",
    profile: "Don’t let the size fool you—Yorkies are fearless and thrive in both city and country life."
  },
  "Dachshund": {
    image: "/images/breeds/dachshund.jpg",
    info: "Dachshunds are curious, brave, and stubborn.",
    profile: "These little hunters are loyal and lively, great for small spaces and strong personalities."
  },
};

<button
  onClick={() => document.body.classList.toggle('high-contrast')}
  aria-label="Toggle High Contrast Mode"
  className="mt-4 text-sm underline text-blue-600"
>
  Toggle High Contrast
</button>

const questions = [
  {
    question: "What is your living situation?",
    options: ["Apartment", "House with yard", "Farm or large land"]
  },
  {
    question: "How active are you on a daily basis?",
    options: ["Low", "Moderate", "Very Active"]
  },
  {
    question: "What size dog are you looking for?",
    options: ["Small", "Medium", "Large"]
  },
  {
    question: "Do you have children?",
    options: ["Yes", "No"]
  },
  {
    question: "Any allergy concerns?",
    options: ["Yes", "No"]
  },
  {
    question: "What's more important: obedience or independence?",
    options: ["Obedience", "Independence"]
  },
  {
    question: "How much grooming are you okay with?",
    options: ["Low", "Moderate", "High"]
  },
  {
    question: "Do you need a guard dog?",
    options: ["Yes", "No"]
  }
];

const resultsMap: { [key: string]: string[] } = {
  "Apartment,Low,Small,Yes,Yes,Obedience,Low,No": ["French Bulldog"],
  "House with yard,Moderate,Large,Yes,No,Obedience,Moderate,Yes": ["German Shepherd"],
  "House with yard,Very Active,Large,Yes,No,Obedience,High,No": ["Labrador Retriever"],
  "House with yard,Moderate,Medium,Yes,No,Obedience,High,No": ["Golden Retriever"],
  "Apartment,Low,Medium,Yes,Yes,Obedience,Moderate,No": ["Bulldog"],
  "Apartment,Moderate,Small,Yes,Yes,Obedience,High,No": ["Yorkshire Terrier"],
  "Apartment,Low,Small,No,Yes,Independence,Low,No": ["Dachshund"],
  "House with yard,Moderate,Medium,Yes,No,Obedience,High,Yes": ["Rottweiler"],
  "House with yard,Moderate,Medium,Yes,Yes,Obedience,High,No": ["Poodle"],
  "Farm or large land,Very Active,Medium,Yes,No,Independence,Low,No": ["Beagle"]
};

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [result, setResult] = useState<string[] | null>(null);

  const handleOptionClick = (option: string) => {
    const newAnswers = [...answers, option];
    if (current + 1 === questions.length) {
      const key = newAnswers.join(',');
      const match = resultsMap[key] || ["Mixed Breed", "Check shelters near you!"];
      setResult(match);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    }
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrent(0);
    setResult(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find Your Ideal Dog Breed</h1>
      {!result ? (
        <div>
          <p className="text-lg mb-2">{questions[current].question}</p>
          <ul className="space-y-2">
            {questions[current].options.map((option) => (
              <li key={option}>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Recommended Breeds:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {result.map((breed) => (
              <div
                key={breed}
                className="bg-white shadow rounded-xl p-4 flex flex-col items-center"
              >
                <img
                  src={breedData[breed]?.image || '/images/breeds/default.jpg'}
                  alt={breed}
                  className="w-40 h-40 object-cover rounded-full mb-3"
                />
                <h3 className="text-lg font-bold mb-1">{breed}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {breedData[breed]?.info || 'No information available.'}
                </p>
              </div>
            ))}
          </div>
          <button aria-label="restart quiz"
            className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-xl"
            onClick={restartQuiz}
          >
            Take Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
