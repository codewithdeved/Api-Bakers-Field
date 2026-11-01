import React from 'react';
import { 
  Calendar, Award, Users, ChevronRight, FileText, Download, 
  ExternalLink, Phone, Mail, CheckCircle2, Shield, HeartHandshake,
  Sparkles, ArrowRight, DollarSign, Target, Briefcase
} from 'lucide-react';
import { CHAPTER_INFO, SPONSORS_DATA, NEWSLETTER_EDITIONS } from '../data/siteContent';

export default function HomePage({ onNavigate }) {
  const latestNewsletter = NEWSLETTER_EDITIONS[0]?.issues?.[0];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-slate-900 to-brand-dark text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold overflow-hidden">
        {/* Subtle authentic background pattern */}
        <div 
          className="absolute inset-0 opacity-10 bg-repeat bg-center pointer-events-none"
          style={{ backgroundImage: `url('/images/bg-01.jpg')` }}
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-gold/20 text-brand-gold border border-brand-gold/30 tracking-wider uppercase">
              San Joaquin Valley Chapter • Bakersfield, CA
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
              American Petroleum Institute
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              A non-profit organization comprised of petroleum related professionals dedicated to fostering cooperation, technical exchange, and youth STEM scholarships throughout the San Joaquin Valley.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/about-us/membership')}
                className="px-6 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2 text-sm"
              >
                <span>Join API Today ($30/yr)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/pay-online')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center space-x-2 text-sm backdrop-blur-sm"
              >
                <span>Pay Online Portal</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={CHAPTER_INFO.bylawsPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium rounded-xl border border-slate-700 transition-all flex items-center space-x-2 text-sm"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span>Chapter Bylaws (PDF)</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-300">501(c)(3) Nonprofit (Tax ID: {CHAPTER_INFO.taxId})</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-300">Annual STEM Scholarships</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-300">Local Energy Industry Network</span>
              </div>
            </div>
          </div>

          {/* Official Chapter Emblem Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl text-center border border-slate-100 flex flex-col items-center">
                <img
                  src="/images/API-San-Joaquin-Valley-Chapter.png"
                  alt="API San Joaquin Valley Chapter Official Crest"
                  className="w-48 h-auto object-contain mx-auto mb-6 transform group-hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-1">
                  San Joaquin Valley Chapter
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  {CHAPTER_INFO.address} • {CHAPTER_INFO.cityStateZip}
                </p>

                <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">2026 Chapter Leadership</div>
                  <div className="text-sm font-extrabold text-brand-navy">{CHAPTER_INFO.chairman.name}</div>
                  <div className="text-xs text-slate-600">{CHAPTER_INFO.chairman.company}</div>
                  <a
                    href={`tel:${CHAPTER_INFO.chairman.phone}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-gold pt-1"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                    {CHAPTER_INFO.chairman.phone}
                  </a>
                </div>

                <button
                  onClick={() => onNavigate('/about-us/chairmans-message')}
                  className="w-full py-2.5 bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Read Chairman’s Message</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Chairman's Corner (Verbatim Content) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/80 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                <span>Executive Leadership Bulletin</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy font-display">
                The Chairman’s Corner
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={CHAPTER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-500" />
              </a>
              <button
                onClick={() => onNavigate('/about-us/board-of-directors')}
                className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-gold px-3 py-2 transition-colors"
              >
                <span>View Full Board</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
              <div className="p-5 bg-brand-light rounded-2xl border border-brand-gold/20 text-brand-dark">
                <p className="font-semibold text-sm sm:text-base text-slate-800">
                  {/* Verbatim from homepage */}
                  Feel free to reach out to our 2026 API Chairman, John Chafin at{' '}
                  <a href="mailto:jchafin@calcoastacidizing.com" className="text-brand-navy font-bold hover:underline">
                    jchafin@calcoastacidizing.com
                  </a>{' '}
                  or{' '}
                  <a href="mailto:apibakersfieldchapter@gmail.com" className="text-brand-navy font-bold hover:underline">
                    apibakersfieldchapter@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:6613437900" className="text-brand-navy font-bold hover:underline whitespace-nowrap">
                    661.343.7900
                  </a>.
                </p>
              </div>

              {/* Chairman Actions & Bylaws Buttons (Verbatim) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/about-us/chairmans-message')}
                  className="px-6 py-3 bg-brand-navy hover:bg-brand-dark text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
                >
                  <span>A Message From Our Chairman</span>
                  <ChevronRight className="w-4 h-4 text-brand-gold" />
                </button>

                <a
                  href={CHAPTER_INFO.bylawsPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-brand-dark" />
                  <span>READ OUR BYLAWS</span>
                </a>
              </div>

              {/* Californians for Energy & Science – Unleash California Energy (Verbatim Heading & Link) */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900">
                      Californians for Energy & Science – Unleash California Energy
                    </h3>
                    <p className="text-xs text-slate-600">
                      Official advocacy document outlining California energy independence and economic contributions.
                    </p>
                    <a
                      href={CHAPTER_INFO.unleashEnergyPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold pt-1"
                    >
                      <Download className="w-4 h-4 mr-1.5 text-brand-gold" />
                      Download Unleash California Energy PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Chapter Mission Summary */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Chapter Objective</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The objective of this organization is to foster a spirit of cooperation among those directly or indirectly engaged in the production of oil or gas by encouraging a free exchange of ideas among members. We strive to create an understanding by the public of the close economic relationship that exists between the petroleum industry and other lines of business and the community.
                </p>
              </div>
            </div>

            {/* Upcoming Events Box (Verbatim Heading: Upcoming API Events and Information:) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-navy text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-bold text-base sm:text-lg text-white">
                    Upcoming API Events and Information:
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/news-events/calendar')}
                  className="text-xs font-bold text-brand-gold hover:underline"
                >
                  + View More
                </button>
              </div>

              <div className="space-y-4">
                {/* Fall Fun Shoot, Oct 2nd – Flyer & Registration (Verbatim) */}
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Annual Shoot</span>
                    <span className="text-xs text-slate-400">Oct 2nd</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Fall Fun Shoot, Oct 2nd – Flyer & Registration
                  </h4>
                  <div className="flex items-center space-x-3 text-xs pt-1">
                    <a
                      href="https://www.apibakersfield.com/wp-content/uploads/2026/09/2026-API-Fall-Fun-Shoot-Poster_V1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold/90 transition-colors"
                    >
                      Flyer (PDF)
                    </a>
                    <button
                      onClick={() => onNavigate('/pay-online/fall-fun-shoot')}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors"
                    >
                      Registration
                    </button>
                  </div>
                </div>

                {/* Adopt-A-Highway – 2nd Saturday of March, June, September, and December (Verbatim) */}
                <div 
                  onClick={() => onNavigate('/news-events/adopt-a-highway-2')}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer group space-y-1.5"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Community Service</span>
                    <span className="text-xs text-slate-400">Quarterly Schedule</span>
                  </div>
                  <h4 className="font-bold text-white group-hover:text-brand-gold transition-colors text-sm">
                    Adopt-A-Highway – 2nd Saturday of March, June, September, and December
                  </h4>
                  <p className="text-xs text-slate-300">
                    Caltrans volunteer highway cleanup at Rosedale Hwy & Hwy 43 with complimentary breakfast.
                  </p>
                  <div className="mt-1 flex items-center text-xs font-semibold text-brand-gold">
                    <span>View Highway Schedule</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Californians for Energy & Science – Unleash California Energy (Verbatim) */}
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors space-y-1.5">
                  <span className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">Advocacy Initiative</span>
                  <h4 className="font-bold text-white text-sm">
                    Californians for Energy & Science – Unleash California Energy
                  </h4>
                  <a
                    href="https://www.apibakersfield.com/wp-content/uploads/2025/04/Unleash-California-Energy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-brand-gold hover:underline pt-1"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    <span>Download Unleash California Energy PDF</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/news-events')}
                className="w-full py-2.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-xs rounded-xl transition-colors text-center"
              >
                Browse All News & Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portals / Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Key Chapter Portals</span>
          <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
            Serving Bakersfield & Kern County Energy Professionals
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Explore membership, scholarship endowments, community projects, and industry networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Membership */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-navy flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Chapter Membership</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Annual membership is only $30 per year. Connect with operators, contractors, advisors, and educators across the San Joaquin Valley.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/about-us/membership')}
              className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors pt-2"
            >
              <span>Join or Renew ($30/yr)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Card 2: Scholarships */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">API Scholarships</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We are proud to award API Scholarships each year to local students pursuing careers in the petroleum industry or closely related fields.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/scholarships')}
              className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors pt-2"
            >
              <span>Scholarship Details & Donations</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Card 3: Pay Online */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Pay Online Portal</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Direct transactions for dues, Fall Fun Shoot registration, dinner meetings, newsletter sponsorships, and scholarship contributions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/pay-online')}
              className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors pt-2"
            >
              <span>Access Online Payments</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Sponsors Showcase (Authentic Sponsor Logos) */}
      <section className="bg-white py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Chapter Corporate Partners</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
              Thank You to Our Generous Sponsors
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Supporting petroleum education, community service, and technical events in Kern County.
            </p>
          </div>

          {/* Silver Sponsor (CRC) */}
          <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              {SPONSORS_DATA.silverSponsor.tagline}
            </div>
            <a 
              href={SPONSORS_DATA.silverSponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-transform"
            >
              <img 
                src={SPONSORS_DATA.silverSponsor.logo} 
                alt="California Resources Corporation - Silver Sponsor" 
                className="h-16 w-auto object-contain mx-auto"
              />
            </a>
          </div>

          {/* Corporate Sponsors (Chevron & Enterprise) */}
          <div className="text-center mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
              Corporate Sponsors
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {SPONSORS_DATA.corporateSponsors.map((corp, idx) => (
                <a
                  key={idx}
                  href={corp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <img
                    src={corp.logo}
                    alt={`${corp.name} Corporate Sponsor`}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <button
              onClick={() => onNavigate('/sponsors')}
              className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-gold underline underline-offset-4 transition-colors"
            >
              <span>View All 24+ Annual Event & Chapter Sponsors</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
