import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Check, Copy, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { QUICK_CONTACTS, CHAPTER_INFO } from '../data/siteContent';

export default function QuickContacts({ onNavigate }) {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Official Chapter Directory
            </div>
            {/* Semantic H2 instead of broken H1 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              QUICK CONTACTS
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Check our{' '}
              <button 
                onClick={() => onNavigate && onNavigate('/about-us/board-of-directors')}
                className="text-brand-gold hover:underline font-medium inline-flex items-center gap-1"
              >
                Board Members
              </button>{' '}
              page for a full listing of the API Board.
            </p>
          </div>

          <div className="text-left md:text-right text-xs text-slate-400 space-y-1">
            <div className="flex items-center md:justify-end gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>{CHAPTER_INFO.address}, {CHAPTER_INFO.cityStateZip}</span>
            </div>
            <div className="flex items-center md:justify-end gap-1.5 font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>TAX ID NO.: {CHAPTER_INFO.taxId}</span>
            </div>
          </div>
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUICK_CONTACTS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-5 border border-slate-700/60 hover:border-brand-gold/40 transition-all duration-200 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {item.role}
                  </span>
                  {item.price && (
                    <span className="text-[11px] font-semibold bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full">
                      {item.price}
                    </span>
                  )}
                </div>

                <div className="mt-1">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h3>
                  {item.company && (
                    <p className="text-xs text-slate-400 mt-0.5">{item.company}</p>
                  )}
                  {item.description && (
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${item.email}`}
                  className="text-xs font-medium text-slate-300 hover:text-white inline-flex items-center gap-1.5 truncate"
                  title={`Email ${item.name} (${item.email})`}
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                  <span className="truncate">{item.email}</span>
                </a>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopyEmail(item.email)}
                    className="p-1.5 rounded-md hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                    aria-label={`Copy email for ${item.name}`}
                  >
                    {copiedEmail === item.email ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {item.link && !item.link.startsWith('mailto:') && (
                    <button
                      onClick={() => onNavigate && onNavigate(item.link)}
                      className="p-1.5 rounded-md hover:bg-brand-gold hover:text-brand-dark text-slate-400 transition-colors"
                      title={item.actionText}
                      aria-label={item.actionText}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
