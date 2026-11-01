import React from 'react';
import PageHeader from '../components/PageHeader';
import { Briefcase, UserCheck, GraduationCap, Building2, ExternalLink, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';

export default function ResourcesPage({ onNavigate }) {
  const careerPortals = [
    {
      title: "JOB BOARD (PROVIDERS LIST YOUR POSITIONS HERE)",
      shortTitle: "JOB BOARD (PROVIDERS LIST YOUR POSITIONS HERE)",
      notice: "Please use the INFO REQUEST FORM to request additions or changes to the job listing at https://www.apibakersfield.com/contact-us/",
      description: "Energy companies and service providers listing open engineering, field operations, and technical positions.",
      link: "/resources/job-board",
      icon: Building2,
      tag: "Employers"
    },
    {
      title: "JOB BOARD (SEEKERS LIST YOUR RESUME HERE)",
      shortTitle: "JOB BOARD (SEEKERS LIST YOUR RESUME HERE)",
      notice: "Please use the INFO REQUEST FORM to request additions or changes to the job listing at https://www.apibakersfield.com/contact-us/",
      description: "Petroleum engineers, technicians, and operators seeking employment across Kern County and the Central Valley.",
      link: "/resources/job-board-seekers",
      icon: Briefcase,
      tag: "Candidates"
    },
    {
      title: "AVAILABLE INTERNS (CANDIDATES LIST YOUR RESUMES AND AVAILABILITY HERE)",
      shortTitle: "AVAILABLE INTERNS (CANDIDATES LIST YOUR RESUMES AND AVAILABILITY HERE)",
      notice: "Please use the INFO REQUEST FORM to list your resume and availability here https://www.apibakersfield.com/contact-us/",
      description: "College undergraduates and technical students available for summer internships and entry-level engineering training.",
      link: "/resources/available-interns",
      icon: GraduationCap,
      tag: "Students"
    },
    {
      title: "AVAILABLE INTERNSHIPS (COMPANIES LIST YOUR POSITIONS)",
      shortTitle: "AVAILABLE INTERNSHIPS (COMPANIES LIST YOUR POSITIONS)",
      notice: "Please use the INFO REQUEST FORM to request additions or changes to the INTERSHIP listing at https://www.apibakersfield.com/contact-us/",
      description: "Operators and service contractors offering student internship opportunities in drilling, reservoir, and facilities.",
      link: "/resources/available-internships",
      icon: UserCheck,
      tag: "Internship Programs"
    }
  ];

  const externalResources = [
    { name: "AADE", title: "American Association of Drilling Engineers", url: "https://www.aade.org" },
    { name: "AAPG", title: "American Association of Petroleum Geologists", url: "https://www.aapg.org" },
    { name: "AAPG – Pacific Section", title: "American Association of Petroleum Geologists", url: "https://www.psaapg.org" },
    { name: "AAPL", title: "American Association of Professional Landmen", url: "https://www.landman.org" },
    { name: "AIChE", title: "American Institute of Chemical Engineers", url: "https://www.aiche.org" },
    { name: "API", title: "American Petroleum Institute (National)", url: "https://www.api.org" },
    { name: "Coastal Chapter of the API", title: "API Coastal Chapter", url: "http://www.api-coastal.org" },
    { name: "Air & Waste Management", title: "Local Chapter of the Air & Waste Management", url: "http://www.awma-goldenempire.org" },
    { name: "APW", title: "The Association Of Petroleum Women", url: "https://apwbakersfield.com/" },
    { name: "ASSE", title: "American Society of Safety Engineers", url: "http://bakersfield.asse.org" },
    { name: "CCCOGP", title: "Conservation Committee of California Oil & Gas Producers", url: "http://www.cccogp.org" },
    { name: "Desk and Derrick Club of Bakersfield", title: "Desk and Derrick Club", url: "http://www.addc.org" },
    { name: "Free Patents Online", title: "Patent search engine", url: "http://www.freepatentsonline.com" },
    { name: "IEEE", title: "Institute of Electrical and Electronics Engineers", url: "https://www.ieee.org" },
    { name: "NSPE", title: "National Association of Professional Engineers – California", url: "https://www.nspe-ca.org/home" },
    { name: "PTTC – West Coast", title: "Petroleum Technology Transfer Council", url: "http://www.pttcwestcoast.org" },
    { name: "San Joaquin Geologic Society", title: "San Joaquin Geological Society", url: "http://www.sjgs.com" },
    { name: "SMRP", title: "Maintenance and Reliability Professionals", url: "http://www.smrp.org" },
    { name: "SPE", title: "Society of Petroleum Engineers International", url: "https://www.spe.org" },
    { name: "SPE San Joaquin Valley", title: "SPE San Joaquin Valley Section", url: "http://sjv.spe.org" }
  ];

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Resources"
        category="Career Center & Industry Directory"
        breadcrumbs={[{ label: "Resources" }]}
        subtitle="Connecting energy talent with employers, internship programs, and allied professional technical societies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Career & Job Portals Grid */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Talent & Workforce Exchange</span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Chapter Career & Internship Boards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPortals.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onNavigate(portal.link)}
                  className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {portal.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                      {portal.shortTitle}
                    </h3>

                    <p className="text-xs text-brand-navy/90 font-medium bg-brand-light p-3 rounded-xl border border-brand-gold/20">
                      {portal.notice}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {portal.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-navy">
                    <span>View Listings & Submit</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Useful Resources (Verbatim Heading: Other Useful Resources) */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Allied Professional Associations</span>
            <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
              Other Useful Resources
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Directory of petroleum, geological, engineering, and environmental associations serving California and North America.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all flex items-start justify-between group"
              >
                <div className="space-y-1 pr-3">
                  <div className="font-bold text-brand-navy text-sm group-hover:text-brand-gold transition-colors">
                    {res.name}
                  </div>
                  <div className="text-xs text-slate-600 line-clamp-1">
                    {res.title}
                  </div>
                  <div className="text-[11px] text-slate-400 group-hover:underline">
                    {res.url.replace(/^https?:\/\//, '')}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-navy shrink-0 transition-colors mt-0.5" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
