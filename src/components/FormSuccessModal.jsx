import React from 'react';
import { CheckCircle2, X, ShieldCheck, ArrowRight, Printer } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function FormSuccessModal({ isOpen, onClose, data = {}, formTitle = "Submission Confirmed" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 transform transition-all">
        {/* Header */}
        <div className="bg-brand-navy p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-gold">Frontend Prototype Simulation</span>
              <h3 className="text-xl font-bold text-white leading-snug">{formTitle}</h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800">
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Validation Successful</strong>
                All required fields have been validated. In the live production system, this payload connects directly to the Chapter's Gravity Forms & PayPal Commerce Platform.
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 text-sm">
            <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-700 text-xs uppercase tracking-wider">
              Submitted Information Summary
            </div>
            {Object.entries(data).map(([key, value]) => {
              if (!value || typeof value === 'object') return null;
              return (
                <div key={key} className="px-4 py-2.5 flex justify-between gap-4">
                  <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ')}:</span>
                  <span className="font-medium text-slate-900 text-right truncate max-w-[240px]">{String(value)}</span>
                </div>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-1">
            <div className="font-medium text-slate-700">Official Chapter Correspondence:</div>
            <div>{CHAPTER_INFO.name} – {CHAPTER_INFO.chapterName}</div>
            <div>{CHAPTER_INFO.address}, {CHAPTER_INFO.cityStateZip} • Tax ID: {CHAPTER_INFO.taxId}</div>
            <div>Chairman: {CHAPTER_INFO.chairman.name} ({CHAPTER_INFO.chairman.phone})</div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg border border-slate-300 hover:bg-white transition-colors"
          >
            <Printer className="w-3.5 h-3.5 mr-1.5" />
            Print Receipt
          </button>
          <button
            onClick={onClose}
            className="inline-flex items-center text-xs font-bold text-brand-dark bg-brand-gold hover:bg-brand-goldHover px-4 py-2 rounded-lg shadow-sm transition-all"
          >
            Done
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
