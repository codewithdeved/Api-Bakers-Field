import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { CHAPTER_INFO } from '../data/siteContent';
import { 
  Users, CreditCard, ShieldCheck, CheckCircle2, 
  ArrowRight, DollarSign, Calendar, Mail, Phone, Building, Briefcase, MapPin 
} from 'lucide-react';

export default function MembershipOverviewPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zip: '',
    membershipType: 'Annual Membership ($30.00)',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

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
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Membership"
        category="San Joaquin Valley Chapter"
        breadcrumbs={[
          { label: "About Us", path: "/about-us" },
          { label: "Membership" }
        ]}
        subtitle="We would love to have you join us! Professional networking, technical dinners, and educational outreach."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Intro Message & Callout (Verbatim) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {/* Verbatim Content */}
            We would love to have you join us! If you are undecided about why to join, please see a{' '}
            <button
              onClick={() => onNavigate('/about-us/chairmans-message')}
              className="text-brand-navy font-bold hover:underline inline-flex items-center"
            >
              message from our Chairman
            </button>
            .
          </p>

          <div className="p-5 bg-brand-light rounded-2xl border border-brand-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold">
                $30
              </div>
              <div>
                <h2 className="text-base font-bold text-brand-navy">Membership Application ($30 per year)</h2>
                <p className="text-xs text-slate-600">
                  {/* Verbatim Instruction */}
                  Use “Pay Online” to use PayPal or Credit Card for your Membership.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/pay-online/membership-application')}
              className="px-4 py-2 bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold rounded-xl transition-colors shrink-0"
            >
              Pay Online Directly
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="border-b border-slate-100 pb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Membership Application</h3>
              <p className="text-xs text-slate-500 mt-1">
                {/* Verbatim Gravity Form label */}
                " * " indicates required fields
              </p>
            </div>
            <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold border border-emerald-200">
              Annual Dues: $30.00
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. John"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all ${
                    errors.firstName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Doe"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all ${
                    errors.lastName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Chevron, CRC, Service Provider"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Title / Position
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Production Engineer, Operations Manager"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all ${
                    errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(661) 555-0123"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all ${
                    errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Mailing Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address or P.O. Box"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City (e.g. Bakersfield)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State (e.g. CA)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                />
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="ZIP Code (e.g. 93301)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition-all"
                />
              </div>
            </div>

            {/* Membership Fee Box */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500">Selected Option</span>
                <p className="font-bold text-slate-900 text-sm">San Joaquin Valley Chapter Annual Dues</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-brand-navy">$30.00</span>
                <span className="text-xs text-slate-500 block">per year</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Official contact: Membership Chair Scott Bender (<a href="mailto:sbender024@gmail.com" className="text-brand-navy underline">sbender024@gmail.com</a>)
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit Membership Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Membership Application Received"
        data={{
          ...formData,
          amountDue: '$30.00 / year'
        }}
      />
    </div>
  );
}
