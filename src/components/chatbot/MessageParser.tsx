
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    // Question detection (rudimentary check)
    const isQuestion = /[?]|^(what|how|why|when|where|who)\b/i.test(message);

    if (lowerCase.includes('breed') || lowerCase.includes('recommend')) {
      this.actionProvider.handleBreedRecommendation();
    } else if (lowerCase.includes('adopt') || lowerCase.includes('rescue')) {
      this.actionProvider.handleAdoptionInfo();
    } else if (lowerCase.includes('train') || lowerCase.includes('training')) {
      this.actionProvider.handleTrainingInfo();
    } else if (lowerCase.includes('health') || lowerCase.includes('vet')) {
      this.actionProvider.handleHealthInfo();
    } else if (isQuestion) {
      this.actionProvider.handleDefault(); // fallback for other questions
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
