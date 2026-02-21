'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const featuredPackageIds = ['world-a-plus', 'world-b-plus', 'world-c-plus', 'world-d-plus', 'zipline-32', 'zipline-18'];
const additionalPackageIds = ['roller-zipline', 'skywalk', 'slingshot', 'luge'];

export function FeaturedPackages() {
  const featuredPackages = packages.filter(pkg => featuredPackageIds.includes(pkg.id));
  const additionalPackages = packages.filter(pkg => additionalPackageIds.includes(pkg.id));

  return (
    <Section className="relative overflow-hidden bg-[#0f0f0f] py-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f2e421]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f2e421]/5 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-4"
          >
            Our Adventures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-trade-winds)] text-white mb-4"
          >
            Choose Your <span className="text-[#f2e421]">Adventure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            From thrilling ziplines to scenic skywalks, we have the perfect adventure for everyone
          </motion.p>
        </div>

        {/* Featured Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-[#f2e421]/50 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#f2e421] text-black text-xs font-medium rounded-full">
                      {pkg.duration}
                    </span>
                    {pkg.includesMeal && (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Meal Included
                      </span>
                    )}
                  </div>
                  
                  {/* Popular Badge for World A+ */}
                  {pkg.id === 'world-a-plus' && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-[family-name:var(--font-trade-winds)] text-white mb-2 group-hover:text-[#f2e421] transition-colors">
                    {pkg.name}
                  </h3>
                  
                  {/* Stats */}
                  {pkg.stats && (
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      {pkg.stats.platforms && (
                        <span className="text-white/60">
                          <span className="text-[#f2e421] font-bold">{pkg.stats.platforms}</span> Platforms
                        </span>
                      )}
                      {pkg.stats.ziplines && (
                        <span className="text-white/60">
                          <span className="text-[#f2e421] font-bold">{pkg.stats.ziplines}</span> Ziplines
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Features */}
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                    {pkg.includesTransfer && (
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Transfer Inc.
                      </span>
                    )}
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-white/60 text-sm">From</span>
                      <div className="text-2xl font-bold text-[#f2e421]">{formatPrice(pkg.price)}</div>
                    </div>
                    <Link href={`/booking?package=${pkg.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-medium rounded-full transition-colors"
                      >
                        Book
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-[family-name:var(--font-trade-winds)] text-white text-center mb-8"
          >
            More <span className="text-[#f2e421]">Adventures</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/booking?package=${pkg.id}`}>
                  <div className="group relative h-40 rounded-xl overflow-hidden border border-white/10 hover:border-[#f2e421]/50 transition-all">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-medium group-hover:text-[#f2e421] transition-colors">
                        {pkg.name}
                      </h4>
                      <p className="text-[#f2e421] font-bold">{formatPrice(pkg.price)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/packages/combined">
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#f2e421] text-[#f2e421] hover:bg-[#f2e421] hover:text-black font-medium rounded-full transition-all">
              View All Packages
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
