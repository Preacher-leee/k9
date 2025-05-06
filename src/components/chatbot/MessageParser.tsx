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
    const lower = message.toLowerCase();

    if (lower.includes('breed') || lower.includes('recommend')) {
      this.actionProvider.handleBreedRecommendation();
    } else if (lower.includes('adopt') || lower.includes('rescue')) {
      this.actionProvider.handleAdoptionInfo();
    } else if (lower.includes('train') || lower.includes('training')) {
      this.actionProvider.handleTrainingInfo();
    } else if (lower.includes('health') || lower.includes('vet')) {
      this.actionProvider.handleHealthInfo();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
