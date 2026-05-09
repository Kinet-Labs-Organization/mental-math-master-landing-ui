import { Link } from 'react-router';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

type DownloadModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  if (!open) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          className="mx-auto w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-gray-950 via-black to-slate-950 shadow-2xl shadow-pink-500/20 p-6 sm:p-7"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-pink-300/80 mb-2">Download App</p>
              <h3 className="text-2xl font-bold text-white">Choose your store</h3>
              <p className="mt-2 text-sm text-slate-300">
                Pick the store you want to continue with.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close download options"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-3">
            <Button
              asChild
              className="w-full min-h-[4.75rem] justify-start bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.01] transition-transform py-4 px-5"
            >
              <Link to="/download/ios" onClick={onClose}>
                <img
                  src="/appstore-icon.png"
                  alt="App Store"
                  className="h-8 w-8 mr-4 rounded-sm object-contain"
                />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-medium text-white/90">Download on</span>
                  <span className="text-lg font-semibold text-white">Appstore</span>
                </span>
              </Link>
            </Button>

            <Button
              asChild
              className="w-full min-h-[4.75rem] justify-start bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.01] transition-transform py-4 px-5"
            >
              <Link to="/download/android" onClick={onClose}>
                <img
                  src="/playstore-icon.png"
                  alt="Google Play"
                  className="h-8 w-8 mr-4 rounded-sm object-contain"
                />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-medium text-white/90">Get it on</span>
                  <span className="text-lg font-semibold text-white">Google Play</span>
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}
