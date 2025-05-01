import React, { useState } from 'react';

const breedData: { [key: string]: { image: string; info: string } } = {
  "German Shepherd": {
    image: "/images/breeds/german-shepherd.jpg",
    info: "German Shepherds are intelligent, loyal, and versatile working dogs."
  },
  "Labrador Retriever": {
    image: "/images/breeds/labrador-retriever.jpg",
    info: "Labradors are friendly, outgoing, and great with families."
  },
  "Bulldog": {
    image: "/images/breeds/bulldog.jpg",
    info: "Bulldogs are calm, courageous, and very affectionate with people."
  },
  "Cavalier King Charles Spaniel": {
    image: "/images/breeds/cavalier.jpg",
    info: "Cavaliers are affectionate, gentle, and great for families."
  },
  "Chihuahua": {
    image: "/images/breeds/chihuahua.jpg",
    info: "Chihuahuas are tiny but bold, and thrive in small spaces."
  },
  "Pug": {
    image: "/images/breeds/pug.jpg",
    info: "Pugs are playful, charming, and love to be around people."
  },
  "Border Collie": {
    image: "/images/breeds/border-collie.jpg",
    info: "Border Collies are extremely energetic and highly trainable."
  },
  "Australian Shepherd": {
    image: "/images/breeds/australian-shepherd.jpg",
    info: "Aussies are active, intelligent, and love to herd and work."
  },
  "Golden Retriever": {
    image: "/images/breeds/golden-retriever.jpg",
    info: "Golden Retrievers are loving, intelligent, and ideal family pets."
  },
  "Husky": {
    image: "/images/breeds/husky.jpg",
    info: "Huskies are energetic, free-spirited, and known for their stunning looks."
  },
  "Boxer": {
    image: "/images/breeds/boxer.jpg",
    info: "Boxers are playful, energetic, and loyal companions."
  },
  "Pit Bull": {
    image: "/images/breeds/pit-bull.jpg",
    info: "Pit Bulls are strong, loyal, and full of personality."
  },
  "Belgian Malinois": {
    image: "/images/breeds/belgian-malinois.jpg",
    info: "Malinois are intense working dogs, ideal for experienced owners."
  },
  "Shih Tzu": {
    image: "/images/breeds/shih-tzu.jpg",
    info: "Shih Tzus are charming lapdogs with a royal demeanor."
  },
  "Cocker Spaniel": {
    image: "/images/breeds/cocker-spaniel.jpg",
    info: "Cocker Spaniels are sweet-natured, affectionate, and enjoy companionship."
  },
  "Standard Poodle": {
    image: "/images/breeds/poodle.jpg",
    info: "Standard Poodles are intelligent, hypoallergenic, and versatile."
  },
  "Doberman": {
    image: "/images/breeds/doberman.jpg",
    info: "Dobermans are sleek, powerful, and loyal protectors."
  },
  "French Bulldog": {
    image: "/images/breeds/french-bulldog.jpg",
    info: "Frenchies are compact, sociable, and love lounging."
  },
  "Bichon Frise": {
    image: "/images/breeds/bichon-frise.jpg",
    info: "Bichons are fluffy, cheerful, and hypoallergenic companions."
  },
};

const questions = [
  // same questions as before...
];

const resultsMap: { [key: string]: string[] } = {
  // same mapping as before...
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
          <button
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
