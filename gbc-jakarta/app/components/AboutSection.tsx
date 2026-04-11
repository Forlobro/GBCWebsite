"use client";

import Image from "next/image";
import { useTranslation } from "../lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "fas fa-search-dollar",
      title: t("marketResearch"),
      desc: t("IndepthIndonesianmarketanalysis"),
    },
    {
      icon: "fas fa-users",
      title: t("businessMatching"),
      desc: t("connectWithLocalDistributors"),
    },
    {
      icon: "fas fa-file-signature",
      title: t("legalSupport"),
      desc: t("businessRegistrationGuidance"),
    },
    {
      icon: "fas fa-bullhorn",
      title: t("tradePromotion"),
      desc: t("tradeShowsExhibitions"),
    },
  ];

  return (
    <section className="py-36 bg-white relative" id="about">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Content */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 text-accent font-semibold text-[0.9rem] tracking-[0.1em] uppercase mb-4 before:content-[''] before:w-10 before:h-0.5 before:bg-accent before:block">
              {t("aboutLabel")}
            </div>

            <h2 className="font-display text-3xl md:text-[3rem] font-extrabold text-primary mb-6 leading-[1.2]">
              {t("aboutTitle")}
            </h2>

            <p className="text-text-light text-lg leading-[1.9] mb-8">
              {t("aboutDescription")}
            </p>
            <p className="text-text-light text-lg leading-[1.9] mb-8">
              {t("aboutDescription2")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                >
                  <div className="w-[50px] h-[50px] bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center text-accent text-xl shrink-0">
                    <i className={feature.icon} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[0.9rem] text-text-light m-0">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/ceremonial.png"
                alt="GBC Jakarta Opening Ceremony"
                width={800}
                height={600}
                className="w-full h-auto block object-cover aspect-[4/3]"
              />
            </div>
            {/* Decoration */}
            <div className="absolute w-[200px] h-[200px] border-[3px] border-accent rounded-3xl -top-[30px] -right-[30px] -z-[1]" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
