const ADDRESS = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Marci Metzger, The Ridge Realty Group, " + ADDRESS
)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

export default function LocationMap() {
  return (
    <section className="relative h-[420px] md:h-[480px] w-full">
      <iframe
        title="Marci Metzger Homes location"
        src={EMBED_URL}
        className="absolute inset-0 w-full h-full border-0 grayscale-[35%] contrast-[1.05]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light transition-colors text-charcoal px-6 py-3 text-sm tracking-widest uppercase font-medium shadow-lg"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M19.94 6.078l-7.273 14.546c-.129.265-.345.398-.648.398a.71.71 0 0 1-.29-.06.75.75 0 0 1-.421-.474L9.362 14.64l-5.849-1.945a.75.75 0 0 1-.472-.421.726.726 0 0 1 .34-.94L17.928 4.06c.276-.138.577-.108.804.08.226.188.303.477.19.746l.017.017z" />
        </svg>
        Get Directions
      </a>
    </section>
  );
}
