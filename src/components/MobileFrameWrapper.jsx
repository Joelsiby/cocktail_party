import React from 'react';
import { Smartphone, Monitor, Info } from 'lucide-react';

export default function MobileFrameWrapper({ children, onShowDesktopModal }) {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-x-hidden">
      {/* Ambient glowing atmosphere for desktop simulator view */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Simulator Toolbar */}
      <header className="mb-4 z-40 flex items-center justify-between gap-4 max-w-[420px] w-full px-2 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-slate-300">iPhone 13 Simulator</span>
          <span className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded border border-slate-700">390 × 844</span>
        </div>

        <button
          onClick={onShowDesktopModal}
          className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 px-3 py-1.5 rounded-full border border-amber-500/30 transition-all text-[11px]"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Desktop Notice</span>
        </button>
      </header>

      {/* iPhone 13 Device Outer Chassis */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-black rounded-[50px] p-[12px] border-[4px] border-slate-700 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.8),0_0_50px_0_rgba(212,175,55,0.15)] flex flex-col overflow-hidden transform transition-all">
        
        {/* Notch / Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-3 px-3 shadow-md">
          {/* Camera Lens */}
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-indigo-950"></div>
          </div>
          {/* Speaker Earpiece */}
          <div className="w-10 h-1 bg-slate-900 rounded-full"></div>
        </div>

        {/* Inner Screen Canvas */}
        <div className="relative w-full h-full bg-[#0D0814] rounded-[38px] overflow-hidden flex flex-col text-white">
          {children}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50 pointer-events-none" />
      </div>

      {/* Bottom Hint */}
      <p className="mt-4 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
        <Smartphone className="w-3.5 h-3.5 text-amber-500/70" />
        Optimal viewing experience on iPhone 13 or modern mobile browsers.
      </p>
    </div>
  );
}
