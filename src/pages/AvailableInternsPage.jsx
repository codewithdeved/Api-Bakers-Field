import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { GraduationCap, BookOpen, Calendar, Mail, Phone, Upload, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AvailableInternsPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    studentName: '',
    university: 'CSU Bakersfield',
    major: 'Petroleum Engineering / Geology',
    gradYear: '2026',
    availability: 'Summer 2026',
    email: '',
    phone: '',
    bio: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const sampleInterns = [
    {
      name: "Junior Petroleum Engineering Major",
      university: "California State University, Bakersfield (CSUB)",
      gpa: "3.7 GPA",
      focus: "Reservoir Engineering, Petrophysics, Well Logging",
      availability: "Summer 2026 (Full-Time)",
      contact: "Inquire via Info Request Form"
    },
    {
      name: "Senior Mechanical Engineering Student",
      university: "Cal Poly San Luis Obispo",
      gpa: "3.5 GPA",
      focus: "Fluid Dynamics, Piping Systems, Thermal Recovery",
      availability: "Summer 2026",
      contact: "Inquire via Info Request Form"
    },
    {
      name: "Master's Geology Candidate",
      university: "CSU Bakersfield",
      gpa: "3.9 GPA",
      focus: "Subsurface Structural Mapping, Basin Analysis, Core Sampling",
      availability: "Immediate / Part-Time or Summer",
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

    if (!formData.studentName.trim()) newErrors.studentName = 'Student Name is required';
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
        title="Available Interns (Candidates list your resumes and availability here)"
        category="Student Internship Exchange"
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Available Interns" }
        ]}
        subtitle="Connecting engineering, geology, and STEM college students with energy companies in Kern County."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Verbatim Guidance Box */}
        <div className="bg-brand-light p-6 rounded-2xl border border-brand-gold/30 text-slate-800 text-sm leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p>
              Please use the <span className="font-bold text-brand-navy">INFO REQUEST FORM</span> to list your resume and availability here{' '}
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

        {/* Existing Student Candidates */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-brand-navy">Available Student Candidates</h2>
            <span className="text-xs text-slate-500">{sampleInterns.length} Students Listed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleInterns.map((intern, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-gold shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {intern.availability}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {intern.name}
                  </h3>
                  <div className="text-xs text-slate-600 font-medium">
                    {intern.university} • {intern.gpa}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <strong>Focus:</strong> {intern.focus}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/contact-us')}
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    Inquire via Info Request Form
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List Intern Profile Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-brand-navy">Submit Your Student Intern Profile</h3>
            <p className="text-xs text-slate-500 mt-1">List your academic background and internship availability for local operators.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.studentName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  College / University
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Degree / Major
                </label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Availability Period
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="Summer 2026">Summer 2026</option>
                  <option value="Fall 2026">Fall 2026</option>
                  <option value="Year-Round Part Time">Year-Round Part Time</option>
                  <option value="Immediate Graduate Role">Immediate Graduate Role</option>
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
                Academic & Career Interests
              </label>
              <textarea
                name="bio"
                rows="3"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Mention coursework, lab projects, CAD/simulation software, and specific areas of interest (drilling, production, environmental, geology)..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <span>Submit Intern Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Intern Candidate Profile Received"
        data={{
          student: formData.studentName,
          university: formData.university,
          major: formData.major,
          availability: formData.availability,
          email: formData.email,
          status: 'Listing Queued for Chapter Webmaster Review'
        }}
      />
    </div>
  );
}
