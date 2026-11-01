import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  CreditCard, DollarSign, Users, Target, Sparkles, 
  Award, FileText, Utensils, ChevronRight, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function PayOnlinePage({ onNavigate }) {
  const paymentPortals = [
    {
      title: "Membership Application ($30/yr)",
      description: "Join or renew your annual chapter membership. Secure online payment via PayPal or Credit Card.",
      amount: "$30.00 / yr",
      link: "/pay-online/membership-application",
      icon: Users,
      badge: "Annual Dues"
    },
    {
      title: "Fall Fun Shoot Registration",
      description: "5-person team registration and individual shooter fees for the annual sporting clay tournament.",
      amount: "$150 – $2,500",
      link: "/pay-online/fall-fun-shoot",
      icon: Target,
      badge: "Sporting Tournament"
    },
    {
      title: "Board Christmas Dinner",
      description: "Reserve your seat ($100) or corporate table of 10 ($1,000) for the annual holiday dinner banquet.",
      amount: "$100 – $1,000",
      link: "/pay-online/board-christmas-dinner",
      icon: Sparkles,
      badge: "Holiday Gala"
    },
    {
      title: "Direct Scholarship Donations",
      description: "Direct philanthropic contributions to the API Scholarship Fund supporting Kern County STEM students.",
      amount: "Custom Amount",
      link: "/pay-online/direct-scholarship-donations",
      icon: Award,
      badge: "501(c)(3) Donation"
    },
    {
      title: "Sponsorship Payments",
      description: "Pay corporate sponsorship invoices for annual tournaments, newsletters, and chapter programs.",
      amount: "Invoice Amount",
      link: "/pay-online/sponsorship-payments",
      icon: FileText,
      badge: "Corporate Sponsorship"
    },
    {
      title: "Monthly Dinner Meeting Reservations",
      description: "Reserve your dinner seat for the monthly technical chapter presentations (restored page).",
      amount: "$35 – $45",
      link: "/pay-online/api-monthly-dinner-meeting",
      icon: Utensils,
      badge: "Monthly Meeting"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Pay Online"
        category="Secure Transaction Gateway"
        breadcrumbs={[{ label: "Pay Online" }]}
        subtitle="Convenient online payments for chapter membership, sporting tournaments, holiday banquets, and sponsorships."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Original Guidance Notice (Verbatim Preservation) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-4">
          <div className="flex items-start space-x-3 text-slate-700">
            <CreditCard className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="text-base font-bold text-brand-navy">Payment Instructions</h2>
              <p className="text-sm leading-relaxed text-slate-800 font-medium">
                To pay for an event, hover over the “PAY ONLINE” menu, click on the event, and complete the form.
              </p>
              <p className="text-sm text-slate-600">
                Please email the API Bakersfield Chapter if you have any questions or concerns.
              </p>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                You may also select any of the secure direct payment gateways below:
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Payment Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentPortals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(item.link)}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Rate / Tier</span>
                    <span className="text-sm font-extrabold text-brand-navy">{item.amount}</span>
                  </div>

                  <span className="px-3.5 py-1.5 bg-brand-navy text-white text-xs font-bold rounded-xl group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors inline-flex items-center">
                    <span>Pay</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Non-profit Banner */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
            <div>
              <span className="font-bold text-slate-800 block">Tax Exempt Entity</span>
              <span>American Petroleum Institute – San Joaquin Valley Chapter • Tax ID: {CHAPTER_INFO.taxId}</span>
            </div>
          </div>
          <div>
            P.O. Box 1064, Bakersfield, CA 93302
          </div>
        </div>
      </div>
    </div>
  );
}
