import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Building2, Briefcase, MapPin, Clock, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function JobBoardProvidersPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobLocation: 'Bakersfield, CA',
    jobType: 'Full-Time',
    contactEmail: '',
    contactPhone: '',
    description: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sampleJobs = [
    {
      title: "Senior Production Engineer",
      company: "Kern County Energy Operator",
      location: "Bakersfield, CA",
      type: "Full-Time",
      posted: "Recent Posting",
      description: "Managing artificial lift optimization, well surveillance, and workover designs for San Joaquin Valley asset base."
    },
    {
      title: "Field Automation & Instrumentation Specialist",
      company: "Thermal EOR Production Services",
      location: "Taft / McKittrick, CA",
      type: "Full-Time",
      posted: "Recent Posting",
      description: "Calibration, SCADA communications, PLC programming, and field telemetry maintenance."
    },
    {
      title: "Regulatory & Environmental Compliance Specialist",
      company: "Independent Energy Producer",
      location: "Bakersfield, CA",
      type: "Full-Time",
      posted: "Recent Posting",
      description: "Permitting, CalGEM/EPA Class VI documentation, emissions monitoring, and agency liaison."
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
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required';
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
        title="Job Board"
        category="Employer Listings & Talent Acquisition"
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Job Board" }
        ]}
        subtitle="Energy providers, operators, and service companies listing professional positions in the San Joaquin Valley."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verbatim Guidance Box */}
        <div className="bg-brand-light p-6 rounded-2xl border border-brand-gold/30 text-slate-800 text-sm leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p>
              Please use the <span className="font-bold text-brand-navy">INFO REQUEST FORM</span> to request additions or changes to the job listing{' '}
              <button onClick={() => onNavigate('/contact-us')} className="text-brand-navy font-bold underline">
                HERE
              </button>
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact-us')}
            className="px-4 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-dark transition-colors shrink-0"
          >
            Info Request Form
          </button>
        </div>

        {/* Featured Provider Companies (Verbatim Preservation) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-brand-navy border-b border-slate-100 pb-3">
            Featured Industry Employer Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://www.apibakersfield.com/resources/job-board/antora-energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 hover:border-brand-gold bg-slate-50/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <span className="font-bold text-slate-900 group-hover:text-brand-navy text-sm">Antora Energy</span>
              <Building2 className="w-4 h-4 text-slate-400 group-hover:text-brand-gold" />
            </a>
            <a
              href="https://www.apibakersfield.com/mts/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 hover:border-brand-gold bg-slate-50/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <span className="font-bold text-slate-900 group-hover:text-brand-navy text-sm">MTS Solutions</span>
              <Building2 className="w-4 h-4 text-slate-400 group-hover:text-brand-gold" />
            </a>
            <a
              href="https://www.apibakersfield.com/pcl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 hover:border-brand-gold bg-slate-50/50 hover:bg-white transition-all flex items-center justify-between group"
            >
              <span className="font-bold text-slate-900 group-hover:text-brand-navy text-sm">PCL Industrial Services</span>
              <Building2 className="w-4 h-4 text-slate-400 group-hover:text-brand-gold" />
            </a>
          </div>
        </div>

        {/* Existing Open Positions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-brand-navy">Current Open Positions</h2>
            <span className="text-xs text-slate-500">{sampleJobs.length} Positions Listed</span>
          </div>

          <div className="space-y-4">
            {sampleJobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <div className="text-xs font-semibold text-slate-600 flex items-center space-x-2 mt-0.5">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span className="flex items-center text-slate-500">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-brand-light text-brand-navy rounded-full text-xs font-bold self-start sm:self-auto">
                    {job.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>{job.posted}</span>
                  <button
                    onClick={() => onNavigate('/contact-us')}
                    className="text-brand-navy font-bold hover:underline"
                  >
                    Inquire via Contact Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Position Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-brand-navy">Post an Open Position (Providers)</h3>
            <p className="text-xs text-slate-500 mt-1">Submit your job posting for inclusion on the API Chapter job board.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company / Organization <span className="text-red-500">*</span>
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
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.jobTitle ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Employment Type
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract / Consultant">Contract / Consultant</option>
                  <option value="Temporary / Seasonal">Temporary / Seasonal</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Position Description & Qualifications
              </label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Include responsibilities, required certifications, experience level, and how candidates apply..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>Submit Job Posting</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Job Posting Submitted"
        data={{
          company: formData.companyName,
          title: formData.jobTitle,
          contact: formData.contactEmail,
          type: formData.jobType,
          status: 'Listing Queued for Chapter Webmaster Review'
        }}
      />
    </div>
  );
}
