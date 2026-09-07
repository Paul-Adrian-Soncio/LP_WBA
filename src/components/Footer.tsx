import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-12">
        <div>
          <Image
            src="/images/logo.png"
            alt="Marci Metzger Homes"
            width={180}
            height={56}
            className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
          />
          <p className="text-sm leading-relaxed text-cream/60">
            Marci Metzger, The Ridge Realty Group
            <br />
            Pahrump&rsquo;s trusted real estate partner.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4 text-cream">Explore</h4>
          <nav className="flex flex-col gap-2 text-sm text-cream/60">
            <a href="#top" className="visited:text-cream/60 hover:text-gold-light transition-colors">Home</a>
            <a href="#listings" className="visited:text-cream/60 hover:text-gold-light transition-colors">Listings</a>
            <a href="#move" className="visited:text-cream/60 hover:text-gold-light transition-colors">Let&rsquo;s Move</a>
            <a href="#about" className="visited:text-cream/60 hover:text-gold-light transition-colors">About Us</a>
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4 text-cream">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-cream/60">
            <p>3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p>
            <a href="tel:2069196886" className="hover:text-gold-light transition-colors">
              (206) 919-6886
            </a>
            <p>Open Daily &middot; 8:00 AM &ndash; 7:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>Copyright &copy; 2026 Marci Metzger. All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
