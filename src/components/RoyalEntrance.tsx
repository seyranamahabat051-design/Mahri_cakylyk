import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, VolumeX } from 'lucide-react';
import { RoyalMonogramCrest, TurkmenGolCorner } from './RoyalOrnament';

interface RoyalEntranceProps {
  onOpen: (withMusic: boolean) => void;
}

type EnvelopePhase = 'closed' | 'unsealing' | 'flap-open' | 'card-rising' | 'exiting';

export function RoyalEntrance({ onOpen }: RoyalEntranceProps) {
  const [phase, setPhase] = useState<EnvelopePhase>('closed');

  const handleOpenEnvelope = (withMusic: boolean) => {
    if (phase !== 'closed') return;

    // Stage 1: Wax seal lifts & dissolves with golden sparkle
    setPhase('unsealing');

    // Stage 2: Top triangular flap hinges open in 3D
    window.setTimeout(() => {
      setPhase('flap-open');
    }, 280);

    // Stage 3: Royal invitation card glides upward out of the envelope
    window.setTimeout(() => {
      setPhase('card-rising');
    }, 820);

    // Stage 4: Backdrop dissolves smoothly into the full invitation
    window.setTimeout(() => {
      setPhase('exiting');
    }, 1580);

    window.setTimeout(() => {
      onOpen(withMusic);
    }, 2050);
  };

  const isAnimating = phase !== 'closed';
  const isFlapOpen =
    phase === 'flap-open' || phase === 'card-rising' || phase === 'exiting';
  const isCardRising = phase === 'card-rising' || phase === 'exiting';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exiting' ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF2E1] to-[#F3E5C8] px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label="Toý çakylygy konwerti"
    >
      {/* Sunlit ambient royal glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(244,206,106,0.45) 0%, rgba(245,236,216,0.2) 55%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top Ceremonial Caption */}
      <motion.div
        animate={{
          opacity: isAnimating ? 0 : 1,
          y: isAnimating ? -12 : 0,
        }}
        transition={{ duration: 0.35 }}
        className="relative z-20 mb-6 sm:mb-8 text-center"
      >
        <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#9A6D14]">
          Hormatly myhmanlar üçin ýörite çakylyk
        </p>
        <h1 className="mt-1.5 font-royal text-3xl sm:text-4xl font-semibold text-[#261B10]">
          Serdar &amp; Mähri
        </h1>
        <p className="mt-0.5 font-royal text-lg sm:text-xl italic text-[#7B5614]">
          Döwletowlar maşgalasynyň bagt toýy · 11.12.2026ý.
        </p>
      </motion.div>

      {/* 3D Royal Envelope Stage */}
      <div
        className="relative z-20 w-full max-w-[440px] sm:max-w-[500px]"
        style={{ perspective: '1500px' }}
      >
        <motion.div
          animate={
            phase === 'closed'
              ? { y: [0, -6, 0] }
              : phase === 'exiting'
                ? { y: 40, scale: 1.05 }
                : { y: isCardRising ? 58 : 0 }
          }
          transition={
            phase === 'closed'
              ? { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
          }
          className="relative mx-auto aspect-[1.48/1] w-full"
        >
          {/* Envelope Drop Shadow */}
          <div
            className="pointer-events-none absolute -bottom-5 inset-x-6 h-8 rounded-full bg-[#7B5614]/20 blur-xl"
            aria-hidden="true"
          />

          {/* 1. Envelope Back Wall & Golden Champagne Interior */}
          <div className="absolute inset-0 rounded-md border border-[#C9962B]/45 bg-gradient-to-b from-[#EAD5AC] via-[#F4E6CA] to-[#EFE0C1] shadow-[0_28px_70px_-18px_rgba(123,86,20,0.35)]">
            {/* Inner subtle golden foil lining */}
            <div className="absolute inset-2 border border-[#C9962B]/30 bg-gradient-to-br from-[#F7ECD4] via-[#EBD2A0] to-[#DFBC78]/65" />
          </div>

          {/* 2. Sliding Pearl & Gold Invitation Letter Card inside Envelope */}
          <motion.div
            initial={{ y: 12, scale: 0.94, opacity: 0.96 }}
            animate={
              isCardRising
                ? { y: -125, scale: 1.02, opacity: 1 }
                : isFlapOpen
                  ? { y: -14, scale: 0.96, opacity: 1 }
                  : { y: 12, scale: 0.94, opacity: 0.95 }
            }
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-4 sm:inset-x-6 top-3 bottom-3 z-10 flex flex-col items-center justify-center rounded-sm border border-[#C9962B]/55 bg-[#FDFBF7] px-5 py-4 text-center shadow-[0_12px_32px_-8px_rgba(38,27,16,0.22)]"
          >
            <TurkmenGolCorner position="top-left" />
            <TurkmenGolCorner position="top-right" />
            <TurkmenGolCorner position="bottom-left" />
            <TurkmenGolCorner position="bottom-right" />

            <RoyalMonogramCrest size={64} />
            <p className="mt-2 font-royal text-2xl sm:text-3xl font-semibold text-[#261B10]">
              Serdar &amp; Mähri
            </p>
            <p className="mt-1 font-royal text-base sm:text-lg italic text-gold-foil">
              Bagt toýumyza çagyrýarys
            </p>
            <p className="mt-2 text-xs font-medium tracking-[0.14em] text-[#7B5614] tabular-nums">
              11.12.2026ý. · Ahal toý mekany
            </p>
          </motion.div>

          {/* 3. Left & Right Folded Envelope Side Flaps */}
          <div
            className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-md"
            aria-hidden="true"
          >
            {/* Left Flap */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F7EFE0] to-[#EAD8B6]"
              style={{ clipPath: 'polygon(0 0, 52% 52%, 0 100%)' }}
            />
            {/* Right Flap */}
            <div
              className="absolute inset-0 bg-gradient-to-bl from-[#FDFBF7] via-[#F7EFE0] to-[#EAD8B6]"
              style={{ clipPath: 'polygon(100% 0, 48% 52%, 100% 100%)' }}
            />

            {/* Bottom Pocket Flap */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#F3E5C8] via-[#FAF3E4] to-[#FDFBF7] shadow-[0_-6px_20px_rgba(123,86,20,0.12)]"
              style={{ clipPath: 'polygon(0 100%, 50% 44%, 100% 100%)' }}
            />

            {/* Gold hairline geometric V-fold seams */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <polyline
                points="0,100 50,44 100,100"
                fill="none"
                stroke="#C9962B"
                strokeWidth="0.6"
                strokeOpacity="0.65"
              />
              <line
                x1="0"
                y1="0"
                x2="48"
                y2="50"
                stroke="#C9962B"
                strokeWidth="0.45"
                strokeOpacity="0.4"
              />
              <line
                x1="100"
                y1="0"
                x2="52"
                y2="50"
                stroke="#C9962B"
                strokeWidth="0.45"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          {/* 4. Top Hinged 3D Triangular Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlapOpen ? -175 : 0 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              zIndex: isFlapOpen ? 5 : 30,
            }}
            className="absolute inset-x-0 top-0 h-[58%]"
          >
            {/* Front face of top flap */}
            <div
              className="absolute inset-0 border-t border-[#C9962B]/50 bg-gradient-to-b from-[#FDFBF7] via-[#F7EFE0] to-[#EEDBB8] shadow-[0_10px_25px_-10px_rgba(123,86,20,0.28)]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'hidden',
              }}
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <polyline
                  points="0,0 50,100 100,0"
                  fill="none"
                  stroke="#C9962B"
                  strokeWidth="0.8"
                  strokeOpacity="0.7"
                />
              </svg>
            </div>

            {/* Inner golden face visible after flap opens */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#EBD2A0] to-[#F6E8C8]"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden',
              }}
            />
          </motion.div>

          {/* 5. Interactive Embossed Royal Gold Wax Seal sitting on flap tip */}
          <AnimatePresence>
            {phase === 'closed' && (
              <motion.button
                type="button"
                onClick={() => handleOpenEnvelope(true)}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.45, opacity: 0, rotate: 24 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Konwerti açmak"
                className="absolute left-1/2 top-[56%] z-40 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-[#FFF3C4]/80 shadow-[0_12px_30px_rgba(123,86,20,0.45),inset_0_2px_6px_rgba(255,255,255,0.65)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A6D14]"
                style={{
                  background:
                    'radial-gradient(circle at 32% 30%, #FFF0B3 0%, #E7BD52 38%, #C48F22 76%, #9A6D14 100%)',
                }}
              >
                <span className="flex h-[82%] w-[82%] items-center justify-center rounded-full border border-[#7B5614]/45">
                  <span className="font-royal text-2xl sm:text-3xl font-bold tracking-wider text-[#261B10] drop-shadow-[0_1px_0_rgba(255,245,200,0.65)]">
                    S&amp;M
                  </span>
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Radiant golden sparkle burst when unsealing */}
          <AnimatePresence>
            {phase === 'unsealing' && (
              <motion.div
                initial={{ scale: 0.3, opacity: 0.9 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="pointer-events-none absolute left-1/2 top-[56%] z-40 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,243,196,0.95) 0%, rgba(244,206,106,0.55) 45%, transparent 75%)',
                }}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Action Buttons below Envelope */}
      <motion.div
        animate={{
          opacity: isAnimating ? 0 : 1,
          y: isAnimating ? 14 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative z-20 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5"
      >
        <button
          type="button"
          onClick={() => handleOpenEnvelope(true)}
          disabled={isAnimating}
          className="btn-royal-gold inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
        >
          <Music className="h-4 w-4" aria-hidden="true" />
          <span>Çakylygy açmak</span>
        </button>

        <button
          type="button"
          onClick={() => handleOpenEnvelope(false)}
          disabled={isAnimating}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#C9962B]/35 bg-white/85 px-5 py-3.5 text-sm font-medium text-[#5C4730] hover:bg-[#F5ECD8]/70 hover:text-[#261B10] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
        >
          <VolumeX className="h-4 w-4" aria-hidden="true" />
          <span>Sessiz açmak</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
