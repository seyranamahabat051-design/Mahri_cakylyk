import React from 'react';
import { CalendarPlus } from 'lucide-react';

interface TopBarProps {
  onSaveDate: () => void;
}

export function TopBar({ onSaveDate }: TopBarProps) {
  return (
    <header className="relative z-20 border-b border-[#C9962B]/20 bg-[#FDFBF7]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 sm:px-8 py-4">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#cakylyk"
          className="font-royal text-2xl sm:text-[26px] font-semibold tracking-tight text-[#261B10] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A6D14]"
        >
          Serdar &amp; Mähri
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Esasy bölümler"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4730]"
        >
          <a
            href="#cakylyk"
            className="whitespace-nowrap shrink-0 hover:text-[#9A6D14] hover:underline underline-offset-8 decoration-[#C9962B]/60 transition-colors"
          >
            Çakylyk
          </a>
          <a
            href="#wagt"
            className="whitespace-nowrap shrink-0 hover:text-[#9A6D14] hover:underline underline-offset-8 decoration-[#C9962B]/60 transition-colors"
          >
            Wagt
          </a>
          <a
            href="#maksatnama"
            className="whitespace-nowrap shrink-0 hover:text-[#9A6D14] hover:underline underline-offset-8 decoration-[#C9962B]/60 transition-colors"
          >
            Maksatnama
          </a>
          <a
            href="#mekany"
            className="whitespace-nowrap shrink-0 hover:text-[#9A6D14] hover:underline underline-offset-8 decoration-[#C9962B]/60 transition-colors"
          >
            Mekany
          </a>
        </nav>

        {/* Zone 3: Single primary CTA */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onSaveDate}
            className="btn-royal-gold inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            <span>Senäni belläň</span>
          </button>
        </div>
      </div>
    </header>
  );
}
