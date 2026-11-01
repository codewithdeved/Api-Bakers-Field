import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { CHAPTER_INFO, QUICK_CONTACTS } from '../data/siteContent';
import { 
  Mail, Phone, MapPin, ShieldCheck, Send, 
  MessageSquare, Upload, ArrowRight, CheckCircle2, User, Building 
} from 'lucide-react';

export default function ContactUsPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Chapter Information',
    message: '',
    fileName: ''
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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.message.trim()) newErrors.message = 'Comments are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Contact Us"
        category="Chapter Communications"
        breadcrumbs={[{ label: "Contact Us" }]}
        subtitle="Reach out to chapter officers, committee chairs, or submit the Info Request Form."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Mailing & Entity */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Mailing Address</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                American Petroleum Institute<br />
                San Joaquin Valley Chapter<br />
                <strong>{CHAPTER_INFO.address}</strong><br />
                {CHAPTER_INFO.cityStateZip}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Tax ID: {CHAPTER_INFO.taxId} (501c3)</span>
            </div>
          </div>

          {/* Card 2: 2026 Chapter Chairman */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-navy flex items-center justify-center">
                <User className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">2026 Chapter Chairman</span>
                <h3 className="text-lg font-bold text-brand-navy">{CHAPTER_INFO.chairman.name}</h3>
                <p className="text-xs text-slate-500">{CHAPTER_INFO.chairman.company}</p>
              </div>
              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  <a href={`tel:${CHAPTER_INFO.chairman.phone}`} className="hover:underline font-semibold">
                    {CHAPTER_INFO.chairman.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
                  <a href="mailto:jchafin@calcoastacidizing.com" className="hover:underline">
                    jchafin@calcoastacidizing.com
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs">
              <a href="mailto:apibakersfieldchapter@gmail.com" className="text-brand-navy hover:underline font-semibold">
                apibakersfieldchapter@gmail.com
              </a>
            </div>
          </div>

          {/* Card 3: Key Committees */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Direct Officer Inquiries</h3>
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• <strong>Membership:</strong> Scott Bender (<a href="mailto:sbender024@gmail.com" className="underline">sbender024@gmail.com</a>)</li>
                <li>• <strong>Dinner RSVP:</strong> Mike Handren (<a href="mailto:mhandren@yahoo.com" className="underline">mhandren@yahoo.com</a>)</li>
                <li>• <strong>Newsletter:</strong> Dustin Trahan (<a href="mailto:Dtrahan8@slb.com" className="underline">Dtrahan8@slb.com</a>)</li>
                <li>• <strong>Webmaster:</strong> David Budy (<a href="mailto:DBudy@sentinelpeakresources.com" className="underline">DBudy@sentinelpeakresources.com</a>)</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs">
              <button onClick={() => onNavigate('/about-us/board-of-directors')} className="text-brand-navy font-bold hover:underline">
                View Full Board Directory →
              </button>
            </div>
          </div>
        </div>

        {/* 50 - Info Request Form (Verbatim Heading & Content) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          {/* Verbatim Intro Block */}
          <div className="space-y-4 border-b border-slate-100 pb-6">
            <p className="text-base text-slate-800 leading-relaxed font-medium">
              To be added to our newsletter, current events, and other important information, please complete the form below to be added. This is great information and you do not want to miss out.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Use the following contacts to send an e-mail for more details on API-SJV Chapter or check out our{' '}
              <button onClick={() => onNavigate('/about-us/board-of-directors')} className="text-brand-navy font-bold underline">
                Board of Directors list
              </button>{' '}
              under the “About Us” Tab for more Contact Information.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-sm space-y-2 text-slate-700">
              <p>Comments and Feedback to our Chair: <a href="mailto:jchafin@calcoastacidizing.com" className="font-bold text-brand-navy hover:underline">John Chafin</a></p>
              <p>Guest & Technical Session Speakers: <a href="mailto:amygalanski@chevron.com" className="font-bold text-brand-navy hover:underline">Amy Galanski</a></p>
              <p>Newsletter & Sponsorship Opportunities: <a href="mailto:Dtrahan8@slb.com" className="font-bold text-brand-navy hover:underline">Dustin Trahan</a></p>
              <p>API Dinner Reservations: <button onClick={() => onNavigate('/pay-online/api-monthly-dinner-meeting')} className="font-bold text-brand-navy hover:underline">Online</button></p>
              <p>Membership: <a href="mailto:sbender024@gmail.com" className="font-bold text-brand-navy hover:underline">Scott Bender</a></p>
              <p>
                Check us out on{' '}
                <a href="https://www.facebook.com/apibakersfieldchapter" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Facebook</a>,{' '}
                <a href="https://www.linkedin.com/company/api-bakersfield-sjv-chapter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">LinkedIn</a>,{' '}
                <a href="https://www.instagram.com/apibakersfieldsjvchapter?utm_source=ig_web_button_share_sheet&igsh=M2M0Y2JmOTAyOA==" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline font-semibold">Instagram</a>, or reach out to our Social Media Coordinator:{' '}
                <a href="mailto:kaylene.ransom@anacapa.com" className="font-bold text-brand-navy hover:underline">Kaylene Ransom</a>
              </p>
              <p>Website issues or concerns with registration on any event: <a href="mailto:dbudy@sentinelpeakresources.com" className="font-bold text-brand-navy hover:underline">David Budy</a></p>
              <p><strong>Mailing address :</strong> API San Joaquin Chapter P.O. Box 1064 Bakersfield, CA 93302</p>
              <p>Tax Id No.: 95-3086622</p>
            </div>

            <p className="text-sm font-bold text-brand-navy pt-2">
              To contact us or submit your Resume, please complete the INFO REQUEST FORM below:
            </p>
          </div>

          <div className="border-b border-slate-100 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Online Inquiry Portal</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">50 - Info Request Form</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center">
              <Send className="w-6 h-6" />
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
                  placeholder="e.g. John"
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
                  placeholder="e.g. Doe"
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
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(999) 999-9999"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                    errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company / Affiliation
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company or School"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Subject / Inquiring About
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  <option value="General Chapter Information">General Chapter Information</option>
                  <option value="Membership Question">Membership Question</option>
                  <option value="Monthly Dinner Meeting">Monthly Dinner Meeting</option>
                  <option value="Fall Fun Shoot Inquiry">Fall Fun Shoot Inquiry</option>
                  <option value="Scholarship Application">Scholarship Application</option>
                  <option value="Newsletter Sponsorship">Newsletter Sponsorship</option>
                  <option value="Job Board Listing">Job Board Listing</option>
                  <option value="Internship Listing">Internship Listing</option>
                  <option value="Adopt-a-Highway Volunteering">Adopt-a-Highway Volunteering</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Comments <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your comments, questions, or resume details..."
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                  errors.message ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Document Upload */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                File
              </label>
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                <label className="cursor-pointer text-xs font-bold text-brand-navy hover:underline">
                  <span>Attach Resume or Document</span>
                  <input type="file" onChange={handleFileChange} className="sr-only" />
                </label>
                {formData.fileName ? (
                  <p className="text-xs text-emerald-600 font-semibold mt-1">Attached: {formData.fileName}</p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Accepted file types: pdf, word, Max. file size: 50 MB.
                  </p>
                )}
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="inline-flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  defaultChecked
                  required
                  className="rounded text-brand-navy focus:ring-brand-gold h-4 w-4"
                />
                <span className="font-medium">
                  Consent <span className="text-red-500">*</span> — I agree to the privacy policy.
                </span>
              </label>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Submit Info Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Info Request Submitted"
        data={{
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not Specified',
          subject: formData.subject,
          attachment: formData.fileName || 'None',
          status: 'Delivered to API Chapter Officers'
        }}
      />
    </div>
  );
}
