import React, { useState } from 'react';
import { Bot, Sparkles, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { analyzeSpamImpact } from '../services/geminiService';
import { AIAnalysisState } from '../types';

export const SpamImpactAI: React.FC = () => {
  const [state, setState] = useState<AIAnalysisState>({
    websiteType: '',
    trafficLevel: '',
    loading: false,
    result: null,
    error: null
  });

  const handleAnalyze = async () => {
    if (!state.websiteType || !state.trafficLevel) return;
    
    setState(prev => ({ ...prev, loading: true, error: null }));
    const result = await analyzeSpamImpact(state.websiteType, state.trafficLevel);
    setState(prev => ({ ...prev, loading: false, result }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="bg-purple-100 p-3 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">AI Risk Assessment</h2>
          <p className="text-slate-600 mt-2">
            Not sure if you need protection? Let our AI explain how spam specifically hurts <em>your</em> type of website.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Website Type</label>
              <input 
                type="text" 
                placeholder="e.g. E-commerce, Personal Blog" 
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                value={state.websiteType}
                onChange={(e) => setState(prev => ({ ...prev, websiteType: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Traffic</label>
              <select 
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none bg-white"
                value={state.trafficLevel}
                onChange={(e) => setState(prev => ({ ...prev, trafficLevel: e.target.value }))}
              >
                <option value="">Select Traffic...</option>
                <option value="New (0-1k)">New (0-1k visits)</option>
                <option value="Growing (1k-10k)">Growing (1k-10k visits)</option>
                <option value="High (10k+)">High (10k+ visits)</option>
              </select>
            </div>
            <Button 
              variant="primary" 
              fullWidth 
              onClick={handleAnalyze} 
              disabled={state.loading || !state.websiteType || !state.trafficLevel}
              className={`bg-purple-600 hover:bg-purple-700 ${state.loading ? 'opacity-70' : ''}`}
            >
              {state.loading ? 'Analyzing...' : 'Analyze Impact'}
            </Button>
          </div>

          <div className="md:col-span-2">
            <div className="h-full bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px] relative">
              {!state.result && !state.loading && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 text-center">
                  <Bot className="w-12 h-12 mb-2 opacity-20" />
                  <p>Enter your details to generate a custom security report.</p>
                </div>
              )}
              
              {state.loading && (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-500 animate-pulse">Consulting security models...</p>
                </div>
              )}

              {state.result && (
                <div className="animate-fade-in">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-orange-500" /> Potential Risks Detected
                  </h3>
                  <div className="prose prose-slate text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                    {state.result}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};