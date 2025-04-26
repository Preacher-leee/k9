import { X } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal = ({ isOpen, onClose }: SubscribeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6">Upgrade to Premium</h2>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Get access to all premium features for just $4.99/month
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-lg">Premium Features Include:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Genetic Health Risk Comparison
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Personality Match Test
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Bark-O-Meter with Sound Clips
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Video Clips of Breeds
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Maintenance Cost Calculator
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Growth Tracker Tool
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Save & Download Comparisons
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
              Local Rescue Lookup
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-full mb-4">
            Subscribe Now - $4.99/month
          </button>
          <p className="text-sm text-gray-500">
            Cancel anytime. 3-day free trial included.
          </p>
        </div>
      </div>
    </div>
  );
};