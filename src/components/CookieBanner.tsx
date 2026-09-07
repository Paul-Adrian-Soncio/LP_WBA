"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("cookie-accepted")) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem("cookie-accepted", "1");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-charcoal text-cream/85 px-6 py-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
      <p className="text-sm max-w-3xl text-center sm:text-left">
        This website uses cookies. We use cookies to analyze website traffic
        and optimize your website experience. By accepting our use of
        cookies, your data will be aggregated with all other user data.
      </p>
      <button
        onClick={accept}
        className="shrink-0 bg-gold hover:bg-gold-light transition-colors text-charcoal px-6 py-2 text-sm tracking-widest uppercase"
      >
        Accept
      </button>
    </div>
  );
}
