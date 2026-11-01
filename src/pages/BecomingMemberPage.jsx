import React from 'react';
import PageHeader from '../components/PageHeader';
import { Users, DollarSign, CheckCircle2, ArrowRight, Award, Calendar, BookOpen } from 'lucide-react';

export default function BecomingMemberPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Becoming a Member"
        category="Membership Information"
        breadcrumbs={[
          { label: "About Us", path: "/about-us" },
          { label: "Becoming a Member" }
        ]}
        subtitle="Join the San Joaquin Valley Chapter of the American Petroleum Institute."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="space-y-6 text-slate-800">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Why Join the API?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              The San Joaquin Valley Chapter of the American Petroleum Institute is the premier local industry association uniting energy producers, service providers, contractors, technical specialists, and educators across Bakersfield and Kern County.
            </p>

            {/* Verbatim Bullet Points (100% Content Preservation) */}
            <div className="space-y-4 py-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  Through scholarships API helps to support local students get ahead and help our industry’s future
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong>Community involvement:</strong> API supports many local, worthwhile organizations such as; Camp Out Against Cancer, Pyles Boy’s Camp, Gleaners and toy and clothing drives, Alliance Against Family Violence, Derricks to Desks Seminar for teachers (to learn about the petroleum industry and how it can be used in the classroom), Kern County Science Fair, and Engineer Day
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong>Networking:</strong> API meetings are a great chance to hear great presentations pertaining to our industry and to meet others in our industry to talk about community activities and issues
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  <strong>Having fun:</strong> API events are the most well attended events in the county. From the legendary API golf tournament to the Oil Baron’s Ball, it is a great opportunity to socialize and make new friends
                </p>
              </div>
            </div>

            {/* Verbatim Quote from Chairman */}
            <div className="p-6 bg-brand-light rounded-2xl border-l-4 border-brand-gold space-y-3">
              <p className="text-lg sm:text-xl font-bold text-slate-900 italic">
                “Please join today, it will be the best $30 you have spent all year.”
              </p>
              <div className="text-sm">
                <p className="font-bold text-brand-navy">John Chafin</p>
                <p className="text-xs text-slate-500">2024 API Chairman – San Joaquin Chapter</p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/about-us/membership')}
                className="px-6 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>Complete Membership Application ($30/yr)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/pay-online/membership-application')}
                className="px-6 py-3.5 bg-brand-navy hover:bg-brand-dark text-white font-semibold text-sm rounded-xl transition-all flex items-center space-x-2"
              >
                <span>Pay Online Dues</span>
                <DollarSign className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
