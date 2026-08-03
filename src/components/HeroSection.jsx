import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';

export default function HeroSection({ isMuted, onToggleMute, onOpenRsvp }) {
  // Countdown Timer target state
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14); // 2 weeks in future

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between p-6 z-10 pt-10 pb-8 text-center select-none">
      
      {/* Top Bar: Floating Sound Control & Badge */}
      <div className="flex items-center justify-between w-full">
        <div className="glass-pill px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-amber-200 border border-amber-400/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="font-medium tracking-wide">EXCLUSIVE INVITATION</span>
        </div>

        {/* Audio Toggle Button */}
        <button
          onClick={onToggleMute}
          className="glass-pill p-2.5 rounded-full text-white hover:text-amber-300 transition-all border border-white/20 active:scale-95 shadow-lg flex items-center justify-center group"
          title={isMuted ? "Unmute Music" : "Mute Music"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-slate-300 group-hover:text-amber-300" />
          ) : (
            <div className="relative">
              <Volume2 className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Main Title & Invitation Content */}
      <div className="space-y-4 my-auto py-6">
        <p className="font-cursive text-3xl sm:text-4xl text-amber-200 opacity-95">
          Cordially Invited To
        </p>

        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold gold-gradient-text tracking-wide leading-tight drop-shadow-md">
            COCKTAIL
          </h1>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-white/90 tracking-widest uppercase">
            & Celebration Night
          </h2>
        </div>

        <p className="text-xs text-slate-300 max-w-xs mx-auto font-light leading-relaxed tracking-wider uppercase border-y border-amber-400/20 py-2.5 my-2">
          An Evening of Signature Drinks, Glamour & Great Beats
        </p>

        {/* Date & Location Pill */}
        <div className="flex flex-col items-center justify-center gap-2 pt-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-100 bg-amber-950/40 border border-amber-500/30 rounded-full px-4 py-1.5 backdrop-blur-md">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Saturday, November 18 • 7:00 PM</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>The Grand Skyline Lounge, Penthouse 42</span>
          </div>
        </div>
      </div>

      {/* Countdown Timer Block */}
      <div className="space-y-5">
        <div className="glass-card rounded-2xl p-3 max-w-xs mx-auto border border-amber-400/30">
          <p className="text-[10px] uppercase font-semibold text-amber-300/80 tracking-widest mb-2">
            Countdown To Toast
          </p>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-black/40 rounded-lg p-1.5 border border-white/10">
              <span className="block text-xl font-bold font-serif text-amber-200">{timeLeft.days ?? '0'}</span>
              <span className="text-[9px] uppercase text-slate-400 tracking-wider">Days</span>
            </div>
            <div className="bg-black/40 rounded-lg p-1.5 border border-white/10">
              <span className="block text-xl font-bold font-serif text-amber-200">{timeLeft.hours ?? '0'}</span>
              <span className="text-[9px] uppercase text-slate-400 tracking-wider">Hrs</span>
            </div>
            <div className="bg-black/40 rounded-lg p-1.5 border border-white/10">
              <span className="block text-xl font-bold font-serif text-amber-200">{timeLeft.minutes ?? '0'}</span>
              <span className="text-[9px] uppercase text-slate-400 tracking-wider">Min</span>
            </div>
            <div className="bg-black/40 rounded-lg p-1.5 border border-white/10">
              <span className="block text-xl font-bold font-serif text-amber-200">{timeLeft.seconds ?? '0'}</span>
              <span className="text-[9px] uppercase text-slate-400 tracking-wider">Sec</span>
            </div>
          </div>
        </div>

        {/* Primary RSVP Action CTA */}
        <div className="space-y-3">
          <button
            onClick={onOpenRsvp}
            className="w-full py-4 px-6 rounded-2xl gold-gradient-bg text-stone-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 active:scale-95 transition-all transform hover:brightness-110 flex items-center justify-center gap-2 border border-amber-200"
          >
            <Sparkles className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>Confirm Your RSVP</span>
          </button>

          <div className="flex items-center justify-center gap-1 text-[11px] text-amber-200/60 animate-bounce pt-1">
            <span>Scroll down for event details</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

    </div>
  );
}
