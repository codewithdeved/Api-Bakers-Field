import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, Award, Image, Users, ChevronRight, ExternalLink, Sparkles, Video } from 'lucide-react';

export default function PastEventsPage({ onNavigate }) {
  const pastEventsList = [
    {
      date: "December 6, 2024",
      title: "Adopt-A-Highway",
      excerpt: "API Adopt-a-Highway VOLUNTEERS NEEDED! Dec 14, 7 am to 10 am Meet at the corner of Rosedale Hwy and Hwy 43 (Enos Lane) 7-8 am, FREE breakfast at the Golden Bull Restaurant 8-10 am clean highway from Rosedale to Stockdale Hwy All equipment provided. Wear warm clothes and shoes. Contact Tim Frame (661-447-5123) with any",
      category: "Community Service",
      actionText: "Read More..."
    },
    {
      date: "March 20, 2024",
      title: "Scholarship Night",
      excerpt: "Annual presentation of scholarships to deserving local students pursuing petroleum and STEM education in Kern County.",
      category: "Scholarships",
      actionText: "Read More..."
    },
    {
      date: "March 20, 2024",
      title: "API Dinner Meeting at 1933 – 16APR2024",
      excerpt: "API General Meeting at 1933 restaurant featuring technical industry presentations and member networking.",
      category: "Technical Meeting",
      actionText: "Read More..."
    },
    {
      date: "February 19, 2024",
      title: "40th Annual Oil Baron’s Ball (November 2nd, 2024)",
      excerpt: "The milestone 40th annual black-tie charity gala celebrating industry heritage and supporting chapter endowments.",
      category: "Annual Gala",
      actionText: "Read More..."
    },
    {
      date: "February 19, 2024",
      title: "Trivia Night",
      excerpt: "2026 Trivia Event Flier — Annual trivia competition bringing together energy teams for a fun evening of friendly competition.",
      category: "Social Event",
      actionText: "Read More..."
    },
    {
      date: "October 8, 2023",
      title: "Oil Baron’s Ball past photos",
      excerpt: "Pictures of past events Oil Baron’s Ball 2023 Pictures! Honoring lifetime contributors and annual industry awards.",
      category: "Photo Gallery",
      actionText: "Read More..."
    },
    {
      date: "October 15, 2023",
      title: "Adopt-a-Highway",
      excerpt: "Help keep your community clean! Adopt-A-Highway is one of the truly successful government-public partnerships, and we need your help to bring it to the next generation of Californians. Date: Saturday November 18th, 2023 Time: 7-10 am Location: Meet at Rosedale Hwy & Enos Lane (Hwy 58 & 43) Food: Breakfast Burritos provided Award: Recognition for",
      category: "Community Service",
      actionText: "Read More..."
    },
    {
      date: "October 6, 2023",
      title: "2023 Fall Fun Shoot (Past Event)",
      excerpt: "Check out this amazing video by Kaylene Ransom results event-scoreboard team-scoreboard lady-scoreboard FFS PICS and Videos See you next year!!!",
      category: "Tournament Results",
      actionText: "Read More..."
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Past Events"
        category="Historical Archive & Galleries"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Past Events" }
        ]}
        subtitle="A look back at our tournaments, galas, monthly dinners, and community cleanups over the years."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEventsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-medium flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-brand-navy leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors inline-flex items-center cursor-pointer">
                  <span>{item.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </span>
                <span className="text-[11px] text-slate-400">Archive Record #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
