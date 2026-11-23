import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RoyalDivider, RoyalMonogramCrest } from './RoyalOrnament';

const RINGS_IMAGE_PATH = '/src/assets/images/royal_silk_rings_1795453026309.jpg';

interface ScheduleStep {
  number: string;
  time: string;
  title: string;
  description: string;
}

const PROGRAM_STEPS: ScheduleStep[] = [
  {
    number: '01.',
    time: '18:00',
    title: 'Myhmanlary garşylamak',
    description:
      'Gadyrly myhmanlarymyzyň mähirli garşylanmagy, ýadygärlik surata düşmek we hoşamaýlyk pursady.',
  },
  {
    number: '02.',
    time: '19:00',
    title: 'Ýaşlaryň gelişi we ak pata',
    description:
      'Serdar bilen Mähriniň dabaraly girişi, maşgala ojagyna uly ilimiziň ak patasy we gutlag sözleri.',
  },
  {
    number: '03.',
    time: '20:00',
    title: 'Toý saçagy we aýdym-saz',
    description:
      'Bereketli türkmen toý saçagy, janly sazlar, şatlykly aýdymlar we ýürekden çykýan arzuwlar.',
  },
  {
    number: '04.',
    time: '21:30',
    title: 'Toý torty we baýramçylyk tansy',
    description:
      'Dabaraly toý tortunyň kesilmegi, ýaşlaryň ilkinji tansy we agşamyň şowhunly dowamy.',
  },
];

export function ProgramSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="maksatnama"
      aria-labelledby="program-heading"
      className="py-16 sm:py-24 bg-[#FDFBF7]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: Square Royal Rings Still Life */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="relative aspect-square w-full overflow-hidden border border-[#C9962B]/30 bg-gradient-to-br from-[#F5ECD8] to-[#EBD8B7] shadow-[0_24px_60px_-24px_rgba(154,109,20,0.2)]">
              {!imgFailed ? (
                <img
                  src={RINGS_IMAGE_PATH}
                  alt="Altyn nika ýüzükleri ak ýüpek matanyň üstünde"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                  <RoyalMonogramCrest size={110} />
                  <p className="mt-4 font-royal text-2xl font-semibold text-[#261B10]">
                    Goşa ýürek, bir ykbal
                  </p>
                </div>
              )}
            </div>

            <p className="mt-4 font-royal text-lg italic text-[#7B5614]">
              «Goşa ýürek bir ykbala birikdi, ömrüňiz gül açsyn bahar dek elmydam.»
            </p>
          </motion.div>

          {/* Right: Editorial Numbered Evening Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#9A6D14]">
              11-nji dekabr · Agşamky dabara
            </p>
            <h2
              id="program-heading"
              className="mt-2 font-royal text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#261B10] [text-wrap:balance]"
            >
              Toý maksatnamasy
            </h2>
            <RoyalDivider className="my-5 justify-start" />

            <div className="divide-y divide-[#C9962B]/25 border-y border-[#C9962B]/25">
              {PROGRAM_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 sm:py-6"
                >
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="font-royal text-xl font-semibold text-[#C9962B] tabular-nums">
                      {step.number}
                    </span>
                    <span className="font-royal text-2xl sm:text-[26px] font-semibold text-[#261B10] tabular-nums">
                      {step.time}
                    </span>
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="font-royal text-2xl font-semibold text-[#261B10]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-[15px] leading-relaxed text-[#5C4730]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
