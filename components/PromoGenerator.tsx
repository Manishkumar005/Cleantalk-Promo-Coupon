import React, { useState } from 'react';
import { Image as ImageIcon, Download, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { generatePromoImage } from '../services/geminiService';
import { AFFILIATE_LINK } from '../constants';

export const PromoGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    const url = await generatePromoImage();
    setImageUrl(url);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/30">
              <ImageIcon className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Share the Deal & Save</h2>
          <p className="text-slate-400 mb-8">
            Want to tell your friends or followers? Generate a unique, AI-created 3D promo banner instantly.
          </p>

          {!imageUrl ? (
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px]">
              {loading ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                  <p className="text-emerald-400 font-mono animate-pulse">Generating Assets...</p>
                </div>
              ) : (
                <>
                  <Sparkles className="w-12 h-12 text-slate-600 mb-4" />
                  <p className="text-slate-500 mb-6">Click below to generate a unique visual for the $20.40 Deal</p>
                  <Button onClick={handleGenerate} variant="secondary">
                    <Sparkles className="w-4 h-4" /> Generate Promo Image
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 animate-fade-in">
              <img src={imageUrl} alt="AI Generated Promo" className="w-full rounded-xl shadow-2xl mb-6" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={imageUrl} download="cleantalk-promo.png" className="w-full sm:w-auto">
                  <Button variant="outline" fullWidth className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white">
                    <Download className="w-4 h-4" /> Download Image
                  </Button>
                </a>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" fullWidth>
                    Go to Deal
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};