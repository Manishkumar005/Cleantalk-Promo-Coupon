import React from 'react';
import { Hero } from './components/Hero';
import { SavingsCalculator } from './components/SavingsCalculator';
import { SpamImpactAI } from './components/SpamImpactAI';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { AFFILIATE_LINK } from './constants';
import { Shield } from 'lucide-react';
import { Button } from './components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <Shield className="w-6 h-6 text-blue-600" />
            <span>CleanTalk<span className="text-blue-600">Promo</span></span>
          </div>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
             <Button variant="primary" className="text-sm py-2 px-4">
               Get Deal
             </Button>
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <SavingsCalculator />
        <SpamImpactAI />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;