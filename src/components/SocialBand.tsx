import { SOCIAL_LINKS, SocialIcon } from "./SocialIcons";

export default function SocialBand() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-15">
        {SOCIAL_LINKS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="reveal w-11 h-11 rounded-full bg-cream text-charcoal flex items-center justify-center hover:bg-gold transition-colors"
          >
            <SocialIcon name={name} />
          </a>
        ))}
      </div>
    </section>
  );
}
