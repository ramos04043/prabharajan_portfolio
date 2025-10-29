import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle, User, Bot, RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserData {
  userType?: string;
  streamOrField?: string;
  interests?: string[];
  name?: string;
  email?: string;
  phone?: string;
  preferredDateTime?: string;
  mode?: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 I'm Eli, your Career Clarity Assistant.");
        setTimeout(() => {
          addBotMessage("I'm here to help you discover the perfect career path. Are you a student, parent, or working professional?");
          setShowOptions(true);
        }, 1000);
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string) => {
    setIsLoading(true);
    setTimeout(() => {
      addMessage(text, 'bot');
      setIsLoading(false);
    }, 800);
  };

  const handleOptionSelect = (option: string) => {
    addUserMessage(option);
    handleUserResponse(option);
  };

  const addUserMessage = (text: string) => {
    addMessage(text, 'user');
    setShowOptions(false);
  };

  const handleUserResponse = (response: string) => {
    // Save user response to userData
    switch (currentStep) {
      case 0: // User type
        setUserData(prev => ({ ...prev, userType: response }));
        setTimeout(() => {
          if (response === 'Student') {
            addBotMessage("Great! Which class are you in or what stream have you chosen?");
          } else if (response === 'Parent') {
            addBotMessage("Welcome! Which class is your child in or what stream are they considering?");
          } else {
            addBotMessage("Wonderful! What field are you currently working in?");
          }
          setCurrentStep(1);
          setShowOptions(false);
        }, 1000);
        break;
      
      case 1: // Stream/field
        setUserData(prev => ({ ...prev, streamOrField: response }));
        setTimeout(() => {
          addBotMessage("What are your interests? You can select multiple options:");
          setCurrentStep(2);
          setShowOptions(true);
        }, 1000);
        break;
      
      case 2: // Interests
        if (response === 'No more') {
          setUserData(prev => ({ ...prev }));
          setTimeout(() => {
            addBotMessage("Would you like to book a counselling session with us?");
            setCurrentStep(3);
            setShowOptions(true);
          }, 1000);
        } else {
          setUserData(prev => ({
            ...prev,
            interests: prev.interests ? [...prev.interests, response] : [response]
          }));
          
          // For interests, we'll allow multiple selections
          setTimeout(() => {
            addBotMessage(`Got it! Any other interests? (Select "No more" when finished)`);
            setShowOptions(true);
          }, 1000);
        }
        break;
      
      case 3: // Booking decision
        if (response.toLowerCase() === 'yes') {
          setTimeout(() => {
            addBotMessage("Great! Let's schedule your session. What's your full name?");
            setCurrentStep(4);
            setShowOptions(false);
          }, 1000);
        } else {
          setTimeout(() => {
            addBotMessage("No problem! You can always book a session later. Is there anything else I can help you with?");
            setCurrentStep(7); // FAQ stage
            setShowOptions(true);
          }, 1000);
        }
        break;
      
      case 4: // Name collection
        setUserData(prev => ({ ...prev, name: response }));
        setTimeout(() => {
          addBotMessage("Thanks! What's your email address?");
          setCurrentStep(5);
          setShowOptions(false);
        }, 1000);
        break;
      
      case 5: // Email collection
        setUserData(prev => ({ ...prev, email: response }));
        setTimeout(() => {
          addBotMessage("And your phone number?");
          setCurrentStep(6);
          setShowOptions(false);
        }, 1000);
        break;
      
      case 6: // Phone collection
        setUserData(prev => ({ ...prev, phone: response }));
        setTimeout(() => {
          addBotMessage("When would you prefer your session? (Date and time)");
          setCurrentStep(7);
          setShowOptions(false);
        }, 1000);
        break;
      
      case 7: // DateTime collection
        setUserData(prev => ({ ...prev, preferredDateTime: response }));
        setTimeout(() => {
          addBotMessage("Would you prefer online or in-person session?");
          setCurrentStep(8);
          setShowOptions(true);
        }, 1000);
        break;
      
      case 8: // Mode selection
        setUserData(prev => ({ ...prev, mode: response }));
        setTimeout(() => {
          // Submit form data
          submitFormData();
          addBotMessage("Thank you for providing your details! Our team will contact you shortly to confirm your session.");
          setTimeout(() => {
            addBotMessage("Here's a summary of your booking:\n" +
              `Name: ${userData.name || response}\n` +
              `Email: ${userData.email || 'Not provided'}\n` +
              `Phone: ${userData.phone || 'Not provided'}\n` +
              `Preferred Date/Time: ${userData.preferredDateTime || 'Not provided'}\n` +
              `Mode: ${response}`);
            setTimeout(() => {
              addBotMessage("Would you like to download our free career guide or ask any other questions?");
              setCurrentStep(9);
              setShowOptions(true);
            }, 1500);
          }, 1000);
        }, 1000);
        break;
      
      case 9: // Final options
        if (response.toLowerCase().includes('guide')) {
          setTimeout(() => {
            addBotMessage("You can download our free career guide here: [Download Guide](/career-guide.pdf)");
            setTimeout(() => {
              addBotMessage("Is there anything else I can assist you with today?");
              setShowOptions(true);
            }, 1000);
          }, 1000);
        } else if (response.toLowerCase().includes('question') || response.toLowerCase().includes('faq')) {
          setTimeout(() => {
            addBotMessage("Sure! You can ask me about our services, fees, session duration, or locations. What would you like to know?");
            setShowOptions(false);
          }, 1000);
        } else {
          setTimeout(() => {
            addBotMessage("Thank you for chatting with Eli! Remember, discovering your ideal career path is just a conversation away. Have a great day! 😊");
            setTimeout(() => {
              addBotMessage("Feel free to reopen this chat anytime if you have more questions!");
            }, 1500);
          }, 1000);
        }
        break;
      
      default:
        // Handle FAQ or general questions
        handleFAQ(response);
        break;
    }
  };

  const submitFormData = () => {
    // In a real implementation, this would send data to a webhook
    console.log('Form Data Submitted:', userData);
    // Example: fetch('/api/webhook', { method: 'POST', body: JSON.stringify(userData) });
  };

  const handleFAQ = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    let response = "";
    
    if (lowerQuestion.includes('fee') || lowerQuestion.includes('cost') || lowerQuestion.includes('price')) {
      response = "Our career counseling sessions start at ₹1,500. Multiple Intelligence Analysis & Psychometric Assessments are priced at ₹3,000. We also offer package deals for multiple sessions.";
    } else if (lowerQuestion.includes('duration') || lowerQuestion.includes('long')) {
      response = "Individual counseling sessions are 60 minutes. Multiple Intelligence Analysis & Psychometric assessments take approximately 90 minutes to complete.";
    } else if (lowerQuestion.includes('online') || lowerQuestion.includes('offline') || lowerQuestion.includes('mode')) {
      response = "We offer both online sessions via video call and in-person sessions at our Chennai office.";
    } else if (lowerQuestion.includes('location') || lowerQuestion.includes('address')) {
      response = "Our office is located in Chennai, India. Online sessions are available for clients worldwide.";
    } else if (lowerQuestion.includes('service')) {
      response = "We offer Career Counseling, Multiple Intelligence Analysis (Dermatoglyphics Multiple Intelligence Test), Psychometric Assessments, and Resume Building services.";
    } else {
      response = "I can help you with questions about our services, pricing, session duration, and locations. Could you please be more specific?";
    }
    
    setTimeout(() => {
      addBotMessage(response);
      setTimeout(() => {
        addBotMessage("Is there anything else you'd like to know?");
        setShowOptions(true);
      }, 1000);
    }, 1000);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      handleUserResponse(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getOptionsForStep = () => {
    switch (currentStep) {
      case 0: // User type
        return ['Student', 'Parent', 'Working Professional'];
      case 1: // Stream/field (freeform)
        return [];
      case 2: // Interests
        return ['Technology', 'Business', 'Science', 'Arts', 'Healthcare', 'Education', 'No more'];
      case 3: // Booking decision
        return ['Yes', 'No'];
      case 4: // Name (freeform)
        return [];
      case 5: // Email (freeform)
        return [];
      case 6: // Phone (freeform)
        return [];
      case 7: // DateTime (freeform)
        return [];
      case 8: // Mode
        return ['Online', 'In-person'];
      case 9: // Final options
        return ['Download Career Guide', 'Ask another question', 'No, thanks'];
      default:
        return [];
    }
  };

  const resetChat = () => {
    setMessages([]);
    setUserData({});
    setCurrentStep(0);
    setShowOptions(true);
    setTimeout(() => {
      addBotMessage("Hello again! 👋 I'm Eli, your Career Clarity Assistant. How can I help you today?");
    }, 500);
  };

  return (
    <>
      {/* Floating button - always visible */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 chatbot-button p-4 rounded-full shadow-lg transition-all z-50 animate-bounce
                     md:bottom-8 md:right-8
                     sm:bottom-4 sm:right-4 sm:p-3"
        >
          <MessageCircle className="h-6 w-6 md:h-5 md:w-5" />
        </button>
      )}

      {/* Chatbot panel - slides up from bottom on mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Chatbot panel */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-background border-t border-border shadow-2xl flex flex-col z-50 pointer-events-auto rounded-t-xl
                       md:bottom-4 md:left-auto md:right-4 md:w-[350px] md:h-[500px] md:rounded-xl md:border
                       sm:bottom-0 sm:left-0 sm:right-0 sm:h-[70vh] sm:rounded-t-xl sm:border-t`}
          >
            {/* Header - Reduced height and visual prominence */}
            <div className="flex items-center justify-between p-2 border-b border-border bg-secondary rounded-t-xl">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-full">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">Eli - Career Assistant</h3>
                  <p className="text-xs text-muted-foreground">Elysian Inspires</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={resetChat}
                  className="p-1.5 hover:bg-accent rounded-full transition-colors"
                  title="Clear chat"
                >
                  <RotateCcw className="h-4 w-4 text-muted-foreground" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'chatbot-message-user rounded-br-none' 
                        : 'chatbot-message-bot rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                      )}
                      {message.sender === 'user' && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground rounded-2xl rounded-bl-none px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <div className="flex gap-1">
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-100"></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {showOptions && getOptionsForStep().length > 0 && (
              <div className="border-t border-border p-3 bg-background">
                <div className="flex flex-wrap gap-2">
                  {getOptionsForStep().map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="px-3 py-2 text-sm chatbot-option-button rounded-full transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="border-t border-border p-3 bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 chatbot-input rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={showOptions && getOptionsForStep().length > 0}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="chatbot-button p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;