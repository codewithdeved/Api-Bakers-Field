import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Utensils, Calendar, MapPin, Clock, Users, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function MonthlyDinnerMeetingPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    meetingMonth: 'Current Monthly Dinner Meeting',
    attendeeType: 'member', // 'member' ($35), 'guest' ($40), 'student' ($25)
    quantity: 1,
    entreeSelection: 'Beef Tri-Tip / Carving',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const priceMap = {
    member: 35,
    guest: 40,
    student: 25
  };

  const unitPrice = priceMap[formData.attendeeType];
  const totalAmount = unitPrice * Number(formData.quantity || 1);

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
        title="Monthly Dinner Meeting Reservations"
        category="General Meeting RSVP & Payment"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Monthly Dinner Meeting" }
        ]}
        subtitle="Reserve your seat for monthly general meetings featuring prominent guest speakers and industry presentations."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Restoration Notice Pill */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between text-xs text-emerald-800 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Defect Resolved in Modernization:</strong> This URL previously returned an HTTP 404 error on the live legacy site. Fully restored as an interactive reservation portal.</span>
          </div>
          <div className="font-semibold text-emerald-950">Dinner Chair: Mike Handren (mhandren@yahoo.com)</div>
        </div>

        {/* Meeting Details Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Dinner Meeting Reservation</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>3rd Tuesday of Each Month • 5:30 PM Social / 6:30 PM Dinner</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Attendee Rate Tier */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Attendee Category <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  formData.attendeeType === 'member'
                    ? 'border-brand-navy bg-brand-light ring-2 ring-brand-navy/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
                  <div>
                    <input
                      type="radio"
                      name="attendeeType"
                      value="member"
                      checked={formData.attendeeType === 'member'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-bold text-slate-900 block text-sm">API Chapter Member</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">Current paid dues</span>
                  </div>
                  <span className="text-lg font-extrabold text-brand-navy mt-3 block">$35.00</span>
                </label>

                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  formData.attendeeType === 'guest'
                    ? 'border-brand-navy bg-brand-light ring-2 ring-brand-navy/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
                  <div>
                    <input
                      type="radio"
                      name="attendeeType"
                      value="guest"
                      checked={formData.attendeeType === 'guest'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-bold text-slate-900 block text-sm">Non-Member / Guest</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">Industry guest welcome</span>
                  </div>
                  <span className="text-lg font-extrabold text-brand-navy mt-3 block">$40.00</span>
                </label>

                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  formData.attendeeType === 'student'
                    ? 'border-brand-navy bg-brand-light ring-2 ring-brand-navy/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
                  <div>
                    <input
                      type="radio"
                      name="attendeeType"
                      value="student"
                      checked={formData.attendeeType === 'student'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-bold text-slate-900 block text-sm">Student / Retired</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">College student / retiree</span>
                  </div>
                  <span className="text-lg font-extrabold text-brand-navy mt-3 block">$25.00</span>
                </label>
              </div>
            </div>

            {/* Quantity */}
            <div className="w-full sm:w-1/3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Number of Seats
              </label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Seat' : 'Seats'}</option>
                ))}
              </select>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Attendee Contact Information</h3>

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
                    Entrée Choice
                  </label>
                  <select
                    name="entreeSelection"
                    value={formData.entreeSelection}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  >
                    <option value="Beef Tri-Tip / Carving">Beef Tri-Tip / Carving</option>
                    <option value="Grilled Chicken Breast">Grilled Chicken Breast</option>
                    <option value="Vegetarian Special">Vegetarian Special</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Total Box */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">Reservation Summary</span>
                <p className="text-sm text-slate-300">
                  {formData.quantity} × {formData.attendeeType === 'member' ? 'Member ($35)' : formData.attendeeType === 'guest' ? 'Guest ($40)' : 'Student ($25)'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block uppercase">Total Due</span>
                <span className="text-3xl font-extrabold text-brand-gold">${totalAmount.toLocaleString()}.00</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Reserve Seat & Pay (${totalAmount.toLocaleString()}.00)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Dinner Meeting Reservation Received"
        data={{
          guestName: `${formData.firstName} ${formData.lastName}`,
          company: formData.company || 'Not Specified',
          email: formData.email,
          partySize: `${formData.quantity} seat(s)`,
          totalDue: `$${totalAmount.toLocaleString()}.00`,
          entree: formData.entreeSelection,
          schedule: '3rd Tuesday at 5:30 PM (Petroleum Club / 1933)'
        }}
      />
    </div>
  );
}
