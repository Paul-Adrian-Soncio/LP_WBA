import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/stock-list.jpg"
        alt="Luxury Pahrump home with pool and mountain views"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/20" />

      <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center text-cream">
        <p className="reveal tracking-[0.3em] uppercase text-xs md:text-sm text-gold-light mb-4">
          The Ridge Realty Group
        </p>
        <h1 className="reveal font-heading text-6xl sm:text-7xl md:text-8xl font-medium leading-none">
          Pahrump Realtor
        </h1>
        <p className="reveal mt-6 max-w-xl text-base md:text-lg text-cream/85 font-light">
          Marci Metzger has nearly three decades of real estate experience,
          helping buyers and sellers find their place in Southern Nevada&rsquo;s
          most sought-after homes.
        </p>
        <div className="reveal mt-9 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:2069196886"
            className="bg-gold hover:bg-gold-light transition-colors text-charcoal px-8 py-3.5 text-sm tracking-widest uppercase font-medium"
          >
            Call Now: (206) 919-6886
          </a>
          <a
            href="#listings"
            className="border border-cream/70 hover:bg-cream hover:text-charcoal transition-colors px-8 py-3.5 text-sm tracking-widest uppercase"
          >
            Search Listings
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="block w-[1px] h-14 bg-cream/60 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/3 bg-gold-light animate-scrollcue" />
        </span>
      </a>
    </section>
  );
}
