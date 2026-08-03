import React from 'react';
import { MapPin, Navigation, Sparkles, Shirt, Car, PhoneCall } from 'lucide-react';

export default function VenueSection({ onOpenRsvp }) {
  const handleOpenMap = () => {
    window.open("https://maps.google.com/?q=The+Grand+Skyline+Lounge", "_blank");
  };

  return (
    <div className="relative z-10 p-6 space-y-6 select-none my-4">
      
      {/* Venue Header */}
      <div className="text-center space-y-1">
        <span className="text-[10px] font-semibold tracking-widest text-amber-300 uppercase">
          Location & Details
        </span>
        <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
          The Venue
        </h2>
        <div className="w-12 h-0.5 bg-amber-400/50 mx-auto rounded-full" />
      </div>

      {/* Main Venue Card */}
      <div className="glass-card rounded-2xl p-5 border border-amber-400/30 space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-300 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-white">
              The Grand Skyline Lounge
            </h3>
            <p className="text-xs text-amber-200 font-medium">
              Penthouse 42 • 500 Fifth Avenue
            </p>
            <p className="text-xs text-slate-300 font-light pt-1 leading-relaxed">
              Panoramic city skyline views, open-air glass terrace, and private elevator access.
            </p>
          </div>
        </div>

        {/* Map Button */}
        <button
          onClick={handleOpenMap}
          className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center gap-2 border border-white/20 transition-all active:scale-95"
        >
          <Navigation className="w-4 h-4 text-amber-400" />
          <span>Open Directions in Google Maps</span>
        </button>
      </div>

      {/* Dress Code & Parking Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Dress Code */}
        <div className="glass-card rounded-2xl p-4 border border-amber-400/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-300">
            <Shirt className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Dress Code</h4>
          </div>
          <p className="text-xs font-semibold text-white">
            Cocktail & Glamour
          </p>
          <p className="text-[11px] text-slate-300 leading-snug">
            Elegant suits, evening dresses, or chic cocktail wear.
          </p>
        </div>

        {/* Valet Parking */}
        <div className="glass-card rounded-2xl p-4 border border-amber-400/20 space-y-2">
          <div className="flex items-center gap-2 text-amber-300">
            <Car className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">Parking</h4>
          </div>
          <p className="text-xs font-semibold text-white">
            Complimentary Valet
          </p>
          <p className="text-[11px] text-slate-300 leading-snug">
            Valet service available at main entrance.
          </p>
        </div>
      </div>

      {/* Final RSVP Banner */}
      <div className="glass-card rounded-2xl p-6 border border-amber-400/40 text-center space-y-3 bg-gradient-to-b from-amber-950/30 to-black/60">
        <Sparkles className="w-6 h-6 text-amber-300 mx-auto animate-pulse" />
        <h3 className="font-serif font-bold text-xl text-white">
          Will You Be Joining Us?
        </h3>
        <p className="text-xs text-slate-300 max-w-xs mx-auto">
          Please confirm your attendance by November 10th to ensure your place on the guest list.
        </p>

        <button
          onClick={onOpenRsvp}
          className="w-full py-3.5 px-6 rounded-xl gold-gradient-bg text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all border border-amber-200"
        >
          RSVP Now
        </button>
      </div>

    </div>
  );
}
