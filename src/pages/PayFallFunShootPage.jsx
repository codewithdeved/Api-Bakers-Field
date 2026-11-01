import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormSuccessModal from '../components/FormSuccessModal';
import { Target, DollarSign, Users, Award, ShieldCheck, ArrowRight, Upload, CheckCircle2 } from 'lucide-react';

export default function PayFallFunShootPage({ onNavigate }) {
  const [tier, setTier] = useState('double_barrel');
  const [golfCart, setGolfCart] = useState(false);
  const [rafflePacks, setRafflePacks] = useState(0); // 5 for $20 packs
  const [donationAmount, setDonationAmount] = useState(0);
  const [shootingOption, setShootingOption] = useState('I am shooting!');
  const [paymentOption, setPaymentOption] = useState('credit_card');

  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    company: '',
    player1First: '', player1Last: '', player1Email: '',
    player2First: '', player2Last: '', player2Email: '',
    player3First: '', player3Last: '', player3Email: '',
    player4First: '', player4Last: '', player4Email: '',
    player5First: '', player5Last: '', player5Email: '',
    otherPlayers: '',
    logoFile: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const tierDetails = {
    double_barrel: {
      name: "Double Barrel Sponsorship (BEST VALUE)",
      price: 2200,
      description: "Sponsor Sign, Recognition on Sponsor Banner, Advertisement on API website, newsletter, Facebook, and LinkedIn. Lunch & Beverages, one 5 Man Shooting Team (included ammunition), 1 golf cart, $400 in Raffle Tickets."
    },
    twelve_gauge: {
      name: ".12 Gauge Sponsorship",
      price: 1700,
      description: "Sponsor Sign, Recognition on Sponsor Banner, Advertisement on API website, newsletter, Facebook, and LinkedIn. Lunch & Beverages, one 5 Man Shooting Team (included ammunition), $200 in Raffle Tickets."
    },
    team_entry: {
      name: "Fall Fun Shoot Team, Entry Only",
      price: 1200,
      description: "Includes breakfast, lunch and ammunition."
    }
  };

  const calculateTotal = () => {
    let total = tierDetails[tier].price;
    if (golfCart) total += 250;
    total += rafflePacks * 20;
    if (donationAmount > 0) total += Number(donationAmount);
    return total;
  };

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

    if (!formData.captainName.trim()) newErrors.captainName = 'Contact Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowModal(true);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Fall Fun Shoot Registration"
        category="Tournament Registration & Billing"
        breadcrumbs={[
          { label: "Pay Online", path: "/pay-online" },
          { label: "Fall Fun Shoot" }
        ]}
        subtitle="Register your 5-person team, secure corporate sponsorships, and purchase raffle packages."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy">Fall Fun Shoot Registration</h2>
              <p className="text-xs text-slate-500 mt-1">" * " indicates required fields</p>
            </div>
            <div className="p-3 bg-brand-light rounded-2xl border border-brand-gold/30 text-right">
              <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Due</span>
              <span className="text-2xl font-black text-brand-navy">${totalAmount.toLocaleString()}.00</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Shooting or Sponsorship Only (Verbatim Live Label) */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Shooting or Sponsorship Only <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['I am shooting!', 'I will shoot next year, sponsorship only', 'Additional Cart Only'].map((opt) => (
                  <label
                    key={opt}
                    className={`p-3.5 rounded-xl border cursor-pointer text-xs font-semibold flex items-center space-x-2.5 transition-all ${
                      shootingOption === opt ? 'border-brand-navy bg-brand-light text-brand-navy' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shootingOption"
                      value={opt}
                      checked={shootingOption === opt}
                      onChange={() => setShootingOption(opt)}
                      className="text-brand-navy focus:ring-brand-gold"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Select Package / Sponsorship Tier (Verbatim Live Tiers & Prices) */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Package / Sponsorship Tier <span className="text-red-500">*</span>
              </label>

              <div className="space-y-4">
                {Object.entries(tierDetails).map(([key, info]) => (
                  <label
                    key={key}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all block ${
                      tier === key
                        ? 'border-brand-navy bg-brand-light/60 ring-2 ring-brand-navy/15'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex items-start space-x-3">
                        <input
                          type="radio"
                          name="tier"
                          value={key}
                          checked={tier === key}
                          onChange={() => setTier(key)}
                          className="mt-1 text-brand-navy focus:ring-brand-gold"
                        />
                        <div>
                          <span className="text-base font-bold text-brand-navy block">{info.name}</span>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{info.description}</p>
                        </div>
                      </div>
                      <span className="text-xl font-black text-brand-navy shrink-0 sm:text-right">
                        ${info.price.toLocaleString()}.00
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Add-Ons: Golf Cart & Raffle Tickets (Verbatim) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">Add-Ons & Philanthropy</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Golf Cart Add-On */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800">Golf Cart Add-On ($250.00 each)</label>
                    <input
                      type="checkbox"
                      checked={golfCart}
                      onChange={(e) => setGolfCart(e.target.checked)}
                      className="rounded text-brand-navy focus:ring-brand-gold h-4 w-4"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 italic">
                    NOTE: Each cart only holds 4 people.
                  </p>
                </div>

                {/* Raffle Tickets */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <label className="text-xs font-bold text-slate-800 block">
                    General Raffle Tickets (5 tickets for $20)
                  </label>
                  <div className="flex items-center space-x-2">
                    <select
                      value={rafflePacks}
                      onChange={(e) => setRafflePacks(Number(e.target.value))}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    >
                      <option value="0">No additional raffle tickets</option>
                      <option value="1">1 Pack (5 tickets) - $20</option>
                      <option value="2">2 Packs (10 tickets) - $40</option>
                      <option value="3">3 Packs (15 tickets) - $60</option>
                      <option value="5">5 Packs (25 tickets) - $100</option>
                      <option value="10">10 Packs (50 tickets) - $200</option>
                    </select>
                    <span className="text-xs text-slate-500 font-semibold">
                      {rafflePacks > 0 && `+$${rafflePacks * 20}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Scholarship Donation Field */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <label className="text-xs font-bold text-slate-800 block">
                  API Direct Scholarship Donation (Optional)
                </label>
                <div className="relative max-w-xs">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min="0"
                    step="25"
                    value={donationAmount || ''}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter additional donation"
                    className="w-full pl-8 pr-4 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>
              </div>
            </div>

            {/* Team Roster: Player #1 through Player #5 (Verbatim Live Fields) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-brand-navy">5-Man Team Roster</h3>
              <p className="text-xs text-slate-500">
                Please enter the first name, last name, and email address for each member of your 5-man shooting team.
              </p>

              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">
                      Player #{num} {num === 1 && '(Team Captain)'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        name={`player${num}First`}
                        value={formData[`player${num}First`]}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                      <input
                        type="text"
                        name={`player${num}Last`}
                        value={formData[`player${num}Last`]}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                      <input
                        type="email"
                        name={`player${num}Email`}
                        value={formData[`player${num}Email`]}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  List other players here (Name & E-mail)
                </label>
                <textarea
                  name="otherPlayers"
                  rows="3"
                  value={formData.otherPlayers}
                  onChange={handleChange}
                  placeholder="Additional alternate players, phone numbers, or special squad notes..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
              </div>
            </div>

            {/* Company Logo Upload (Verbatim) */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Upload Company Logo Here (OPTIONAL)
              </label>
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                <label className="cursor-pointer text-xs font-bold text-brand-navy hover:underline">
                  <span>Choose file to upload</span>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData(prev => ({ ...prev, logoFile: e.target.files[0].name }));
                      }
                    }}
                    className="sr-only"
                  />
                </label>
                {formData.logoFile ? (
                  <p className="text-xs text-emerald-600 font-semibold mt-1">Attached: {formData.logoFile}</p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-0.5">Max. file size: 50 MB.</p>
                )}
              </div>
            </div>

            {/* Contact / Billing Info */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-brand-navy">Contact & Billing Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact / Captain Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.captainName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.captainName && <p className="text-red-500 text-xs mt-1">{errors.captainName}</p>}
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
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Sponsoring Company's Website (optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website || ''}
                    onChange={handleChange}
                    placeholder="https://www.yourcompany.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
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
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
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
                    placeholder="(999) 999-9999"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy ${
                      errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Payment Options (Verbatim Live Options) */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Payment Options <span className="text-red-500">*</span>
              </label>

              <div className="space-y-2.5">
                {[
                  { id: 'credit_card', label: 'Pay now with credit card' },
                  { id: 'check', label: 'Pay by check (mail to API San Joaquin Chapter, PO Box 1064, Bakersfield, CA 93302)' },
                  { id: 'later', label: 'Pay later (at event or coordinate payment with our Treasurer)' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`p-3.5 rounded-xl border cursor-pointer text-xs font-semibold flex items-center space-x-2.5 transition-all ${
                      paymentOption === opt.id ? 'border-brand-navy bg-brand-light text-brand-navy' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      value={opt.id}
                      checked={paymentOption === opt.id}
                      onChange={() => setPaymentOption(opt.id)}
                      className="text-brand-navy focus:ring-brand-gold"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">Registration Summary</span>
                <p className="text-sm text-slate-300">{tierDetails[tier].name}</p>
                {golfCart && <p className="text-xs text-slate-400">+ 1 Golf Cart ($250)</p>}
                {rafflePacks > 0 && <p className="text-xs text-slate-400">+ {rafflePacks * 5} Raffle Tickets (${rafflePacks * 20})</p>}
                {donationAmount > 0 && <p className="text-xs text-slate-400">+ Direct Scholarship Donation (${donationAmount})</p>}
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block uppercase">Total Amount</span>
                <span className="text-3xl font-extrabold text-brand-gold">${totalAmount.toLocaleString()}.00</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-goldHover text-brand-dark font-extrabold text-sm rounded-xl shadow-lg shadow-brand-gold/20 transition-all flex items-center space-x-2"
              >
                <span>Submit Tournament Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <FormSuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        formTitle="Fall Fun Shoot Registration Received"
        data={{
          tier: tierDetails[tier].name,
          team: formData.teamName || '5-Man Squad',
          captain: formData.captainName,
          email: formData.email,
          payment: paymentOption === 'credit_card' ? 'Online Credit Card' : paymentOption === 'check' ? 'Pay by Check' : 'Pay at Event',
          total: `$${totalAmount.toLocaleString()}.00`
        }}
      />
    </div>
  );
}
