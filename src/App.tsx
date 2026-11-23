/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Share2 } from 'lucide-react';
import { RoyalEntrance } from './components/RoyalEntrance';
import { GoldenParticles } from './components/GoldenParticles';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { ProgramSection } from './components/ProgramSection';
import { VenueSection } from './components/VenueSection';
import { MusicPlayerPill } from './components/MusicPlayerPill';
import { royalAudio } from './utils/audioEngine';
import { downloadWeddingCalendarEvent } from './utils/calendar';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      royalAudio.stop();
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleOpenInvitation = async (withMusic: boolean) => {
    setIsOpened(true);
    if (withMusic) {
      const started = await royalAudio.start();
      setIsMusicPlaying(started);
    }
  };

  const handleToggleMusic = async () => {
    if (isMusicPlaying) {
      royalAudio.stop();
      setIsMusicPlaying(false);
    } else {
      const started = await royalAudio.start();
      setIsMusicPlaying(started);
    }
  };

  const handleSaveDate = () => {
    downloadWeddingCalendarEvent();
    showToast('Sene senenama üçin ýüklendi (11.12.2026 · 18:00)');
  };

  const handleShareInvitation = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Serdar & Mähri — Döwletowlar maşgalasynyň bagt toýy',
          text: '11.12.2026ý. · Büzmeýin, Ahal toý mekany. Bagt toýumyza mähirli çagyrýarys!',
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy if user dismissed native share
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast('Çakylyk salgysy göçürildi');
    } catch {
      showToast('Çakylygy paýlaşmak üçin brauzeriň salgysyny göçüriň');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#261B10] selection:bg-[#F4CE6A]/45 selection:text-[#261B10]">
      {!isOpened && <RoyalEntrance onOpen={handleOpenInvitation} />}

      <GoldenParticles />

      <TopBar onSaveDate={handleSaveDate} />

      <main>
        <HeroSection
          onSaveDate={handleSaveDate}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={handleToggleMusic}
        />
        <CountdownSection />
        <ProgramSection />
        <VenueSection />
      </main>

      <footer className="border-t border-[#C9962B]/25 bg-[#FAF3E4]/65 py-10">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-8 text-center sm:text-left">
          <div>
            <p className="font-royal text-2xl font-semibold text-[#261B10]">
              Serdar &amp; Mähri
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#5C4730]">
              Döwletowlar maşgalasynyň bagt toýy · 11.12.2026ý. · Büzmeýin, Ahal toý mekany
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="text-xs font-medium text-[#8B6215]">
              Toýly günleriňiz gutly bolsun!
            </p>
            <button
              type="button"
              onClick={handleShareInvitation}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#C9962B]/40 bg-white px-3.5 py-2 text-xs font-semibold text-[#463422] hover:bg-[#F5ECD8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
            >
              <Share2 className="h-3.5 w-3.5 text-[#9A6D14]" aria-hidden="true" />
              <span>Çakylygy paýlaşmak</span>
            </button>
          </div>
        </div>
      </footer>

      {isOpened && (
        <MusicPlayerPill
          isPlaying={isMusicPlaying}
          onTogglePlay={handleToggleMusic}
        />
      )}

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-20 sm:bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-lg border border-[#C9962B]/40 bg-[#FDFBF7]/95 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#261B10] shadow-lg backdrop-blur-md"
          >
            <Check className="h-4 w-4 text-[#9A6D14] shrink-0" aria-hidden="true" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
