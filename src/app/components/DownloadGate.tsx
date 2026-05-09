import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Apple, Smartphone, Clock3, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { Footer } from './Footer';
import { GamesInner } from './Games';

type Store = 'ios' | 'android';

function parseBooleanFlag(value: unknown) {
  return String(value).toLowerCase() === 'true';
}

export function DownloadGate() {
  const params = useParams();
  const store = (params.store === 'ios' || params.store === 'android' ? params.store : 'ios') as Store;

  const storeMeta = useMemo(
    () => ({
      ios: {
        title: 'iOS App Store',
        label: 'App Store',
        icon: Apple,
        available: parseBooleanFlag(import.meta.env.VITE_IOS_APPSTORE_LINK_AVAILABLE),
        link: import.meta.env.VITE_IOS_APPSTORE_LINK,
      },
      android: {
        title: 'Google Play Store',
        label: 'Play Store',
        icon: Smartphone,
        available: parseBooleanFlag(import.meta.env.VITE_ANDROID_PLAYSTORE_LINK_AVAILABLE),
        link: import.meta.env.VITE_ANDROID_PLAYSTORE_LINK,
      },
    }),
    [],
  );

  const current = storeMeta[store];
  const releaseLabel = current.title;

  useEffect(() => {
    if (!current.available || !current.link) return;
    window.location.replace(current.link);
  }, [current]);

  if (current.available && current.link) {
    return null;
  }

  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-36 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 mb-5">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-white font-semibold">Download Status</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>

            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 shadow-2xl shadow-pink-500/30 mb-5">
              <Icon className="w-10 h-10 text-white" />
            </div> */}

            <h1 className="text-5xl md:text-7xl text-white font-black mb-4">
              {releaseLabel}
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Currently the app is yet to release in the {current.label}. While you wait, you can
              play a quick arithmetic game below.
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 text-slate-300 mb-8">
            <Clock3 className="w-4 h-4 text-pink-400" />
            <span>Release coming soon</span>
          </div>

          <GamesInner embedded />

          <div className="flex justify-center mt-8">
            <Button asChild className="bg-black/40 border border-pink-500/30 text-white hover:bg-black/60 shadow-lg shadow-pink-500/10">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
