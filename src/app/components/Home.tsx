import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Trophy,
  Clock,
  Shield,
  Sparkles,
  CheckCircle2,
  Flame,
  Star,
  Rocket,
  Medal,
  BookOpen,
  Globe2,
  Award,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { Link } from 'react-router';
import { useEffect, useMemo, useState } from 'react';

export function Home() {
  const [championCarouselApi, setChampionCarouselApi] = useState<CarouselApi | null>(null);
  const [isChampionCarouselHovered, setIsChampionCarouselHovered] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const achievers = useMemo(
    () => [
      {
        name: 'Aaryan Shukla',
        country: 'India',
        yearOfAchievement: 2026,
        achievement: 'Italian Mental Calculation Championship',
        position: 'World Record Holder',
        descriptionOfAchievement:
          'Set world records in square roots (8-digit imperfect) and 10-digit divisions on April 11, 2026.',
      },
      {
        name: 'Arshiya',
        country: 'India',
        yearOfAchievement: 2026,
        achievement: 'International Online Abacus Olympiad',
        position: '1st Rank',
        descriptionOfAchievement:
          'Achieved a perfect 100% score with a global leading completion time of 6.44 minutes.',
      },
      {
        name: 'Niranjana Pillay',
        country: 'India',
        yearOfAchievement: 2026,
        achievement: 'International Online Abacus Olympiad',
        position: '2nd Rank',
        descriptionOfAchievement:
          'Secured global second place with 100% accuracy in 6.52 minutes.',
      },
      {
        name: 'Shrish Dutta',
        country: 'USA',
        yearOfAchievement: 2026,
        achievement: 'International Online Abacus Olympiad',
        position: '3rd Rank',
        descriptionOfAchievement:
          'Represented USA in the global top three with a perfect score in 7.05 minutes.',
      },
      {
        name: 'Emily Wong',
        country: 'USA',
        yearOfAchievement: 2026,
        achievement: 'International Abacus Competition (IAC)',
        position: 'Grand Prix Champion',
        descriptionOfAchievement:
          'Secured 1st place in the Grand Prix and Soroban League Comprehensive categories.',
      },
      {
        name: 'Akshat Yadav',
        country: 'India',
        yearOfAchievement: 2026,
        achievement: 'Brainobrainfest Global Competition',
        position: "Champion's Award",
        descriptionOfAchievement:
          'Ranked as a premier champion among 23,128 students from 76 countries.',
      },
      {
        name: 'Abhinayasree Indraganti',
        country: 'India',
        yearOfAchievement: 2026,
        achievement: 'International Online Abacus Olympiad',
        position: '1st Place',
        descriptionOfAchievement:
          'Took the top spot with 100% accuracy in high-speed mental calculation.',
      },
      {
        name: 'Neiva Chauhan',
        country: 'Canada',
        yearOfAchievement: 2026,
        achievement: 'International Online Abacus Olympiad',
        position: 'Top Rank',
        descriptionOfAchievement:
          'Achieved 100% accuracy in her age category for mental arithmetic.',
      },
      {
        name: 'Bala Sunand Siddantapu',
        country: 'USA',
        yearOfAchievement: 2025,
        achievement: 'UCMAS USA National Competition',
        position: 'Champion (Category A)',
        descriptionOfAchievement:
          'Demonstrated superior speed in single-digit addition and subtraction using the visual abacus method.',
      },
      {
        name: 'Aaryan Shukla',
        country: 'India',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '1st Overall (Champion)',
        descriptionOfAchievement:
          "Won the gold medal for 'Most Versatile Calculator' and set multiple records in addition and multiplication.",
      },
      {
        name: 'Naofumi Ogasawara',
        country: 'Japan',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '1st Place (Perfect Score)',
        descriptionOfAchievement:
          'Achieved a perfect score of 500/500 across all standard mental arithmetic categories.',
      },
      {
        name: 'Kaloyan Geshev',
        country: 'Bulgaria',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '2nd Overall',
        descriptionOfAchievement:
          'Excelled in square roots and calendar dates; also won the 2024 Junior World Championship.',
      },
      {
        name: 'Hua Wei Chan',
        country: 'Malaysia',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '2nd Overall',
        descriptionOfAchievement:
          'Consistently placed in the top ranks for extreme mental multiplication and addition tasks.',
      },
      {
        name: 'Jeonghee Lee',
        country: 'South Korea',
        yearOfAchievement: 2024,
        achievement: 'Memoriad Mental Arithmetic',
        position: '1st Place',
        descriptionOfAchievement:
          'A legendary abacus master who won the mental multiplication event at age 61.',
      },
      {
        name: 'Samuel Engel',
        country: 'USA',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '8th (Mental Multiplication)',
        descriptionOfAchievement:
          "Ranked among the world's top ten for multiplying large numbers mentally.",
      },
      {
        name: "Mohamed Iyed M'Ghozzi",
        country: 'Algeria',
        yearOfAchievement: 2024,
        achievement: 'Junior Mental Calculation World Championship',
        position: '1st Place (Junior Champion)',
        descriptionOfAchievement:
          'Crowned the best young mental calculator in the world for 2024.',
      },
      {
        name: 'Kenneth Wilshire',
        country: 'UK',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '8th (Tie - Multiplication)',
        descriptionOfAchievement:
          'Top-performing UK participant in high-complexity multiplication tasks.',
      },
      {
        name: 'Karen Kiffe',
        country: 'Germany',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: '17th (Multiplication)',
        descriptionOfAchievement:
          'Represented Germany as one of the most consistent mental math competitors in Europe.',
      },
      {
        name: 'Domenico Mancuso',
        country: 'Italy',
        yearOfAchievement: 2024,
        achievement: 'Mental Calculation World Cup',
        position: 'Top 25',
        descriptionOfAchievement:
          'Qualified and ranked within the elite group of international mental calculators.',
      },
    ],
    [],
  );

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Race against the clock and become a speed calculation champion',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Level Up',
      description: 'Start easy and unlock harder challenges as you improve your skills.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Flame,
      title: 'Keep Streaks',
      description: 'Practice daily and watch your streak grow Can you reach 100 days?',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Win Badges',
      description: 'Collect awesome badges and show off your achievements',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Pick Your Challenge',
      description: 'Choose addition, subtraction, multiplication, division, or mix them all',
      icon: Target,
    },
    {
      step: '2',
      title: 'Play Every Day',
      description: 'Just 5 minutes a day Build your streak and watch yourself get better.',
      icon: Flame,
    },
    {
      step: '3',
      title: 'Level Up & Win',
      description: 'Unlock new levels, earn badges, and become a math master',
      icon: Trophy,
    },
  ];

  useEffect(() => {
    if (!championCarouselApi || isChampionCarouselHovered) return;

    const intervalId = window.setInterval(() => {
      championCarouselApi.scrollNext();
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [championCarouselApi, isChampionCarouselHovered]);

  const countryMeta = useMemo(
    () => [
    {
      key: 'india',
      country: 'India',
      flagSrc: '/india-flag.jpeg',
      flagAlt: 'India flag',
      accent:
        'border-yellow-400/40 bg-gradient-to-br from-yellow-500/10 via-pink-500/10 to-purple-600/10 shadow-pink-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.18),transparent_35%)]',
    },
    {
      key: 'usa',
      country: 'USA',
      flagSrc: '/usa-flag.png',
      flagAlt: 'USA flag',
      accent: 'border-sky-400/40 bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-red-500/10 shadow-sky-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.16),transparent_35%)]',
    },
    {
      key: 'canada',
      country: 'Canada',
      flagSrc: '/canada-flag.png',
      flagAlt: 'Canada flag',
      accent: 'border-red-400/40 bg-gradient-to-br from-red-500/10 via-white/10 to-red-500/10 shadow-red-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(248,113,113,0.14),transparent_35%)]',
    },
    {
      key: 'japan',
      country: 'Japan',
      flagSrc: '/japan-flag.png',
      flagAlt: 'Japan flag',
      accent: 'border-rose-400/40 bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-white/10 shadow-rose-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_35%)]',
    },
    {
      key: 'bulgaria',
      country: 'Bulgaria',
      flagSrc: '/bulgaria-flag.png',
      flagAlt: 'Bulgaria flag',
      accent: 'border-emerald-400/40 bg-gradient-to-br from-white/10 via-green-500/10 to-red-500/10 shadow-emerald-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    {
      key: 'malaysia',
      country: 'Malaysia',
      flagSrc: '/malaysia-flag.png',
      flagAlt: 'Malaysia flag',
      accent: 'border-amber-400/40 bg-gradient-to-br from-blue-500/10 via-red-500/10 to-yellow-500/10 shadow-amber-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]',
    },
    {
      key: 'south-korea',
      country: 'South Korea',
      flagSrc: '/south-korea-flag.png',
      flagAlt: 'South Korea flag',
      accent: 'border-slate-300/40 bg-gradient-to-br from-white/10 via-slate-500/10 to-red-500/10 shadow-slate-400/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    {
      key: 'algeria',
      country: 'Algeria',
      flagSrc: '/algeria-flag.png',
      flagAlt: 'Algeria flag',
      accent: 'border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-white/10 to-red-500/10 shadow-emerald-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    {
      key: 'uk',
      country: 'UK',
      flagSrc: '/uk-flag.png',
      flagAlt: 'UK flag',
      accent: 'border-indigo-400/40 bg-gradient-to-br from-indigo-500/10 via-white/10 to-red-500/10 shadow-indigo-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    {
      key: 'germany',
      country: 'Germany',
      flagSrc: '/germany-flag.png',
      flagAlt: 'Germany flag',
      accent: 'border-amber-400/40 bg-gradient-to-br from-black/20 via-red-500/10 to-yellow-500/10 shadow-amber-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    {
      key: 'italy',
      country: 'Italy',
      flagSrc: '/italy-flag.png',
      flagAlt: 'Italy flag',
      accent: 'border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-white/10 to-red-500/10 shadow-emerald-500/20',
      glow:
        'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.14),transparent_35%)]',
    },
    ],
    [],
  );

  const achieverGroups = useMemo(
    () =>
      countryMeta.map((meta) => ({
        ...meta,
        achievers: achievers.filter((achiever) => achiever.country === meta.country),
      })),
    [achievers],
  );

  const orderedCountryGroups = useMemo(
    () => [
      ...achieverGroups.filter((country) => country.country === 'USA'),
      ...achieverGroups.filter((country) => country.country !== 'USA'),
    ],
    [achieverGroups],
  );

  useEffect(() => {
    if (!championCarouselApi) return;

    const activeIndex = orderedCountryGroups.findIndex(
      (country) => country.country === selectedCountry,
    );

    if (activeIndex >= 0) {
      championCarouselApi.scrollTo(activeIndex);
    }
  }, [championCarouselApi, orderedCountryGroups, selectedCountry]);

  useEffect(() => {
    if (!championCarouselApi) return;

    const handleSelect = () => {
      const currentIndex = championCarouselApi.selectedScrollSnap();
      const currentCountry = orderedCountryGroups[currentIndex]?.country;

      if (currentCountry) {
        setSelectedCountry(currentCountry);
      }
    };

    championCarouselApi.on('select', handleSelect);
    handleSelect();

    return () => {
      championCarouselApi.off('select', handleSelect);
    };
  }, [championCarouselApi, orderedCountryGroups]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-white font-semibold">Become a Math Superstar</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl mb-6 leading-tight font-black text-white">
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: [0, -3, 0], scale: 1, rotate: [0, 0.4, 0] }}
                transition={{
                  opacity: { duration: 0.7, ease: 'easeOut' },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.7, ease: 'easeOut' },
                }}
              >
                <span className="absolute inset-x-0 -bottom-3 h-6 rounded-full bg-gradient-to-r from-orange-500/35 via-pink-500/35 to-purple-500/35 blur-2xl animate-pulse" />
                <span className="relative inline-flex items-center gap-2 rounded-3xl border border-pink-400/25 bg-black/20 px-5 py-3 text-3xl md:text-4xl backdrop-blur-sm shadow-2xl shadow-pink-500/10 text-pink-200">
                  <img
                    src="/mmm-logo.png"
                    alt="Mental Math Master"
                    className="h-14 w-14 rounded-xl object-cover shrink-0"
                  />
                  <span className="font-black tracking-tight leading-none">Abacus</span>
                </span>
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Master Math
              </span>
              <br />
              <span className="inline-flex items-center justify-center gap-4 flex-wrap bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                <span>Like a Pro</span>
                <Rocket className="w-14 h-14 text-pink-400" />
              </span>
            </h1>

            <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Practice mental math every day, beat your high scores, and become the <span className="text-pink-400 font-bold">fastest calculator</span> in your class
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="w-full sm:flex-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-2xl shadow-pink-500/50 px-8 py-7 text-lg hover:scale-105 transition-transform min-h-[4.75rem]"
                asChild
              >
                <Link to="/download/ios">
                  <img
                    src="/appstore-icon.png"
                    alt="App Store"
                    className="w-7 h-7 mr-3 rounded-sm object-contain"
                  />
                  <span className="flex flex-col leading-tight text-left">
                    <span className="text-xs font-medium">Download on</span>
                    <span className="text-base font-semibold">Appstore</span>
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 text-white shadow-2xl shadow-purple-500/50 px-8 py-7 text-lg hover:scale-105 transition-transform min-h-[4.75rem]"
                asChild
              >
                <Link to="/download/android">
                  <img
                    src="/playstore-icon.png"
                    alt="Google Play"
                    className="w-7 h-7 mr-3 rounded-sm object-contain"
                  />
                  <span className="flex flex-col leading-tight text-left">
                    <span className="text-xs font-medium">Get it on</span>
                    <span className="text-base font-semibold">Google Play</span>
                  </span>
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                No Ads
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Safe for Kids
              </div>
            </div>
          </motion.div>

          {/* App Preview Mockup - More Gamified */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-pink-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="flex justify-center gap-2">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-lg animate-bounce">
                      <Brain className="w-8 h-8 text-white" />
                    </div> */}
                    <div className="flex flex-col items-start">
                      <div className="text-sm text-pink-400 font-bold flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        How fast you can calculate ?
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-pink-500/30">
                    <div className="text-5xl mb-3 font-black text-white">45 + 87 = ?</div>
                    <div className="text-sm text-pink-300 font-bold flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      Beat the 3 second timer
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abacus Advantage */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-purple-600/30 backdrop-blur-md border border-pink-400/40 shadow-lg shadow-pink-500/20 mb-6">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm md:text-base text-white font-bold tracking-wide uppercase">
                Featured Abacus Spotlight
              </span>
              <Award className="w-5 h-5 text-yellow-300" />
            </div>
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-black">
              <span className="inline-flex items-center justify-center gap-4 flex-wrap">
                <span>Build Speed, Focus, and Brain Power</span>
                <Brain className="w-12 h-12 text-pink-400" />
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Abacus-based practice helps children calculate faster, sharpen visualization, and grow
              stronger mental discipline through consistent training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-orange-500/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">Faster Calculation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-300 text-base">
                    Abacus practice improves number sense, speed, and accuracy while making mental
                    arithmetic feel natural and fun
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border-2 border-pink-500/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Globe2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">Global Competition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-slate-300 text-base">
                    Kids can participate in international events, skill showcases, and record-style
                    abacus games that make learning feel like a championship
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <Card className="relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-black/70 via-slate-950/70 to-black/70 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_28%)]" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10 min-w-0 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit mb-4">
                    <Award className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-100">
                      Global Achievers
                    </span>
                  </div>
                  <CardTitle className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
                    Champions Across Borders
                  </CardTitle>
                  <p className="text-slate-200 text-lg leading-relaxed mb-6">
                    From Asia to Europe and North America, these young achievers prove that focus,
                    practice, and confidence can turn numbers into unforgettable victories.
                  </p>

                  <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                    {orderedCountryGroups.map((country) => (
                      <button
                        key={country.key}
                        type="button"
                        onClick={() => setSelectedCountry(country.country)}
                        className={`group rounded-2xl border bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                          selectedCountry === country.country
                            ? 'border-white/70 shadow-lg shadow-pink-500/20'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-xl blur-md opacity-50 ${country.glow}`} />
                          <img
                            src={country.flagSrc}
                            alt={country.flagAlt}
                            className="relative h-12 w-full rounded-xl border border-white/15 object-cover shadow-md"
                          />
                        </div>
                        <span className="sr-only">{country.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 min-w-0 p-6 md:p-8 lg:py-10">
                  <Carousel
                    opts={{ align: 'start', loop: true }}
                    setApi={setChampionCarouselApi}
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsChampionCarouselHovered(true)}
                    onMouseLeave={() => setIsChampionCarouselHovered(false)}
                  >
                    <CarouselContent className="-ml-4">
                      {orderedCountryGroups.map((country) => (
                        <CarouselItem key={country.key} className="pl-4">
                          <div className={`relative overflow-hidden rounded-3xl border-2 p-6 md:p-8 ${country.accent}`}>
                            <div className={`absolute inset-0 pointer-events-none ${country.glow}`} />
                            <div className="relative">
                              <div className="mb-5 flex items-center gap-3">
                                <img
                                  src={country.flagSrc}
                                  alt={country.flagAlt}
                                  className="h-12 w-20 rounded-xl border border-white/15 object-cover shadow-lg"
                                />
                                <div>
                                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-300">
                                    Country Spotlight
                                  </p>
                                  <h3 className="text-3xl font-black text-white">{country.country}</h3>
                                </div>
                              </div>
                              <div className="space-y-3">
                                {country.achievers.map((achiever) => (
                                  <div
                                    key={`${achiever.name}-${achiever.country}-${achiever.achievement}`}
                                    className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4"
                                  >
                                    <p className="text-white text-xl font-bold tracking-tight">
                                      {achiever.name}
                                    </p>
                                    <p className="mt-1 text-slate-300 text-sm">{achiever.achievement}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-black inline-flex items-center justify-center gap-4 flex-wrap">
              <span>Why Kids Love It</span>
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to become a math champion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-black inline-flex items-center justify-center gap-4 flex-wrap">
              <span>Getting Started is Easy</span>
              <Rocket className="w-12 h-12 text-pink-400" />
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Three simple steps to becoming a math master
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center space-y-4">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                    <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-pink-500/30 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto -mt-4">
                      <span className="text-4xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-black">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl text-white font-bold">{item.title}</h3>
                  <p className="text-slate-300 max-w-xs mx-auto text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-purple-500/30 overflow-hidden pt-4 pb-4">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <CardHeader className="text-center pb-8 relative z-10">
                <CardTitle className="text-4xl text-white mb-2 font-black">Collect Awesome Rewards</CardTitle>
                <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Earn cool badges, build epic streaks, and show your friends how amazing you are at math
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-orange-900/20 to-pink-900/20 rounded-2xl border border-orange-500/30">
                    <Rocket className="w-12 h-12 text-orange-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Level Up Fast</h4>
                    <p className="text-sm text-slate-300">
                      Start from beginner and unlock harder levels as you improve
                    </p>
                  </div>
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-2xl border border-pink-500/30">
                    <Flame className="w-12 h-12 text-pink-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Build Streaks</h4>
                    <p className="text-sm text-slate-300">
                      Practice every day and watch your streak counter go up
                    </p>
                  </div>
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-2xl border border-purple-500/30">
                    <Trophy className="w-12 h-12 text-purple-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Win Badges</h4>
                    <p className="text-sm text-slate-300">
                      Collect badges for every achievement and show them off
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Trust Section - Kid Friendly */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl border-2 border-green-500/30 pt-4 pb-4">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl mx-auto mb-4 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-4xl text-white mb-2 font-black">Safe & Fun for Kids</CardTitle>
                <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Parents love it, kids love it, teachers recommend it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-2">
                    <Shield className="w-10 h-10 text-green-400 mx-auto mb-2" />
                    <h4 className="text-white text-lg font-bold">100% Safe</h4>
                    <p className="text-sm text-slate-300">
                      No ads, no in-app purchases, just pure learning fun
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <Clock className="w-10 h-10 text-yellow-300 mx-auto mb-2" />
                    <h4 className="text-white text-lg font-bold">Quick Sessions</h4>
                    <p className="text-sm text-slate-300">
                      Just 5 minutes a day is all you need to get better
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <BookOpen className="w-10 h-10 text-purple-300 mx-auto mb-2" />
                    <h4 className="text-white text-lg font-bold">Made for Learning</h4>
                    <p className="text-sm text-slate-300">
                      Designed by teachers to help you ace your math tests
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl text-white font-black">
              Ready to be a Math Master?
            </h2>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of kids getting faster and smarter at math every single day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-2xl shadow-pink-500/50 px-12 py-8 text-xl hover:scale-105 transition-transform min-h-[5.25rem]"
              >
                <img
                  src="/appstore-icon.png"
                  alt="App Store"
                  className="w-8 h-8 mr-3 rounded-sm object-contain"
                />
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-xs md:text-sm font-medium">Download on</span>
                  <span className="text-base md:text-lg font-semibold">Appstore</span>
                </span>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 text-white shadow-2xl shadow-purple-500/50 px-12 py-8 text-xl hover:scale-105 transition-transform min-h-[5.25rem]"
                asChild
              >
                <Link to="/download/android">
                  <img
                    src="/playstore-icon.png"
                    alt="Google Play"
                    className="w-8 h-8 mr-3 rounded-sm object-contain"
                  />
                  <span className="flex flex-col leading-tight text-left">
                    <span className="text-xs md:text-sm font-medium">Get it on</span>
                    <span className="text-base md:text-lg font-semibold">Google Play</span>
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
