export function downloadWeddingCalendarEvent(): void {
  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dowletowlar//Serdar & Mahri Bagt Toyy//TK',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:serdar-mahri-20261211@dowletowlar.tm',
    'DTSTAMP:20261123T080000Z',
    // 11.12.2026 18:00 Ashgabat (UTC+5) = 13:00 UTC
    'DTSTART:20261211T130000Z',
    // 11.12.2026 23:30 Ashgabat (UTC+5) = 18:30 UTC
    'DTEND:20261211T183000Z',
    'SUMMARY:Serdar & Mähri — Döwletowlar maşgalasynyň bagt toýy',
    'DESCRIPTION:Hormatly myhmanlar! Serdar bilen Mähriniň bagt toýuna Sizi mähirli çagyrýarys. Başlanýan wagty: 18:00.',
    'LOCATION:Ahal toý mekany, Büzmeýin, Aşgabat',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const blob = new Blob([icsLines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'Serdar-Mahri-Bagt-Toyy-11-12-2026.ics';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
