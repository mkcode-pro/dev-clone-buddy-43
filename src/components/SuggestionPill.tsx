
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SuggestionPillProps {
  label: string;
}

const SuggestionPill: React.FC<SuggestionPillProps> = ({ label }) => {
  return (
    <button 
      className="group flex items-center space-x-1 py-1.5 px-4 rounded-full 
                 bg-lovable-card/70 hover:bg-lovable-card/90 backdrop-blur-md
                 border border-white/10 hover:border-white/20 
                 transition-all duration-300 transform hover:scale-[1.02]"
    >
      <span className="text-sm text-gray-300 group-hover:text-white">
        {label}
      </span>
      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white
                                 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                 transition-transform duration-300" />
    </button>
  );
};

export default SuggestionPill;
