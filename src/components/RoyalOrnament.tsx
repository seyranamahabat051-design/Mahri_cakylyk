import React from 'react';

export function RoyalDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 select-none ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C9962B]/60 to-[#C9962B]" />
      <svg
        width="34"
        height="22"
        viewBox="0 0 34 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-[#C9962B]"
      >
        <path
          d="M17 1L22.5 11L17 21L11.5 11L17 1Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="#F4CE6A"
          fillOpacity="0.28"
        />
        <path
          d="M17 5.2L20 11L17 16.8L14 11L17 5.2Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M2 11H10M24 11H32"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="7" cy="11" r="1.4" fill="currentColor" />
        <circle cx="27" cy="11" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C9962B]/60 to-[#C9962B]" />
    </div>
  );
}

export function RoyalMonogramCrest({
  size = 84,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-slow-spin"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="royalGoldRing" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9A6D14" />
            <stop offset="45%" stopColor="#F5D77F" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="url(#royalGoldRing)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
        <circle
          cx="60"
          cy="60"
          r="46"
          stroke="url(#royalGoldRing)"
          strokeWidth="1.4"
        />
        {/* Subtle Turkmen octagon star motif */}
        <polygon
          points="60,8 71,22 89,19 86,37 104,48 92,60 104,72 86,83 89,101 71,98 60,112 49,98 31,101 34,83 16,72 28,60 16,48 34,37 31,19 49,22"
          stroke="url(#royalGoldRing)"
          strokeWidth="0.9"
          strokeOpacity="0.6"
          fill="none"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-royal text-2xl sm:text-3xl font-semibold tracking-wider text-gold-foil select-none">
          S&amp;M
        </span>
      </div>
    </div>
  );
}

export function TurkmenGolCorner({
  position = 'top-left',
}: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  const rotation =
    position === 'top-left'
      ? 'rotate-0'
      : position === 'top-right'
        ? 'rotate-90'
        : position === 'bottom-right'
          ? 'rotate-180'
          : '-rotate-90';

  const posClass =
    position === 'top-left'
      ? 'top-3 left-3'
      : position === 'top-right'
        ? 'top-3 right-3'
        : position === 'bottom-right'
          ? 'bottom-3 right-3'
          : 'bottom-3 left-3';

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute ${posClass} ${rotation} text-[#C9962B]/55`}
      aria-hidden="true"
    >
      <path d="M2 2H26M2 2V26" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 7H19M7 7V19" stroke="currentColor" strokeWidth="0.9" />
      <path d="M2 2L11 11" stroke="currentColor" strokeWidth="0.9" />
      <rect
        x="10.5"
        y="10.5"
        width="4"
        height="4"
        transform="rotate(45 10.5 10.5)"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}
