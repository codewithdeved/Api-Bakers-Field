import React from 'react';
import PageHeader from '../components/PageHeader';
import { HeartHandshake, Mail, Phone, Award, BookOpen, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EducationCommunityPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Education and Community Involvement"
        category="Community Outreach & STEM"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Education & Community Involvement" }
        ]}
        subtitle="Supporting petroleum vocational training, local educational outreach, and youth STEM initiatives."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl font-extrabold text-brand-navy">
              Education and Community Involvement
            </h2>

            <p>
              The San Joaquin Valley Chapter of the American Petroleum Institute actively supports local educational and petroleum-related vocational training activities. We believe in building strong bridges between energy professionals, local school districts, and college engineering programs to develop future industry talent and promote science-based energy literacy.
            </p>

            {/* Verbatim Contact Callout */}
            <div className="p-6 bg-brand-light rounded-2xl border-l-4 border-brand-gold text-brand-dark space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">Volunteer Opportunities</span>
              <p className="font-semibold text-slate-900 text-base">
                If you are interested in volunteering for community involvement events, please contact Ryan Knapp at{' '}
                <a href="mailto:ryknapp@kern.org" className="text-brand-navy font-bold hover:underline">
                  ryknapp@kern.org
                </a>{' '}
                or at{' '}
                <a href="tel:6614723529" className="text-brand-navy font-bold hover:underline">
                  661-472-3529
                </a>.
              </p>
            </div>

            {/* Key Programs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                  <Award className="w-4 h-4 text-brand-gold" />
                  <span>Annual College Scholarships</span>
                </div>
                <p className="text-xs text-slate-600">
                  Direct financial endowments for Kern County high school seniors and college undergraduates pursuing petroleum, geology, and STEM careers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  <span>Vocational Training</span>
                </div>
                <p className="text-xs text-slate-600">
                  Supporting technical trade academies, hands-on field equipment demonstrations, and workforce development in the Central Valley.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                  <Users className="w-4 h-4 text-brand-gold" />
                  <span>K-12 STEM Mentorship</span>
                </div>
                <p className="text-xs text-slate-600">
                  Volunteer engineers visit local classrooms and judge regional science competitions in partnership with Kern County Superintendent of Schools.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-brand-gold" />
                  <span>Highway Cleanups & Public Service</span>
                </div>
                <p className="text-xs text-slate-600">
                  Quarterly Adopt-a-Highway cleanup along Rosedale Hwy (Hwy 58/Hwy 43) giving back to our local community.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/scholarships')}
                className="px-6 py-3 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-bold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>View Scholarships Information</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/news-events/adopt-a-highway-2')}
                className="px-6 py-3 bg-slate-100 hover:bg-brand-light text-brand-navy font-bold text-xs rounded-xl border border-slate-300 transition-all flex items-center space-x-2"
              >
                <span>Adopt-A-Highway Volunteer Sign-Up</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
