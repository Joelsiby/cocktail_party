import React from 'react';

export default function DesktopLightPrompt() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-[#FAF7F2] text-center">
      <div className="relative max-w-lg w-full">
        {/* Simple line in elegant marital cursive & serif font */}
        <h2 className="font-cursive text-5xl sm:text-6xl text-[#6b5b4e] leading-tight mb-6">
          Kindly open this invitation on your mobile phone
        </h2>

        <p className="font-serif text-[#8b7d6b] text-xl leading-relaxed">
          Designed exclusively for portrait view
        </p>
      </div>
    </div>
  );
}
