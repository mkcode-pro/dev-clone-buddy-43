import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { PaperclipIcon, Settings, Import, Play, ChevronDown } from 'lucide-react';
const EditorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const handleGenerate = () => {
    setIsGenerating(true);
    // In a real app, this would call an API to generate the application
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };
  return <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Editor Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">From You</h2>
            <div className="bg-lovable-input border border-white/10 rounded-lg overflow-hidden transition-all duration-300">
              <Textarea className="bg-transparent w-full resize-none outline-none text-white placeholder-gray-500 min-h-[200px] p-4 border-none focus:ring-0" placeholder="Create a copycat of Lovable.dev" value={prompt} onChange={e => setPrompt(e.target.value)} />
              
              <div className="flex items-center justify-between p-4 border-t border-white/10">
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
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Public</span>
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[8px] font-bold text-black">+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()} className="bg-white text-black hover:bg-white/90 flex items-center">
                {isGenerating ? 'Processing...' : 'Generate'}
                {!isGenerating && <Play className="ml-2 h-4 w-4" />}
              </Button>
            </div>

            {isGenerating && <div className="bg-lovable-input border border-white/10 rounded-lg p-4">
                <p className="text-gray-400">Still happening...</p>
              </div>}
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Preview</h2>
            <div className="bg-lovable-input border border-white/10 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
              {isGenerating ? <div className="text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  <p className="mt-4 text-gray-400">Generating your application...</p>
                </div> : prompt.trim() ? <div className="text-center">
                  <p className="text-gray-400">Your app preview will appear here</p>
                </div> : <div className="text-center">
                  <p className="text-gray-400">Enter a prompt to see a preview</p>
                </div>}
            </div>
          </div>
        </div>

        {/* Example Gallery Section */}
        
      </div>
    </Layout>;
};

// Example data
const examples = [{
  icon: <span className="text-xl">🗾</span>,
  title: "Trip to Japan in April",
  description: "Manus analyzes comprehensive travel data to create personalized itineraries and produces a custom travel guide with insider recommendations."
}, {
  icon: <span className="text-xl">📊</span>,
  title: "Deeply Analyze Tesla Stocks",
  description: "Manus delivers in-depth stock analysis with visually compelling dashboards and showcase comprehensive performance metrics and future projections."
}, {
  icon: <span className="text-xl">🍎</span>,
  title: "Interactive Course on the Momentum Theorem",
  description: "Manus develops engaging video presentations for middle school educators, clearly explaining the complex physics concept through interactive examples."
}, {
  icon: <span className="text-xl">📋</span>,
  title: "Comparative Analysis of Insurance Policies",
  description: "Looking to compare insurance options? Manus generates clear, structured comparison tables highlighting key differences and optimal choices."
}];
export default EditorPage;