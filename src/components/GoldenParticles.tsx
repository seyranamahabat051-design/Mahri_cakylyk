import React from 'react';

interface Mote {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
}

const MOTES: Mote[] = [
  { id: 1, left: '8%', top: '82%', size: 5, duration: '11s', delay: '0s' },
  { id: 2, left: '16%', top: '70%', size: 4, duration: '9s', delay: '1.5s' },
  { id: 3, left: '24%', top: '88%', size: 6, duration: '12s', delay: '3.2s' },
  { id: 4, left: '34%', top: '76%', size: 3, duration: '8.5s', delay: '0.8s' },
  { id: 5, left: '46%', top: '85%', size: 5, duration: '10.5s', delay: '2.4s' },
  { id: 6, left: '58%', top: '78%', size: 4, duration: '9.5s', delay: '4.1s' },
  { id: 7, left: '68%', top: '86%', size: 6, duration: '11.5s', delay: '1.2s' },
  { id: 8, left: '78%', top: '74%', size: 4, duration: '8.8s', delay: '3.6s' },
  { id: 9, left: '86%', top: '84%', size: 5, duration: '10s', delay: '0.4s' },
  { id: 10, left: '93%', top: '79%', size: 3, duration: '9.2s', delay: '2.8s' },
  { id: 11, left: '12%', top: '52%', size: 4, duration: '10.8s', delay: '5.0s' },
  { id: 12, left: '89%', top: '48%', size: 4, duration: '11.2s', delay: '4.5s' },
];

export function GoldenParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[55] overflow-hidden"
      aria-hidden="true"
    >
      {MOTES.map((mote) => (
        <span
          key={mote.id}
          className="animate-float-mote absolute rounded-full"
          style={
            {
              left: mote.left,
              top: mote.top,
              width: mote.size,
              height: mote.size,
              background:
                'radial-gradient(circle, #FFF8DC 0%, #F4CE6A 45%, rgba(201, 150, 43, 0) 100%)',
              boxShadow: '0 0 10px rgba(244, 206, 106, 0.55)',
              '--mote-duration': mote.duration,
              '--mote-delay': mote.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
