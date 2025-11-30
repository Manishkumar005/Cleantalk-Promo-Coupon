import React from 'react';
import { Ghost, MailCheck, Puzzle, CheckCircle2 } from 'lucide-react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Ghost: <Ghost className="w-8 h-8 text-blue-500" />,
    MailCheck: <MailCheck className="w-8 h-8 text-blue-500" />,
    Puzzle: <Puzzle className="w-8 h-8 text-blue-500" />,
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why CleanTalk?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Traditional captchas kill conversions. CleanTalk uses cloud-based AI to stop spam invisibly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-center">Comparison: Manual vs. CleanTalk</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200">
                            <th className="py-4 px-4 font-semibold text-slate-500">Feature</th>
                            <th className="py-4 px-4 font-bold text-slate-900 bg-slate-50">Manual / Free Plugins</th>
                            <th className="py-4 px-4 font-bold text-blue-600 bg-blue-50">CleanTalk Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-slate-100">
                            <td className="py-4 px-4 text-slate-700">User Experience</td>
                            <td className="py-4 px-4 text-slate-500">Annoying Puzzles/Captchas</td>
                            <td className="py-4 px-4 text-blue-700 font-medium flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Invisible Protection
                            </td>
                        </tr>
                        <tr className="border-b border-slate-100">
                            <td className="py-4 px-4 text-slate-700">Accuracy</td>
                            <td className="py-4 px-4 text-slate-500">Low (Bots can bypass)</td>
                            <td className="py-4 px-4 text-blue-700 font-medium flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> 99.998% Accuracy
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-4 text-slate-700">Database</td>
                            <td className="py-4 px-4 text-slate-500">Local (Slow updates)</td>
                            <td className="py-4 px-4 text-blue-700 font-medium flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Global Cloud Database
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
};