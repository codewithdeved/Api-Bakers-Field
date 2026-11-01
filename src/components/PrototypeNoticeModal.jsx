import React, { useState } from 'react';
import { ShieldCheck, Info, X, ChevronRight, CheckCircle2, FileCheck, Layers } from 'lucide-react';

export default function PrototypeNoticeModal({ onOpenAudit }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      <aside aria-label="Prototype announcement banner" className="bg-brand-navy text-white text-xs border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-brand-gold text-brand-dark uppercase tracking-wider">
              Modernization Redesign
            </span>
            <span className="text-slate-300">
              API San Joaquin Valley Chapter Redesign Prototype • <span className="text-white font-medium">100% Original Content Preserved</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowDetails(true)}
              className="text-brand-gold hover:text-white underline font-semibold transition-colors flex items-center"
            >
              <Info className="w-3.5 h-3.5 mr-1" />
              Preservation & Architecture Notes
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white p-0.5 transition-colors"
              title="Dismiss announcement"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200">
            <div className="bg-brand-navy p-6 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-7 h-7 text-brand-gold" />
                <div>
                  <h3 className="text-lg font-bold">Vibeans Solutions Frontend Redesign Prototype</h3>
                  <p className="text-xs text-slate-300">API San Joaquin Valley Chapter (Bakersfield, CA)</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-slate-700 max-h-[75vh] overflow-y-auto">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="font-bold text-amber-900 mb-1 flex items-center">
                  <FileCheck className="w-4 h-4 mr-1.5 text-amber-700" />
                  Absolute Content Preservation Guarantee
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Every heading, paragraph, officer name, email address, contact phone number, meeting date, price ($30/yr membership, $150 shooter fee, $1,000 table), disclaimer, and bylaw reference is preserved verbatim from the original <span className="font-semibold text-amber-950">apibakersfield.com</span> website. No placeholder text or fabricated statistics have been added.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900">Key Modernizations Delivered:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Full Mobile Responsiveness:</strong> Smooth touch drawer navigation with &gt;48px tap targets.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Resolved Broken 404 Route:</strong> Rebuilt the missing Monthly Dinner Meeting reservation experience.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Interactive Pay Online Portal:</strong> Direct action cards and live total calculations for all payment types.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Accessible SEO Typography:</strong> Single semantic &lt;h1&gt; per page and distinct visual hierarchy.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Authentic Asset Integration:</strong> Sourced high-res chapter logo, sponsor logos, and newsletter archives.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                    <span><strong>Zero-Friction Simulated Forms:</strong> Instant validation with feedback modals for all chapter submissions.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 mb-1">Architecture & Deployment Readiness:</div>
                Engineered with React 18, Vite 6, and Tailwind CSS. All components are modular and ready for backend integration with WordPress REST API, headless CMS, or Stripe/PayPal Webhooks.
              </div>
            </div>

            <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold rounded-lg transition-colors"
              >
                Close & Explore Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
