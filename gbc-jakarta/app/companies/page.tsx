"use client";

import Link from "next/link";
import { useTranslation } from "../lib/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { companies } from "../lib/companies";

export default function CompaniesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-36 bg-[#f8fafc]" id="companies">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          {/* Header */}
          <ScrollReveal className="text-center max-w-[700px] mx-auto mb-16">
            <div className="inline-flex items-center gap-3 text-accent font-semibold text-[0.9rem] tracking-[0.1em] uppercase mb-4 before:content-[''] before:w-10 before:h-0.5 before:bg-accent before:block">
              GMS Program
            </div>
            <h2 className="font-display text-3xl md:text-[3rem] font-extrabold text-primary mb-6 leading-[1.2]">
              {t("featured")}
            </h2>
            <p className="text-text-light text-lg">{t("discover")}</p>
          </ScrollReveal>

          {/* Filter Buttons */}
          <ScrollReveal className="flex justify-center gap-3 flex-wrap mb-12">
            {[
              t("all"),
              t("industrial"),
              t("safetyEnvironment"),
              t("beautyLifestyle"),
              t("agriculture"),
              t("fb"),
            ].map((label, i) => (
              <button
                key={label}
                className={`px-6 py-3 border-2 rounded-full text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ${
                  i === 0
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-gray-200 text-text-light hover:border-primary hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </ScrollReveal>

          {/* All Company Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <ScrollReveal key={company.id}>
                <div className="bg-white rounded-[20px] p-8 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-accent before:to-[#00a8b0] before:scale-x-0 before:transition-transform before:duration-400 hover:before:scale-x-100">
                  {/* Company Logo */}
                  <div
                    className={`${
                      company.name.length > 12
                        ? "w-[200px] h-20"
                        : "w-20 h-20"
                    } bg-[#f9fafb] rounded-2xl flex items-center justify-center mb-6 font-display font-bold text-[0.75rem] text-primary text-center p-2`}
                  >
                    {company.name.split(" ").slice(0, 2).join(" ")}
                  </div>

                  <h4 className="text-lg font-bold text-text mb-2">
                    {company.name}
                  </h4>

                  <span className="inline-block bg-accent/10 text-primary-light px-3.5 py-1.5 rounded-[20px] text-[0.75rem] font-semibold mb-4">
                    {company.category}
                  </span>

                  <p className="text-[0.9rem] text-text-light leading-[1.7] mb-6">
                    {company.shortDesc}
                  </p>

                  <Link
                    href={`/companies/${company.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-[0.9rem] transition-all duration-300 hover:gap-3"
                  >
                    {t("viewDetails")}{" "}
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
