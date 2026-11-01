import React from 'react';
import { ChevronRight, Award, Shield, FileText } from 'lucide-react';

export default function PageHeader({ title, category, breadcrumbs = [], subtitle }) {
  return (
    <section className="relative bg-gradient-to-b from-brand-navy via-brand-dark to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat bg-center pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-01.jpg')` }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-4 flex-wrap">
          <a href="#/" className="hover:text-brand-gold transition-colors">Home</a>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              {crumb.path ? (
                <a href={`#${crumb.path}`} className="hover:text-brand-gold transition-colors">{crumb.label}</a>
              ) : (
                <span className="text-brand-gold font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {category && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30 mb-3 tracking-wide uppercase">
            {category}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl font-display">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
