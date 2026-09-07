import Image from "next/image";

const services = [
  {
    img: "/images/stock-sold.jpg",
    alt: "Beautifully sold modern home interior",
    title: "Get It Sold",
    copy: "We helped nearly 90 clients in 2021, closing $28.5 million in sales. Our team is committed to continuous improvement — our clients deserve our best, and we make sure our best gets better every year.",
  },
  {
    img: "/images/stock-listing2.jpg",
    alt: "Home listing ready for market",
    title: "Don't Just List It",
    copy: "Get it sold. We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer — getting you top dollar for your home.",
  },
  {
    img: "/images/stock-buyers.jpg",
    alt: "House keys, ready for new homeowners",
    title: "Guide to Buyers",
    copy: "Nobody knows the market like we do. Enjoy having a pro at your service — market analysis, upgrade lists, contractors on speed dial, and more.",
  },
];

export default function Services() {
  return (
    <section id="move" className="bg-cream-dark py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="tracking-[0.3em] uppercase text-xs text-gold mb-4">Let&rsquo;s Move</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-5">
            Real Estate, Done Right
          </h2>
          <p className="text-stone leading-relaxed">
            From listing to closing, every step is handled with expertise,
            care, and local know-how.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal bg-cream group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-heading text-2xl font-medium mb-3">{s.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
