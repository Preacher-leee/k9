import { createChatBotMessage } from 'react-chatbot-kit';

interface ActionProvider {
  handleBreedRecommendation: () => void;
  handleAdoptionInfo: () => void;
  handleTrainingInfo: () => void;
  handleHealthInfo: () => void;
  handleDefault: () => void;
}

interface MessageParserProps {
  actionProvider: ActionProvider;
  state: any;
}

class MessageParser {
  actionProvider: ActionProvider;
  state: any;

  constructor({ actionProvider, state }: MessageParserProps) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: string) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes('breed') || lowerCase.includes('recommend')) {
      this.actionProvider.handleBreedRecommendation();
    } else if (lowerCase.includes('adopt') || lowerCase.includes('rescue')) {
      this.actionProvider.handleAdoptionInfo();
    } else if (lowerCase.includes('train') || lowerCase.includes('training')) {
      this.actionProvider.handleTrainingInfo();
    } else if (lowerCase.includes('health') || lowerCase.includes('vet')) {
      this.actionProvider.handleHealthInfo();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
