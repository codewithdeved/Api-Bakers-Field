import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { CreditCard, DollarSign, ShieldCheck, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

export default function PayMembershipPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zip: '',
    paymentMethod: 'credit_card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••'
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
        title="Membership Application"
        category="Annual Dues Payment"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Membership Application" }
        ]}
        subtitle="Membership Application ($30 per year). Use “Pay Online” to use PayPal or Credit Card for your Membership."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Membership Application ($30 per year)</h2>
              <p className="text-sm text-slate-600 font-medium mt-1">This form is the file record of your membership.</p>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="p-3 bg-brand-light rounded-2xl border border-brand-gold/30 text-right">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Due</span>
              <span className="text-2xl font-black text-brand-navy">$30.00</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  Are you an API Board Member? <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-6 mt-2">
                  <label className="inline-flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                    <input type="radio" name="boardMember" value="YES" defaultChecked className="text-brand-navy focus:ring-brand-gold" />
                    <span className="font-semibold">YES</span>
                  </label>
                  <label className="inline-flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                    <input type="radio" name="boardMember" value="NO" className="text-brand-navy focus:ring-brand-gold" />
                    <span className="font-semibold">NO</span>
                  </label>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 italic">For accounting purposes only</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Chevron, CRC, Global Elastomeric"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Are you a Life Time Member? Enter coupon code here. If you do not know the code, please reach out to Scott Bender or to apibakersfieldchapter@gmail.com.
                </label>
                <input
                  type="text"
                  name="couponCode"
                  placeholder="Enter lifetime member coupon code"
                  className="w-full max-w-md px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
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
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mailing Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street or P.O. Box"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
            </div>

            {/* Payment Options (Verbatim) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Payment Options <span className="text-red-500">*</span>
              </label>

              <div className="space-y-3">
                <label className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between ${
                  formData.paymentMethod === 'paypal' ? 'border-brand-navy bg-brand-light' : 'border-slate-200'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                      className="text-brand-navy focus:ring-brand-gold"
                    />
                    <DollarSign className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-900">
                      PayPal (You may use your PayPal account or use your CC on the PayPal site)
                    </span>
                  </div>
                </label>

                <label className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between ${
                  formData.paymentMethod === 'in_person' ? 'border-brand-navy bg-brand-light' : 'border-slate-200'
                }`}>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="in_person"
                      checked={formData.paymentMethod === 'in_person'}
                      onChange={handleChange}
                      className="text-brand-navy focus:ring-brand-gold"
                    />
                    <CreditCard className="w-5 h-5 text-brand-navy shrink-0" />
                    <span className="text-sm font-semibold text-slate-900">
                      Pay in person at an API event or Meeting
                    </span>
                  </div>
                </label>
              </div>

              <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                (Contact Scott Bender or apibakersfieldchapter@gmail.com if you have any question...DO NOT RESUBMIT IF YOUR PAYMENT IS NOT ACCPETED)
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Encrypted 256-bit checkout • Instant receipt upon submission</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 uppercase font-bold block">Charge Amount</span>
                <span className="text-xl font-extrabold text-brand-navy">$30.00</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Pay $30.00 & Complete Membership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Membership Payment Confirmed"
        data={{
          member: `${formData.firstName} ${formData.lastName}`,
          company: formData.company || 'Not Specified',
          email: formData.email,
          paymentType: 'Annual Membership',
          amountPaid: '$30.00',
          method: formData.paymentMethod === 'paypal' ? 'PayPal Commerce' : 'Credit Card (Simulated)'
        }}
      />
    </div>
  );
}
