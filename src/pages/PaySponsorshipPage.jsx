import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { FileText, DollarSign, Building, ShieldCheck, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function PaySponsorshipPage({ onNavigate }) {
  const [tier, setTier] = useState('corporate');
  const [customAmount, setCustomAmount] = useState('500');
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    donationPurpose: '',
    sponsorsList: '',
    invoiceNumber: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sponsorshipTiers = [
    { id: 'corporate', name: 'Corporate Sponsor', price: 2500, category: 'Annual Programs' },
    { id: 'social_hour', name: 'API Social Hour Sponsor', price: 1000, category: 'Annual Programs' },
    { id: 'golf_tee', name: 'Golf Tee Sponsorship', price: 500, category: 'Tournament Sponsorships' },
    { id: 'super_prize', name: 'API SUPER PRIZE', price: 500, category: 'Event Prizes' },
    { id: 'event', name: 'Event Sponsor', price: 1500, category: 'Annual Programs' },
    { id: 'oil_barons', name: 'Oil Baron’s Ball Sponsor', price: 1200, category: 'Signature Events' },
    { id: 'general_meeting', name: 'General Meeting Sponsor', price: 500, category: 'Technical Sessions' },
    { id: 'ocdi_dunk', name: 'OCDI Dunk Tank Sponsor', price: 400, category: 'OCDI Sponsorships' },
    { id: 'ocdi_food', name: 'OCDI Food Sponsor', price: 200, category: 'OCDI Sponsorships' },
    { id: 'ocdi_raffle', name: 'OCDI Raffle Prize', price: 200, category: 'OCDI Sponsorships' },
    { id: 'news_full', name: 'Newsletter: Full Page - Annually (1 year)', price: 1400, category: 'Newsletter Sponsorships' },
    { id: 'news_half', name: 'Newsletter: Half Page - Annually (1 year)', price: 700, category: 'Newsletter Sponsorships' },
    { id: 'news_card', name: 'Newsletter: Business Card - Annually (1 year)', price: 200, category: 'Newsletter Sponsorships' },
    { id: 'custom', name: 'Sponsorship Other (Price* / Custom Amount)', price: 0, category: 'Custom Contribution' }
  ];

  const currentAmount = tier === 'custom' ? Number(customAmount || 0) : sponsorshipTiers.find(t => t.id === tier)?.price || 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.company.trim()) newErrors.company = 'Company Name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    if (tier === 'custom' && (!customAmount || Number(customAmount) <= 0)) {
      newErrors.amount = 'Valid payment amount is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  const selectedTierObj = sponsorshipTiers.find(t => t.id === tier);

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Sponsorship Payments"
        category="Corporate Accounts"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Sponsorship Payments" }
        ]}
        subtitle="Remit corporate sponsorship dues, event sponsor invoices, and newsletter advertising space."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Sponsorship Payments</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="p-3 bg-brand-light rounded-2xl border border-brand-gold/30 text-right">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Due</span>
              <span className="text-2xl font-black text-brand-navy">${currentAmount.toLocaleString()}.00</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Select Sponsorship Tier (Verbatim Live Tiers) */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Sponsorship Program <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sponsorshipTiers.map((t) => (
                  <label
                    key={t.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      tier === t.id
                        ? 'border-brand-navy bg-brand-light ring-2 ring-brand-navy/15'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="sponsorshipTier"
                        value={t.id}
                        checked={tier === t.id}
                        onChange={() => setTier(t.id)}
                        className="text-brand-navy focus:ring-brand-gold"
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{t.name}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">{t.category}</span>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-brand-navy">
                      {t.price > 0 ? `$${t.price.toLocaleString()}` : 'Custom'}
                    </span>
                  </label>
                ))}
              </div>

              {tier === 'custom' && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mt-3 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Enter Custom Sponsorship Amount ($ USD) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-xs">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                    <input
                      type="number"
                      min="50"
                      step="25"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="500.00"
                      className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-300 text-sm font-bold bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>
                  {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
                </div>
              )}
            </div>

            {/* Sponsoring Company's Website & Info (Verbatim) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-brand-navy">Company & Billing Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Chevron, PCL Construction, GHD"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.company ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Sponsoring Company's Website (optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.yourcompany.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact Person Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Billing Representative"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.contactName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="billing@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(999) 999-9999"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Donation Purpose?
                  </label>
                  <input
                    type="text"
                    name="donationPurpose"
                    value={formData.donationPurpose}
                    onChange={handleChange}
                    placeholder="e.g. STEM Scholarship, Tournament Event, Community Project"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Invoice / Reference Number
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    value={formData.invoiceNumber}
                    onChange={handleChange}
                    placeholder="e.g. INV-2026-084"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Sponsors*
                  </label>
                  <p className="text-xs text-slate-500 mb-1.5">Click the plus symbol to add more names or list affiliated sponsors</p>
                  <input
                    type="text"
                    name="sponsorsList"
                    value={formData.sponsorsList}
                    onChange={handleChange}
                    placeholder="Sponsor name or entity"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Add file(s) here...
                  </label>
                  <p className="text-xs text-slate-500 mb-1.5">Max. file size: 50 MB.</p>
                  <input
                    type="file"
                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-brand-navy file:text-white hover:file:bg-brand-navyLight cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Notes / Special Instructions
              </label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Include logo submission details or event preferences..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">Selected Sponsorship</span>
                <p className="text-sm text-slate-300">{selectedTierObj?.name}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block uppercase">Total Due</span>
                <span className="text-2xl font-black text-brand-gold">${currentAmount.toLocaleString()}.00</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Remit Sponsorship Payment (${currentAmount.toLocaleString()}.00)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Sponsorship Payment Remitted"
        data={{
          company: formData.company,
          website: formData.website || 'None',
          contact: formData.contactName,
          email: formData.email,
          program: selectedTierObj?.name,
          invoiceRef: formData.invoiceNumber || 'N/A',
          amountPaid: `$${currentAmount.toLocaleString()}.00`
        }}
      />
    </div>
  );
}
