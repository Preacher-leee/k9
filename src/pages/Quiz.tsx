import React, { useState } from 'react';

const questions = [
  {
    question: "How active are you?",
    options: ["Very Active", "Moderately Active", "Not Active"],
  },
  {
    question: "How much space do you have?",
    options: ["Large house with yard", "Apartment or small house", "Farm or open land"],
  },
  {
    question: "What’s your experience with dogs?",
    options: ["First time owner", "Had a few dogs", "Lifelong dog owner"],
  },
  {
    question: "Do you have kids or other pets?",
    options: ["Yes, both", "Only kids", "Only pets", "Neither"],
  },
  {
    question: "How much grooming are you okay with?",
    options: ["Low maintenance", "Moderate grooming", "High maintenance is fine"],
  },
  {
    question: "Do you prefer a dog that is more protective or social?",
    options: ["Protective", "Social", "Balanced"],
  },
  {
    question: "How important is intelligence and trainability to you?",
    options: ["Very important", "Somewhat important", "Not important"],
  },
  {
    question: "Do you plan to travel frequently with your dog?",
    options: ["Yes, often", "Sometimes", "Rarely or never"],
  },
  {
    question: "What kind of climate do you live in?",
    options: ["Cold", "Hot", "Mixed/Temperate"],
  },
  {
    question: "Would you like your dog to be hypoallergenic?",
    options: ["Yes", "No", "Doesn't matter"],
  },
];

const resultsMap: { [key: string]: string[] } = {
  "Very Active,Large house with yard,Lifelong dog owner,Only pets,Moderate grooming,Protective,Very important,Yes, often,Cold,No": ["German Shepherd", "Labrador Retriever"],
  "Moderately Active,Apartment or small house,First time owner,Yes, both,Low maintenance,Social,Somewhat important,Rarely or never,Mixed/Temperate,Yes": ["Bulldog", "Cavalier King Charles Spaniel"],
  "Not Active,Apartment or small house,First time owner,Neither,Low maintenance,Balanced,Not important,Rarely or never,Hot,Yes": ["Chihuahua", "Pug"],
  "Very Active,Farm or open land,Lifelong dog owner,Neither,High maintenance is fine,Protective,Very important,Sometimes,Cold,No": ["Border Collie", "Australian Shepherd"],
  "Very Active,Large house with yard,Had a few dogs,Yes, both,High maintenance is fine,Social,Very important,Yes, often,Mixed/Temperate,No": ["Golden Retriever", "Husky"],
  "Moderately Active,Large house with yard,Lifelong dog owner,Only kids,Moderate grooming,Balanced,Somewhat important,Sometimes,Mixed/Temperate,Doesn't matter": ["Boxer", "Pit Bull"],
  "Very Active,Farm or open land,Lifelong dog owner,Yes, both,Moderate grooming,Protective,Very important,Yes, often,Cold,No": ["Belgian Malinois", "German Shepherd"],
  "Not Active,Apartment or small house,Had a few dogs,Only pets,Low maintenance,Balanced,Somewhat important,Rarely or never,Hot,Yes": ["Shih Tzu", "Cocker Spaniel"],
  "Moderately Active,Large house with yard,Had a few dogs,Neither,High maintenance is fine,Protective,Very important,Rarely or never,Mixed/Temperate,No": ["Standard Poodle", "Doberman"],
  "Not Active,Apartment or small house,First time owner,Only pets,Moderate grooming,Social,Somewhat important,Rarely or never,Mixed/Temperate,Yes": ["French Bulldog", "Bichon Frise"],
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
    <div className="p-6 max-w-xl mx-auto">
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
          <h2 className="text-xl font-semibold mb-2">Your Recommended Breeds:</h2>
          <ul className="list-disc list-inside mb-4">
            {result.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
          <button
            className="bg-gray-800 text-white py-2 px-4 rounded-xl"
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
