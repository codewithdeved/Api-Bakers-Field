import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { BOARD_MEMBERS, CHAPTER_INFO } from '../data/siteContent';
import { Mail, Building, ShieldCheck, Users, Search, Filter } from 'lucide-react';

export default function BoardOfDirectorsPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', ...BOARD_MEMBERS.map(c => c.category)];

  const filteredCategories = BOARD_MEMBERS.map(cat => {
    if (selectedCategory !== 'ALL' && cat.category !== selectedCategory) {
      return null;
    }
    const matchingMembers = cat.members.filter(member => {
      const q = searchQuery.toLowerCase();
      return (
        member.name.toLowerCase().includes(q) ||
        member.role.toLowerCase().includes(q) ||
        member.company.toLowerCase().includes(q) ||
        (member.email && member.email.toLowerCase().includes(q))
      );
    });
    return { ...cat, members: matchingMembers };
  }).filter(Boolean);

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Board of Directors"
        category="Chapter Governance"
        breadcrumbs={[
          { label: "About Us", path: "/about-us" },
          { label: "Board of Directors" }
        ]}
        subtitle="Dedicated volunteer leaders and energy industry veterans guiding the API San Joaquin Valley Chapter."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Controls: Search & Category Filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'ALL' ? 'All Leadership' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, role, or company..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />
          </div>
        </div>

        {/* Categories and Member Cards */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup, idx) => {
            if (catGroup.members.length === 0) return null;

            return (
              <section key={idx} className="space-y-6">
                <div className="border-b-2 border-brand-navy pb-3 flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy font-display">
                    {catGroup.category}
                  </h2>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {catGroup.members.length} {catGroup.members.length === 1 ? 'Leader' : 'Leaders'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catGroup.members.map((member, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 leading-snug">
                              {member.name}
                            </h3>
                            <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider block mt-0.5">
                              {member.role}
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>

                        {member.company && (
                          <div className="flex items-center text-xs text-slate-600">
                            <Building className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                            <span className="truncate">{member.company}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100">
                        {member.email ? (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-gold transition-colors break-all"
                          >
                            <Mail className="w-3.5 h-3.5 mr-1.5 shrink-0 text-brand-gold" />
                            <span>{member.email}</span>
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 italic">No public email listed</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
