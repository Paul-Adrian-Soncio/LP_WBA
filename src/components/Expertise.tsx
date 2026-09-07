import Image from "next/image";

const cards = [
  {
    img: "/images/stock-listing1.jpg",
    alt: "Cozy, well-styled living room",
    title: "Real Estate Done Right",
    copy: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible.",
  },
  {
    img: "/images/stock-listing2.jpg",
    alt: "Modern home with mountain views",
    title: "Commercial & Residential",
    copy: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it. We live, work, and play in this community, happy to help you find where to put your hard-earned dollars.",
  },
  {
    img: "/images/stock-listing3.jpg",
    alt: "Agent shaking hands with a client",
    title: "Rely on Expertise",
    copy: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-medium">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <article key={c.title} className="reveal group overflow-hidden">
              <div className="relative aspect-square overflow-hidden rounded-full max-w-xs mx-auto">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 60vw, 320px"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="font-heading text-2xl font-medium mb-3">{c.title}</h3>
                <p className="text-stone text-sm leading-relaxed max-w-xs mx-auto">{c.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
