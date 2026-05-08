import { Link } from 'react-router';
import { Brain, Mail, Shield, FileText, Cookie, AlertCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-purple-500/20 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-2 rounded-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold">Mental Math Master</span>
            </div>
            <p className="text-slate-400 text-sm">
              Level up your math skills and become a calculation superstar
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <Cookie className="w-3 h-3" />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Mental Math Master. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="App Store"
              >
                App Store
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="#"
                className="text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="Google Play"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
