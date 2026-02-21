'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Absolutely incredible experience! The ziplines were thrilling and the staff made us feel so safe. The views from the canopy are breathtaking. A must-do in Phuket!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    package: 'FH1 Package',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Brought my whole family including my kids. Everyone had an amazing time! The guides were patient and professional. Best adventure activity we did in Thailand.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    package: 'FH3 + Canopy',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    rating: 5,
    text: 'The combination of ziplines and the jungle scenery is perfect. Worth every penny! The staff speaks great English and made us feel welcome from start to finish.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    package: 'FH2 Package',
  },
  {
    id: 4,
    name: 'David Mueller',
    location: 'Berlin, Germany',
    rating: 5,
    text: 'Professional setup, top-notch safety equipment, and incredibly friendly staff. The jungle scenery is stunning. This was the highlight of our Thailand trip!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    package: 'FH1 Package',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-[#f2e421] rounded-full" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-[#f2e421] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#f2e421] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f2e421] font-medium tracking-widest uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-[family-name:var(--font-trade-winds)] text-white mt-4"
          >
            What Adventurers <span className="text-[#f2e421]">Say</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Large Quote Icon */}
          <Quote className="absolute -top-8 left-0 w-24 h-24 text-[#f2e421]/10" />

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 p-3 bg-white/5 hover:bg-[#f2e421] text-white hover:text-black rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 p-3 bg-white/5 hover:bg-[#f2e421] text-white hover:text-black rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden py-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#f2e421]"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#f2e421] rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-black fill-current" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex gap-1 justify-center md:justify-start mb-4">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#f2e421] fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                      &quot;{testimonials[current].text}&quot;
                    </p>

                    {/* Author */}
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-white/50 text-sm">
                        {testimonials[current].location}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-[#f2e421]/20 text-[#f2e421] text-xs rounded-full">
                        {testimonials[current].package}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-[#f2e421] w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '4.9', label: 'Google Rating', icon: '⭐' },
            { value: '10K+', label: 'Happy Guests', icon: '😊' },
            { value: '15+', label: 'Years Experience', icon: '🏆' },
            { value: '#1', label: 'In Phuket', icon: '🥇' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-[family-name:var(--font-trade-winds)] text-[#f2e421]">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
