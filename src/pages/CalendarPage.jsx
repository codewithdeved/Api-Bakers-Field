import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar as CalendarIcon, Clock, MapPin, Users, ChevronRight, ExternalLink, AlertCircle } from 'lucide-react';
import { CHAPTER_INFO } from '../data/siteContent';

export default function CalendarPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'embed'

  const scheduleItems = [
    {
      month: "JAN",
      day: "20",
      year: "2026",
      title: "January General Dinner Meeting",
      time: "5:30 PM Social • 6:30 PM Dinner",
      location: "The Petroleum Club / 1933 Restaurant, Bakersfield, CA",
      description: "Monthly chapter gathering with technical guest presentation. Open to all members and industry guests.",
      rsvpLink: "/pay-online/api-monthly-dinner-meeting"
    },
    {
      month: "FEB",
      day: "17",
      year: "2026",
      title: "February Technical Presentation Meeting",
      time: "5:30 PM Social • 6:30 PM Dinner",
      location: "Bakersfield, CA",
      description: "Energy operations and reservoir management updates with guest industry speakers.",
      rsvpLink: "/pay-online/api-monthly-dinner-meeting"
    },
    {
      month: "MAR",
      day: "21",
      year: "2026",
      title: "Adopt-A-Highway Spring Cleanup",
      time: "7:00 AM - 10:00 AM",
      location: "Rosedale Hwy & Hwy 43 (Golden Bull Restaurant)",
      description: "Community cleanup along Highway 178 / Enos Lane with complimentary breakfast.",
      rsvpLink: "/news-events/adopt-a-highway-2"
    },
    {
      month: "APR",
      day: "21",
      year: "2026",
      title: "Scholarship Awards Night & Dinner",
      time: "6:00 PM - 9:00 PM",
      location: "Bakersfield, CA",
      description: "Annual recognition banquet celebrating local high school and college STEM scholarship recipients.",
      rsvpLink: "/scholarships"
    },
    {
      month: "MAY",
      day: "19",
      year: "2026",
      title: "May General Dinner Meeting",
      time: "5:30 PM Social • 6:30 PM Dinner",
      location: "Bakersfield, CA",
      description: "Pre-summer chapter meeting and industry networking.",
      rsvpLink: "/pay-online/api-monthly-dinner-meeting"
    },
    {
      month: "SEP",
      day: "18",
      year: "2026",
      title: "Annual Fall Fun Shoot",
      time: "7:30 AM Registration • 9:00 AM Shoot",
      location: "Kern County Gun Club / Local Sporting Clays",
      description: "5-person sporting clays tournament, trophies, raffle, and BBQ benefiting the API Scholarship fund.",
      rsvpLink: "/news-events/fall-fun-shoot"
    },
    {
      month: "DEC",
      day: "04",
      year: "2026",
      title: "Annual Board Christmas Dinner Gala",
      time: "6:00 PM Reception • 7:00 PM Dinner",
      location: "Bakersfield Country Club / Petroleum Club",
      description: "Year-end holiday celebration with dinner, awards, and entertainment.",
      rsvpLink: "/pay-online/board-christmas-dinner"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      <PageHeader
        title="Calendar"
        category="Schedule of Events"
        breadcrumbs={[
          { label: "News & Events", path: "/news-events" },
          { label: "Calendar" }
        ]}
        subtitle="Dates and details for monthly technical dinner meetings, tournaments, and volunteer cleanups."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* View Toggle Tabs */}
        <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'list'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Curated Event Schedule
            </button>
            <button
              onClick={() => setActiveTab('embed')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'embed'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Google Calendar Feed
            </button>
          </div>

          <a
            href="https://calendar.google.com/calendar/embed?src=apibakersfieldchapter%40gmail.com&ctz=America%2FLos_Angeles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-brand-navy hover:text-brand-gold flex items-center pr-2"
          >
            <span>Open in Google Calendar</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>

        {activeTab === 'list' ? (
          <div className="space-y-4">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-brand-gold shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start sm:items-center space-x-5">
                  {/* Date Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-light border border-brand-gold/30 flex flex-col items-center justify-center text-center shrink-0">
                    <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-wider">{item.month}</span>
                    <span className="text-xl font-black text-brand-navy leading-none">{item.day}</span>
                    <span className="text-[9px] text-slate-500 font-semibold">{item.year}</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                        {item.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-brand-gold" />
                        {item.location}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pt-1 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <button
                    onClick={() => onNavigate(item.rsvpLink)}
                    className="w-full md:w-auto px-5 py-2.5 bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs rounded-xl transition-all flex items-center justify-center space-x-1.5 group"
                  >
                    <span>Reserve / Info</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Safari / Privacy Note (from original site):</strong> If the calendar cannot be viewed, please check your browser cookie and privacy settings to permit third-party embeds, or use the direct Google Calendar link above.
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-inner">
              <iframe
                title="API San Joaquin Valley Chapter Calendar"
                src="https://calendar.google.com/calendar/embed?title=API%20Bakersfield&showCalendars=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&src=apibakersfieldchapter%40gmail.com&color=%232952A3&ctz=America%2FLos_Angeles"
                className="w-full h-[550px] border-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
