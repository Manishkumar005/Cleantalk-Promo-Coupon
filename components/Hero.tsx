import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { AFFILIATE_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pb-16 pt-32 lg:pt-40">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-emerald-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1 mb-8">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-blue-100">Verified Working 2024</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Stop Spam. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Save Time.</span>
          <br />
          Secure Your Site.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Don't let bots ruin your SEO and credibility. Use our exclusive link to get the best protection for WordPress, Joomla, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="primary" fullWidth className="text-lg py-4">
              Get CleanTalk Deal <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#calculator" className="w-full sm:w-auto">
            <Button variant="outline" fullWidth className="text-lg py-4 border-slate-600 text-slate-300 hover:text-white hover:border-white">
              Calculate Savings
            </Button>
          </a>
        </div>
        
        <p className="mt-6 text-sm text-slate-500">
          7-day free trial. No credit card required for trial.
        </p>
      </div>
    </section>
  );
};