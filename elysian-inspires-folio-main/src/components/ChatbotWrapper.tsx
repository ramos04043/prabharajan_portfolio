import { useLocation } from 'react-router-dom';
import Chatbot from './Chatbot';

const ChatbotWrapper = () => {
  const location = useLocation();
  
  // Don't show chatbot on contact page
  if (location.pathname === '/contact') {
    return null;
  }
  
  return <Chatbot />;
};

export default ChatbotWrapper;