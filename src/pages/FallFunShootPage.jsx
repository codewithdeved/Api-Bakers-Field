import React from 'react';
import PageHeader from '../components/PageHeader';
import { CHAPTER_INFO } from '../data/siteContent';
import { Target, Download, FileText, Calendar, Clock, MapPin, DollarSign, ArrowRight, Award } from 'lucide-react';

export default function FallFunShootPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Fall Fun Shoot"
        category="Annual Sporting Clay Tournament"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Fall Fun Shoot" }
        ]}
        subtitle="Annual sporting clay tournament benefiting the API San Joaquin Valley Chapter Scholarship Endowment."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                <span>Scholarship Fundraiser</span>
              </div>
              <h2 className="text-3xl font-extrabold text-brand-navy">Fall Fun Shoot</h2>
              <p className="text-slate-500 text-sm mt-1">Hosted at local sporting clays facilities in Kern County.</p>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={CHAPTER_INFO.fallFunShootFlyerPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 bg-slate-100 hover:bg-brand-light text-brand-navy font-bold text-xs rounded-xl border border-slate-300 hover:border-brand-gold transition-all"
              >
                <Download className="w-4 h-4 mr-1.5 text-brand-navy" />
                <span>2026 Event Flier (PDF)</span>
              </a>

              <button
                onClick={() => onNavigate('/pay-online/fall-fun-shoot')}
                className="inline-flex items-center px-5 py-2.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-xs rounded-xl shadow-md transition-all"
              >
                <span>Register & Pay Online</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Event Flier Callout Card (Verbatim: 2026 Event Flier) */}
          <div className="p-6 bg-brand-light rounded-2xl border border-brand-gold/30 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy">2026 Event Flier</h3>
                <p className="text-xs text-slate-600">Download the complete event poster with shoot rules, schedule, and team brackets.</p>
              </div>
            </div>

            <a
              href={CHAPTER_INFO.fallFunShootFlyerPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center"
            >
              <Download className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
              Download Flier
            </a>
          </div>

          {/* Tournament Overview & Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <Target className="w-4 h-4 text-brand-gold" />
                <span>Format & Rules</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                5-Person squads competing across 14 sporting clay stations. Trappers provided; ammunition and safety gear required.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>Prizes & Awards</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trophies awarded for High Overall (HOA), 1st, 2nd, and 3rd place teams, plus raffle drawing and BBQ lunch.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <DollarSign className="w-4 h-4 text-brand-gold" />
                <span>Scholarship Cause</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% of proceeds support the annual scholarships awarded to Bakersfield and Kern County college students.
              </p>
            </div>
          </div>

          {/* Committee Contact */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
            <span>Fall Fun Shoot Committee Chair: <strong>Jim Roberts</strong> (Global Elastomeric)</span>
            <a href="mailto:jroberts3@bak.rr.com" className="text-brand-navy font-semibold hover:underline">
              jroberts3@bak.rr.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
