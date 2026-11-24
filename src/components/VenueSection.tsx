import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, MapPin } from 'lucide-react';
import { RoyalDivider, RoyalMonogramCrest, TurkmenGolCorner } from './RoyalOrnament';
import venueBanquetImage from '../assets/images/venue_ahal_banquet_1795453027921.jpg';

const VENUE_IMAGE_PATH = venueBanquetImage;
const VENUE_ADDRESS = 'Büzmeýin, Ahal toý mekany';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=B%C3%BCzme%C3%BDin+Ahal+toy+mekany+Ashgabat';

export function VenueSection() {
  const [imgFailed, setImgFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="mekany"
      aria-labelledby="venue-heading"
      className="border-t border-[#C9962B]/20 bg-gradient-to-b from-[#FAF3E4]/75 to-[#FDFBF7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Venue Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col justify-between border border-[#C9962B]/30 bg-white/90 p-8 sm:p-10 shadow-[0_24px_60px_-24px_rgba(154,109,20,0.2)]"
          >
            <TurkmenGolCorner position="top-left" />
            <TurkmenGolCorner position="bottom-right" />

            <div>
              <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#9A6D14]">
                Geçirilýän ýeri we salgy
              </p>
              <h2
                id="venue-heading"
                className="mt-2 font-royal text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#261B10] [text-wrap:balance]"
              >
                Ahal toý mekany
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-[#7B5614]">
                <span>Büzmeýin</span>
                <span aria-hidden="true" className="text-[#C9962B]">
                  ·
                </span>
                <span className="tabular-nums">11.12.2026ý.</span>
                <span aria-hidden="true" className="text-[#C9962B]">
                  ·
                </span>
                <span>Sagat 18:00</span>
              </div>

              <RoyalDivider className="my-6 justify-start" />

              <dl className="divide-y divide-[#C9962B]/20 border-y border-[#C9962B]/20 text-sm sm:text-[15px]">
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="font-medium text-[#7B5614]">Salgy</dt>
                  <dd className="col-span-2 font-semibold text-[#261B10]">
                    Büzmeýin etraby, Ahal toý mekany
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <dt className="font-medium text-[#7B5614]">Sene we wagt</dt>
                  <dd className="col-span-2 text-[#261B10] tabular-nums">
                    11-nji dekabr, 2026-njy ýyl · 18:00
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-gold inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Kartada görmek</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9962B]/35 bg-[#FDFBF7] px-5 py-3 text-sm font-medium text-[#463422] hover:bg-[#F5ECD8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A6D14]"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#8B6215]" aria-hidden="true" />
                    <span>Salgy göçürildi</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#9A6D14]" aria-hidden="true" />
                    <span>Salgyny göçürmek</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right: Luxury Banquet Hall Image */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px] overflow-hidden border border-[#C9962B]/30 bg-gradient-to-br from-[#F5ECD8] to-[#EBD8B7] shadow-[0_24px_60px_-24px_rgba(154,109,20,0.2)]"
          >
            {!imgFailed ? (
              <img
                src={VENUE_IMAGE_PATH}
                alt="Ahal toý mekany — şampan we altyn reňkli baýramçylyk zaly"
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                <RoyalMonogramCrest size={110} />
                <p className="mt-4 font-royal text-2xl font-semibold text-[#261B10]">
                  Büzmeýin, Ahal toý mekany
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
