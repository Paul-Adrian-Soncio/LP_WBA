import Image from "next/image";

const badges = [
  { src: "/images/big-circle-logo.png", alt: "Marci Metzger badge" },
  { src: "/images/realtor-pin.jpg", alt: "Realtor Pin" },
  { src: "/images/chamber.jpg", alt: "Chamber of Commerce Member" },
];

export default function Expertise() {
  return (
    <section className="bg-charcoal text-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
        <div className="reveal">
          <p className="tracking-[0.3em] uppercase text-xs text-gold-light mb-4">
            Rely on Expertise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Commercial &amp; Residential
          </h2>
          <p className="text-cream/75 leading-relaxed mb-5">
            Large or small, condo or mansion, we can find it and get it
            at the price that&rsquo;s right. Fixer-uppers? Luxury? We can help
            with all of it. We live, work, and play in this community, and
            we&rsquo;re happy to help you find where to put your hard-earned
            dollars.
          </p>
          <p className="text-cream/75 leading-relaxed">
            If you have questions about affordability, credit, or loan
            options, trust us to connect you with the right people to get the
            answers you need in a timely fashion. We make sure you feel
            confident and educated every step of the way.
          </p>
        </div>

        <div className="reveal flex items-center justify-center gap-6 md:gap-8 flex-wrap">
          {badges.map((b) => (
            <div
              key={b.src}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/95 p-3 flex items-center justify-center shrink-0"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={80}
                height={80}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
