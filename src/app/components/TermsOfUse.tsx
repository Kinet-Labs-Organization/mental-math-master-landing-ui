import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl mb-6 shadow-xl shadow-pink-500/30">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white font-black">Terms of Use</h1>
            <p className="text-slate-400">Last Updated: May 8, 2026</p>
          </motion.div>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-purple-500/30">
            <CardContent className="text-slate-300 space-y-6 pt-6">
              <section>
                <h2 className="text-2xl text-white mb-4">Agreement to Terms</h2>
                <p>
                  By accessing or using Mental Math Master, you agree to be bound by these Terms of Use.
                  If you do not agree to these terms, please do not use our application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Use License</h2>
                <p className="mb-4">
                  We grant you a personal, non-exclusive, non-transferable, limited license to use
                  Mental Math Master for your personal, educational purposes, subject to these terms:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You may not modify or copy the application materials</li>
                  <li>You may not use the materials for commercial purposes</li>
                  <li>You may not reverse engineer or attempt to extract the source code</li>
                  <li>You may not remove any copyright or proprietary notations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">User Accounts</h2>
                <p className="mb-4">When creating an account, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Use the app in compliance with all applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Acceptable Use</h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the app for any unlawful purpose</li>
                  <li>Attempt to interfere with the app's functionality</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Upload malicious code or viruses</li>
                  <li>Engage in data mining, scraping, or harvesting</li>
                  <li>Share your account with others</li>
                  <li>Create multiple accounts to abuse features or promotions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Subscription and Payments</h2>
                <p className="mb-4">
                  Mental Math Master offers both free and premium subscription features:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Subscriptions automatically renew unless canceled before the renewal date</li>
                  <li>Prices are subject to change with notice to active subscribers</li>
                  <li>Refunds are handled according to the app store's refund policy</li>
                  <li>Premium features are subject to availability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Intellectual Property</h2>
                <p>
                  All content, features, and functionality of Mental Math Master, including but not
                  limited to text, graphics, logos, icons, images, audio clips, and software, are the
                  exclusive property of Mental Math Master and are protected by international copyright,
                  trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Content and Data</h2>
                <p className="mb-4">
                  While you retain ownership of your practice data and statistics:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We may use aggregated, anonymized data to improve our service</li>
                  <li>We reserve the right to remove content that violates these terms</li>
                  <li>You grant us a license to use your data to provide and improve the service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Disclaimer of Warranties</h2>
                <p>
                  Mental Math Master is provided "as is" and "as available" without warranties of any
                  kind, either express or implied. We do not warrant that the app will be uninterrupted,
                  error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Mental Math Master shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages resulting from your
                  use or inability to use the app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your account and access to the app at our
                  sole discretion, without notice, for conduct that we believe violates these Terms of
                  Use or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Changes to Terms</h2>
                <p>
                  We may revise these Terms of Use at any time. Continued use of the app after changes
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Governing Law</h2>
                <p>
                  These Terms of Use are governed by and construed in accordance with applicable laws,
                  without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Contact Information</h2>
                <p>
                  Questions about these Terms of Use should be sent to us through our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
