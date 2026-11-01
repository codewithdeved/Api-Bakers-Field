import React from 'react';
import PageHeader from '../components/PageHeader';
import { SPONSORS_DATA } from '../data/siteContent';
import { ExternalLink, Award, ShieldCheck, HeartHandshake, ArrowRight, DollarSign } from 'lucide-react';

export default function SponsorsPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Sponsors"
        category="Corporate Leadership & Contributors"
        breadcrumbs={[{ label: "Sponsors" }]}
        subtitle="We extend our deepest gratitude to our corporate sponsors, tournament contributors, and community partners."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Silver Sponsor Section (Verbatim Heading: California Resources Corporation is our Silver Sponsor) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 text-center space-y-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300 uppercase tracking-wider">
            Silver Sponsor
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            California Resources Corporation is our Silver Sponsor
          </h2>

          <div className="pt-4 max-w-md mx-auto">
            <a
              href={SPONSORS_DATA.silverSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-gold hover:shadow-md transition-all transform hover:scale-105"
            >
              <img
                src={SPONSORS_DATA.silverSponsor.logo}
                alt="California Resources Corporation is our Silver Sponsor"
                className="h-20 w-auto object-contain mx-auto"
              />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Visit <a href={SPONSORS_DATA.silverSponsor.url} target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold underline">www.crc.com</a> to learn more about California Resources Corporation.
          </p>
        </section>

        {/* Corporate Sponsors Section (Verbatim Heading: Thank you to our corporate sponsors Chevron and Enterprise) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 text-center space-y-8">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-light text-brand-navy border border-brand-gold/30 uppercase tracking-wider">
            Corporate Leadership
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Thank you to our corporate sponsors Chevron and Enterprise
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
            {SPONSORS_DATA.corporateSponsors.map((corp, idx) => (
              <a
                key={idx}
                href={corp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 flex items-center justify-center min-w-[240px]"
              >
                <img
                  src={corp.logo}
                  alt={`${corp.name} Corporate Sponsor`}
                  className="h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Annual Sponsors Grid (Verbatim Headings: API 2023 Golf, Fall Fun Shoot, and Oil Baron’s Ball SPONSORS / See below for additional sponsors and links to their website!) */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Tournament & Community Contributors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              API 2023 Golf, Fall Fun Shoot, and Oil Baron’s Ball SPONSORS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              See below for additional sponsors and links to their website! OCDI! top contributors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SPONSORS_DATA.annualSponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center h-36 group"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} Sponsor Logo`}
                  className="max-h-14 max-w-full object-contain mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-200"
                  onError={(e) => {
                    // Fallback to stylized name badge if image fails
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs font-bold text-slate-800 line-clamp-2">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsorship Inquiries Callout */}
        <div className="p-8 bg-brand-navy text-white rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Partner With Our Chapter</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Become an Official Chapter Sponsor</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sponsor advertising space in our monthly newsletter, feature your brand on our website, and support local student STEM scholarships.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/pay-online/sponsorship-payments')}
              className="px-6 py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center space-x-1.5 shrink-0"
            >
              <span>Pay Sponsorship Invoice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:Dtrahan8@slb.com"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all shrink-0"
            >
              Contact Dustin Trahan (SLB)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
