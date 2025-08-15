import React, { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!conversationId) setConversationId(Date.now().toString());
  }, [conversationId]);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setChatHistory(prev => [...prev, { sender: 'user', text: message }]);

    try {
      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, conversation_id: conversationId }),
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
      setMessage('');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-gray-700 px-6 py-4 border-b border-gray-600 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Adnan Khan (Chatbot)</h1>
          <span className="text-gray-300 text-sm">AK-ChatBot</span>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-800 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700"
        >
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-4 rounded-xl shadow
                ${msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-white'}
              `}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[75%] p-4 rounded-xl bg-gray-600 text-white animate-pulse shadow">
                AI is typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form
          onSubmit={sendMessage}
          className="flex items-center p-4 bg-gray-700 border-t border-gray-600"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 rounded-l-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!message.trim() || loading}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-full text-white disabled:opacity-50 transition-colors"
          >
            <FiSend size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
