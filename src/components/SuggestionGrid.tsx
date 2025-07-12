
import React, { useEffect, useRef } from 'react';
import SuggestionPill from './SuggestionPill';

const suggestions = [
  "Recipe collection",
  "SaaS landing page",
  "Real estate listings",
  "Crypto portfolio tracker",
];

const SuggestionGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;
    
    const children = Array.from(container.children);
    
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div 
        ref={containerRef}
        className="flex flex-wrap justify-center items-center gap-3"
      >
        {suggestions.map((suggestion, index) => (
          <div key={index} className="opacity-0">
            <SuggestionPill label={suggestion} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionGrid;
