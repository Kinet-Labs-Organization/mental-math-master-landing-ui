import { Link } from 'react-router';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { DownloadModal } from './DownloadModal';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-pink-500/20">
              <img
                src="/mmm-logo.png"
                alt="Mental Math Master"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg text-white font-bold hidden sm:inline">Mental Math Master</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors hover:scale-110 duration-200">
              About
            </Link>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/share/18sBaMSSkD/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="text-[#1877F2] hover:opacity-90 transition-all hover:scale-110 duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mentalmathmaster?igsh=MTEyaTN1cDBsb2p1cQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="text-[#E1306C] hover:opacity-90 transition-all hover:scale-110 duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Button
              type="button"
              onClick={() => setDownloadModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105 transition-all"
            >
              Download App
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/about"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center gap-4 py-2">
                <a
                  href="https://www.facebook.com/share/18sBaMSSkD/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#1877F2] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-slate-300">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/mentalmathmaster?igsh=MTEyaTN1cDBsb2p1cQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-[#E1306C]" />
                  <span className="text-slate-300">Instagram</span>
                </a>
              </div>
              <Button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDownloadModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white"
              >
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DownloadModal open={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} />
    </nav>
  );
}
