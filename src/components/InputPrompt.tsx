
import React, { useState } from 'react';
import { PaperclipIcon, Settings, Import } from 'lucide-react';
import { Link } from 'react-router-dom';

const InputPrompt: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div 
        className={`bg-lovable-input border ${isFocused ? 'border-white/20 shadow-glow' : 'border-white/10'} 
                   rounded-lg overflow-hidden transition-all duration-300`}
      >
        <div className="p-4">
          <div className="flex items-start">
            <textarea
              className="bg-transparent w-full resize-none outline-none text-white placeholder-gray-500 min-h-[80px]"
              placeholder="Create a copycat of Lovable.dev"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                <PaperclipIcon className="w-5 h-5" />
                <span className="ml-2 text-sm">Attach</span>
              </button>
              
              <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
                <span className="ml-2 text-sm">Configure</span>
              </button>
              
              <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Import className="w-5 h-5" />
                <span className="ml-2 text-sm">Import</span>
              </button>
            </div>
            
            <Link to="/editor" className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Public</span>
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-[8px] font-bold text-black">+</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPrompt;
