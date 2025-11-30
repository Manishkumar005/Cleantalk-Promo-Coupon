import React from 'react';
import { AFFILIATE_LINK, APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="font-semibold text-white mb-4">{APP_NAME}</p>
        <p className="text-sm mb-6 max-w-lg mx-auto">
          We are an affiliate partner of CleanTalk. We earn a commission if you click this link and make a purchase at no additional cost to you. This helps support our free tools.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Get CleanTalk
          </a>
          <span>&bull;</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <p className="mt-8 text-xs text-slate-600">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};