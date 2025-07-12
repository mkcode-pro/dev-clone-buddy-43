
import React, { useState } from 'react';
import { Folder, Clock, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const ProjectTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const tabs: Tab[] = [
    {
      id: 'projects',
      label: 'My Projects',
      icon: <Folder className="w-4 h-4" />,
    },
    {
      id: 'latest',
      label: 'Latest',
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: 'featured',
      label: 'Featured',
      icon: <Star className="w-4 h-4" />,
    },
  ];
  
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-lovable-card/50 backdrop-blur-lg rounded-full p-1 border border-white/10">
        <div className="flex items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center space-x-2 py-1.5 px-4 rounded-full transition-all duration-300",
                activeTab === tab.id 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
