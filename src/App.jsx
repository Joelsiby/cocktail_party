import React, { useState, useEffect, useRef } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import RsvpModal from './components/RsvpModal';
import DesktopLightPrompt from './components/DesktopLightPrompt';
import MobileFrameWrapper from './components/MobileFrameWrapper';
import EnvelopeIntro from './components/EnvelopeIntro';

export default function App() {
  // Controls only the background music track — the video always keeps playing
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const musicRef = useRef(null);

  // viewMode: 'auto' | 'phoneFrame' | 'desktopModal'
  const [viewMode, setViewMode] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      const isDesktopScreen = window.innerWidth > 768;
      setIsDesktop(isDesktopScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keep the background test music track in sync with isPlaying (once it has started)
  useEffect(() => {
    const audio = musicRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleRedirectToMaps = () => {
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Cochin+Yacht+Club,+W8V3%2B6JR,+Yacht+Club+Enclave+Rd,+Priyadarshini+Nagar,+Konthuruthy,+Thevara,+Kochi,+Ernakulam,+Kerala+682013";
    window.open(mapsUrl, "_blank");
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Background music (cocktail_music.mp3) only starts once the guest opens
  // the envelope / taps the logo — the video's own audio track stays off.
  const handleStartMusic = () => {
    setIsPlaying(true);
    musicRef.current?.play().catch(() => {});
  };

  // Clean Video View Content (Clicking anywhere redirects to Cochin Yacht Club on Maps)
  const invitationContent = (
    <div
      onClick={handleRedirectToMaps}
      className="relative w-full h-full min-h-screen overflow-hidden cursor-pointer select-none"
    >
      {/* Clean Background Video — always plays, silently; the play/pause button only controls the music track below */}
      <BackgroundVideo isMuted={true} isPlaying={true} />

      {/* Background Music Track */}
      <audio ref={musicRef} src="/cocktail_music.mp3" loop preload="auto" />

      {/* Bottom Right Floating Controls: Music Play/Pause + Maps (Liquid Glass) */}
      <div className="fixed bottom-6 right-4 z-30 flex flex-col items-center gap-3">
        {/* Music Play/Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          title={isPlaying ? "Pause Music" : "Play Music"}
          className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all active:scale-90 overflow-hidden"
        >
          {/* Liquid glass sheen */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent" />
          <span className="pointer-events-none absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white/30 blur-md" />

          {isPlaying ? (
            <svg className="relative w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg className="relative w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 5.5v13a1 1 0 001.5.87l11-6.5a1 1 0 000-1.74l-11-6.5A1 1 0 007 5.5z" />
            </svg>
          )}
        </button>

        {/* Maps Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRedirectToMaps();
          }}
          title="Open in Google Maps"
          className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white/90 hover:text-white border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-all active:scale-90 overflow-hidden"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/5 to-transparent" />
          <span className="pointer-events-none absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white/30 blur-md" />

          <svg className="relative w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );

  // If on desktop screen AND user hasn't explicitly chosen 'phoneFrame' view:
  if (isDesktop && viewMode !== 'phoneFrame') {
    return (
      <DesktopLightPrompt
        onSwitchToPhoneFrame={() => setViewMode('phoneFrame')}
      />
    );
  }

  // Envelope intro overlay: sits above the invite, starts the music on open
  const envelopeOverlay = showEnvelope && (
    <EnvelopeIntro
      onOpen={handleStartMusic}
      onOpenComplete={() => setShowEnvelope(false)}
    />
  );

  // If on desktop screen AND user chose 'phoneFrame':
  if (isDesktop && viewMode === 'phoneFrame') {
    return (
      <MobileFrameWrapper onShowDesktopModal={() => setViewMode('desktopModal')}>
        {invitationContent}
        {envelopeOverlay}
      </MobileFrameWrapper>
    );
  }

  // Pure Mobile Device View
  return (
    <>
      {invitationContent}
      {envelopeOverlay}
    </>
  );
}
