'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bus, Clock, ArrowRight, Check, Car } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { getPackagesByCategory } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const statLabels: Record<string, string> = {
  trackLength: 'm Track',
  rides: 'Rides',
  speed: 'km/h Max',
  duration: 'Duration',
};

export default function LugePackagesPage() {
  const packages = getPackagesByCategory('luge');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/packages/luge.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-6">
              Fun for Everyone
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
              <span className="text-[#f2e421]">Luge</span>
            </h1>
            <p className="text-lg text-white/70">
              Race down the mountain on our gravity-powered luge carts. 
              A fun and exciting experience for the whole family.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Packages Section */}
      <Section className="bg-[#0f0f0f] py-20">
        <Container>
          <div className="space-y-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#f2e421]/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="relative h-72 lg:h-auto lg:w-[40%] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${pkg.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/50 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent lg:hidden" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-[#f2e421] text-black text-sm font-medium rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pkg.duration}
                        </span>
                        <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                          <Car className="w-3 h-3" />
                          Family Fun
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative p-8 lg:p-10 lg:w-[60%]">
                      <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-trade-winds)] text-white mb-4 group-hover:text-[#f2e421] transition-colors">
                        {pkg.name}
                      </h2>
                      
                      {/* Stats Grid */}
                      {pkg.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                          {Object.entries(pkg.stats).slice(0, 3).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-2xl font-bold text-[#f2e421]">{value}</div>
                              <div className="text-xs text-white/60 uppercase tracking-wider">{statLabels[key] || key}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Includes */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                          <Bus className="w-4 h-4" />
                          Free Round-Trip Transfer
                        </span>
                      </div>
                      
                      {/* Features */}
                      {pkg.highlights && pkg.highlights.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                          {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                              <Check className="w-4 h-4 text-[#f2e421] flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Price & CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                        <div>
                          <span className="text-white/60 text-sm">Starting from</span>
                          <div className="text-3xl font-bold text-[#f2e421]">
                            {formatPrice(pkg.price)}
                            <span className="text-lg text-white/60 font-normal"> / person</span>
                          </div>
                        </div>
                        <Link href={`/booking?package=${pkg.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-medium rounded-full transition-all shadow-lg hover:shadow-[#f2e421]/30"
                          >
                            Book Now
                            <ArrowRight className="w-5 h-5" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
