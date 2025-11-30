import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Check } from 'lucide-react';
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
        
        {/* Special Deal Notification Card */}
        <div className="inline-block mx-auto mb-8 w-full max-w-md">
          <div className="bg-gradient-to-r from-blue-900/80 to-slate-900/80 backdrop-blur-md border border-emerald-500/50 p-1 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
             <div className="bg-slate-900/50 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Best Value</span>
                    <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1"><Zap className="w-3 h-3" /> Save $10.80</span>
                  </div>
                  <div className="font-bold text-lg leading-tight">
                    3 Websites for <span className="text-white">$20.40/Year</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Get unlimited protection. <span className="line-through opacity-50">$31.20</span>
                  </div>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors whitespace-nowrap">
                    Claim $20.40 Deal
                  </button>
                </a>
             </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1 mb-8">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-blue-100">Verified Working 2025</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Stop Spam. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Save Time.</span>
          <br />
          Secure Your Site.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Don't let bots ruin your SEO and credibility. Grab the <strong>3-site bundle</strong> to protect your main site, staging, and hobby projects for one low price.
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
        
        <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> 7-day free trial</span>
          <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> No credit card required</span>
        </p>
      </div>
    </section>
  );
};