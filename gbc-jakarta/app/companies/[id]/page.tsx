"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCompanyById, companies } from "../../lib/companies";

export default function CompanyDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const company = getCompanyById(id);

  if (!company) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-primary mb-4">
              Company Not Found
            </h1>
            <p className="text-text-light mb-8">
              The company you are looking for does not exist.
            </p>
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold"
            >
              <i className="fas fa-arrow-left" /> Back to Companies
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get 3 related companies (random, excluding current)
  const relatedCompanies = companies
    .filter((c) => c.id !== company.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Company Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-primary via-primary-light to-[#2d5a9e] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(0, 194, 203, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-[5%] relative z-[1]">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Logo */}
            <div className="w-[140px] h-[140px] bg-white rounded-3xl flex items-center justify-center p-6 shadow-2xl shrink-0">
              <span className="font-display font-extrabold text-base text-primary text-center">
                {company.name.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>

            {/* Text */}
            <div className="text-white text-center md:text-left">
              <span className="inline-block bg-accent/20 border border-accent/40 text-accent px-5 py-2 rounded-full text-[0.85rem] font-semibold mb-4">
                {company.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold mb-2">
                {company.name}
              </h1>
              <p className="text-xl opacity-85 mb-6">{company.shortDesc}</p>
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-[0.95rem] opacity-80">
                  <i className="fas fa-map-marker-alt text-accent" />
                  <span>Gyeonggi-do, South Korea</span>
                </div>
                <div className="flex items-center gap-2 text-[0.95rem] opacity-80">
                  <i className="fas fa-calendar text-accent" />
                  <span>GMS Batch 1 (2025)</span>
                </div>
                <div className="flex items-center gap-2 text-[0.95rem] opacity-80">
                  <i className="fas fa-industry text-accent" />
                  <span>{company.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            {/* Main Content */}
            <div>
              {/* About Company */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-gray-100 flex items-center gap-3">
                  <i className="fas fa-building text-accent" /> About Company
                </h2>
                <div className="space-y-5">
                  <p className="text-text-light text-[1.05rem] leading-[1.9]">
                    {company.desc1}
                  </p>
                  <p className="text-text-light text-[1.05rem] leading-[1.9]">
                    {company.desc2}
                  </p>
                  <p className="text-text-light text-[1.05rem] leading-[1.9]">
                    {company.desc3}
                  </p>
                  <p className="text-text-light text-[1.05rem] leading-[1.9]">
                    {company.desc4}
                  </p>
                </div>
              </div>

              {/* Company Image */}
              <div className="mb-12">
                <h2 className="font-display text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-gray-100 flex items-center gap-3">
                  <i className="fas fa-images text-accent" /> Gallery
                </h2>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-[100px] lg:self-start">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-6">
                <h3 className="font-display text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <i className="fas fa-address-card text-accent" /> Contact via
                  GBC
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <label className="block text-[0.75rem] text-text-muted uppercase tracking-[0.05em] mb-0.5">
                        Email
                      </label>
                      <a
                        href="mailto:gbcjkt@gbcprime.com"
                        className="text-[0.95rem] text-primary font-medium hover:text-accent transition-colors"
                      >
                        gbcjkt@gbcprime.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <label className="block text-[0.75rem] text-text-muted uppercase tracking-[0.05em] mb-0.5">
                        Phone
                      </label>
                      <span className="text-[0.95rem] text-text font-medium">
                        +62 21 3971 2135
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href={`https://wa.me/628118160627?text=Hi%20GBC%20Jakarta,%20I'm%20interested%20in%20${encodeURIComponent(
                      company.name
                    )}%20products`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-xl font-semibold transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,211,102,0.3)]"
                  >
                    <i className="fab fa-whatsapp" /> Inquire via WhatsApp
                  </a>
                  <Link
                    href="/companies"
                    className="flex items-center justify-center gap-3 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <i className="fas fa-arrow-left" /> Back to Companies
                  </Link>
                </div>
              </div>

              {/* Company Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-display text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <i className="fas fa-chart-bar text-accent" /> Company
                  Overview
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#f9fafb] rounded-xl">
                    <span className="font-display text-2xl font-extrabold text-primary block">
                      GMS
                    </span>
                    <span className="text-[0.8rem] text-text-light">
                      Program
                    </span>
                  </div>
                  <div className="text-center p-4 bg-[#f9fafb] rounded-xl">
                    <span className="font-display text-2xl font-extrabold text-primary block">
                      2025
                    </span>
                    <span className="text-[0.8rem] text-text-light">
                      Batch 1
                    </span>
                  </div>
                  <div className="text-center p-4 bg-[#f9fafb] rounded-xl">
                    <span className="font-display text-2xl font-extrabold text-primary block">
                      KR
                    </span>
                    <span className="text-[0.8rem] text-text-light">
                      Origin
                    </span>
                  </div>
                  <div className="text-center p-4 bg-[#f9fafb] rounded-xl">
                    <span className="font-display text-2xl font-extrabold text-primary block">
                      ID
                    </span>
                    <span className="text-[0.8rem] text-text-light">
                      Target Market
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Companies */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Other Companies You May Be Interested In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCompanies.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-[20px] p-8 transition-all duration-400 border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="w-20 h-20 bg-[#f9fafb] rounded-2xl flex items-center justify-center mb-6 font-display font-bold text-[0.75rem] text-primary text-center p-2">
                  {c.name.split(" ")[0]}
                </div>
                <h4 className="text-lg font-bold text-text mb-2">{c.name}</h4>
                <span className="inline-block bg-accent/10 text-primary-light px-3.5 py-1.5 rounded-[20px] text-[0.75rem] font-semibold mb-4">
                  {c.category}
                </span>
                <p className="text-[0.9rem] text-text-light leading-[1.7] mb-6">
                  {c.shortDesc}
                </p>
                <Link
                  href={`/companies/${c.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-[0.9rem] transition-all duration-300 hover:gap-3"
                >
                  View Details <i className="fas fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
