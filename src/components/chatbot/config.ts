import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const botName = "DoggoBot";

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(`Woof! I'm ${botName}, your doggy companion 🐾. Ask me anything about breeds, training, health, or adoption!`)
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4F46E5"
    },
    chatButton: {
      backgroundColor: "#4F46E5"
    }
  },
  state: {},
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
