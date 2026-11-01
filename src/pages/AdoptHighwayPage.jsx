import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Trash2, Clock, MapPin, Coffee, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AdoptHighwayPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    volunteersCount: '1',
    shirtSize: 'L'
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
        title="Adopt-A-Highway"
        category="Community Service & Volunteerism"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Adopt-A-Highway" }
        ]}
        subtitle="Quarterly Caltrans volunteer cleanup along Rosedale Hwy & Hwy 43."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verbatim Event Information Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                Caltrans Volunteer Action
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy">
                VOLUNTEERS NEEDED!
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Trash2 className="w-6 h-6" />
            </div>
          </div>

          {/* Verbatim Schedule & Logistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Meeting Location</span>
              </div>
              <p className="text-sm text-slate-800 font-medium">
                Meet at the corner of Rosedale Hwy and Hwy 43 (Enos Lane)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <Coffee className="w-4 h-4 text-brand-gold" />
                <span>Complimentary Breakfast</span>
              </div>
              <p className="text-sm text-slate-800 font-medium">
                7-8 am, FREE breakfast at the Golden Bull Restaurant
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Cleanup Stretch</span>
              </div>
              <p className="text-sm text-slate-800 font-medium">
                8-10 am clean highway from Rosedale to Stockdale Hwy
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Safety & Equipment</span>
              </div>
              <p className="text-sm text-slate-800 font-medium">
                All equipment provided. Wear warm clothes and shoes.
              </p>
            </div>
          </div>

          {/* Verbatim Contact Callout */}
          <div className="p-5 bg-brand-light rounded-2xl border border-brand-gold/30 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-3 text-slate-900 font-semibold text-sm">
              <Phone className="w-4 h-4 text-brand-navy" />
              <span>Contact Tim Frame (661-447-5123) with any questions</span>
            </div>
            <a href="tel:6614475123" className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-dark transition-colors">
              Call Tim Frame
            </a>
          </div>

          {/* Verbatim Prompt: Sign up below… */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-xl font-bold text-brand-navy mb-1">Sign up below…</h3>
            <p className="text-xs text-slate-500 mb-6">" * " indicates required fields</p>

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
                    Number of Volunteers in Party
                  </label>
                  <select
                    name="volunteersCount"
                    value={formData.volunteersCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  >
                    {[1, 2, 3, 4, 5, '6+ (Group)'].map((n, i) => (
                      <option key={i} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Submit Volunteer Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Adopt-a-Highway Volunteer Sign-Up Received"
        data={{
          volunteerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Individual Volunteer',
          partySize: `${formData.volunteersCount} person(s)`,
          meetingNotice: 'Golden Bull Restaurant at 7:00 AM'
        }}
      />
    </div>
  );
}
