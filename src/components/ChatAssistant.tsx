import { MessageCircle } from 'lucide-react';

const ChatAssistant = () => {
  return (
    <div className="fixed bottom-4 right-4 z-20">
      {/* Chat Bubble */}
      <div className="mb-2 mr-12 bg-white rounded-xl px-3 py-2 shadow-lg max-w-[200px]">
        <p className="text-xs text-gray-700">Hey! How can I help you today?</p>
      </div>

      {/* Assistant Button */}
      <button className="ml-auto block w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle size={20} className="text-white" />
      </button>
    </div>
  );
};

export default ChatAssistant;
