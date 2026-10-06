import { Link } from 'react-router-dom'
import zorian_logo from '../assets/zorian-logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <img
                  alt="Zorian Logo"
                  className="h-10 w-auto"
                  src={zorian_logo}
                />
              </div>
              <div className="flex items-baseline gap-1">
                <h3 className="font-bold text-lg">Zorian</h3>
                <p className="text-xs font-semibold text-slate-300">Loan Finance</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Fast, transparent consumer financing solutions designed around your needs.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="material-symbols-outlined text-xl">facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link to="/auto-loans" className="hover:text-white transition">
                  Auto Loans
                </Link>
              </li>
              <li>
                <Link to="/home-improvement" className="hover:text-white transition">
                  Home Improvement
                </Link>
              </li>
              <li>
                <Link to="/emergency-loans" className="hover:text-white transition">
                  Emergency Loans
                </Link>
              </li>
              <li>
                <Link to="/debt-consolidation" className="hover:text-white transition">
                  Debt Consolidation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  State Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Responsible Lending
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {currentYear} Zorian Loan Finance. All rights reserved. NMLS #2137429 | California DBO Licensed
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            8326 Jamieson Ave, Northridge, CA 91325
          </p>
        </div>
      </div>
    </footer>
  )
}
