import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import VenueSection from './components/VenueSection';
import RsvpModal from './components/RsvpModal';
import DesktopLightPrompt from './components/DesktopLightPrompt';
import MobileFrameWrapper from './components/MobileFrameWrapper';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
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

  const handleRedirectToMaps = () => {
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Cochin+Yacht+Club,+W8V3%2B6JR,+Yacht+Club+Enclave+Rd,+Priyadarshini+Nagar,+Konthuruthy,+Thevara,+Kochi,+Ernakulam,+Kerala+682013";
    window.open(mapsUrl, "_blank");
  };

  // Clean Video View Content (Clicking anywhere redirects to Cochin Yacht Club on Maps)
  const invitationContent = (
    <div
      onClick={handleRedirectToMaps}
      className="relative w-full h-full min-h-screen overflow-hidden cursor-pointer select-none"
    >
      {/* Clean Background Video */}
      <BackgroundVideo isMuted={isMuted} isPlaying={isPlaying} />

      {/* Subtle Floating Mute/Unmute Icon Button in Top Right */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents map redirect when toggling sound
          toggleMute();
        }}
        className="fixed top-4 right-4 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white border border-white/20 backdrop-blur-sm transition-all active:scale-95 shadow-lg"
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
      >
        {isMuted ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-amber-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
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

  // If on desktop screen AND user chose 'phoneFrame':
  if (isDesktop && viewMode === 'phoneFrame') {
    return (
      <MobileFrameWrapper onShowDesktopModal={() => setViewMode('desktopModal')}>
        {invitationContent}
      </MobileFrameWrapper>
    );
  }

  // Pure Mobile Device View
  return invitationContent;
}
