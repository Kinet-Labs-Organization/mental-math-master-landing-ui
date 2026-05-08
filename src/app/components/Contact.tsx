import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL ?? 'support@mentalmathmaster.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    const mailtoUrl =
      `mailto:${supportEmail}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const anchor = document.createElement('a');
    anchor.href = mailtoUrl;
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="pt-32 pb-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-pink-500/50">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 text-white font-black flex items-center justify-center gap-4 flex-wrap">
              <span>Get in Touch</span>
              <Heart className="w-12 h-12 text-pink-400" />
            </h1>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
              Have questions? Need help? Want to share your high score? We'd love to hear from you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-pink-500/30">
                <CardHeader>
                  <CardTitle className="text-white text-3xl font-bold flex items-center gap-3 flex-wrap">
                    <span>Send Us a Message</span>
                    <MessageSquare className="w-7 h-7 text-pink-400" />
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base">
                    Fill out the form below and we'll get back to you super fast
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-base">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="What should we call you?"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-black/50 border-pink-500/30 text-white placeholder:text-slate-500 focus:border-pink-500 text-base h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-base">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-black/50 border-pink-500/30 text-white placeholder:text-slate-500 focus:border-pink-500 text-base h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white text-base">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-black/50 border-pink-500/30 text-white placeholder:text-slate-500 focus:border-pink-500 text-base h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white text-base">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-black/50 border-pink-500/30 text-white placeholder:text-slate-500 resize-none focus:border-pink-500 text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/50 hover:scale-105 transition-transform text-lg h-14"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-orange-900/30 to-pink-900/30 backdrop-blur-sm border-2 border-orange-500/30 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-2">For any questions:</p>
                  <a
                    href={`mailto:${supportEmail}`}
                    className="text-pink-400 hover:text-pink-300 transition-colors font-bold"
                  >
                    {supportEmail}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border-2 border-pink-500/30 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">We Reply Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">
                    We usually respond within 24-48 hours. If it's urgent, write "URGENT" in your
                    subject line and we'll help even faster
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-orange-900/30 backdrop-blur-sm border-2 border-purple-500/30 hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">We Love Feedback</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-300 space-y-2">
                  <p>
                    Tell us what you love about the app or what we can make better. Every message helps
                    us make Mental Math Master even more awesome
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
