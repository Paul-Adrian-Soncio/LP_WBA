"use client";

import { useState } from "react";
import Image from "next/image";
import AccordionGallery from "./AccordionGallery";
import Lightbox from "./Lightbox";

const badges = [
  { src: "/images/big-circle-logo.png", alt: "The Ridge Realty Group" },
  { src: "/images/equal-housing.png", alt: "Equal Housing Opportunity" },
  { src: "/images/realtor-pin.jpg", alt: "Realtor" },
  { src: "/images/chamber.jpg", alt: "Pahrump Valley Chamber of Commerce" },
];

const photos = [
  {
    src: "/images/gallery/beacon-ridge-1.jpg",
    alt: "Aerial view of community pool and courts",
    label: "Community Courts",
  },
  {
    src: "/images/gallery/beacon-ridge-2.jpg",
    alt: "Bright sunroom with mountain views",
    label: "Sunroom Views",
  },
  {
    src: "/images/gallery/beacon-ridge-3.jpg",
    alt: "Neighborhood street view",
    label: "The Neighborhood",
  },
  {
    src: "/images/gallery/roseworthy.jpg",
    alt: "Aerial view of community amenities",
    label: "Community Amenities",
  },
  {
    src: "/images/gallery/ailanto-1.jpg",
    alt: "Community pool area",
    label: "Resort-Style Pool",
  },
  {
    src: "/images/gallery/ailanto-2.jpg",
    alt: "Tennis and pickleball courts",
    label: "Tennis & Pickleball",
  },
  {
    src: "/images/gallery/ailanto-3.jpg",
    alt: "Aerial view of neighborhood",
    label: "Aerial View",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-10 md:gap-35">
          {badges.map((b) => (
            <div
              key={b.src}
              className="reveal w-16 h-16 md:w-25 md:h-25 shrink-0"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-charcoal py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal text-center mb-14">
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-cream">
              Photo Gallery
            </h2>
          </div>

          <div className="reveal hidden md:block">
            <AccordionGallery
              items={photos.map((p) => ({
                image: p.src,
                alt: p.alt,
                label: p.label,
              }))}
              defaultIndex={0}
              accentColor="#b08d57"
              overlayColor="#262220"
              height={440}
              radius={4}
              trigger="hover"
              grayscale={false}
              onItemClick={(i) => setLightboxIndex(i)}
            />
          </div>

          <div className="grid sm:grid-cols-2 md:hidden gap-4">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="reveal relative aspect-[4/3] overflow-hidden group text-left"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
