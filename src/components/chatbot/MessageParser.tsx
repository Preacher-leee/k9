interface ActionProvider {
  handleBreedRecommendation: () => void;
  handleAdoptionInfo: () => void;
  handleTrainingInfo: () => void;
  handleHealthInfo: () => void;
  handleDefault: () => void;
  createChatBotMessage: (text: string) => any;
  addMessageToBotState: (message: any) => void;
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
    const lowerCase = message.toLowerCase().trim();

    if (lowerCase.includes('breed') || lowerCase.includes('recommend')) {
      this.actionProvider.handleBreedRecommendation();
    } else if (lowerCase.includes('adopt') || lowerCase.includes('rescue')) {
      this.actionProvider.handleAdoptionInfo();
    } else if (lowerCase.includes('train') || lowerCase.includes('training')) {
      this.actionProvider.handleTrainingInfo();
    } else if (lowerCase.includes('health') || lowerCase.includes('vet')) {
      this.actionProvider.handleHealthInfo();
    } else if (
      lowerCase.endsWith('?') ||
      /^(what|how|when|why|where|who)\b/.test(lowerCase)
    ) {
      const message = this.actionProvider.createChatBotMessage(
        "That's a great question! Let me find the best answer for you 🐾"
      );
      this.actionProvider.addMessageToBotState(message);
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
