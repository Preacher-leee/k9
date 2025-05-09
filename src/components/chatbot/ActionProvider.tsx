class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleBreedRecommendation = () => {
    const message = this.createChatBotMessage(
      "I can help you find the perfect breed! How active are you on a scale of 1–5?",
      { widget: "activityLevel" }
    );
    this.addMessageToState(message);
  };

  handleAdoptionInfo = () => {
    const message = this.createChatBotMessage(
      "Thinking of adoption? I can help find local shelters or explain the process.",
      { widget: "adoptionOptions" }
    );
    this.addMessageToState(message);
  };

  handleTrainingInfo = () => {
    const message = this.createChatBotMessage(
      "Training helps dogs thrive! Want tips for obedience, crate, or breed-specific training?",
      { widget: "trainingOptions" }
    );
    this.addMessageToState(message);
  };

  handleHealthInfo = () => {
    const message = this.createChatBotMessage(
      "Health is key! Ask about vaccines, diet, vet care, or symptoms to watch.",
      { widget: "healthOptions" }
    );
    this.addMessageToState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "I didn't quite get that. You can ask about breeds, adoption, training, or health!",
      { widget: "defaultOptions" }
    );
    this.addMessageToState(message);
  };
}

export default ActionProvider;
