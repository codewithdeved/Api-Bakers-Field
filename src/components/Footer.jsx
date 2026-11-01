import React from 'react';
import { ExternalLink, ShieldCheck, MapPin, Heart, ChevronRight } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Organization Bio & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <img 
                src="/images/API-San-Joaquin-Valley-Chapter.png" 
                alt="American Petroleum Institute - San Joaquin Valley Chapter" 
                className="h-11 sm:h-12 w-auto max-w-[280px] object-contain brightness-105"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {CHAPTER_INFO.tagline} Established to foster STEM collegiate scholarships, monthly technical education, community highway cleanups, and regional industry networking in Kern County.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span>{CHAPTER_INFO.address}, {CHAPTER_INFO.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span>TAX ID NO.: {CHAPTER_INFO.taxId}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Organization & Membership */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Organization
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-brand-gold transition-colors">
                  HOME
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about-us')} className="hover:text-brand-gold transition-colors">
                  ABOUT US
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about-us/chairmans-message')} className="hover:text-brand-gold transition-colors">
                  CHAIRMAN’S MESSAGE
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about-us/board-of-directors')} className="hover:text-brand-gold transition-colors">
                  BOARD OF DIRECTORS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about-us/membership')} className="hover:text-brand-gold transition-colors">
                  MEMBERSHIP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about-us/lifetime-api-members')} className="hover:text-brand-gold transition-colors">
                  LIFETIME API MEMBERS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Events & Community */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Events & Community
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/news-events')} className="hover:text-brand-gold transition-colors">
                  NEWS & EVENTS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/news-events/fall-fun-shoot')} className="hover:text-brand-gold transition-colors">
                  FALL FUN SHOOT
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pay-online/board-christmas-dinner')} className="hover:text-brand-gold transition-colors">
                  BOARD CHRISTMAS DINNER
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/news-events/adopt-a-highway-2')} className="hover:text-brand-gold transition-colors">
                  ADOPT-A-HIGHWAY
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/scholarships')} className="hover:text-brand-gold transition-colors">
                  SCHOLARSHIPS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/news-events/past-events')} className="hover:text-brand-gold transition-colors">
                  PAST EVENTS
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Pay Online & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pay Online & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/pay-online')} className="hover:text-brand-gold transition-colors font-bold text-brand-gold">
                  PAY ONLINE PORTAL
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pay-online/membership-application')} className="hover:text-brand-gold transition-colors">
                  MEMBERSHIP DUES ($30/YR)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pay-online/direct-scholarship-donations')} className="hover:text-brand-gold transition-colors">
                  DIRECT SCHOLARSHIP DONATIONS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pay-online/sponsorship-payments')} className="hover:text-brand-gold transition-colors">
                  SPONSORSHIP PAYMENTS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/sponsors')} className="hover:text-brand-gold transition-colors">
                  SPONSORS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/resources')} className="hover:text-brand-gold transition-colors">
                  RESOURCES & JOB BOARD
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/newsletter')} className="hover:text-brand-gold transition-colors">
                  NEWSLETTER ARCHIVE
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact-us')} className="hover:text-brand-gold transition-colors">
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Verbatim Legal & Hosting Credits) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center md:text-left leading-relaxed">
            <p>
              ©{CHAPTER_INFO.chairman.year} American Petroleum Institute San Joaquin Valley Chapter. All rights reserved.
            </p>
            <p className="text-slate-600 mt-0.5">
              Designed and hosted by{' '}
              <a 
                href="https://www.themarcomgroup.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-300 underline"
              >
                TheMarcomGroup.com
              </a>
              {' '}• Frontend Modernization Concept by{' '}
              <span className="text-brand-gold font-medium">Vibeans Solutions</span>
            </p>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <a 
              href={CHAPTER_INFO.bylawsPdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
            >
              <span>San Joaquin Valley By-Laws (PDF)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href={CHAPTER_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
