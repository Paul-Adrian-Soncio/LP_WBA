"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

export interface LightboxPhoto {
  src: string;
  alt: string;
  label?: string;
}

export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const count = photos.length;
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const goNext = useCallback(() => onNavigate((index + 1) % count), [index, count, onNavigate]);
  const goPrev = useCallback(() => onNavigate((index - 1 + count) % count), [index, count, onNavigate]);

  const requestClose = useCallback(() => {
    setClosing(true);
    setVisible(false);
    window.setTimeout(onClose, 220);
  }, [onClose]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [requestClose, goNext, goPrev]);

  const photo = photos[index];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-10 transition-opacity duration-200 ease-out ${
        visible && !closing ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={photo.label || photo.alt}
      onClick={requestClose}
    >
      <button
        onClick={requestClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 text-cream/80 hover:text-cream transition-colors"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 md:left-6 text-cream/70 hover:text-cream transition-colors p-2"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 md:right-6 text-cream/70 hover:text-cream transition-colors p-2"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div
        className={`relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10] transition-transform duration-200 ease-out ${
          visible && !closing ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
        {photo.label && (
          <p className="absolute -bottom-9 left-0 right-0 text-center text-cream/70 text-sm tracking-wide">
            {photo.label}
          </p>
        )}
      </div>
    </div>
  );
}
