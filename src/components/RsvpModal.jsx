import React, { useState } from 'react';
import { X, Check, Wine, Sparkles, User, Users, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'attending', // 'attending' | 'declining'
    guests: '1',
    cocktail: 'Smokey Old Fashioned',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF6D6', '#E8C5C8', '#FFBF00']
    });

    // Save to local storage mock
    localStorage.setItem('cocktail_party_rsvp', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative max-w-sm w-full glass-card rounded-3xl p-6 border border-amber-400/40 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Header */}
            <div className="text-center space-y-1 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center mx-auto text-amber-300 mb-2">
                <Wine className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold gold-gradient-text">
                RSVP Confirmation
              </h2>
              <p className="text-xs text-slate-300">
                Kindly respond by November 10th
              </p>
            </div>

            {/* Attendance Choice */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                className={`py-3 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  formData.attendance === 'attending'
                    ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-md'
                    : 'bg-black/30 border-white/10 text-slate-400'
                }`}
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Joyfully Accept</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                className={`py-3 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  formData.attendance === 'declining'
                    ? 'bg-rose-950/40 border-rose-400 text-rose-200 shadow-md'
                    : 'bg-black/30 border-white/10 text-slate-400'
                }`}
              >
                <X className="w-4 h-4 text-rose-400" />
                <span>Regretfully Decline</span>
              </button>
            </div>

            {/* Guest Name Input */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-amber-200 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-400" />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-amber-400/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {formData.attendance === 'attending' && (
              <>
                {/* Number of Guests */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-amber-200 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-black/40 border border-amber-400/30 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="1">1 Person (Just Me)</option>
                    <option value="2">2 Persons (+1 Guest)</option>
                    <option value="3">3 Persons</option>
                  </select>
                </div>

                {/* Cocktail Preference */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-amber-200 flex items-center gap-1">
                    <Wine className="w-3.5 h-3.5 text-amber-400" />
                    Favorite Cocktail Drink
                  </label>
                  <select
                    value={formData.cocktail}
                    onChange={(e) => setFormData({ ...formData, cocktail: e.target.value })}
                    className="w-full bg-black/40 border border-amber-400/30 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Smokey Old Fashioned">Smokey Old Fashioned</option>
                    <option value="Passionfruit Sparkler">Passionfruit Sparkler</option>
                    <option value="Golden Espresso Martini">Golden Espresso Martini</option>
                    <option value="Non-Alcoholic Mocktail">Craft Mocktail (Non-Alcoholic)</option>
                  </select>
                </div>
              </>
            )}

            {/* Special Note */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-amber-200">
                Message or Dietary Notes
              </label>
              <textarea
                rows="2"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any message for the host..."
                className="w-full bg-black/40 border border-amber-400/30 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl gold-gradient-bg text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all mt-2 border border-amber-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-stone-950 fill-stone-950" />
              <span>Submit Response</span>
            </button>
          </form>
        ) : (
          /* Submitted Success Screen */
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold gold-gradient-text">
                Thank You, {formData.name}!
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto">
                {formData.attendance === 'attending'
                  ? `We've reserved ${formData.guests} spot(s) for you. Get ready for a night of cocktails and celebration!`
                  : "We're sorry you can't make it, but thank you for letting us know!"}
              </p>
            </div>

            <button
              onClick={onClose}
              className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all"
            >
              Back to Invitation
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
