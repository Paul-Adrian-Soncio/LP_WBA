"use client";

import { useState } from "react";

const inputClasses =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-2 text-sm placeholder:text-stone/50";
const labelClasses = "block text-xs tracking-widest uppercase text-stone mb-1";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-cream-dark py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div className="reveal">
          <p className="tracking-[0.3em] uppercase text-xs text-gold mb-4">Call or Visit</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-5 leading-tight">
            Let&rsquo;s Talk About Your Next Move
          </h2>
          <p className="text-stone leading-relaxed mb-10">
            Appointments outside office hours available upon request.
            Just call!
          </p>

          <ul className="space-y-5 mb-10">
            <li className="flex items-start gap-3">
              <PinIcon />
              <span className="text-stone">
                3190 HW-160, Suite F
                <br />
                Pahrump, Nevada 89048
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon />
              <a href="tel:2069196886" className="text-stone hover:text-gold transition-colors">
                (206) 919-6886
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon />
              <span className="text-stone">Open Daily &middot; 8:00 AM &ndash; 7:00 PM</span>
            </li>
          </ul>

          <div className="flex gap-4">
            {["Facebook", "Instagram", "LinkedIn", "Yelp"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="reveal bg-cream border border-charcoal/10 p-8 md:p-10 space-y-6"
        >
          <div>
            <label className={labelClasses} htmlFor="c-name">Name</label>
            <input id="c-name" required className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="c-email">Email*</label>
            <input id="c-email" type="email" required className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="c-phone">Phone</label>
            <input id="c-phone" type="tel" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="c-message">Message</label>
            <textarea id="c-message" rows={4} className={`${inputClasses} resize-none`} />
          </div>
          <button
            type="submit"
            className="w-full bg-charcoal hover:bg-charcoal-soft transition-colors text-cream px-8 py-3.5 text-sm tracking-widest uppercase"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-sm text-stone text-center">
              Thanks for reaching out. We&rsquo;ll be in touch shortly.
            </p>
          )}
          <p className="text-xs text-stone/60 text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </form>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" className="text-gold mt-0.5 shrink-0">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" className="text-gold shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" className="text-gold shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23H.24V8.5zM8.5 8.5h4.31v1.98h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.94c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.67 1.81-2.67 3.68V23H8.5V8.5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.2 5.2c.2-.5.9-.6 1.5-.5l2.9.9c.6.2.9.8.6 1.4l-1.8 3.6a1 1 0 0 1-1.7.1l-1.8-2.9a1 1 0 0 1 .3-2.6zm-2.6 4.9 3.2 1.4a1 1 0 0 1 .1 1.8l-2.7 2a1 1 0 0 1-1.5-.7l-.4-3.4a1 1 0 0 1 1.3-1.1zm7.4 1.6 3.3-.8a1 1 0 0 1 1.1 1.4l-1.4 3a1 1 0 0 1-1.7.2l-2-2.4a1 1 0 0 1 .7-1.4z" />
        </svg>
      );
  }
}
