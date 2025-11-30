import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Clock } from 'lucide-react';
import { CalculatorState, CalculationResult } from '../types';

export const SavingsCalculator: React.FC = () => {
  const [values, setValues] = useState<CalculatorState>({
    spamPerDay: 15,
    minutesPerSpam: 2,
    hourlyWage: 25,
  });

  const [result, setResult] = useState<CalculationResult>({
    dailyTimeLost: 0,
    yearlyTimeLost: 0,
    yearlyMoneyLost: 0,
  });

  useEffect(() => {
    const dailyMinutes = values.spamPerDay * values.minutesPerSpam;
    const yearlyHours = (dailyMinutes * 365) / 60;
    const yearlyCost = yearlyHours * values.hourlyWage;

    setResult({
      dailyTimeLost: dailyMinutes,
      yearlyTimeLost: Math.round(yearlyHours * 10) / 10,
      yearlyMoneyLost: Math.round(yearlyCost),
    });
  }, [values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The True Cost of Spam</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Manual moderation isn't just annoying; it's expensive. Use this formula to see exactly how much money you lose by not using CleanTalk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Inputs */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" /> Input Your Data
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Spam Comments/Emails per Day</label>
                <input 
                  type="range" min="1" max="100" name="spamPerDay" 
                  value={values.spamPerDay} onChange={handleChange}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="text-right font-bold text-blue-600 mt-1">{values.spamPerDay} items</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Minutes to Moderate One Spam Item</label>
                <input 
                  type="number" name="minutesPerSpam" 
                  value={values.minutesPerSpam} onChange={handleChange}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                <p className="text-xs text-slate-400 mt-1">Includes reading, deleting, and blocking IP.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Hourly Value ($)</label>
                <input 
                  type="number" name="hourlyWage" 
                  value={values.hourlyWage} onChange={handleChange}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>

          {/* The Formula & Result */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
               
               <h3 className="text-emerald-400 font-mono text-sm uppercase tracking-wider mb-4">The Savings Formula</h3>
               
               {/* Formula Box */}
               <div className="bg-slate-800/50 p-6 rounded-lg font-mono text-sm md:text-base border border-slate-700 mb-6 overflow-x-auto">
                 <p className="whitespace-nowrap">
                   <span className="text-purple-400">Total_Loss</span> = 
                   ( <span className="text-blue-400">Spam_Per_Day</span> × <span className="text-blue-400">Time_Per_Spam</span> ) × <span className="text-yellow-400">Hourly_Rate</span>
                 </p>
                 <div className="my-3 border-b border-slate-700"></div>
                 <p className="whitespace-nowrap">
                    <span className="text-emerald-400">${result.yearlyMoneyLost.toLocaleString()}</span> = 
                    ( {values.spamPerDay} × {values.minutesPerSpam}m ) × ${values.hourlyWage}/hr <span className="text-slate-500 italic text-xs ml-2">*Annualized</span>
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                      <Clock className="w-4 h-4" /> Hours Wasted/Year
                    </div>
                    <div className="text-2xl font-bold text-white">{result.yearlyTimeLost} hrs</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-red-500/30">
                    <div className="flex items-center gap-2 text-red-300 mb-1">
                      <DollarSign className="w-4 h-4" /> Money Lost/Year
                    </div>
                    <div className="text-2xl font-bold text-red-400">${result.yearlyMoneyLost.toLocaleString()}</div>
                  </div>
               </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl">
              <p className="text-emerald-900">
                <strong>Analysis:</strong> By using CleanTalk (~$8-12/year), you prevent a loss of <span className="font-bold underline">${result.yearlyMoneyLost}</span> in productivity. That is a massive ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};