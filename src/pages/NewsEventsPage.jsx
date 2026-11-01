import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Calendar, Target, Sparkles, HeartHandshake, Newspaper, 
  Clock, ArrowRight, ChevronRight, Award, Trash2 
} from 'lucide-react';

export default function NewsEventsPage({ onNavigate }) {
  const eventSections = [
    {
      title: "Fall Fun Shoot",
      category: "Annual Tournament",
      description: "Sporting clay tournament supporting local student scholarships. Features 5-person teams, prizes, BBQ, and raffle.",
      link: "/news-events/fall-fun-shoot",
      icon: Target,
      tag: "Signature Fundraiser"
    },
    {
      title: "Board Christmas Dinner",
      category: "Holiday Gala",
      description: "Annual December holiday banquet bringing together industry operators, contractors, advisors, and guests.",
      link: "/pay-online/board-christmas-dinner",
      icon: Sparkles,
      tag: "Annual Banquet"
    },
    {
      title: "Education and Community Involvement",
      category: "STEM Outreach",
      description: "Encouraging petroleum vocational training, local school robotics sponsorships, and community STEM initiatives.",
      link: "/news-events/education-and-community-involvement",
      icon: HeartHandshake,
      tag: "Youth Outreach"
    },
    {
      title: "Oil News Around California",
      category: "Industry News",
      description: "Latest news, Class VI EPA carbon capture permits for CRC Carbon TerraVault, and Kern EDC manufacturing fact sheets.",
      link: "/news-events/oil-news-around-california",
      icon: Newspaper,
      tag: "State Energy Bulletin"
    },
    {
      title: "Adopt-A-Highway Cleanup",
      category: "Community Service",
      description: "Caltrans highway cleanup at Rosedale Hwy & Hwy 43. Complimentary volunteer breakfast at Golden Bull Restaurant.",
      link: "/news-events/adopt-a-highway-2",
      icon: Trash2,
      tag: "Volunteer Action"
    },
    {
      title: "Past Events Gallery & Archive",
      category: "Historical Archive",
      description: "Photo archives of the 40th Annual Oil Baron’s Ball, Trivia Nights, 1933 Dinner Meetings, and Golf Tournaments.",
      link: "/news-events/past-events",
      icon: Award,
      tag: "Chapter History"
    },
    {
      title: "Event Calendar",
      category: "Schedule",
      description: "Monthly chapter meetings, technical dinner schedules, and board meeting dates.",
      link: "/news-events/calendar",
      icon: Calendar,
      tag: "Yearly Schedule"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="News & Events"
        category="Chapter Activities & Programs"
        breadcrumbs={[{ label: "News & Events" }]}
        subtitle="Stay engaged with the API San Joaquin Valley Chapter through tournaments, technical meetings, and civic service."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventSections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(item.link)}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-navy">
                  <span>Explore Experience</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
