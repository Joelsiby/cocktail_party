import React from 'react';
import { GlassWater, Music, Utensils, Award, Flame, Heart } from 'lucide-react';

export default function ScheduleSection() {
  const timeline = [
    {
      time: "07:00 PM",
      title: "Welcome Drinks & Canapés",
      description: "Sparkling Prosecco & artisanal appetizers on the terrace",
      icon: GlassWater
    },
    {
      time: "08:30 PM",
      title: "Mixology Showcase & Toast",
      description: "Live flair bartending & signature cocktail tasting",
      icon: Flame
    },
    {
      time: "09:30 PM",
      title: "Gourmet Dinner",
      description: "Curated multi-course dinner & sommelier pairings",
      icon: Utensils
    },
    {
      time: "11:00 PM - Late",
      title: "Live DJ & Midnight Beats",
      description: "Dance under the stars with our guest DJ",
      icon: Music
    }
  ];

  const cocktails = [
    { name: "Smokey Old Fashioned", notes: "Bourbon, Bitters, Smoked Maple", badge: "Signature" },
    { name: "Passionfruit Sparkler", notes: "Vodka, Passionfruit, Champagne", badge: "Popular" },
    { name: "Golden Espresso Martini", notes: "Dark Espresso, Kahlúa, Gold Dust", badge: "Midnight Special" }
  ];

  return (
    <div className="relative z-10 p-6 space-y-8 select-none my-4">
      
      {/* Event Schedule Section */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <span className="text-[10px] font-semibold tracking-widest text-amber-300 uppercase">
            Evening Itinerary
          </span>
          <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
            Schedule of Events
          </h2>
          <div className="w-12 h-0.5 bg-amber-400/50 mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-4 border border-amber-400/20 flex gap-3.5 items-start">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-300 tracking-wider">
                    {item.time}
                  </span>
                  <h3 className="font-serif font-semibold text-white text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Mixology Card */}
      <div className="glass-card rounded-2xl p-5 border border-amber-400/30 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-amber-200 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Featured Cocktails</span>
          </h3>
          <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-medium">
            Open Bar
          </span>
        </div>

        <div className="space-y-3 pt-1">
          {cocktails.map((c, i) => (
            <div key={i} className="bg-black/30 rounded-xl p-3 border border-white/10 flex items-center justify-between gap-2">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-white">{c.name}</p>
                <p className="text-[11px] text-slate-400">{c.notes}</p>
              </div>
              <span className="text-[9px] text-amber-300 bg-amber-950/60 px-2 py-1 rounded-md border border-amber-500/20 shrink-0 font-medium">
                {c.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
