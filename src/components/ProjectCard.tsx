
import React from 'react';
import { Clock } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  timeAgo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, timeAgo }) => {
  return (
    <div 
      className="glass-card overflow-hidden group transform hover:translate-y-[-4px] hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium truncate pr-4">{title}</h3>
          
          <div className="flex items-center text-gray-400 text-xs">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
