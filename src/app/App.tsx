import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Disclaimer } from './components/Disclaimer';
import { CookiePolicy } from './components/CookiePolicy';
import { Contact } from './components/Contact';
import { Games } from './components/Games';
import { DownloadGate } from './components/DownloadGate';
import { NotFound } from './components/NotFound';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const scrollingElement = document.scrollingElement;
      if (scrollingElement) {
        scrollingElement.scrollTop = 0;
      }
    };

    const firstFrame = requestAnimationFrame(() => {
      resetScroll();
      requestAnimationFrame(resetScroll);
    });

    return () => cancelAnimationFrame(firstFrame);
  }, [pathname, search, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/download/:store" element={<DownloadGate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
