import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="reveal relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-sm">
            <Image
              src="/images/marci-portrait.jpg"
              alt="Marci Metzger, Pahrump Realtor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-8 bg-cream border border-gold/30 shadow-lg p-3 rounded-full">
            <Image
              src="/images/equal-housing.png"
              alt="Equal Housing Opportunity"
              width={56}
              height={56}
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>

        <div className="reveal">
          <p className="tracking-[0.3em] uppercase text-xs text-gold mb-4">About Marci</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Realtor for Nearly Three Decades
          </h2>
          <p className="text-stone leading-relaxed mb-5">
            Nervous about your property adventure? Don&rsquo;t be. Whether
            you&rsquo;re getting ready to buy or sell your residence, looking
            at investment properties, or just curious about the markets, our
            team ensures you get the best experience possible.
          </p>
          <p className="text-stone leading-relaxed mb-8">
            Licensed as a Broker in Seattle and now serving Southern Nevada,
            Marci brings big-market expertise to the Pahrump community she
            calls home.
          </p>
          <a
            href="#contact"
            className="inline-block bg-charcoal hover:bg-charcoal-soft transition-colors text-cream px-8 py-3.5 text-sm tracking-widest uppercase"
          >
            Work With Marci
          </a>
        </div>
      </div>
    </section>
  );
}
