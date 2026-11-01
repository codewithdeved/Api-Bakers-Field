import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin, 
  CreditCard, ExternalLink, Calendar, Users, Award, 
  FileText, ShieldCheck 
} from 'lucide-react';
import { CHAPTER_INFO, NAVIGATION_TREE } from '../data/siteContent';

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (path) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Utility Bar (Preserving Tax ID, Address, Chairman Contact) */}
      <div className="bg-brand-navy text-slate-300 text-xs border-b border-brand-slate/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="flex items-center text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
              {CHAPTER_INFO.cityStateZip} (P.O. Box 1064)
            </span>
            <span className="hidden md:inline-flex items-center text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-brand-gold" />
              TAX ID NO.: {CHAPTER_INFO.taxId}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${CHAPTER_INFO.chairman.phone}`} 
              className="hover:text-brand-gold transition-colors inline-flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-brand-gold" />
              <span>{CHAPTER_INFO.chairman.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href={CHAPTER_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-brand-gold transition-colors flex items-center gap-1 font-medium"
              title="Official Facebook Page"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Chapter Brand */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1 shrink-0"
            aria-label="API San Joaquin Valley Chapter Home"
          >
            <img 
              src="/images/API-San-Joaquin-Valley-Chapter.png" 
              alt="API San Joaquin Valley Chapter Logo" 
              className="h-8 sm:h-9 xl:h-10 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform group-hover:scale-105 duration-200"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav ref={dropdownRef} className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 shrink-0" aria-label="Main Navigation">
            {NAVIGATION_TREE.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = currentPath === item.path || (hasChildren && item.children.some(c => c.path === currentPath));
              const isOpen = activeDropdown === item.name;

              if (!hasChildren) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.path)}
                    className={`px-2 2xl:px-3 py-1.5 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-semibold transition-colors whitespace-nowrap ${
                      isActive 
                        ? 'text-brand-gold bg-brand-light font-bold' 
                        : 'text-brand-navy hover:text-brand-gold hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={`px-2 2xl:px-3 py-1.5 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-semibold inline-flex items-center gap-1 transition-colors whitespace-nowrap ${
                      isActive 
                        ? 'text-brand-gold bg-brand-light font-bold' 
                        : 'text-brand-navy hover:text-brand-gold hover:bg-slate-50'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-slate-400'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-dropdown border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleLinkClick(child.path)}
                          className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 hover:text-brand-gold transition-colors block ${
                            currentPath === child.path ? 'text-brand-gold bg-brand-gold/5 font-bold border-l-2 border-brand-gold' : 'text-slate-700'
                          }`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              id="header-pay-cta"
              onClick={() => handleLinkClick('/pay-online')}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-gold text-brand-dark hover:bg-brand-goldHover font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-150 whitespace-nowrap"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Online</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-brand-navy hover:text-brand-gold hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="pb-3 border-b border-slate-100 mb-2">
              <button
                onClick={() => handleLinkClick('/pay-online')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-gold text-brand-dark font-bold text-sm uppercase tracking-wider shadow-sm"
              >
                <CreditCard className="w-4 h-4" />
                <span>Pay Online / Membership</span>
              </button>
            </div>

            {NAVIGATION_TREE.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = currentPath === item.path || (hasChildren && item.children.some(c => c.path === currentPath));
              const isOpen = activeDropdown === item.name;

              if (!hasChildren) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.path)}
                    className={`w-full text-left px-3 py-3 rounded-lg text-sm font-semibold transition-colors min-h-[48px] flex items-center ${
                      isActive ? 'bg-brand-navy text-brand-gold font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.name)}
                    className={`w-full text-left px-3 py-3 rounded-lg text-sm font-semibold flex items-center justify-between min-h-[48px] transition-colors ${
                      isActive ? 'bg-slate-100 text-brand-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg">
                      {item.children.map((child) => (
                        <button
                          key={child.name}
                          onClick={() => handleLinkClick(child.path)}
                          className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-semibold block min-h-[44px] flex items-center ${
                            currentPath === child.path 
                              ? 'text-brand-gold font-bold bg-white shadow-xs' 
                              : 'text-slate-600 hover:text-brand-navy hover:bg-white/60'
                          }`}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
