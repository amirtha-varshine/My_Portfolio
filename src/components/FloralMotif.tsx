import React from 'react';

interface FloralMotifProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const FloralMotif: React.FC<FloralMotifProps> = ({
  className = '',
  size = 48,
  opacity = 0.8
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="petalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6FB5" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#FF2E93" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C41E7A" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* 5-Petal Sakura Blossom */}
      {/* Center Pistils */}
      <circle cx="50" cy="50" r="6" fill="#FFE5F0" />
      <circle cx="50" cy="50" r="3" fill="#FF2E93" />

      {/* Petal 1 - Top */}
      <path
        d="M50 44 C42 30 38 14 50 6 C62 14 58 30 50 44 Z"
        fill="url(#petalGlow)"
        stroke="#FF6FB5"
        strokeWidth="1"
      />
      {/* Petal 2 - Top Right */}
      <path
        d="M54 48 C68 40 84 42 90 54 C82 64 66 60 54 48 Z"
        fill="url(#petalGlow)"
        stroke="#FF6FB5"
        strokeWidth="1"
        transform="rotate(72 50 50)"
      />
      {/* Petal 3 - Bottom Right */}
      <path
        d="M54 48 C68 40 84 42 90 54 C82 64 66 60 54 48 Z"
        fill="url(#petalGlow)"
        stroke="#FF6FB5"
        strokeWidth="1"
        transform="rotate(144 50 50)"
      />
      {/* Petal 4 - Bottom Left */}
      <path
        d="M54 48 C68 40 84 42 90 54 C82 64 66 60 54 48 Z"
        fill="url(#petalGlow)"
        stroke="#FF6FB5"
        strokeWidth="1"
        transform="rotate(216 50 50)"
      />
      {/* Petal 5 - Top Left */}
      <path
        d="M54 48 C68 40 84 42 90 54 C82 64 66 60 54 48 Z"
        fill="url(#petalGlow)"
        stroke="#FF6FB5"
        strokeWidth="1"
        transform="rotate(288 50 50)"
      />

      {/* Delicate stamens */}
      <line x1="50" y1="50" x2="50" y2="40" stroke="#FFE5F0" strokeWidth="1" />
      <circle cx="50" cy="39" r="1.5" fill="#FFE5F0" />
      <line x1="50" y1="50" x2="58" y2="44" stroke="#FFE5F0" strokeWidth="1" />
      <circle cx="59" cy="43" r="1.5" fill="#FFE5F0" />
      <line x1="50" y1="50" x2="56" y2="57" stroke="#FFE5F0" strokeWidth="1" />
      <circle cx="57" cy="58" r="1.5" fill="#FFE5F0" />
      <line x1="50" y1="50" x2="43" y2="56" stroke="#FFE5F0" strokeWidth="1" />
      <circle cx="42" cy="57" r="1.5" fill="#FFE5F0" />
      <line x1="50" y1="50" x2="42" y2="45" stroke="#FFE5F0" strokeWidth="1" />
      <circle cx="41" cy="44" r="1.5" fill="#FFE5F0" />
    </svg>
  );
};

export const BlossomBranch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
  >
    <path
      d="M10 110 Q60 70 120 75 T190 20"
      stroke="#3B2A4A"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M60 70 Q90 40 120 45"
      stroke="#3B2A4A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="120" cy="45" r="8" fill="#FF2E93" fillOpacity="0.8" />
    <circle cx="120" cy="45" r="4" fill="#FF6FB5" />
    <circle cx="160" cy="42" r="7" fill="#FF2E93" fillOpacity="0.75" />
    <circle cx="190" cy="20" r="9" fill="#FF6FB5" fillOpacity="0.9" />
    <circle cx="190" cy="20" r="3.5" fill="#FFFFFF" />
    <circle cx="95" cy="62" r="6" fill="#FF2E93" fillOpacity="0.7" />
  </svg>
);
