"use client";

import { useState } from "react";

const selectClasses =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-2 text-sm appearance-none";
const inputClasses =
  "w-full bg-transparent border-b border-charcoal/20 focus:border-gold outline-none py-2 text-sm placeholder:text-stone/60";
const labelClasses = "block text-xs tracking-widest uppercase text-stone mb-1";

export default function Listings() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="listings" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <p className="tracking-[0.3em] uppercase text-xs text-gold mb-4">
            Find Your Dream Home
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium">Search Listings</h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="reveal bg-cream-dark/60 border border-charcoal/10 p-8 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-16"
        >
          <div>
            <label className={labelClasses} htmlFor="s-location">Location</label>
            <input id="s-location" className={inputClasses} placeholder="City, ZIP, or Neighborhood" />
          </div>
          <div>
            <label className={labelClasses} htmlFor="s-type">Type</label>
            <select id="s-type" className={selectClasses} defaultValue="Any">
              <option>Any</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="s-beds">Bedrooms</label>
            <select id="s-beds" className={selectClasses} defaultValue="Any Number">
              <option>Any Number</option>
              <option>Studio</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="s-baths">Bathrooms</label>
            <select id="s-baths" className={selectClasses} defaultValue="Any Number">
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="s-min">Min Price</label>
            <input id="s-min" className={inputClasses} placeholder="$0" />
          </div>
          <div>
            <label className={labelClasses} htmlFor="s-max">Max Price</label>
            <input id="s-max" className={inputClasses} placeholder="No Max" />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="s-sort">Sort By</label>
            <select id="s-sort" className={selectClasses} defaultValue="Newest">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Least Expensive to Most</option>
              <option>Most Expensive to Least</option>
              <option>Bedrooms (Low to High)</option>
              <option>Bedrooms (High to Low)</option>
              <option>Bathrooms (Low to High)</option>
              <option>Bathrooms (High to Low)</option>
            </select>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center gap-3 pt-2">
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light transition-colors text-charcoal px-10 py-3.5 text-sm tracking-widest uppercase font-medium"
            >
              Search Now
            </button>
            {submitted && (
              <p className="text-sm text-stone">
                Thanks! We&rsquo;ll email you a list of matching homes shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
