import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
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

          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors hover:scale-110 duration-200">
              About
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition-colors hover:scale-110 duration-200">
              Contact
            </Link>
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
              <Link
                to="/contact"
                className="block text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
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
