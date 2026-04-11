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
    <section className="py-36 bg-white" id="team">
      <div className="max-w-[1400px] mx-auto px-[5%]">
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
