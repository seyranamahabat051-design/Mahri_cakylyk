import React from 'react';
import { Pause, Play, Music } from 'lucide-react';

interface MusicPlayerPillProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function MusicPlayerPill({
  isPlaying,
  onTogglePlay,
}: MusicPlayerPillProps) {
  return (
    <aside
      aria-label="Toý sazy"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-xl border border-[#C9962B]/40 bg-[#FDFBF7]/95 px-3.5 py-2 shadow-[0_14px_36px_-10px_rgba(38,27,16,0.22)] backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Sazy duruzmak' : 'Sazy çalmak'}
        className="btn-royal-gold flex h-9 w-9 items-center justify-center rounded-lg shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Play className="h-4 w-4 translate-x-[1px]" aria-hidden="true" />
        )}
      </button>

      <div className="flex items-center gap-1.5 pr-1 text-xs font-medium text-[#261B10] whitespace-nowrap">
        <Music className="h-3.5 w-3.5 text-[#9A6D14] shrink-0" aria-hidden="true" />
        <span>Mad Nazarov &amp; Jeren — My Love</span>
      </div>
    </aside>
  );
}
