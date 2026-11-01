import React from 'react';
import PageHeader from '../components/PageHeader';
import { Award, Download, FileSpreadsheet, User, Users, ChevronRight } from 'lucide-react';

export default function LifetimeMembersPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Lifetime API Members"
        category="Honorary Recognition"
        breadcrumbs={[
          { label: "About Us", path: "/about-us" },
          { label: "Lifetime API Members" }
        ]}
        subtitle="Honoring dedicated individuals who have made lasting contributions to the San Joaquin Valley petroleum industry."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Bill Graham Feature */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          
          <div className="border-b border-slate-100 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Distinguished Honoree</span>
              <h2 className="text-3xl font-extrabold text-brand-navy mt-1">Bill Graham</h2>
              <p className="text-xs text-slate-500">Third Generation Oilfield Family • Retired Sentinel Peak Resources / Seneca Resources</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-amber-800 text-xs font-semibold flex items-center space-x-2">
              <Award className="w-5 h-5 text-brand-gold shrink-0" />
              <span>API Lifetime Member</span>
            </div>
          </div>

          {/* Authentic Photo Container */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src="https://www.apibakersfield.com/wp-content/uploads/2023/08/IMG_9903-1024x768.jpg"
              alt="Bill Graham and Jeff Hanson at API Lifetime Member Presentation"
              className="w-full h-auto max-h-[500px] object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 font-medium italic">
              Left Bill Graham; Right Jeff Hanson
            </div>
          </div>

          {/* Verbatim Biography (Preserving original spelling, punctuation, and wording) */}
          <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed bg-slate-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
            <p>
              Well it may seem funny but in 1965 I was born on the way to the hospital in a 1962 Nash Ramble crossing the railroad tracks 5 minuets from the Hospital. Born Third Generation Oilfield family My Grand Father was a Mentor to me after he retired from a 89’ fall off a triple drilling rig. I spent time with hime on his side jobs helping him do the things he couldn’t do. We took on jobs pouring cement/ fencing/ building barns, mechanic work, remodeling houses and trading cattle on our small farm in Oregon. My Career started out very young moving thousands of chickens on weekends and summers ( filthy job but paid2x minimum wage and long hours).
            </p>

            <p>
              I took up following my father whom was a mechanic learning to hold a drop light at 5 and passing tools ( I soon learned that i wanted this to stay as a hobby) At Age 15 i worked building large steel buildings and canneries ( crazy you would go to jail today) I worked 1 year at a machine shop during my senior year doing light machine work and valve repair. After high school i started working for the Mobil Bulk plant jobbing fuel for rigs and eventually getting my class one and hauling truck and trailer loads of fuel from the refineries to stations and the bulk plant. I did some moonlighting on the weekends for Mid-cal rig company and soon learned i could make more money .
            </p>

            <p>
              In late 1984 I went to work at Western Well service then came the slow down in 1985, I left there for 1 year and partnered in Trio Petroleum running a rig / abandonments and doing maintenance. In 1986 I went back to western Well working on MH Whittier rigs then landing a company job late1987. I moved up fast learning multiple A-Z jobs within MHW such as backhoes, welding, vacuum trucks, generator repair, treater repairs and worker drilling from 9 27/87 to 4/1/1998 as we were acquired from Seneca Resources my duties stared at NMWSS as a rig supervisor / afternoon mechanic. In 2001 I moved to Lost Hills as a lease Foreman duties included Rigs, Work-overs, Steam , water plants, Water floods and Surface and downhole chemical corrosion.
            </p>

            <p>
              In 2010 i moved to West coast Technical Supervisor asa state wide drilling/ workers/ abandonments/fracking/ Unit optimization/well designs and other duties was steam management as well as training incoming engineers ( often filling in as engineering rolls during vacancies) In 7/1/2022 Seneca was purchased by Sentinel peak resources and on 6/24/23 Sentinel was downsizing and eliminated my position and made my decision for me to finally retire. During my Career i was able as a single father raise my girls coach as a walk on wresting coach at various high schools , summer programs at BC , and chartering my own travel teams from 1983-2011. So as for now I’m happy no longer working those 12-18 hrs days and going to try to pass on what my grandfather did as a mentor to my grandkids.
            </p>
          </div>

          {/* Lifetime Member List Section (Verbatim Links) */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <h3 className="text-xl font-bold text-brand-navy">API Lifetime Members:</h3>
            
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Lonnie Kerley</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://www.apibakersfield.com/wp-content/uploads/2023/08/API-Lifetime-Member-List.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-100 hover:bg-brand-light text-brand-navy font-bold text-xs border border-slate-300 hover:border-brand-gold transition-all"
              >
                <FileSpreadsheet className="w-4 h-4 mr-2 text-emerald-600" />
                <span>API Lifetime Member List (.xlsx Download)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
