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
  Apple,
  Smartphone,
  CheckCircle2,
  Flame,
  Star,
  Rocket,
  Medal,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Race against the clock and become a speed calculation champion!',
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
      description: 'Practice daily and watch your streak grow! Can you reach 100 days?',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Win Badges',
      description: 'Collect awesome badges and show off your achievements!',
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Pick Your Challenge',
      description: 'Choose addition, subtraction, multiplication, division, or mix them all!',
      emoji: '🎯',
    },
    {
      step: '2',
      title: 'Play Every Day',
      description: 'Just 5 minutes a day! Build your streak and watch yourself get better.',
      emoji: '🔥',
    },
    {
      step: '3',
      title: 'Level Up & Win',
      description: 'Unlock new levels, earn badges, and become a math master!',
      emoji: '🏆',
    },
  ];

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
              <span className="text-sm text-white font-semibold">Become a Math Superstar!</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight font-black">
              Master Math
              <br />
              Like a Pro! 🚀
            </h1>

            <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Practice mental math every day, beat your high scores, and become the <span className="text-pink-400 font-bold">fastest calculator</span> in your class!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-2xl shadow-pink-500/50 px-8 text-lg hover:scale-105 transition-transform"
              >
                <Apple className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 text-white shadow-2xl shadow-purple-500/50 px-8 text-lg hover:scale-105 transition-transform"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Get it on Android
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                100% Free
              </div>
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-lg animate-bounce">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="text-sm text-pink-400 font-bold flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        15 Day Streak!
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-pink-500/30">
                    <div className="text-5xl mb-3 font-black text-white">45 + 87 = ?</div>
                    <div className="text-sm text-pink-300 font-bold flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      Beat the 3 second timer!
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-black">
              Why Kids Love It! 🎮
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to become a math champion!
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
            <h2 className="text-5xl md:text-6xl mb-4 text-white font-black">
              Getting Started is Easy! 😎
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
                    <div className="relative text-8xl mb-4">
                      {item.emoji}
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
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-purple-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <Trophy className="w-12 h-12 text-yellow-400" />
                  <Medal className="w-12 h-12 text-pink-400" />
                  <Star className="w-12 h-12 text-purple-400" />
                </div>
                <CardTitle className="text-4xl text-white mb-2 font-black">Collect Awesome Rewards!</CardTitle>
                <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Earn cool badges, build epic streaks, and show your friends how amazing you are at math!
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-orange-900/20 to-pink-900/20 rounded-2xl border border-orange-500/30">
                    <Rocket className="w-12 h-12 text-orange-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Level Up Fast</h4>
                    <p className="text-sm text-slate-300">
                      Start from beginner and unlock harder levels as you improve!
                    </p>
                  </div>
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-2xl border border-pink-500/30">
                    <Flame className="w-12 h-12 text-pink-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Build Streaks</h4>
                    <p className="text-sm text-slate-300">
                      Practice every day and watch your streak counter go up!
                    </p>
                  </div>
                  <div className="text-center space-y-3 p-6 bg-gradient-to-br from-purple-900/20 to-orange-900/20 rounded-2xl border border-purple-500/30">
                    <Trophy className="w-12 h-12 text-purple-400 mx-auto" />
                    <h4 className="text-white text-xl font-bold">Win Badges</h4>
                    <p className="text-sm text-slate-300">
                      Collect badges for every achievement and show them off!
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
            <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl border-2 border-green-500/30">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl mx-auto mb-4 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-4xl text-white mb-2 font-black">Safe & Fun for Kids!</CardTitle>
                <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Parents love it, kids love it, teachers recommend it!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-2">🛡️</div>
                    <h4 className="text-white text-lg font-bold">100% Safe</h4>
                    <p className="text-sm text-slate-300">
                      No ads, no in-app purchases, just pure learning fun!
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-2">⚡</div>
                    <h4 className="text-white text-lg font-bold">Quick Sessions</h4>
                    <p className="text-sm text-slate-300">
                      Just 5 minutes a day is all you need to get better!
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-2">🎓</div>
                    <h4 className="text-white text-lg font-bold">Made for Learning</h4>
                    <p className="text-sm text-slate-300">
                      Designed by teachers to help you ace your math tests!
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
            <div className="text-6xl mb-4">🎉 🚀 ⭐</div>
            <h2 className="text-5xl md:text-6xl text-white font-black">
              Ready to Be a Math Master?
            </h2>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of kids getting faster and smarter at math every single day!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-2xl shadow-pink-500/50 px-12 text-xl hover:scale-105 transition-transform"
              >
                <Apple className="w-6 h-6 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 text-white shadow-2xl shadow-purple-500/50 px-12 text-xl hover:scale-105 transition-transform"
              >
                <Smartphone className="w-6 h-6 mr-2" />
                Get it on Android
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
