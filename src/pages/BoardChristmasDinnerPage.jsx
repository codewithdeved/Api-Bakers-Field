import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Calendar, Utensils, CheckCircle2, ArrowRight, Sparkles, User, Heart } from 'lucide-react';

export default function BoardChristmasDinnerPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    contactEmail: '',
    bringingGuest: 'Yes',
    boardFirst: '',
    boardLast: '',
    boardFoodChoice: 'Filet',
    boardPickledTongue: 'No',
    guestFirst: '',
    guestLast: '',
    guestFoodChoice: 'Filet',
    guestPickledTongue: 'No',
    organizerNote: ''
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

    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Email is required';
    if (!formData.boardFirst.trim()) newErrors.boardFirst = 'Board Member First Name is required';
    if (!formData.boardLast.trim()) newErrors.boardLast = 'Board Member Last Name is required';
    if (formData.bringingGuest === 'Yes') {
      if (!formData.guestFirst.trim()) newErrors.guestFirst = 'Guest First Name is required';
      if (!formData.guestLast.trim()) newErrors.guestLast = 'Guest Last Name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Board Christmas Dinner"
        category="Annual Chapter Holiday Banquet"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Board Christmas Dinner" }
        ]}
        subtitle="Annual holiday dinner banquet for API San Joaquin Valley Chapter Board Members and their guests."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Board Christmas Dinner</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-brand-light px-3.5 py-2 rounded-xl border border-brand-gold/30">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Annual Board Member Celebration</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Contact Email of Person Completing Form (Verbatim) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Email of Person Completing Form <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full max-w-md px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                  errors.contactEmail ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                }`}
              />
              {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
            </div>

            {/* Are you bringing a guest? (Verbatim) */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Are you bringing a guest? <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="inline-flex items-center space-x-2 text-sm text-slate-800 cursor-pointer">
                  <input
                    type="radio"
                    name="bringingGuest"
                    value="Yes"
                    checked={formData.bringingGuest === 'Yes'}
                    onChange={handleChange}
                    className="text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="font-semibold">Yes</span>
                </label>
                <label className="inline-flex items-center space-x-2 text-sm text-slate-800 cursor-pointer">
                  <input
                    type="radio"
                    name="bringingGuest"
                    value="No"
                    checked={formData.bringingGuest === 'No'}
                    onChange={handleChange}
                    className="text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="font-semibold">No</span>
                </label>
              </div>
            </div>

            {/* Board Member Details & Food Choices (Verbatim) */}
            <div className="space-y-5 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-base">
                <User className="w-5 h-5 text-brand-gold" />
                <span>Board Member Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Board Member First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="boardFirst"
                    value={formData.boardFirst}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.boardFirst ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.boardFirst && <p className="text-red-500 text-xs mt-1">{errors.boardFirst}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Board Member Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="boardLast"
                    value={formData.boardLast}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.boardLast ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.boardLast && <p className="text-red-500 text-xs mt-1">{errors.boardLast}</p>}
                </div>
              </div>

              {/* Board Member Food Choice (Verbatim Choices) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Board Member Food Choice <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['Filet', 'Fried Chicken', 'Salmon', 'No food'].map((choice) => (
                      <label key={choice} className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="boardFoodChoice"
                          value={choice}
                          checked={formData.boardFoodChoice === choice}
                          onChange={handleChange}
                          className="text-brand-navy focus:ring-brand-gold"
                        />
                        <span>{choice}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pickled Tongue (Verbatim) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Board Member: Would you like Pickled Tongue with your dinner <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-6">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="inline-flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="boardPickledTongue"
                          value={opt}
                          checked={formData.boardPickledTongue === opt}
                          onChange={handleChange}
                          className="text-brand-navy focus:ring-brand-gold"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Details & Food Choices (Verbatim) */}
            {formData.bringingGuest === 'Yes' && (
              <div className="space-y-5 pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-base">
                  <Heart className="w-5 h-5 text-brand-gold" />
                  <span>Guest Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Guest First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guestFirst"
                      value={formData.guestFirst}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                        errors.guestFirst ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                    />
                    {errors.guestFirst && <p className="text-red-500 text-xs mt-1">{errors.guestFirst}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Guest Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guestLast"
                      value={formData.guestLast}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                        errors.guestLast ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                      }`}
                    />
                    {errors.guestLast && <p className="text-red-500 text-xs mt-1">{errors.guestLast}</p>}
                  </div>
                </div>

                {/* Guest Food Choice (Verbatim Choices) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Guest Food Choice <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Filet', 'Fried Chicken', 'Salmon', 'No food'].map((choice) => (
                        <label key={choice} className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="guestFoodChoice"
                            value={choice}
                            checked={formData.guestFoodChoice === choice}
                            onChange={handleChange}
                            className="text-brand-navy focus:ring-brand-gold"
                          />
                          <span>{choice}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Guest Pickled Tongue (Verbatim) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Guest: Would you like Pickled Tongue with your dinner <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-6">
                      {['Yes', 'No'].map((opt) => (
                        <label key={opt} className="inline-flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="guestPickledTongue"
                            value={opt}
                            checked={formData.guestPickledTongue === opt}
                            onChange={handleChange}
                            className="text-brand-navy focus:ring-brand-gold"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add Note to Organizer (Verbatim) */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Add Note to Organizer (Optional)
              </label>
              <textarea
                name="organizerNote"
                rows="3"
                value={formData.organizerNote}
                onChange={handleChange}
                placeholder="Seating preferences, dietary allergies, or special notes..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Submit Board Dinner RSVP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Board Christmas Dinner RSVP Received"
        data={{
          boardMember: `${formData.boardFirst} ${formData.boardLast}`,
          boardEntree: formData.boardFoodChoice,
          guest: formData.bringingGuest === 'Yes' ? `${formData.guestFirst} ${formData.guestLast} (${formData.guestFoodChoice})` : 'None',
          contact: formData.contactEmail,
          status: 'Confirmed with Chapter Board Coordinator'
        }}
      />
    </div>
  );
}
