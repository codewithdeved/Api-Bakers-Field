import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { NEWSLETTER_EDITIONS } from '../data/siteContent';
import { FileText, Download, Calendar, Mail, ArrowRight, ExternalLink, Search } from 'lucide-react';

export default function NewsletterPage({ onNavigate }) {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [searchQuery, setSearchQuery] = useState('');

  const currentGroup = NEWSLETTER_EDITIONS.find(g => g.year === selectedYear) || NEWSLETTER_EDITIONS[0];

  const filteredIssues = currentGroup.issues.filter(issue => {
    return issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           issue.date.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Newsletter"
        category="Monthly Publication & Technical Archive"
        breadcrumbs={[{ label: "Newsletter" }]}
        subtitle="Access current and historical issues of the API San Joaquin Valley Chapter monthly newsletter."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Newsletter Sponsorship Notice (Verbatim Preservation) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Newsletter Sponsorships</span>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">
              We’d like to see your company in our newsletters too!
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Please{' '}
              <button
                onClick={() => onNavigate('/pay-online/sponsorship-payments')}
                className="text-brand-navy underline font-bold"
              >
                go here
              </button>{' '}
              for newsletter sponsorship opportunities.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our monthly newsletter reaches hundreds of operators, service providers, and decision-makers across Bakersfield and Kern County. Sponsorship space finances monthly publication and mailing costs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/pay-online/sponsorship-payments')}
              className="px-5 py-2.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-xs rounded-xl shadow-md transition-all shrink-0"
            >
              Pay Sponsorship Online
            </button>
            <a
              href="mailto:Dtrahan8@slb.com"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors shrink-0"
            >
              Contact Dustin Trahan (SLB)
            </a>
          </div>
        </div>

        {/* Year Filter Tabs & Search */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {NEWSLETTER_EDITIONS.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedYear(group.year)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedYear === group.year
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {group.year} Editions
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by issue or month..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />
          </div>
        </div>

        {/* Newsletter Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-xl font-bold text-brand-navy font-display">
              {selectedYear} Publications
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {filteredIssues.length} {filteredIssues.length === 1 ? 'Issue' : 'Issues'} Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">PDF • {issue.size}</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-brand-navy transition-colors text-base leading-snug">
                      {issue.title}
                    </h4>
                    <span className="text-xs text-slate-500 block mt-1 flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                      {issue.date}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5 text-brand-navy group-hover:text-brand-gold" />
                    <span>Download Edition</span>
                  </a>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Official API Issue</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
