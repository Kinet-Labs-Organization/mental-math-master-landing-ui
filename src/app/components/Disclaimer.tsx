import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Disclaimer() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6 shadow-xl shadow-yellow-500/30">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white font-black">Disclaimer</h1>
            <p className="text-slate-400">Last Updated: May 8, 2026</p>
          </motion.div>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-purple-500/30">
            <CardContent className="text-slate-300 space-y-6 pt-6">
              <section>
                <h2 className="text-2xl text-white mb-4">General Information</h2>
                <p>
                  Mental Math Master is an educational application designed to help users improve their
                  mental arithmetic skills. The information and features provided in this app are for
                  educational and entertainment purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Educational Tool Only</h2>
                <p className="mb-4">
                  Mental Math Master is a supplementary educational tool and should not be considered:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A replacement for formal mathematics education</li>
                  <li>Professional tutoring or academic instruction</li>
                  <li>A guarantee of improved academic performance</li>
                  <li>A substitute for professional educational assessment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">No Guarantees of Results</h2>
                <p>
                  While Mental Math Master is designed to help improve mental arithmetic skills through
                  practice, we make no guarantees regarding:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The rate or extent of skill improvement</li>
                  <li>Academic performance outcomes</li>
                  <li>Test scores or examination results</li>
                  <li>Career or professional advancement</li>
                </ul>
                <p className="mt-4">
                  Individual results may vary based on factors including prior knowledge, practice
                  frequency, learning style, and individual aptitude.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Technical Limitations</h2>
                <p className="mb-4">
                  Mental Math Master strives to provide accurate content, but we cannot guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>100% uptime or uninterrupted service</li>
                  <li>Error-free operation at all times</li>
                  <li>Compatibility with all devices or operating systems</li>
                  <li>Perfect accuracy of all content (though errors are rare and corrected promptly)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Age Appropriateness</h2>
                <p>
                  Mental Math Master is designed to be suitable for users of all ages. Parents and
                  guardians should:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Supervise young children's use of the app</li>
                  <li>Determine age-appropriate difficulty levels</li>
                  <li>Monitor practice duration to prevent excessive screen time</li>
                  <li>Ensure the app complements, rather than replaces, formal education</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Health and Wellbeing</h2>
                <p className="mb-4">
                  While practicing mental math can be beneficial, users should:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Take regular breaks to avoid eye strain and mental fatigue</li>
                  <li>Practice in moderation as part of a balanced lifestyle</li>
                  <li>Consult professionals if experiencing learning difficulties</li>
                  <li>Not use the app as a substitute for professional learning disability assessment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Third-Party Links and Content</h2>
                <p>
                  Mental Math Master may contain links to third-party websites or services. We are not
                  responsible for the content, accuracy, or practices of these third parties. Access
                  third-party links at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Data and Statistics</h2>
                <p>
                  Progress statistics and performance metrics provided by the app are estimates based on
                  your practice sessions. They should be used as general guidance rather than precise
                  scientific measurements of ability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Liability Limitation</h2>
                <p>
                  To the fullest extent permitted by law, Mental Math Master and its creators,
                  developers, and affiliates shall not be liable for any damages arising from the use or
                  inability to use the app, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lost data or corrupted files</li>
                  <li>Academic or professional setbacks</li>
                  <li>Time invested in practice</li>
                  <li>Decisions made based on app features or statistics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Updates and Changes</h2>
                <p>
                  Mental Math Master is continually improved and updated. Features, content, and
                  functionality may change without notice. We reserve the right to modify or discontinue
                  any aspect of the app at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">User Responsibility</h2>
                <p>
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Using the app appropriately and within their capabilities</li>
                  <li>Verifying any information critical to their education or career</li>
                  <li>Seeking professional help when needed for learning challenges</li>
                  <li>Maintaining realistic expectations about skill development</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Questions and Concerns</h2>
                <p>
                  If you have questions about this disclaimer or concerns about the app, please contact
                  us through our Contact page.
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
