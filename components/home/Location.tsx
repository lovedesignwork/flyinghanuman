'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '89/16 Moo 6, Soi Namtok Kathu',
    subValue: 'Kathu, Phuket 83120, Thailand',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+66 76 323 264',
    href: 'tel:+6676323264',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@flyinghanuman.com',
    href: 'mailto:info@flyinghanuman.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Daily 8:00 AM - 6:00 PM',
    subValue: 'Last admission at 4:00 PM',
  },
];

const distances = [
  { from: 'Patong Beach', time: '25 min' },
  { from: 'Phuket Town', time: '20 min' },
  { from: 'Kata Beach', time: '35 min' },
  { from: 'Airport', time: '45 min' },
];

export function Location() {
  return (
    <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f2e421] font-medium tracking-widest uppercase text-sm"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-[family-name:var(--font-trade-winds)] text-white mt-4"
          >
            Visit <span className="text-[#f2e421]">Flying Hanuman</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mt-4 max-w-2xl mx-auto"
          >
            Located in the heart of Phuket&apos;s jungle, just minutes from popular tourist areas
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8!2d98.31!3d7.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031f8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sFlying%20Hanuman!5e0!3m2!1sen!2sth!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs p-4 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f2e421] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Flying Hanuman</h4>
                  <p className="text-white/60 text-sm">Kathu, Phuket</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.href ? (
                  <a 
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-[#f2e421]/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#f2e421]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f2e421]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#f2e421]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-white font-medium group-hover:text-[#f2e421] transition-colors">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-[#f2e421]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#f2e421]" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                      {item.subValue && <div className="text-white/50 text-sm">{item.subValue}</div>}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Distance Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-4 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-5 h-5 text-[#f2e421]" />
                <span className="text-white font-medium">Distance From</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {distances.map((d) => (
                  <div key={d.from} className="text-sm">
                    <span className="text-white/50">{d.from}</span>
                    <span className="text-[#f2e421] ml-2">{d.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Get Directions Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
