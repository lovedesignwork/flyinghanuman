'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Phone, Navigation } from 'lucide-react';
import { Section, Container } from '@/components/ui';

const locationInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: '89/16 Moo 6, Soi Namtok Kathu, Kathu, Phuket 83120, Thailand',
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    content: 'Daily: 8:00 AM - 6:00 PM (Last admission 4:00 PM)',
  },
  {
    icon: Car,
    title: 'Free Hotel Pickup',
    content: 'Complimentary round-trip transfer from all Phuket hotels',
  },
  {
    icon: Phone,
    title: 'Contact',
    content: '+66 76 323 264',
  },
];

const distances = [
  { from: 'Patong Beach', time: '25 mins' },
  { from: 'Phuket Town', time: '30 mins' },
  { from: 'Phuket Airport', time: '35 mins' },
  { from: 'Kata Beach', time: '35 mins' },
  { from: 'Karon Beach', time: '30 mins' },
  { from: 'Kathu Waterfall', time: '5 mins' },
];

export function Location() {
  return (
    <Section className="relative overflow-hidden bg-[#0f0f0f] py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#f2e421]/10 text-[#f2e421] rounded-full text-sm font-medium mb-4"
          >
            Visit Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-trade-winds)] text-white mb-4"
          >
            Find <span className="text-[#f2e421]">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Conveniently located near Kathu Waterfall in Phuket&apos;s jungle
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8!2d98.31!3d7.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031f8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sFlying%20Hanuman!5e0!3m2!1sen!2sth!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-[#f2e421]/30 rounded-2xl" />
          </motion.div>

          {/* Info */}
          <div className="space-y-4">
            {locationInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#1a1a1a] border border-white/10 hover:border-[#f2e421]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f2e421]/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[#f2e421]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{info.title}</h4>
                  <p className="text-white/60">{info.content}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 rounded-xl bg-[#1a1a1a] border border-white/10"
            >
              <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#f2e421]" />
                Distance from Popular Areas
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {distances.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">{item.from}</span>
                    <span className="text-[#f2e421] font-medium text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://maps.app.goo.gl/flyinghanuman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-medium rounded-xl transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
