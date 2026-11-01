import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Briefcase, User, Mail, Phone, FileText, Upload, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function JobBoardSeekersPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    discipline: 'Petroleum Engineering',
    yearsExperience: '5-10 Years',
    summary: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sampleSeekers = [
    {
      title: "Senior Reservoir & Simulation Engineer (PE)",
      experience: "14 Years in San Joaquin Valley Heavy Oil",
      skills: "Eclipse, CMG, Petrel, Decline Curve Analysis, Waterflood/Steamflood Optimization",
      availability: "Immediate",
      contact: "Inquire via Info Request Form"
    },
    {
      title: "Field Production Superintendent / Operations Lead",
      experience: "22 Years Kern County Oilfields",
      skills: "Artificial Lift, Rod Pumping, Facilities De-bottlenecking, Safe Work Permitting",
      availability: "Immediate",
      contact: "Inquire via Info Request Form"
    },
    {
      title: "EH&S Compliance Specialist",
      experience: "8 Years Industrial & Oilfield Safety",
      skills: "Cal/OSHA, SPCC Plans, Air District Rule 1173, Incident Investigation, HAZWOPER 40",
      availability: "2 Weeks Notice",
      contact: "Inquire via Info Request Form"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
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
        title="Job Board (SEEKERS LIST YOUR RESUME HERE)"
        category="Candidate Profiles & Career Opportunities"
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Job Board Seekers" }
        ]}
        subtitle="Energy professionals, operators, and engineers seeking career opportunities in the San Joaquin Valley."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verbatim Guidance Box */}
        <div className="bg-brand-light p-6 rounded-2xl border border-brand-gold/30 text-slate-800 text-sm leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p>
              Please use the <span className="font-bold text-brand-navy">INFO REQUEST FORM</span> to request additions or changes to the job listing at{' '}
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

        {/* Existing Candidate Profiles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-brand-navy">Featured Candidate Summaries</h2>
            <span className="text-xs text-slate-500">{sampleSeekers.length} Profiles Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleSeekers.map((seeker, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {seeker.availability}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {seeker.title}
                  </h3>
                  <div className="text-xs text-slate-600 font-medium">
                    {seeker.experience}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <strong>Core Expertise:</strong> {seeker.skills}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/contact-us')}
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    Request Candidate Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List Resume Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-brand-navy">List Your Resume & Profile</h3>
            <p className="text-xs text-slate-500 mt-1">Submit your qualifications for confidential or public listing on the chapter board.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Primary Discipline / Role
                </label>
                <select
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="Petroleum Engineering">Petroleum Engineering</option>
                  <option value="Production Operations">Production Operations</option>
                  <option value="Drilling & Completions">Drilling & Completions</option>
                  <option value="Geology & Geophysics">Geology & Geophysics</option>
                  <option value="EH&S / Environmental">EH&S / Environmental</option>
                  <option value="Automation & SCADA">Automation & SCADA</option>
                  <option value="Mechanical / Electrical">Mechanical / Electrical</option>
                </select>
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
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Professional Experience Summary
              </label>
              <textarea
                name="summary"
                rows="4"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Highlight your years of experience, key competencies, software proficiencies, and preferred roles..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            {/* Resume Upload Box */}
            <div className="p-5 border-2 border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <label className="cursor-pointer text-xs font-bold text-brand-navy hover:underline">
                <span>Upload Resume (PDF, DOCX)</span>
                <input type="file" onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" />
              </label>
              {formData.fileName ? (
                <p className="text-xs text-emerald-600 font-semibold mt-1">Attached: {formData.fileName}</p>
              ) : (
                <p className="text-[11px] text-slate-400 mt-1">Max file size 10MB</p>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>Submit Candidate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Candidate Profile Submitted"
        data={{
          name: formData.fullName,
          discipline: formData.discipline,
          email: formData.email,
          phone: formData.phone,
          resume: formData.fileName || 'Profile Summary Provided',
          status: 'Listing Queued for Chapter Webmaster Review'
        }}
      />
    </div>
  );
}
