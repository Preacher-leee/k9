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

  addMessageToBotState(message: any) {
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  handleBreedRecommendation() {
    const message = this.createChatBotMessage("Sure! Let's find the best breed for your lifestyle. 🐶");
    this.addMessageToBotState(message);
  }

  handleAdoptionInfo() {
    const message = this.createChatBotMessage("There are amazing dogs waiting to be adopted! Check local rescues or visit Petfinder.");
    this.addMessageToBotState(message);
  }

  handleTrainingInfo() {
    const message = this.createChatBotMessage("Training builds bonds! Look into positive reinforcement methods or check out our recommended trainers.");
    this.addMessageToBotState(message);
  }

  handleHealthInfo() {
    const message = this.createChatBotMessage("For health-related concerns, always consult a licensed veterinarian. 🩺");
    this.addMessageToBotState(message);
  }

  handleDefault() {
    const message = this.createChatBotMessage("I'm not sure I understand, but I'm learning every day! Try asking about breeds, adoption, or training.");
    this.addMessageToBotState(message);
  }
}

export default ActionProvider;
