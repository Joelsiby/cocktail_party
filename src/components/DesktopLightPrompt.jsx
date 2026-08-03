import React, { useState } from 'react';
import { Smartphone, QrCode, Copy, Check, Eye, Wine, Sparkles } from 'lucide-react';

export default function DesktopLightPrompt({ onSwitchToPhoneFrame }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-amber-50/90 backdrop-blur-xl transition-all duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Light Theme Modal Box */}
      <div className="relative max-w-lg w-full bg-white rounded-3xl p-8 shadow-2xl border border-amber-100 text-slate-800 text-center overflow-hidden">
        
        {/* Top Decorative Banner */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-100 rounded-full blur-xl opacity-60" />
        
        {/* Icon & Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-300/50 text-white transform -rotate-3 hover:rotate-0 transition-transform">
              <Wine className="w-10 h-10 stroke-[1.5]" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-amber-200 text-amber-600">
              <Smartphone className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Header Title */}
        <div className="space-y-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-100 text-amber-900 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Mobile Exclusive Experience
          </span>
          <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Designed For Mobile Screens
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto pt-1">
            This Cocktail Party Invitation is handcrafted in perfect portrait mode (9:19.5 aspect ratio) for smartphones like iPhone 13.
          </p>
        </div>

        {/* QR Code & Mobile Instructions Card */}
        <div className="bg-gradient-to-b from-amber-50/80 to-stone-50 rounded-2xl p-5 border border-amber-200/70 mb-6 text-left flex flex-col sm:flex-row items-center gap-4 shadow-sm">
          <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm flex-shrink-0">
            {/* SVG QR Code representation */}
            <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="white" />
              {/* Corner Targets */}
              <rect x="5" y="5" width="28" height="28" rx="4" fill="#0D0814" />
              <rect x="9" y="9" width="20" height="20" rx="2" fill="white" />
              <rect x="13" y="13" width="12" height="12" fill="#D4AF37" />
              
              <rect x="67" y="5" width="28" height="28" rx="4" fill="#0D0814" />
              <rect x="71" y="9" width="20" height="20" rx="2" fill="white" />
              <rect x="75" y="13" width="12" height="12" fill="#D4AF37" />

              <rect x="5" y="67" width="28" height="28" rx="4" fill="#0D0814" />
              <rect x="9" y="71" width="20" height="20" rx="2" fill="white" />
              <rect x="13" y="75" width="12" height="12" fill="#D4AF37" />

              {/* Data Blocks */}
              <rect x="40" y="8" width="8" height="8" fill="#0D0814" />
              <rect x="52" y="8" width="8" height="8" fill="#D4AF37" />
              <rect x="40" y="20" width="12" height="8" fill="#0D0814" />
              <rect x="44" y="32" width="24" height="8" fill="#D4AF37" />
              <rect x="8" y="40" width="8" height="12" fill="#0D0814" />
              <rect x="24" y="44" width="12" height="8" fill="#0D0814" />
              <rect x="40" y="44" width="8" height="16" fill="#D4AF37" />
              <rect x="56" y="40" width="16" height="8" fill="#0D0814" />
              <rect x="76" y="44" width="16" height="8" fill="#D4AF37" />
              <rect x="44" y="68" width="12" height="12" fill="#0D0814" />
              <rect x="60" y="64" width="8" height="16" fill="#D4AF37" />
              <rect x="76" y="72" width="16" height="8" fill="#0D0814" />
              <rect x="68" y="84" width="24" height="8" fill="#D4AF37" />
            </svg>
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-semibold text-slate-900 text-sm flex items-center justify-center sm:justify-start gap-1.5">
              <QrCode className="w-4 h-4 text-amber-600" /> Scan to open on iPhone / Mobile
            </h4>
            <p className="text-xs text-slate-500 leading-snug">
              Point your smartphone camera at the QR code to experience the full vertical video invitation with sound & interactive RSVP.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Option 1: Preview on Desktop in iPhone Frame */}
          <button
            onClick={onSwitchToPhoneFrame}
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            Preview in Phone Frame Mode
          </button>

          {/* Option 2: Copy URL */}
          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto py-3.5 px-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-700 font-medium text-sm border border-slate-200 flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-semibold">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Wine className="w-3.5 h-3.5 text-amber-500" />
          <span>Cocktail Party Invitation • iPhone 13 Optimized</span>
        </div>
      </div>
    </div>
  );
}
