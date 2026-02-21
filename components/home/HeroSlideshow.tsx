'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/Hero%20Image/Zipline.jpg',
    mobileImage: '/images/Hero%20Image/Zipline.jpg',
    badge: 'Most Popular',
    title: 'Fly Through',
    highlight: 'Paradise',
    description: 'Soar through the ancient rainforest canopy on Thailand\'s most thrilling zipline adventure.',
    stats: { platforms: '30+', ziplines: '16', height: '40m' },
  },
  {
    id: 2,
    image: '/images/Hero%20Image/Roller.jpg',
    mobileImage: '/images/Hero%20Image/Roller.jpg',
    badge: 'First in Thailand',
    title: 'Experience the',
    highlight: 'Roller Zipline',
    description: 'A unique fusion of roller coaster and zipline - feel the rush as you twist and turn through the trees.',
    stats: { speed: '60km/h', drops: '5', thrill: '100%' },
  },
  {
    id: 3,
    image: '/images/Hero%20Image/Skywalk.jpg',
    mobileImage: '/images/Hero%20Image/Skywalk.jpg',
    badge: 'Breathtaking Views',
    title: 'Walk Among',
    highlight: 'The Clouds',
    description: 'Elevated walkways offering stunning panoramic views of Phuket\'s pristine jungle landscape.',
    stats: { length: '300m', height: '30m', views: '360°' },
  },
  {
    id: 4,
    image: '/images/Hero%20Image/Slingshot2.jpg',
    mobileImage: '/images/Hero%20Image/Slingshot2.jpg',
    badge: 'Extreme Thrill',
    title: 'Launch Into',
    highlight: 'Adventure',
    description: 'Get catapulted into the jungle canopy - the ultimate adrenaline rush for thrill-seekers.',
    stats: { gforce: '3G', launch: '0-60', screams: '∞' },
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#1a1a1a]">
      {/* Background Image with Parallax Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#f2e421]/10 rounded-full blur-3xl pointer-events-none hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#f2e421]/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2e421] text-black rounded-full text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 fill-current" />
                {slide.badge}
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-trade-winds)] text-white mb-4 leading-tight">
                {slide.title}
                <br />
                <span className="text-[#f2e421]">{slide.highlight}</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-[family-name:var(--font-trade-winds)] text-lg rounded-full transition-all shadow-lg hover:shadow-[#f2e421]/30"
                  >
                    Book Your Adventure
                  </motion.button>
                </Link>
                <Link href="/packages/combined">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-lg rounded-full border border-white/20 backdrop-blur-sm transition-all"
                  >
                    <Play className="w-5 h-5" />
                    View Packages
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="hidden md:flex items-center gap-8"
              >
                {Object.entries(slide.stats).map(([key, value], index) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-[#f2e421]">{value}</div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{key}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Rating Card (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#f2e421] fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-4">
                  &quot;An absolutely incredible experience! The ziplines are world-class and the staff made us feel completely safe.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#f2e421] rounded-full flex items-center justify-center text-black font-bold">
                    JD
                  </div>
                  <div>
                    <div className="text-white font-medium">John D.</div>
                    <div className="text-white/60 text-sm">TripAdvisor Review</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-[#f2e421] hover:text-black rounded-full backdrop-blur-sm transition-all text-white group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-[#f2e421] hover:text-black rounded-full backdrop-blur-sm transition-all text-white group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-[#f2e421] w-8' 
                : 'bg-white/30 hover:bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="text-white/60 text-sm font-mono">
          <span className="text-[#f2e421] text-lg font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-1">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
