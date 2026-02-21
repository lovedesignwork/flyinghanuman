'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Users, Utensils } from 'lucide-react';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const mainPackages = packages.filter(pkg => 
  ['fh1', 'fh2', 'fh3-canopy', 'sd1-fh3-hanuman-world', 'sd2-fh3-three-monkeys', 'sd3-fh3-atv'].includes(pkg.id)
);

export function FeaturedPackages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate packages for seamless loop
  const duplicatedPackages = [...mainPackages, ...mainPackages];

  return (
    <section id="packages" className="relative py-24 bg-[#f2e421] overflow-visible" ref={containerRef}>
      {/* Top Tear Divider - Overlaps into section above */}
      <div className="absolute -top-12 left-0 right-0 h-24 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          {/* Main tear shape */}
          <path 
            d="M0,120 L0,80 Q50,95 100,75 T200,85 T300,70 T400,80 T500,65 T600,75 T700,60 T800,70 T900,55 T1000,65 T1100,50 T1200,60 L1200,120 Z" 
            fill="#f2e421"
          />
          {/* Rough edge detail */}
          <path 
            d="M0,80 Q25,85 50,78 T100,82 T150,75 T200,85 T250,78 T300,70 T350,76 T400,80 T450,72 T500,65 T550,70 T600,75 T650,68 T700,60 T750,66 T800,70 T850,62 T900,55 T950,60 T1000,65 T1050,58 T1100,50 T1150,55 T1200,60" 
            fill="none" 
            stroke="#f2e421" 
            strokeWidth="3"
          />
        </svg>
        {/* Grunge texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Bottom Tear Divider - Overlaps into section below */}
      <div className="absolute -bottom-12 left-0 right-0 h-24 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 w-full h-full"
          style={{ transform: 'rotate(180deg)' }}
        >
          {/* Main tear shape */}
          <path 
            d="M0,120 L0,80 Q50,95 100,75 T200,85 T300,70 T400,80 T500,65 T600,75 T700,60 T800,70 T900,55 T1000,65 T1100,50 T1200,60 L1200,120 Z" 
            fill="#f2e421"
          />
          {/* Rough edge detail */}
          <path 
            d="M0,80 Q25,85 50,78 T100,82 T150,75 T200,85 T250,78 T300,70 T350,76 T400,80 T450,72 T500,65 T550,70 T600,75 T650,68 T700,60 T750,66 T800,70 T850,62 T900,55 T950,60 T1000,65 T1050,58 T1100,50 T1150,55 T1200,60" 
            fill="none" 
            stroke="#f2e421" 
            strokeWidth="3"
          />
        </svg>
        {/* Grunge texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-animation {
          animation: scroll 48s linear infinite;
        }
        .scroll-animation.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header - Centered */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-black text-[#f2e421] font-medium tracking-widest uppercase text-sm rounded-full"
          >
            Adventure Awaits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-trade-winds)] text-black mt-4"
          >
            Our Packages
          </motion.h2>
        </div>
      </div>

      {/* Full Width Auto-Scrolling Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`flex gap-6 scroll-animation ${isPaused ? 'paused' : ''}`}
          style={{ width: 'fit-content' }}
        >
          {duplicatedPackages.map((pkg, index) => (
            <div
              key={`${pkg.id}-${index}`}
              className="flex-shrink-0 w-[400px]"
            >
              <div className="group h-full bg-black rounded-3xl overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-black/30 transition-all duration-500">
                {/* Image Container - 1:1 Aspect Ratio */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-[#f2e421] rounded-full">
                    <span className="text-black font-bold text-lg">{formatPrice(pkg.price)}</span>
                  </div>
                  
                  {/* Duration Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#f2e421] rounded-full text-black text-sm font-medium">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-[family-name:var(--font-trade-winds)] text-[#f2e421] mb-3">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-5 line-clamp-2">
                    {pkg.shortDescription}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.includesTransfer && (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2e421]/10 rounded-full text-[#f2e421] text-xs">
                        <Users className="w-3.5 h-3.5" />
                        Free Transfer
                      </span>
                    )}
                    {pkg.includesMeal && (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2e421]/10 rounded-full text-[#f2e421] text-xs">
                        <Utensils className="w-3.5 h-3.5" />
                        Meal Included
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link href={`/booking?package=${pkg.id}`}>
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black rounded-xl transition-all group/btn"
                    >
                      <span className="font-[family-name:var(--font-trade-winds)]">Book This Package</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 px-4"
      >
        <Link href="/booking">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#f2e421] font-[family-name:var(--font-trade-winds)] text-lg rounded-full hover:bg-[#1a1a1a] transition-colors shadow-lg"
          >
            View All Packages
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
