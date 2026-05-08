import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl mb-6 shadow-xl shadow-green-500/30">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white font-black">Privacy Policy</h1>
            <p className="text-slate-400">Last Updated: May 8, 2026</p>
          </motion.div>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-purple-500/30">
            <CardContent className="text-slate-300 space-y-6 pt-6">
              <section>
                <h2 className="text-2xl text-white mb-4">Introduction</h2>
                <p>
                  Mental Math Master ("we," "our," or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you use our mobile application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Information We Collect</h2>
                <h3 className="text-xl text-white mb-2">Personal Information</h3>
                <p className="mb-4">
                  We collect minimal personal information necessary to provide our service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account credentials (email address and password)</li>
                  <li>Profile information (display name, optional)</li>
                  <li>Device information for analytics and app performance</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl text-white mb-2">Practice Data</h3>
                <p className="mb-4">
                  To provide personalized learning experiences, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your practice session results and scores</li>
                  <li>Progress statistics and achievement unlocks</li>
                  <li>Difficulty preferences and settings</li>
                  <li>Streak and usage patterns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our service</li>
                  <li>Personalize your learning experience</li>
                  <li>Track your progress and generate statistics</li>
                  <li>Send important updates about your account or the app</li>
                  <li>Improve our app through analytics</li>
                  <li>Detect and prevent fraud or abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Data Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your information only in these
                  limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>With service providers who assist in operating our app (under strict confidentiality)</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data, including
                  encryption in transit and at rest, secure authentication, and regular security audits.
                  However, no method of transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
                <p>
                  Mental Math Master is suitable for users of all ages. For users under 13, we require
                  parental consent and collect only the minimum information necessary to provide the
                  service. We do not knowingly collect personal information from children under 13
                  without parental consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  significant changes by posting the new policy on this page and updating the "Last
                  Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us through our
                  Contact page or email us directly.
                </p>
              </section>

              <section className="pt-4 border-t border-white/10">
                <h2 className="text-2xl text-white mb-4">Company Information</h2>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="text-white font-semibold">App Name:</span> Mental Math Master
                  </p>
                  <p>
                    <span className="text-white font-semibold">Company Name:</span> Kinet Labs
                  </p>
                  <p>
                    <span className="text-white font-semibold">Email:</span> kinetlabs@gmail.com
                  </p>
                  <p>
                    <span className="text-white font-semibold">Location:</span> 141/1, R.K Road, T.S.G Sarani, Kolkata 700 079, West Bengal, India
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
