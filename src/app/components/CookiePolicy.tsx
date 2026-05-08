import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-6 shadow-xl shadow-pink-500/30">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white font-black">Cookie Policy</h1>
            <p className="text-slate-400">Last Updated: May 8, 2026</p>
          </motion.div>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-purple-500/30">
            <CardContent className="text-slate-300 space-y-6 pt-6">
              <section>
                <h2 className="text-2xl text-white mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are stored on your device when you use Mental Math
                  Master. They help us provide you with a better experience by remembering your
                  preferences, keeping you logged in, and understanding how you use our app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">How We Use Cookies</h2>
                <p className="mb-4">
                  Mental Math Master uses cookies and similar technologies for several purposes:
                </p>

                <h3 className="text-xl text-white mb-2">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are necessary for the app to function properly. They enable core
                  functionality such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Authentication and account access</li>
                  <li>Security features</li>
                  <li>Session management</li>
                  <li>Load balancing</li>
                </ul>

                <h3 className="text-xl text-white mb-2">Performance Cookies</h3>
                <p className="mb-4">
                  These cookies help us understand how users interact with the app by collecting
                  anonymous information about:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Pages visited and features used</li>
                  <li>Time spent on different sections</li>
                  <li>Error messages encountered</li>
                  <li>App performance and loading times</li>
                </ul>

                <h3 className="text-xl text-white mb-2">Functionality Cookies</h3>
                <p className="mb-4">
                  These cookies remember your preferences and choices to provide a personalized
                  experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Language preferences</li>
                  <li>Difficulty settings</li>
                  <li>Display preferences</li>
                  <li>Practice mode selections</li>
                </ul>

                <h3 className="text-xl text-white mb-2">Analytics Cookies</h3>
                <p className="mb-4">
                  We use analytics services to help us improve the app. These cookies collect
                  information about:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>User behavior patterns</li>
                  <li>Feature popularity</li>
                  <li>Device and browser information</li>
                  <li>Geographic location (country/region level only)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Third-Party Cookies</h2>
                <p className="mb-4">
                  Some cookies may be set by third-party services we use, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>App performance monitoring services</li>
                  <li>Payment processors (for subscription features)</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies governing their use of cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Managing Cookies</h2>
                <p className="mb-4">
                  You have several options for managing cookies:
                </p>

                <h3 className="text-xl text-white mb-2">In-App Settings</h3>
                <p className="mb-4">
                  You can manage non-essential cookies through the app's privacy settings. Note that
                  disabling certain cookies may affect app functionality.
                </p>

                <h3 className="text-xl text-white mb-2">Device Settings</h3>
                <p className="mb-4">
                  Most mobile devices allow you to control cookies through their settings. Consult your
                  device's help documentation for specific instructions.
                </p>

                <h3 className="text-xl text-white mb-2">Browser Settings</h3>
                <p className="mb-4">
                  If using the web version, you can control cookies through your browser settings. Most
                  browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View and delete existing cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Clear cookies when you close the browser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Cookie Duration</h2>
                <p className="mb-4">Cookies may be either session or persistent:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Session cookies:</strong> Temporary cookies that are
                    deleted when you close the app
                  </li>
                  <li>
                    <strong className="text-white">Persistent cookies:</strong> Remain on your device for
                    a set period or until you delete them
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Do Not Track</h2>
                <p>
                  Some browsers include a "Do Not Track" feature. While Mental Math Master respects
                  privacy preferences, there is currently no industry standard for responding to Do Not
                  Track signals. We continue to monitor developments in this area.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Local Storage</h2>
                <p>
                  In addition to cookies, Mental Math Master may use local storage technologies to store
                  data on your device. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Practice session data for offline access</li>
                  <li>User preferences and settings</li>
                  <li>Cached content for faster loading</li>
                  <li>Progress tracking information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
                <p>
                  For users under 13, we take extra care to minimize data collection. We only use
                  essential cookies necessary for the app to function and do not use advertising or
                  tracking cookies for children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for legal, operational, or regulatory reasons. We will notify you of significant
                  changes by updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">More Information</h2>
                <p>
                  For more information about how we handle your data, please see our Privacy Policy. If
                  you have questions about our use of cookies, please contact us through our Contact
                  page.
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
