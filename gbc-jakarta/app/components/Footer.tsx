"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="GBC Jakarta"
              width={200}
              height={50}
              className="h-[50px] w-auto mb-6"
            />
            <p className="text-white/60 text-[0.95rem] leading-[1.8] max-w-[300px]">
              {t("gyeonggi")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#home"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#companies"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("companies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("marketResearch")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("businessMatching")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("tradePromotion")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("partnerships")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#home"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#companies"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("gmsCompanies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-accent"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-[0.9rem]">
            &copy; 2026 GBC Jakarta. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-white/50 text-[0.85rem]">Supported by:</span>
            <Image
              src="/images/gbsa-logo.png"
              alt="GBSA"
              width={120}
              height={30}
              className="h-[30px] w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
            <Image
              src="/images/gyeonggi-logo.png"
              alt="Gyeonggi-do"
              width={120}
              height={30}
              className="h-[30px] w-auto opacity-70 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
