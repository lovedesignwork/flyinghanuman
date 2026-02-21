'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { 
  Shield, 
  Heart, 
  Leaf,
  Award,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

const stats = [
  { number: '2012', label: 'Established' },
  { number: '500K+', label: 'Happy Visitors' },
  { number: '28', label: 'Zipline Platforms' },
  { number: '3km', label: 'Total Zipline Length' },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our equipment meets international safety standards with daily inspections and professional staff training.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We operate in harmony with nature, preserving the rainforest and supporting local conservation efforts.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our team is passionate about creating unforgettable adventure experiences for every guest.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Award-winning zipline park recognized for outstanding service and adventure tourism.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
              About <span className="text-[#f2e421]">Flying Hanuman</span>
            </h1>
            <p className="text-lg text-white/70">
              Discover the magic of Phuket&apos;s premier zipline adventure park, 
              where thrilling experiences meet the beauty of ancient rainforests.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section className="bg-[#0f0f0f] py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-white/10"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#f2e421]">{stat.number}</p>
                <p className="text-white/60 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section className="bg-[#1a1a1a] py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
                Our <span className="text-[#f2e421]">Story</span>
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Flying Hanuman was born from a dream to create an adventure experience 
                  that connects people with the magnificent rainforests of Phuket. Since 
                  opening in 2012, we have welcomed hundreds of thousands of visitors from around 
                  the world.
                </p>
                <p>
                  Our park is named after Hanuman, the monkey god from Hindu mythology, 
                  symbolizing strength, courage, and the spirit of adventure. Just like 
                  Hanuman, our guests soar through the treetops, experiencing the thrill 
                  of flight among the ancient trees.
                </p>
                <p>
                  Set in pristine rainforest near Kathu Waterfall, our zipline course features 
                  28 platforms connected by spectacular ziplines, sky bridges, and 
                  abseil points. Every element is designed to provide maximum excitement 
                  while ensuring complete safety.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/images/Hero%20Image/Zipline.jpg"
                alt="Flying Hanuman Zipline"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-[#0f0f0f] py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-trade-winds)] text-white mb-4">
              Our <span className="text-[#f2e421]">Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              At Flying Hanuman, everything we do is guided by our core values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#1a1a1a] rounded-2xl border border-white/10 hover:border-[#f2e421]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#f2e421]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#f2e421]" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="bg-[#1a1a1a] py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
                Visit <span className="text-[#f2e421]">Us</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#f2e421]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f2e421]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/60">89/16 Moo 6, Soi Namtok Kathu, Kathu, Phuket 83120, Thailand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#f2e421]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#f2e421]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Opening Hours</p>
                    <p className="text-white/60">Daily: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#f2e421]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f2e421]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/60">+66 76 323 264</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-[#0f0f0f] rounded-xl border border-white/10">
                  <div className="w-10 h-10 bg-[#f2e421]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#f2e421]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/60">info@flyinghanuman.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left p-8 bg-[#0f0f0f] rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl font-[family-name:var(--font-trade-winds)] text-white mb-4">
                Ready for an Adventure?
              </h3>
              <p className="text-white/60 text-lg mb-6">
                Book your experience today and soar through the rainforest canopy!
              </p>
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-medium rounded-full transition-all shadow-lg hover:shadow-[#f2e421]/30"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
