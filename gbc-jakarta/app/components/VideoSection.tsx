"use client";

import { useState } from "react";

const VIDEOS = [
  { id: "J4aWZjyJ3A4", title: "GBC Jakarta Video 1" },
  { id: "VtZSCi0TgqI", title: "GBC Jakarta Video 2" },
];

export default function VideoSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? VIDEOS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === VIDEOS.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-gray-50" id="video">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
            GBC Jakarta
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-text leading-tight">
            Mengenal GBC Jakarta
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                key={VIDEOS[current].id}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEOS[current].id}`}
                title={VIDEOS[current].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-gray-300"
                }`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
