import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Brain, Target, Users, Zap, Star, Rocket, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-pink-500/50 animate-bounce">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-white font-black">About Mental Math Master 🚀</h1>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
              The coolest way for kids to become lightning-fast at math!
            </p>
          </motion.div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-bold">Our Mission 🎯</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4 text-lg">
                <p>
                  We believe every kid can be awesome at math! Mental Math Master makes practicing math
                  super fun, like playing a video game. You'll get faster, smarter, and more confident
                  with numbers every single day.
                </p>
                <p>
                  Whether you're getting ready for a big test, want to impress your friends, or just
                  love beating your high score, Mental Math Master is here to help you become a
                  calculation champion!
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-orange-900/30 to-pink-900/30 backdrop-blur-sm border-2 border-orange-500/30 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">How We Help You Win 🎮</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-base">
                  <p>
                    We use super cool game features like levels, streaks, and badges to keep you excited
                    about practicing. Every challenge is designed to help you get better without feeling
                    like boring homework!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border-2 border-pink-500/30 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl font-bold">Join the Squad 👥</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 text-base">
                  <p>
                    Thousands of kids around the world are already using Mental Math Master to get better
                    at math. Join them, compare scores, and see how you stack up on the leaderboard!
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-900/30 to-orange-900/30 backdrop-blur-sm border-2 border-purple-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-white text-3xl font-bold">Why Mental Math Rocks! ⚡</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4 text-lg relative z-10">
                <p>
                  Sure, you could use a calculator, but being fast at mental math makes you feel like a
                  superhero! Here's what you get:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-pink-500/20">
                    <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold">Be the fastest in class</p>
                      <p className="text-sm text-slate-400">Finish math problems before everyone else!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-orange-500/20">
                    <Rocket className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold">Boost your brain power</p>
                      <p className="text-sm text-slate-400">Get smarter and think faster!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-purple-500/20">
                    <Trophy className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold">Feel confident with numbers</p>
                      <p className="text-sm text-slate-400">Never be scared of math again!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-pink-500/20">
                    <Zap className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold">Ace your tests</p>
                      <p className="text-sm text-slate-400">Better grades are just practice away!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-bold">Made by Teachers, Loved by Kids 🎓</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4 text-lg">
                <p>
                  Mental Math Master was designed by real teachers who know how to make learning fun and
                  effective. We use proven methods that actually work:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2 bg-black/30 p-4 rounded-xl border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">📚</div>
                      <span className="text-white font-bold">Practice the right way</span>
                    </div>
                    <p className="text-sm text-slate-400 ml-9">
                      Review problems at the perfect time so you remember them forever
                    </p>
                  </div>
                  <div className="space-y-2 bg-black/30 p-4 rounded-xl border border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">🎮</div>
                      <span className="text-white font-bold">Level up gradually</span>
                    </div>
                    <p className="text-sm text-slate-400 ml-9">
                      Start easy and get harder as you improve - never too easy, never too hard!
                    </p>
                  </div>
                  <div className="space-y-2 bg-black/30 p-4 rounded-xl border border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">💡</div>
                      <span className="text-white font-bold">See your mistakes instantly</span>
                    </div>
                    <p className="text-sm text-slate-400 ml-9">
                      Learn from errors right away so you never make them again
                    </p>
                  </div>
                  <div className="space-y-2 bg-black/30 p-4 rounded-xl border border-pink-500/20">
                    <div className="flex items-center gap-2">
                      <div className="text-2xl">🏆</div>
                      <span className="text-white font-bold">Stay motivated with rewards</span>
                    </div>
                    <p className="text-sm text-slate-400 ml-9">
                      Earn badges, build streaks, and unlock achievements!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-600/10 rounded-3xl border-2 border-pink-500/30">
              <div className="text-6xl mb-4">🌟 ⚡ 🚀</div>
              <h3 className="text-3xl text-white font-black mb-4">Ready to Start Your Journey?</h3>
              <p className="text-xl text-slate-300 mb-6">
                Download Mental Math Master today and become the math champion you were meant to be!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
