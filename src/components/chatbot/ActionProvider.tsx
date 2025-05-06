import { createChatBotMessage } from 'react-chatbot-kit';

interface ActionProviderProps {
  createChatBotMessage: typeof createChatBotMessage;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

class ActionProvider {
  createChatBotMessage: typeof createChatBotMessage;
  setState: React.Dispatch<React.SetStateAction<any>>;

  constructor({ createChatBotMessage, setState }: ActionProviderProps) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
  }

  addMessageToState = (message: any) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleBreedRecommendation = () => {
    const message = this.createChatBotMessage(
      "I can help you find the perfect breed! Let me ask you a few questions about your lifestyle. How active are you on a scale of 1-5?",
      { widget: "activityLevel" }
    );
    this.addMessageToState(message);
  };

  handleAdoptionInfo = () => {
    const message = this.createChatBotMessage(
      "That's great that you're considering adoption! Would you like me to help you find local shelters or learn more about the adoption process?",
      { widget: "adoptionOptions" }
    );
    this.addMessageToState(message);
  };

  handleTrainingInfo = () => {
    const message = this.createChatBotMessage(
      "Training is essential for a happy dog! Would you like specific tips for a breed?",
      { widget: "trainingOptions" }
    );
    this.addMessageToState(message);
  };

  handleHealthInfo = () => {
    const message = this.createChatBotMessage(
      "Health matters! Would you like advice on preventive care, diet, or specific symptoms?",
      { widget: "healthOptions" }
    );
    this.addMessageToState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I'm not sure I understand. Would you like help with breeds, adoption, training, or health?",
      { widget: "defaultOptions" }
    );
    this.addMessageToState(message);
  };
}

export default ActionProvider;
