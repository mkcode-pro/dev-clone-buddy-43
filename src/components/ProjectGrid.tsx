
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'wheels-unlimited-monthly-plan',
    imageUrl: 'https://source.unsplash.com/random/800x600/?website,dashboard',
    timeAgo: 'Edited 1 minute ago',
  },
  {
    id: 2,
    title: 'ride-renew-subscribe',
    imageUrl: 'https://source.unsplash.com/random/800x600/?website,light',
    timeAgo: 'Edited 20 minutes ago',
  },
  {
    id: 3,
    title: 'ride-again-subscription',
    imageUrl: 'https://source.unsplash.com/random/800x600/?website,car',
    timeAgo: 'Edited 25 minutes ago',
  },
  {
    id: 4,
    title: 'boilerplate-lovable',
    imageUrl: 'https://source.unsplash.com/random/800x600/?website,minimal',
    timeAgo: 'Edited about 3 hours ago',
  },
];

const ProjectGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            timeAgo={project.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
