import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react';

export default function ThankYouPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Thank You"
        category="Payment Confirmation"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Thank You" }
        ]}
        subtitle="Thank you for your participation and supporting the API SJV Chapter."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">Thank You</h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium">
              Thank you for your participation and supporting the API SJV Chapter.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-sm text-slate-700 space-y-2">
            <p className="font-semibold">Make sure you receive an email confirmation.</p>
            <p className="text-xs sm:text-sm text-slate-600">
              If not, please contact our treasurer at{' '}
              <a href="mailto:apibakersfieldtreasury@gmail.com" className="text-brand-navy underline font-bold">
                apibakersfieldtreasury@gmail.com
              </a>{' '}
              or our general email at{' '}
              <a href="mailto:apibakersfieldchapter@gmail.com" className="text-brand-navy underline font-bold">
                apibakersfieldchapter@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => onNavigate('/')}
              className="px-6 py-3 bg-brand-navy hover:bg-brand-dark text-white font-bold text-sm rounded-xl transition-colors flex items-center space-x-2"
            >
              <span>Return to Home</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
