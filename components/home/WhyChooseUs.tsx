'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Leaf, Clock, Heart } from 'lucide-react';
import { Container, Section } from '@/components/ui';

const features = [
  {
    icon: Shield,
    title: '100% Safety',
    description: 'European CE-certified equipment and professionally trained guides ensure your complete safety throughout the adventure.',
  },
  {
    icon: Award,
    title: '#1 Rated Park',
    description: 'Consistently rated as one of the top attractions in Phuket with thousands of 5-star reviews on TripAdvisor.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Perfect for all ages from 4 to 80 years old. Our experienced guides make everyone feel comfortable and safe.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We operate with minimal environmental impact, preserving the ancient rainforest for future generations.',
  },
  {
    icon: Clock,
    title: 'Free Transfers',
    description: 'Complimentary round-trip hotel transfers included with all packages. Sit back and enjoy the ride!',
  },
  {
    icon: Heart,
    title: 'Unforgettable',
    description: 'Create memories that last a lifetime. Our unique jungle adventure is unlike anything else in Thailand.',
  },
];

export function WhyChooseUs() {
  return (
    <Section className="relative overflow-hidden bg-[#1a1a1a] py-20">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f2e421]/5 rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-trade-winds)] text-white mb-4"
          >
            Why <span className="text-[#f2e421]">Flying Hanuman</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Discover what makes us Phuket&apos;s premier adventure destination
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 bg-[#0f0f0f] rounded-2xl border border-white/10 hover:border-[#f2e421]/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-[#f2e421]/10 flex items-center justify-center group-hover:bg-[#f2e421]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#f2e421]" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-[family-name:var(--font-trade-winds)] text-white mb-3 group-hover:text-[#f2e421] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
