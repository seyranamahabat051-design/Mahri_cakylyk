import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarPlus, Volume2, VolumeX } from 'lucide-react';
import { RoyalDivider, RoyalMonogramCrest, TurkmenGolCorner } from './RoyalOrnament';

interface HeroSectionProps {
  onSaveDate: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

const HERO_IMAGE_PATH = '/src/assets/images/ahal_toy_mekany_royal_1795453901531.jpg';

export function HeroSection({
  onSaveDate,
  isMusicPlaying,
  onToggleMusic,
}: HeroSectionProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="cakylyk"
      className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF3E4] to-[#FDFBF7] py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle radiant champagne halo */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(244,206,106,0.48) 0%, rgba(245,236,216,0.2) 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Editorial Royal Statement */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col justify-between border border-[#C9962B]/30 bg-white/80 p-8 sm:p-10 shadow-[0_24px_60px_-24px_rgba(154,109,20,0.22)]"
          >
            <TurkmenGolCorner position="top-left" />
            <TurkmenGolCorner position="top-right" />
            <TurkmenGolCorner position="bottom-left" />
            <TurkmenGolCorner position="bottom-right" />

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-[#8B6215]">
                <span className="tabular-nums">11.12.2026ý.</span>
                <span aria-hidden="true" className="text-[#C9962B]">
                  ·
                </span>
                <span>Sagat 18:00</span>
                <span aria-hidden="true" className="text-[#C9962B]">
                  ·
                </span>
                <span>Büzmeýin, Ahal toý mekany</span>
              </div>

              <h1 className="mt-5 font-royal text-[clamp(2.5rem,4.4vw,4rem)] leading-[1.04] font-semibold tracking-tight text-[#261B10] [text-wrap:balance]">
                Serdar &amp; Mähri
              </h1>

              <p className="mt-2 font-royal text-2xl sm:text-3xl font-medium italic text-gold-foil [text-wrap:balance]">
                Döwletowlar maşgalasynyň bagt toýy
              </p>

              <RoyalDivider className="my-6 justify-start" />

              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[#463422]">
                <p className="font-semibold text-[#261B10]">
                  Hormatly we mähriban myhmanlarymyz!
                </p>
                <p>
                  Durmuşymyzyň iň şatlykly, nurly we ýatdan çykmajak gününde —
                  Serdar bilen Mähriniň bagt toýuna Sizi ak ýürekden çagyrýarys.
                </p>
                <p>
                  Siziň mähirli gutlagyňyz, ak pataňyz we bu toý saçagynyň
                  başynda bilelikde paýlaşjak şatlygyňyz biziň täze maşgalamyz
                  üçin iň gymmatly sowgat bolar.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C9962B]/20 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onSaveDate}
                className="btn-royal-gold inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
              >
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                <span>Senäni belläň</span>
              </button>

              <button
                type="button"
                onClick={onToggleMusic}
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9962B]/35 bg-[#FDFBF7] px-5 py-3 text-sm font-medium text-[#463422] hover:bg-[#F5ECD8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
              >
                {isMusicPlaying ? (
                  <>
                    <Volume2 className="h-4 w-4 text-[#9A6D14]" aria-hidden="true" />
                    <span>Sazy öçür</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="h-4 w-4 text-[#9A6D14]" aria-hidden="true" />
                    <span>Sazy aç</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Royal Hall Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden border border-[#C9962B]/30 bg-gradient-to-br from-[#F5ECD8] via-[#FAF4E8] to-[#EBD8B7] shadow-[0_24px_60px_-24px_rgba(154,109,20,0.22)]"
          >
            {!imgFailed ? (
              <img
                src={HERO_IMAGE_PATH}
                alt="Büzmeýin, Ahal toý mekany — ak mermer we altyn bezegli dabaraly binasy"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                <RoyalMonogramCrest size={120} />
                <p className="mt-4 font-royal text-2xl font-semibold text-[#261B10]">
                  Ahal toý mekany
                </p>
                <p className="mt-1 text-sm text-[#5C4730]">
                  Büzmeýin · 11.12.2026ý.
                </p>
              </div>
            )}

            {/* Measured bottom contrast scrim for readable editorial caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261B10]/85 via-[#261B10]/40 to-transparent px-6 pt-16 pb-6">
              <div className="flex items-end justify-between gap-4 text-[#FDFBF7]">
                <div>
                  <p className="text-xs font-medium tracking-[0.16em] text-[#F4CE6A]">
                    Toý dabarasy
                  </p>
                  <p className="mt-1 font-royal text-2xl font-semibold">
                    Ahal toý mekany, Büzmeýin
                  </p>
                </div>
                <span className="font-royal text-xl italic text-[#F4CE6A] tabular-nums shrink-0">
                  11 · 12 · 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
