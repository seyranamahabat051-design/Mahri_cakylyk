import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { RoyalDivider } from './RoyalOrnament';

// 11 December 2026, 18:00 Ashgabat time (UTC+5)
const TARGET_TIMESTAMP = new Date('2026-12-11T18:00:00+05:00').getTime();

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

function computeTimeRemaining(): TimeRemaining {
  const diff = TARGET_TIMESTAMP - Date.now();
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isCompleted: false };
}

function padTwo(value: number): string {
  return String(value).padStart(2, '0');
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(computeTimeRemaining);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(computeTimeRemaining());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { label: 'Gün', value: String(timeLeft.days) },
    { label: 'Sagat', value: padTwo(timeLeft.hours) },
    { label: 'Minut', value: padTwo(timeLeft.minutes) },
    { label: 'Sekunt', value: padTwo(timeLeft.seconds) },
  ];

  return (
    <section
      id="wagt"
      aria-labelledby="countdown-heading"
      className="border-y border-[#C9962B]/25 bg-gradient-to-r from-[#FAF3E4] via-[#FDFBF7] to-[#FAF3E4] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#9A6D14]">
            Bagtly güne sanalgy pursatlar galdy
          </p>
          <h2
            id="countdown-heading"
            className="mt-2 font-royal text-3xl sm:text-4xl font-semibold text-[#261B10] [text-wrap:balance]"
          >
            Toýa galan wagt
          </h2>
          <RoyalDivider className="mt-4 mb-8" />
        </motion.div>

        {timeLeft.isCompleted ? (
          <div className="mx-auto max-w-2xl border border-[#C9962B]/40 bg-white/90 p-8 text-center">
            <p className="font-royal text-3xl font-semibold text-gold-foil">
              Şu gün bagt toýumyz!
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#5C4730]">
              Ahal toý mekanynda Sizi sabyrsyzlyk bilen garşy alýarys.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col items-center justify-center border border-[#C9962B]/30 bg-white/90 py-7 px-4 text-center shadow-[0_14px_32px_-20px_rgba(154,109,20,0.3)]"
              >
                <span className="font-royal text-4xl sm:text-5xl lg:text-6xl font-semibold tabular-nums tracking-tight text-gold-foil">
                  {unit.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-medium tracking-[0.14em] text-[#5C4730]">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
