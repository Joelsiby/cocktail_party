import React, { useEffect, useState } from 'react';

/**
 * Warm welcome card shown over the invitation video once the envelope opens.
 * Fades in, stays for a few seconds, then fades away (or on tap of ✕).
 */
export default function WelcomeNote() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 300);
    const hideTimer = setTimeout(() => setVisible(false), 9000);
    const removeTimer = setTimeout(() => setDismissed(true), 10000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-4 right-20 bottom-6 z-30 transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative rounded-2xl border border-amber-300/50 bg-[#fbf6ea]/85 backdrop-blur-md px-4 py-3 text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        {/* Kasavu-style gold border line */}
        <span className="pointer-events-none absolute inset-x-4 top-1.5 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <p className="font-cursive text-2xl text-[#1e2a78] leading-none pt-1">
          Swagatham
        </p>
        <p className="text-[15px] text-[#3a332c] mt-1" style={{ fontFamily: "'Manjari', serif" }}>
          ഏവർക്കും സ്വാഗതം
        </p>
        <p className="text-[11px] text-[#3a332c]/85 leading-snug mt-1.5">
          With love, Nivethitha &amp; Mithun welcome you to their Sangeet.
          Come sing, dance and celebrate with us!
        </p>

        <button
          onClick={() => setVisible(false)}
          aria-label="Close welcome note"
          className="absolute top-1 right-2 text-[#3a332c]/50 text-sm leading-none p-1"
        >
          ×
        </button>

        <span className="pointer-events-none absolute inset-x-4 bottom-1.5 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </div>
    </div>
  );
}
