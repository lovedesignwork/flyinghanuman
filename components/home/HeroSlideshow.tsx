'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Shield, ChevronDown } from 'lucide-react';

const heroImages = [
  '/images/Hero%20Image/Zipline.jpg',
  '/images/Hero%20Image/Roller.jpg',
  '/images/Hero%20Image/Skywalk.jpg',
  '/images/Hero%20Image/Slingshot2.jpg',
];

export function HeroSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImage]}
            alt="Flying Hanuman Adventure"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f2e421' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-trade-winds)] text-white mb-6 leading-tight"
        >
          Soar Through
          <br />
          <span className="text-[#f2e421]">The Jungle</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
        >
          Experience Phuket&apos;s most thrilling zipline adventure through 
          ancient rainforest canopy
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/booking">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(242, 228, 33, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-[#f2e421] text-black font-[family-name:var(--font-trade-winds)] text-xl rounded-full transition-all flex items-center justify-center gap-3"
            >
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="#packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-medium text-xl rounded-full hover:bg-white hover:text-black transition-all"
            >
              Explore Packages
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
            <MapPin className="w-5 h-5 text-[#f2e421]" />
            <span>Kathu, Phuket</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
            <Clock className="w-5 h-5 text-[#f2e421]" />
            <span>Open Daily 8AM - 6PM</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
            <Shield className="w-5 h-5 text-[#f2e421]" />
            <span>100% Safety Record</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[#f2e421] transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-10 h-10" />
        </motion.div>
      </motion.button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-[#f2e421] w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
