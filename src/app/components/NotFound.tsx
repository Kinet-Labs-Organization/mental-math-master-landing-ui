import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Home, MapPinX, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { GamesInner } from './Games';

export function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="relative pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 shadow-2xl shadow-pink-500/30 mx-auto">
              <MapPinX className="w-12 h-12 text-white" />
            </div>

            <div className="space-y-3">
              <p className="text-pink-300 font-semibold uppercase tracking-[0.4em] text-sm">
                404
              </p>
              <h1 className="text-5xl md:text-7xl text-white font-black">
                Page Not Found
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                The page you&apos;re looking for does not exist, but you can head back home or try
                the arithmetic games for a quick brain warm-up.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <GamesInner embedded />

      <Footer />
    </div>
  );
}
