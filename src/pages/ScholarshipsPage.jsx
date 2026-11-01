import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, GraduationCap, DollarSign, Clock, Users, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ScholarshipsPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Scholarships"
        category="Student Endowments & Grants"
        breadcrumbs={[{ label: "Scholarships" }]}
        subtitle="Empowering future engineers, geologists, and petroleum technical professionals across Kern County."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Annual Endowment Program</span>
              <h2 className="text-3xl font-extrabold text-brand-navy">Scholarships</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          {/* Verbatim Announcement Card */}
          <div className="p-8 bg-brand-light rounded-3xl border border-brand-gold/40 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center mx-auto shadow-md">
              <Clock className="w-7 h-7" />
            </div>

            <div>
              {/* Verbatim Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display">
                2027 API SCHOLARSHIP APPLICATION:
              </h3>
              {/* Verbatim Paragraph */}
              <p className="text-xl sm:text-2xl font-bold text-amber-700 mt-2 font-display">
                coming soon!!
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed pt-2">
              The application portal for the upcoming academic year will open soon. Kern County high school seniors and college students pursuing degrees in petroleum engineering, geology, mechanical engineering, chemical engineering, and related energy fields are encouraged to apply.
            </p>
          </div>

          {/* Mission & Impact */}
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h4 className="text-lg font-bold text-slate-900">About the API Scholarship Endowment</h4>
            <p>
              We are proud to award API Scholarships each year to local students pursuing careers in the petroleum industry, or a closely related field. Through the generosity of our corporate sponsors, tournament participants, and individual donors, the San Joaquin Valley Chapter has awarded hundreds of thousands of dollars in academic grants over several decades.
            </p>
            <p>
              Our scholarships are funded primarily through our signature annual events, including the Fall Fun Shoot, Golf Tournament, and direct philanthropic donations from community supporters.
            </p>
          </div>

          {/* Direct Donation CTA */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Support Student Education</span>
              <h4 className="text-xl font-bold text-white">Direct Scholarship Donations</h4>
              <p className="text-xs text-slate-300">
                You can make a direct tax-deductible contribution to the scholarship fund online.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/pay-online/direct-scholarship-donations')}
              className="px-6 py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center space-x-2"
            >
              <span>Donate Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Committee Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Scholarship Committee Co-Chair:</span>
              <p>Amy Galanski (Chevron) • <a href="mailto:amygalanski@chevron.com" className="text-brand-navy hover:underline">amygalanski@chevron.com</a></p>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Scholarship Committee Past Chair:</span>
              <p>Mike Handren (Retired) • <a href="mailto:mhandren@yahoo.com" className="text-brand-navy hover:underline">mhandren@yahoo.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
