import React from 'react';
import PageHeader from '../components/PageHeader';
import { CHAPTER_INFO } from '../data/siteContent';
import { 
  FileText, ShieldCheck, Users, Award, Download, 
  ChevronRight, ExternalLink, ArrowRight, Heart 
} from 'lucide-react';

export default function AboutUsPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="About Us"
        category="Chapter Overview & Mission"
        breadcrumbs={[{ label: "About Us" }]}
        subtitle="The San Joaquin Valley Chapter of the American Petroleum Institute is a non-profit organization comprised of petroleum related professionals."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Content Card (100% Verbatim Content) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="space-y-6 text-slate-800 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-brand-navy text-lg sm:text-xl border-l-4 border-brand-gold pl-4 py-1">
              The San Joaquin Valley Chapter of the American Petroleum Institute is a non-profit organization comprised of petroleum related professionals.
            </p>

            <p>
              The objective of this organization is to foster a spirit of cooperation among those directly or indirectly engaged in the production of oil or gas by encouraging a free exchange of ideas among members. We strive to create an understanding by the public of the close economic relationship that exists between the petroleum industry and other lines of business and the community. We support local educational and petroleum related vocational training activities, and provide a forum for the discussion of local problems and issues related to the production of oil and gas, or other topics of current interest.
            </p>

            <p>
              We are proud to award API Scholarships each year to local students pursuing careers in the petroleum industry, or a closely related field.
            </p>

            <p>
              This is not an easy task, so we rely on our various fundraisers, API members, volunteers, and local community support to enable us to realize our goals. We hope that you will join us!
            </p>
          </div>

          {/* Tax Status Banner (Verbatim) */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">Official Non-Profit Entity</span>
                <p className="font-bold text-slate-900 text-sm sm:text-base">
                  The San Joaquin Valley Chapter of the American Petroleum Institute is a 501(c)(3) nonprofit organization, Tax ID 95-3086622
                </p>
              </div>
            </div>
          </div>

          {/* Governance & Bylaws Links (Verbatim Links) */}
          <div className="pt-4 border-t border-slate-100">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Organizational Governance Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.apibakersfield.com/wp-content/uploads/2017/11/API-Constitution.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white hover:bg-brand-light border border-slate-200 hover:border-brand-gold transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-sm">Chapter Constitution</h3>
                    <p className="text-xs text-slate-500">
                      <span className="text-brand-navy font-semibold group-hover:underline">Click here</span> to read our constitution.
                    </p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-brand-navy transition-colors" />
              </a>

              <a
                href="https://www.apibakersfield.com/wp-content/uploads/2015/05/SAN-JOAQUIN-VALLEY-CHAPTER-BY-LAWS-Final-01082014.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white hover:bg-brand-light border border-slate-200 hover:border-brand-gold transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-sm">Chapter Bylaws</h3>
                    <p className="text-xs text-slate-500">
                      <span className="text-brand-navy font-semibold group-hover:underline">Click here</span> to read our bylaws.
                    </p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-brand-navy transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-page Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('/about-us/chairmans-message')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-navy flex items-center justify-center mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Chairman’s Message</h3>
              <p className="text-xs text-slate-500">Welcome note from 2026 Chairman John Chafin.</p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-brand-navy">
              <span>Read Message</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('/about-us/becoming-a-member')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Becoming a Member</h3>
              <p className="text-xs text-slate-500">Why join API? Only $30/year dues.</p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-brand-navy">
              <span>Learn More</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('/about-us/lifetime-api-members')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Lifetime API Members</h3>
              <p className="text-xs text-slate-500">Honoring industry veterans like Bill Graham.</p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-brand-navy">
              <span>View Honorees</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('/about-us/board-of-directors')}
            className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Board of Directors</h3>
              <p className="text-xs text-slate-500">Executive & Advisory roster across Kern County.</p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-brand-navy">
              <span>Meet the Board</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
