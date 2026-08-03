import React from 'react';
import { Smartphone } from 'lucide-react';

export default function DesktopLightPrompt() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#FAF7F2] text-slate-800 text-center">
      {/* Subtle ambient light gradient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-md w-full space-y-4 p-8">
        <Smartphone className="w-10 h-10 text-amber-600/80 mx-auto stroke-[1.5]" />
        
        {/* Simple line in elegant marital cursive & serif font */}
        <h2 className="font-cursive text-4xl sm:text-5xl text-amber-900 leading-tight">
          Kindly open this invitation on your mobile phone
        </h2>

        <p className="font-serif text-sm tracking-widest text-slate-500 uppercase pt-2">
          Designed exclusively for portrait view
        </p>
      </div>
    </div>
  );
}
