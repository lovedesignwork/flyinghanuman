'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Bus, Utensils, ArrowRight, Star } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export default function AllPackagesPage() {
  const mainPackages = packages.filter(pkg => pkg.category !== 'transfer');

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Hero%20Image/Zipline.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-6">
              Adventure Awaits
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
              Our <span className="text-[#f2e421]">Packages</span>
            </h1>
            <p className="text-lg text-white/70">
              Choose from our range of adventure packages. From premium zipline experiences 
              to combo adventures, find the perfect thrill for you.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Packages Grid */}
      <Section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/packages/${pkg.slug}`}>
                  <div className="group h-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#f2e421]/30 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-[#f2e421] text-black text-xs font-medium rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pkg.duration}
                        </span>
                      </div>
                      {pkg.popular && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </span>
                        </div>
                      )}
                      
                      {/* Package Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-xl font-[family-name:var(--font-trade-winds)] text-white group-hover:text-[#f2e421] transition-colors">
                          {pkg.name}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-white/60 text-sm mb-4 line-clamp-2">
                        {pkg.shortDescription}
                      </p>

                      {/* Includes */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.includesTransfer && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#f2e421]/10 text-[#f2e421] text-xs rounded-full">
                            <Bus className="w-3 h-3" />
                            Free Transfer
                          </span>
                        )}
                        {pkg.includesMeal && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                            <Utensils className="w-3 h-3" />
                            Meal Included
                          </span>
                        )}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                          <span className="text-white/40 text-xs">From</span>
                          <div className="text-xl font-bold text-[#f2e421]">
                            {formatPrice(pkg.price)}
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-[#f2e421] text-sm font-medium group-hover:gap-2 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-[#f2e421]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-trade-winds)] text-black mb-4">
              Not Sure Which Package to Choose?
            </h2>
            <p className="text-black/60 mb-8">
              Contact us and our team will help you find the perfect adventure based on your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-black hover:bg-[#1a1a1a] text-[#f2e421] font-[family-name:var(--font-trade-winds)] rounded-full transition-all">
                  Contact Us
                </button>
              </Link>
              <Link href="/faq">
                <button className="px-8 py-4 bg-transparent border-2 border-black text-black hover:bg-black hover:text-[#f2e421] font-[family-name:var(--font-trade-winds)] rounded-full transition-all">
                  View FAQ
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
