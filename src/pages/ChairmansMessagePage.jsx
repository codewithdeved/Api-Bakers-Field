import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, ArrowRight, UserCheck, Award, Calendar } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function ChairmansMessagePage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Chairman’s Message"
        category="Leadership Address"
        breadcrumbs={[
          { label: "About Us", path: "/about-us" },
          { label: "Chairman’s Message" }
        ]}
        subtitle="Annual welcome and vision from Chapter Chairman John Chafin."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          {/* Header Tag / Meta */}
          <div className="flex items-center space-x-4 border-b border-slate-100 pb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold text-2xl shadow-inner">
              JC
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">John Chafin</h2>
              <p className="text-xs text-slate-500 font-medium">Chapter Chairman • CalCoast Acidizing</p>
              <div className="flex items-center space-x-3 mt-1 text-xs text-slate-600">
                <a href="mailto:jchafin@calcoastacidizing.com" className="text-brand-navy hover:underline">
                  jchafin@calcoastacidizing.com
                </a>
                <span>•</span>
                <a href={`tel:${CHAPTER_INFO.chairman.phone}`} className="text-brand-navy hover:underline">
                  {CHAPTER_INFO.chairman.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Verbatim Message Body */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-slate-900 text-lg">
              Welcome API Members and Visitors,
            </p>

            <p>
              The San Joaquin Valley chapter of the American Petroleum Industry is the place to be for all those involved in the Oil and Gas industry and all others who are interested in or concerned about our great industry. This membership is comprised of operators, contractors, policy makers, advisors, educators and others who genuinely care about the health of this industry and the benefits it brings to our local economy. Our goal is to foster a spirit of cooperation by promoting an exchange of ideas among members, advocating for a more correct understanding of the local economic support our industry provides and to create a forum for learning and discussion of topics relevant to our industry.
            </p>

            <p>
              As a member you will have access to monthly general meetings, several great events like golf tournaments and sporting clay shoots, numerous public service opportunities as well as the ability to contribute to the largest scholarship gifting oil and gas organization in California.
            </p>

            <p>
              Please join us in our mission to support and defend this amazing industry by becoming a member of this great chapter today.
            </p>

            {/* Verbatim Link: Become a member. */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/about-us/membership')}
                className="inline-flex items-center px-6 py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <span>Become a member.</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-1 text-slate-800">
              <p className="font-medium text-slate-700">Looking forward to meeting you,</p>
              <p className="text-xl font-extrabold text-brand-navy">John Chafin</p>
              <p className="text-sm text-slate-500">
                <a href="mailto:jchafin@calcoastacidizing.com" className="text-brand-navy hover:underline">
                  jchafin@calcoastacidizing.com
                </a>
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 pt-1">
                2025 Chairman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
