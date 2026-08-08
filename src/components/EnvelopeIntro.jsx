import React, { useEffect, useState } from 'react';

/**
 * Envelope opening intro overlay — same look & mechanics as the one used in
 * https://github.com/Joelsiby/agin_aarti (Agin & Aarati's wedding site):
 * a single triangular envelope-paper image (/envelop_new.png) reused four
 * times (rotated 0/90/180/270°) to form the four flaps of a closed envelope,
 * sealed with the couple's wax-seal monogram (/logo.png).
 *
 * Tap the envelope / wax seal:
 *   1. Fires onOpen() immediately (used to start the music on the same tap)
 *   2. The wax seal + logo fade out
 *   3. The four flaps fly outward off-screen in 3D
 *   4. onOpenComplete() fires once the flaps are gone, unmounting the overlay
 */
export default function EnvelopeIntro({ onOpen, onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    // Wait for the seal/logo to fade before the flaps fly open
    const retrievalTimer = setTimeout(() => setIsRetrieving(true), 1000);
    // Fade the dark backdrop out in step with the flaps leaving, instead of
    // holding a blank dark screen after they're already gone
    const leaveTimer = setTimeout(() => setIsLeaving(true), 1000);
    // Unmount once the backdrop fade has finished
    const finalTimer = setTimeout(() => onOpenComplete?.(), 2600);

    return () => {
      clearTimeout(retrievalTimer);
      clearTimeout(leaveTimer);
      clearTimeout(finalTimer);
    };
  }, [isOpen, onOpenComplete]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    onOpen?.();
  };

  const retrievalTransition = {
    transition: 'transform 2000ms cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Dark backdrop — faded out on its own layer so it doesn't wash out
          the flap images (which must stay fully opaque while retrieving) */}
      <div
        className={`absolute inset-0 bg-[#0D0814] transition-opacity duration-[1600ms] ease-out ${
          isLeaving ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />

      {/* 3D Scene — full-screen container; the flap images are individually
          scaled/offset below, exactly as in the reference repo, so they must
          live in a full-size stage rather than a small box. */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpen()}
        aria-label="Open invitation"
        className="relative w-full h-full pointer-events-auto cursor-pointer"
        style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
      >
        {/* LEFT flap */}
        <div
          className="absolute inset-0 z-40"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: isRetrieving
              ? 'translate3d(-200vw, 0, -2000px)'
              : 'translate3d(-180px, 0, -20px)',
            ...retrievalTransition,
          }}
        >
          <img
            src="/envelop_new.png"
            className="w-full h-full object-contain object-center"
            style={{ transform: 'rotate(-90deg) scale(2.5)', transformOrigin: 'center' }}
            alt=""
          />
        </div>

        {/* RIGHT flap */}
        <div
          className="absolute inset-0 z-40"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: isRetrieving
              ? 'translate3d(200vw, 0, -2000px)'
              : 'translate3d(180px, 0, -10px)',
            ...retrievalTransition,
          }}
        >
          <img
            src="/envelop_new.png"
            className="w-full h-full object-contain object-center"
            style={{ transform: 'rotate(90deg) scale(2.5)', transformOrigin: 'center' }}
            alt=""
          />
        </div>

        {/* BOTTOM flap */}
        <div
          className="absolute inset-0 z-50"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: isRetrieving
              ? 'translate3d(0, 200vh, -2000px)'
              : 'translate3d(0, 200px, 0px)',
            ...retrievalTransition,
          }}
        >
          <img
            src="/envelop_new.png"
            className="w-full h-full object-contain object-center"
            style={{ transform: 'rotate(180deg) scale(3.2)', transformOrigin: 'center' }}
            alt=""
          />
        </div>

        {/* TOP flap */}
        <div
          className="absolute inset-0 z-[60]"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            transform: isRetrieving
              ? 'translate3d(0, -200vh, -2000px)'
              : 'translate3d(0, -200px, 20px)',
            ...retrievalTransition,
          }}
        >
          <img
            src="/envelop_new.png"
            className="w-full h-full object-contain object-center"
            style={{ transform: 'scale(2.8)', transformOrigin: 'center' }}
            alt=""
          />
        </div>

        {/* Wax seal / logo — tap target */}
        {!isRetrieving && (
          <div
            className={`absolute top-1/2 left-1/2 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              pointerEvents: isOpen ? 'none' : 'auto',
              transform: 'translate(-50%, -50%) translate3d(0, 25px, 800px)',
            }}
          >
            <img src="/logo.png" className="w-32 h-32 object-contain drop-shadow-2xl" alt="Agin & Aarati" />
            <p
              className={`mt-6 font-cursive text-2xl text-[#3a332c] tracking-[0.05em] transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'animate-pulse'
              }`}
            >
              Click to open
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
