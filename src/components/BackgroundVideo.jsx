import React, { useRef, useEffect } from 'react';

export default function BackgroundVideo({ isMuted, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(err => {
          console.warn("Autoplay prevented:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 bg-[#0D0814]">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/assets/cocktailparty_invitation1.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
      />

      {/* Clean video without dark overlays */}
    </div>
  );
}
