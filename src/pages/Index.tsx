
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import InputPrompt from '../components/InputPrompt';
import SuggestionGrid from '../components/SuggestionGrid';
import ProjectTabs from '../components/ProjectTabs';
import ProjectGrid from '../components/ProjectGrid';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <InputPrompt />
      <SuggestionGrid />
      <ProjectTabs />
      <ProjectGrid />
    </Layout>
  );
};

export default Index;
