'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';

const footerLinks = {
  packages: [
    { name: 'FH1 - Premium', href: '/packages/fh1' },
    { name: 'FH2 - Mid-Range', href: '/packages/fh2' },
    { name: 'FH3 + Canopy', href: '/packages/fh3-canopy' },
    { name: 'Canopy Walk', href: '/packages/canopy' },
    { name: 'SD1: FH3 + Hanuman World', href: '/packages/sd1-fh3-hanuman-world' },
    { name: 'SD2: FH3 + Three Monkeys', href: '/packages/sd2-fh3-three-monkeys' },
    { name: 'SD3: FH3 + ATV', href: '/packages/sd3-fh3-atv' },
    { name: 'SD4: FH3 + Elephant', href: '/packages/sd4-fh3-elephant' },
    { name: 'SD5: FH3 + ATV + Elephant', href: '/packages/sd5-fh3-atv-elephant' },
    { name: 'VVIP Transfer', href: '/packages/transfer-vvip-denza' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Safety Information', href: '/safety' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/flyinghanuman' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/flyinghanuman' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/flyinghanuman' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f2e421]">
      
      {/* Main Footer Content */}
      <Container className="relative z-10">
        {/* CTA Section */}
        <div className="py-12 border-b border-black/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-trade-winds)] text-black mb-2">
                Ready for an Adventure?
              </h3>
              <p className="text-black/60">Book your zipline experience today and soar through the rainforest!</p>
            </div>
            <Link href="/booking">
              <button className="flex items-center gap-2 px-8 py-4 bg-black hover:bg-[#1a1a1a] text-[#f2e421] font-[family-name:var(--font-trade-winds)] text-lg rounded-full transition-all shadow-lg group">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/LOGO-NS.png"
                alt="Flying Hanuman"
                width={270}
                height={108}
                className="h-[108px] w-auto"
              />
            </Link>
            <p className="text-black/60 mb-6 text-sm leading-relaxed">
              Experience the thrill of flying through Phuket&apos;s ancient rainforest canopy. 
              Thailand&apos;s premier zipline adventure awaits you.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/10 border border-black/20 flex items-center justify-center hover:bg-black hover:border-black transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-black group-hover:text-[#f2e421]" />
                </a>
              ))}
            </div>
          </div>

          {/* Packages Column */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Our Packages
            </h4>
            <ul className="space-y-3">
              {footerLinks.packages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4 mt-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/60 hover:text-black transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-black" />
                </div>
                <span className="text-black/60 text-sm">
                  89/16 Moo 6, Soi Namtok Kathu,<br />
                  Kathu, Phuket 83120, Thailand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <a href="tel:+6676323264" className="text-black/60 hover:text-black transition-colors text-sm">
                  +66 76 323 264
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <a href="mailto:info@flyinghanuman.com" className="text-black/60 hover:text-black transition-colors text-sm">
                  info@flyinghanuman.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-black" />
                </div>
                <span className="text-black/60 text-sm">
                  Open Daily: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-black/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-black/50 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SKY TREK ADVENTURES Co., Ltd. (Flying Hanuman). All rights reserved.
            </p>
            <p className="text-black/50 text-sm text-center md:text-right">
              Online payments processed by{' '}
              <a 
                href="https://onebooking.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-medium hover:underline"
              >
                Chamnanthang Co., Ltd. (ONEBOOKING)
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
