"use client";

import { useTranslation } from "../lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const directors = [
  { name: "Ho Jin Shin", role: "Director General" },
  { name: "Kim Tae Ho", role: "General Manager" },
];

const staff = [
  { name: "Satrio", role: "Engineering Manager" },
  { name: "Choirul", role: "Project Manager" },
  { name: "Jalu", role: "Product Marketing" },
  { name: "Caldha", role: "Marketing" },
  { name: "Azka", role: "Marketing" },
];

export default function TeamSection() {
  const { t } = useTranslation();

  return (
    <section className="py-36 bg-white relative overflow-hidden" id="team">

      {/* Wave divider top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,0 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Dot pattern — full */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(15,40,71,0.09) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }} />

      {/* Large blurred accent — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[650px] h-[650px] rounded-full bg-accent/10 blur-2xl pointer-events-none" />

      {/* Bold circle outline — bottom left */}
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full border-[55px] border-accent/10 pointer-events-none" />

      {/* Large blurred primary — top right */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-primary/8 blur-2xl pointer-events-none" />

      {/* Bold circle outline — top right */}
      <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border-[50px] border-primary/8 pointer-events-none" />

      {/* Floating symbols */}
      <div className="absolute top-20 left-[6%] text-accent/15 text-8xl font-bold pointer-events-none select-none leading-none">×</div>
      <div className="absolute bottom-16 right-[8%] text-primary/10 text-7xl font-bold pointer-events-none select-none leading-none">+</div>
      <div className="absolute top-1/2 right-[4%] text-accent/12 text-5xl pointer-events-none select-none leading-none">◦</div>

      {/* Decorative lines — left */}
      <div className="absolute left-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
        {[90, 55, 120, 45, 100, 60, 80].map((w, i) => (
          <div key={i} className="h-[3px] bg-accent/25 rounded-full" style={{ width: `${w}px` }} />
        ))}
      </div>

      {/* Decorative lines — right */}
      <div className="absolute right-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none">
        {[70, 100, 50, 90, 40, 80].map((w, i) => (
          <div key={i} className="h-[3px] bg-primary/12 rounded-full ml-auto" style={{ width: `${w}px` }} />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-[5%] relative z-[2]">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[600px] mx-auto mb-16">
          <div className="inline-flex items-center gap-3 text-accent font-semibold text-[0.9rem] tracking-[0.1em] uppercase mb-4 before:content-[''] before:w-10 before:h-0.5 before:bg-accent before:block">
            {t("ourTeam")}
          </div>
          <h2 className="font-display text-3xl md:text-[3rem] font-extrabold text-primary mb-6 leading-[1.2]">
            {t("teamTitle")}
          </h2>
        </ScrollReveal>

        {/* Org Structure */}
        <ScrollReveal className="max-w-[1000px] mx-auto">
          {directors.map((person, index) => (
            <div key={person.name}>
              {/* Director Card */}
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-primary to-primary-light text-white px-10 py-6 rounded-2xl text-center min-w-[220px] shadow-lg">
                  <h4 className="text-lg font-bold mb-1">{person.name}</h4>
                  <span className="text-[0.85rem] opacity-80">
                    {person.role}
                  </span>
                </div>
              </div>

              {/* Connecting Line */}
              {index < directors.length - 1 && (
                <div className="w-0.5 h-10 bg-gray-300 mx-auto" />
              )}
            </div>
          ))}

          {/* Line to staff */}
          <div className="w-0.5 h-10 bg-gray-300 mx-auto" />

          {/* Staff Grid */}
          <div className="flex justify-around gap-4 flex-wrap max-w-[1100px] mx-auto">
            {staff.map((person) => (
              <div
                key={person.name}
                className="bg-white text-text border-2 border-gray-200 shadow-md px-6 py-5 rounded-2xl text-center min-w-[180px]"
              >
                <h4 className="text-lg font-bold mb-1">{person.name}</h4>
                <span className="text-[0.85rem] text-text-light">
                  {person.role}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
