import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Building2, GraduationCap, MapPin, Calendar, Clock, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AvailableInternshipsPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    companyName: '',
    internshipTitle: '',
    location: 'Bakersfield, CA',
    term: 'Summer 2026 (10-12 Weeks)',
    compensation: 'Paid Internship ($25 - $35/hr)',
    contactEmail: '',
    contactPhone: '',
    description: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sampleInternships = [
    {
      title: "Summer 2026 Petroleum Production Engineering Intern",
      company: "San Joaquin Valley Producer",
      location: "Bakersfield & Lost Hills, CA",
      duration: "12 Weeks (June - August)",
      compensation: "Competitive Hourly + Mileage",
      description: "Hands-on experience in well optimization, rod pumping systems, surface facility surveillance, and artificial lift field analysis."
    },
    {
      title: "Geology / Subsurface Characterization Intern",
      company: "Kern Basin Exploration & Development",
      location: "Bakersfield, CA",
      duration: "10 Weeks (Summer)",
      compensation: "Paid Internship",
      description: "Work alongside senior geoscientists integrating 3D seismic, well logs, and core data for reservoir characterization."
    },
    {
      title: "Facilities & Mechanical Engineering Intern",
      company: "Thermal Energy Infrastructure Operator",
      location: "Kern River Field, CA",
      duration: "10-12 Weeks",
      compensation: "Paid Hourly",
      description: "Support steam plant reliability, pipeline integrity surveys, and environmental compliance testing."
    }
  ];

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

    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.internshipTitle.trim()) newErrors.internshipTitle = 'Internship Title is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Available Internships (Companies list your positions)"
        category="Corporate Student Programs"
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Available Internships" }
        ]}
        subtitle="Opportunities offered by local oil & gas operators, service providers, and engineering consultants."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verbatim Guidance Box */}
        <div className="bg-brand-light p-6 rounded-2xl border border-brand-gold/30 text-slate-800 text-sm leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p>
              Please use the{' '}
              <button onClick={() => onNavigate('/contact-us')} className="text-brand-navy font-bold underline">
                INFO REQUEST FORM
              </button>{' '}
              to request additions or changes to the INTERSHIP listing at{' '}
              <a href="https://www.apibakersfield.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-brand-navy underline break-all">
                https://www.apibakersfield.com/contact-us/
              </a>
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact-us')}
            className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-dark transition-colors shrink-0"
          >
            Info Request Form
          </button>
        </div>

        {/* Featured Program Announcement (Verbatim Preservation) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-4 text-slate-800 leading-relaxed">
            <p className="text-base font-medium">
              Thanks to Bank of America’s generous support, the Kern Economic Development Foundation (KEDF) will fully fund 20 internships with the region’s manufacturers.
            </p>
            <p className="text-base font-medium">
              Interns will be new graduates from the 40+ STEM-based programs at the Kern High School District.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://www.apibakersfield.com/wp-content/uploads/2023/05/KIC-Flyer.png"
              alt="KEDF Manufacturing Internships Flyer"
              className="w-full max-w-sm rounded-xl border border-slate-200 shadow-sm"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="space-y-3">
              <a
                href="https://www.apibakersfield.com/wp-content/uploads/2023/05/KIC-Flyer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-brand-gold text-brand-dark font-bold text-sm rounded-xl hover:bg-brand-gold/90 transition-colors shadow-sm"
              >
                <span>For a PDF of the FLYER, Click here!</span>
              </a>
              <p className="text-xs text-slate-500">
                Download the official Kern Economic Development Foundation (KEDF) internship flyer PDF.
              </p>
              <div className="p-4 bg-brand-light rounded-xl border border-brand-gold/20 text-xs text-brand-dark font-medium leading-relaxed mt-2">
                Thanks to CRC, Berry Petroleum and Aera Energy for continuing to support local college students with valuable internship opportunities!
              </div>
            </div>
          </div>
        </div>

        {/* Existing Open Internships */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-brand-navy">Active Internship Programs</h2>
            <span className="text-xs text-slate-500">{sampleInternships.length} Positions Available</span>
          </div>

          <div className="space-y-4">
            {sampleInternships.map((internship, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{internship.title}</h3>
                    <div className="text-xs font-semibold text-slate-600 flex items-center space-x-2 mt-0.5">
                      <span>{internship.company}</span>
                      <span>•</span>
                      <span className="flex items-center text-slate-500">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                        {internship.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold self-start sm:self-auto border border-emerald-200">
                    {internship.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {internship.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-brand-navy">{internship.compensation}</span>
                  <button
                    onClick={() => onNavigate('/contact-us')}
                    className="text-brand-navy font-bold hover:underline"
                  >
                    Apply / Request Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Internship Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-brand-navy">List an Internship Position (Companies)</h3>
            <p className="text-xs text-slate-500 mt-1">Submit your company’s internship opportunity for local university students.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company / Operator <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.companyName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Internship Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="internshipTitle"
                  value={formData.internshipTitle}
                  onChange={handleChange}
                  placeholder="e.g. Summer Petroleum Engineering Intern"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.internshipTitle ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.internshipTitle && <p className="text-red-500 text-xs mt-1">{errors.internshipTitle}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Term / Duration
                </label>
                <input
                  type="text"
                  name="term"
                  value={formData.term}
                  onChange={handleChange}
                  placeholder="Summer 2026 (10-12 Weeks)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Contact Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.contactEmail ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Program Description & Qualifications
              </label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Detail what the student will learn, field visits involved, and application deadline..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>Submit Internship Listing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Internship Position Submitted"
        data={{
          company: formData.companyName,
          title: formData.internshipTitle,
          term: formData.term,
          contact: formData.contactEmail,
          status: 'Listing Queued for Chapter Webmaster Review'
        }}
      />
    </div>
  );
}
