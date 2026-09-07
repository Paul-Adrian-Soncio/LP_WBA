import GridMotion from "./GridMotion";

const GRID_IMAGES = [
  "/images/gallery/beacon-ridge-1.jpg",
  "/images/gallery/roseworthy.jpg",
  "/images/gallery/ailanto-1.jpg",
  "/images/gallery/beacon-ridge-2.jpg",
  "/images/gallery/ailanto-2.jpg",
  "/images/gallery/beacon-ridge-3.jpg",
  "/images/gallery/ailanto-3.jpg",
];

const gridItems = Array.from({ length: 28 }, (_, i) => GRID_IMAGES[i % GRID_IMAGES.length]);

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[600px] h-screen sm:h-[92vh] w-full overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <GridMotion items={gridItems} gradientColor="#262220" />
      </div>
      <div className="absolute inset-0 bg-charcoal/35" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 py-24">
        <div className="reveal max-w-2xl w-full bg-charcoal/70 backdrop-blur-md border border-cream/10 px-5 py-6 sm:px-12 sm:py-14 text-center text-cream">
          <p className="tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm text-gold-light mb-2 sm:mb-4">
            The Ridge Realty Group
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-medium leading-none">
            Pahrump Realtor
          </h1>
          <p className="mt-3 sm:mt-6 text-sm sm:text-base md:text-lg text-cream/90 font-light">
            Marci Metzger has nearly three decades of real estate experience,
            helping buyers and sellers find their place in Southern Nevada&rsquo;s
            most sought-after homes.
          </p>
          <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:2069196886"
              className="bg-gold hover:bg-gold-light transition-colors text-charcoal px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm tracking-widest uppercase font-medium"
            >
              Call Now: (206) 919-6886
            </a>
            <a
              href="#listings"
              className="border border-cream/70 hover:bg-cream hover:text-charcoal transition-colors px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm tracking-widest uppercase"
            >
              Search Listings
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="block w-[1px] h-14 bg-cream/60 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/3 bg-gold-light animate-scrollcue" />
        </span>
      </a>
    </section>
  );
}
