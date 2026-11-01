import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Award, DollarSign, Heart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function PayScholarshipDonationsPage({ onNavigate }) {
  const [amountPreset, setAmountPreset] = useState('250');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    dedication: '',
    address: '',
    city: '',
    state: 'CA',
    zip: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const finalAmount = amountPreset === 'custom' ? Number(customAmount || 0) : Number(amountPreset);

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

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    if (finalAmount <= 0) newErrors.amount = 'Please select or enter a valid donation amount';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Direct Scholarship Donations"
        category="Philanthropic Giving"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Direct Scholarship Donations" }
        ]}
        subtitle="Support the next generation of Kern County engineers and energy leaders with a tax-deductible contribution."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Direct Scholarship Donations</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 text-xs font-semibold flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>501(c)(3) Tax Deductible (ID: {CHAPTER_INFO.taxId})</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Amount Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Contribution Amount <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {['50', '100', '250', '500', '1000'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmountPreset(amt); setCustomAmount(''); }}
                    className={`py-3.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                      amountPreset === amt
                        ? 'border-brand-navy bg-brand-navy text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount Field */}
              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setAmountPreset('custom')}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    amountPreset === 'custom'
                      ? 'border-brand-navy bg-brand-navy text-white'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  Other Amount ($)
                </button>
                {amountPreset === 'custom' && (
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter custom dollar amount"
                    className="w-48 px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                )}
              </div>
              {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
            </div>

            {/* Dedication / Honor of */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                In Honor / In Memory Of (Optional)
              </label>
              <input
                type="text"
                name="dedication"
                value={formData.dedication}
                onChange={handleChange}
                placeholder="e.g. In memory of a loved one or honored colleague"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            {/* Donor Information (Verbatim Heading: Donor Information) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Donor Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.firstName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.lastName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address (For Tax Receipt) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Total Display */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">Charitable Donation</span>
                <p className="text-sm text-slate-300">San Joaquin Valley Chapter Scholarship Endowment</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block uppercase">Contribution Amount</span>
                <span className="text-3xl font-extrabold text-brand-gold">${finalAmount.toLocaleString()}.00</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Complete Scholarship Donation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Scholarship Donation Received"
        data={{
          donor: `${formData.firstName} ${formData.lastName}`,
          company: formData.company || 'Individual Donor',
          email: formData.email,
          donationAmount: `$${finalAmount.toLocaleString()}.00`,
          taxDeductible: `Yes • 501(c)(3) Tax ID: ${CHAPTER_INFO.taxId}`,
          dedication: formData.dedication || 'General Scholarship Fund'
        }}
      />
    </div>
  );
}
