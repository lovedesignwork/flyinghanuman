'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const packages = [
  { name: 'FH1 - Premium', href: '/packages/fh1' },
  { name: 'FH2 - Mid-Range', href: '/packages/fh2' },
  { name: 'FH3 + Canopy', href: '/packages/fh3-canopy' },
  { name: 'Canopy Walk', href: '/packages/canopy' },
  { name: 'SD1: FH3 + Hanuman World', href: '/packages/sd1-fh3-hanuman-world' },
  { name: 'SD2: FH3 + Three Monkeys', href: '/packages/sd2-fh3-three-monkeys' },
  { name: 'SD3: FH3 + ATV', href: '/packages/sd3-fh3-atv' },
  { name: 'SD4: FH3 + Elephant', href: '/packages/sd4-fh3-elephant' },
  { name: 'SD5: FH3 + ATV + Elephant', href: '/packages/sd5-fh3-atv-elephant' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const NON_STICKY_ROUTES = ['/booking', '/checkout'];

export function Header() {
  const pathname = usePathname();
  const isNonStickyRoute = NON_STICKY_ROUTES.some(route => pathname?.startsWith(route));
  const sticky = !isNonStickyRoute;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  useEffect(() => {
    if (!sticky) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPackagesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${sticky ? 'fixed lg:sticky' : 'relative'} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && sticky ? 'shadow-xl' : ''
      }`}
      style={{ backgroundColor: '#f2e421' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO-NS.png"
              alt="Flying Hanuman"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsPackagesOpen(true)}
                    onMouseLeave={() => setIsPackagesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 font-[family-name:var(--font-trade-winds)] text-[21px] transition-colors ${
                        pathname?.startsWith('/packages') 
                          ? 'text-black font-bold' 
                          : 'text-black/80 hover:text-black'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isPackagesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-[#f2e421] rounded-xl shadow-2xl border border-black/10 overflow-hidden"
                        >
                          {packages.map((pkg) => (
                            <Link
                              key={pkg.name}
                              href={pkg.href}
                              className={`block px-4 py-3 text-sm font-[family-name:var(--font-trade-winds)] transition-colors ${
                                pathname === pkg.href
                                  ? 'bg-black text-[#f2e421]'
                                  : 'text-black hover:bg-black/10'
                              }`}
                            >
                              {pkg.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 font-[family-name:var(--font-trade-winds)] text-[21px] transition-colors ${
                      pathname === item.href 
                        ? 'text-black font-bold' 
                        : 'text-black/80 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Book Now Button - Black with Yellow Text */}
            <Link href="/booking" className="ml-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full font-[family-name:var(--font-trade-winds)] text-[21px] text-[#f2e421] font-medium bg-black hover:bg-[#1a1a1a] transition-all shadow-lg"
              >
                Book Now
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-black p-2 hover:bg-black/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a1a] border-t border-white/10"
          >
            <nav className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                        className="w-full flex items-center justify-between py-3 font-[family-name:var(--font-trade-winds)] text-lg text-white"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isPackagesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 p-3 rounded-xl bg-[#f2e421] space-y-1 overflow-hidden"
                          >
                            {packages.map((pkg) => (
                              <Link
                                key={pkg.name}
                                href={pkg.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 px-3 rounded-lg text-base font-[family-name:var(--font-trade-winds)] transition-colors ${
                                  pathname === pkg.href
                                    ? 'bg-black text-[#f2e421]'
                                    : 'text-black hover:bg-black/10'
                                }`}
                              >
                                {pkg.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 font-[family-name:var(--font-trade-winds)] text-lg transition-colors ${
                        pathname === item.href 
                          ? 'text-[#f2e421]' 
                          : 'text-white hover:text-[#f2e421]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Book Now - Black with Yellow Text */}
              <Link
                href="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 px-6 py-3 rounded-full font-[family-name:var(--font-trade-winds)] text-lg text-[#f2e421] text-center font-medium bg-black"
              >
                Book Now
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                <a href="tel:+6676323264" className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4" />
                  +66 76 323 264
                </a>
                <a href="mailto:info@flyinghanuman.com" className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4" />
                  info@flyinghanuman.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
