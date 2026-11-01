import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import QuickContacts from './components/QuickContacts';
import Footer from './components/Footer';
import PrototypeNoticeModal from './components/PrototypeNoticeModal';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ChairmansMessagePage from './pages/ChairmansMessagePage';
import BecomingMemberPage from './pages/BecomingMemberPage';
import LifetimeMembersPage from './pages/LifetimeMembersPage';
import MembershipOverviewPage from './pages/MembershipOverviewPage';
import BoardOfDirectorsPage from './pages/BoardOfDirectorsPage';

import NewsEventsPage from './pages/NewsEventsPage';
import FallFunShootPage from './pages/FallFunShootPage';
import BoardChristmasDinnerPage from './pages/BoardChristmasDinnerPage';
import EducationCommunityPage from './pages/EducationCommunityPage';
import OilNewsCaliforniaPage from './pages/OilNewsCaliforniaPage';
import PastEventsPage from './pages/PastEventsPage';
import AdoptHighwayPage from './pages/AdoptHighwayPage';
import CalendarPage from './pages/CalendarPage';

import ScholarshipsPage from './pages/ScholarshipsPage';

import PayOnlinePage from './pages/PayOnlinePage';
import PayMembershipPage from './pages/PayMembershipPage';
import PayFallFunShootPage from './pages/PayFallFunShootPage';
import PayScholarshipDonationsPage from './pages/PayScholarshipDonationsPage';
import PaySponsorshipPage from './pages/PaySponsorshipPage';
import MonthlyDinnerMeetingPage from './pages/MonthlyDinnerMeetingPage';
import ThankYouPage from './pages/ThankYouPage';

import SponsorsPage from './pages/SponsorsPage';

import ResourcesPage from './pages/ResourcesPage';
import JobBoardProvidersPage from './pages/JobBoardProvidersPage';
import JobBoardSeekersPage from './pages/JobBoardSeekersPage';
import AvailableInternsPage from './pages/AvailableInternsPage';
import AvailableInternshipsPage from './pages/AvailableInternshipsPage';

import NewsletterPage from './pages/NewsletterPage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const getInitialPath = () => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.replace(/^#/, '') || '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Resolver with alias normalization
  const renderPage = () => {
    // Normalize path (strip trailing slashes)
    const norm = (currentPath.length > 1 && currentPath.endsWith('/'))
      ? currentPath.slice(0, -1)
      : currentPath;

    switch (norm) {
      // Home
      case '/':
      case '':
      case '/home':
        return <HomePage onNavigate={navigateTo} />;

      // About Us & Subpages
      case '/about-us':
        return <AboutUsPage onNavigate={navigateTo} />;
      case '/about-us/chairmans-message':
      case '/chairmans-message':
        return <ChairmansMessagePage onNavigate={navigateTo} />;
      case '/about-us/becoming-a-member':
      case '/about-us/membership/lorem-ipsum-dolor':
        return <BecomingMemberPage onNavigate={navigateTo} />;
      case '/about-us/lifetime-api-members':
        return <LifetimeMembersPage onNavigate={navigateTo} />;
      case '/about-us/membership':
        return <MembershipOverviewPage onNavigate={navigateTo} />;
      case '/about-us/board-of-directors':
        return <BoardOfDirectorsPage onNavigate={navigateTo} />;

      // News & Events
      case '/news-events':
        return <NewsEventsPage onNavigate={navigateTo} />;
      case '/news-events/fall-fun-shoot':
        return <FallFunShootPage onNavigate={navigateTo} />;
      case '/pay-online/board-christmas-dinner':
      case '/news-events/board-christmas-dinner':
        return <BoardChristmasDinnerPage onNavigate={navigateTo} />;
      case '/news-events/education-and-community-involvement':
        return <EducationCommunityPage onNavigate={navigateTo} />;
      case '/news-events/oil-news-around-california':
        return <OilNewsCaliforniaPage onNavigate={navigateTo} />;
      case '/news-events/past-events':
        return <PastEventsPage onNavigate={navigateTo} />;
      case '/news-events/adopt-a-highway-2':
      case '/news-events/adopt-a-highway':
      case '/adopt-a-highway-2':
      case '/adopt-a-highway':
        return <AdoptHighwayPage onNavigate={navigateTo} />;
      case '/news-events/calendar':
        return <CalendarPage onNavigate={navigateTo} />;

      // Scholarships
      case '/scholarships':
        return <ScholarshipsPage onNavigate={navigateTo} />;

      // Pay Online
      case '/pay-online':
        return <PayOnlinePage onNavigate={navigateTo} />;
      case '/pay-online/membership-application':
      case '/pay-online/2015-membership-application':
        return <PayMembershipPage onNavigate={navigateTo} />;
      case '/pay-online/fall-fun-shoot':
        return <PayFallFunShootPage onNavigate={navigateTo} />;
      case '/pay-online/direct-scholarship-donations':
        return <PayScholarshipDonationsPage onNavigate={navigateTo} />;
      case '/pay-online/sponsorship-payments':
        return <PaySponsorshipPage onNavigate={navigateTo} />;
      case '/pay-online/api-monthly-dinner-meeting':
        return <MonthlyDinnerMeetingPage onNavigate={navigateTo} />;
      case '/pay-online/thank-you':
        return <ThankYouPage onNavigate={navigateTo} />;

      // Sponsors
      case '/sponsors':
        return <SponsorsPage onNavigate={navigateTo} />;

      // Resources & Career Center
      case '/resources':
        return <ResourcesPage onNavigate={navigateTo} />;
      case '/resources/job-board':
      case '/resources/job-board/antora-energy':
      case '/mts':
      case '/pcl':
        return <JobBoardProvidersPage onNavigate={navigateTo} />;
      case '/resources/job-board-seekers':
        return <JobBoardSeekersPage onNavigate={navigateTo} />;
      case '/resources/available-interns':
        return <AvailableInternsPage onNavigate={navigateTo} />;
      case '/resources/available-internships':
        return <AvailableInternshipsPage onNavigate={navigateTo} />;

      // Newsletter
      case '/newsletter':
      case '/resources/newsletter-archive':
        return <NewsletterPage onNavigate={navigateTo} />;

      // Contact Us
      case '/contact-us':
        return <ContactUsPage onNavigate={navigateTo} />;

      // Fallback & Director Profiles
      default:
        if (norm.startsWith('/director')) {
          return <BoardOfDirectorsPage onNavigate={navigateTo} />;
        }
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-canvas text-brand-slate font-sans selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden w-full">
      {/* Top Prototype Notice Banner */}
      <PrototypeNoticeModal />

      {/* Main Navigation */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Chapter Quick Contacts Section */}
      <QuickContacts onNavigate={navigateTo} />

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
