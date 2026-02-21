'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { ChevronDown, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQSchema } from '@/lib/seo/structured-data';

const faqCategories = [
  {
    category: 'Booking & Reservations',
    questions: [
      {
        question: 'How do I book a zipline experience?',
        answer: 'You can book directly through our website by selecting your preferred package, date, and time. Simply click the "Book Now" button, fill in your details, and complete the payment. You will receive a confirmation email immediately after booking.',
      },
      {
        question: 'Can I modify or cancel my booking?',
        answer: 'Bookings can be modified or cancelled up to 24 hours before your scheduled activity. Please contact our customer service team for assistance. Cancellations made within 24 hours of the activity are non-refundable.',
      },
      {
        question: 'Do I need to print my booking confirmation?',
        answer: 'No, you can show your booking confirmation on your mobile device. Just present your booking reference number or the QR code from your confirmation email.',
      },
      {
        question: 'Is hotel pickup included?',
        answer: 'Yes! Most packages include complimentary hotel pickup and drop-off within the main Phuket tourist areas (Patong, Kata, Karon, Phuket Town). Private transfer options are also available for other locations.',
      },
    ],
  },
  {
    category: 'Safety & Requirements',
    questions: [
      {
        question: 'What are the weight and age requirements?',
        answer: 'Participants must weigh between 15kg and 130kg. Children aged 4 and above can participate with adult supervision. Some activities like the Slingshot have a minimum age of 12 years.',
      },
      {
        question: 'Is it safe for people with a fear of heights?',
        answer: 'Many guests with mild fear of heights complete our courses successfully. Our professional guides provide encouragement and support throughout. However, if you have severe acrophobia, please consult with our team before booking.',
      },
      {
        question: 'What safety equipment is provided?',
        answer: 'We provide all necessary safety equipment including harnesses, helmets, and gloves. All equipment meets international safety standards and is inspected daily by our trained technicians.',
      },
      {
        question: 'Can pregnant women participate?',
        answer: 'Unfortunately, pregnant women cannot participate in zipline activities for safety reasons. However, they can join the Skywalk experience with caution.',
      },
    ],
  },
  {
    category: 'The Experience',
    questions: [
      {
        question: 'How long does the activity take?',
        answer: 'Duration depends on your chosen package. The full course takes approximately 2.5-3 hours. Shorter packages range from 1-2 hours. Please arrive 30 minutes before your scheduled time.',
      },
      {
        question: 'What should I wear?',
        answer: 'Wear comfortable, lightweight clothing that allows freedom of movement. Closed-toe shoes are required (sneakers or sports shoes recommended). Avoid loose jewelry, scarves, or anything that could get caught.',
      },
      {
        question: 'Can I bring my camera or phone?',
        answer: 'Yes, you can bring cameras or phones, but they must be secured with a strap. We also offer professional photo and video packages captured by our staff at key points along the course.',
      },
      {
        question: 'Is there food available at the park?',
        answer: 'Yes! We have a restaurant serving Thai and international cuisine. Some packages include a complimentary meal. There are also refreshment stations along the course.',
      },
    ],
  },
  {
    category: 'Packages & Pricing',
    questions: [
      {
        question: 'What is included in each package?',
        answer: 'Each package includes safety equipment, professional guides, insurance, and transfer (where specified). Packages vary in the number of platforms, activities, and whether meals are included. Check each package description for details.',
      },
      {
        question: 'Are there discounts for groups?',
        answer: 'Yes, we offer special rates for groups of 10 or more. Please contact us directly for group pricing and availability.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express) through our secure Stripe payment gateway. Payment is in Thai Baht.',
      },
      {
        question: 'Do you offer refunds for bad weather?',
        answer: 'Yes, if we cancel due to severe weather conditions, you will receive a full refund or can reschedule to another date. Light rain does not typically affect operations.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#f2e421] transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-white/60">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (cat) =>
        cat.questions.length > 0 &&
        (activeCategory === 'all' || cat.category === activeCategory)
    );

  const allFAQs = useMemo(() => 
    faqCategories.flatMap(cat => cat.questions),
    []
  );

  return (
    <main className="min-h-screen">
      <FAQSchema faqs={allFAQs} />
      
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
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-trade-winds)] text-white mb-6">
              Frequently Asked <span className="text-[#f2e421]">Questions</span>
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Find answers to common questions about your Flying Hanuman adventure
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 bg-[#0f0f0f] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#f2e421]"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <Section className="bg-[#0f0f0f] py-12">
        <Container>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#f2e421] text-black'
                  : 'bg-[#1a1a1a] text-white/60 hover:text-white border border-white/10'
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? 'bg-[#f2e421] text-black'
                    : 'bg-[#1a1a1a] text-white/60 hover:text-white border border-white/10'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-6">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10"
              >
                <h2 className="text-lg font-[family-name:var(--font-trade-winds)] text-[#f2e421] mb-4">
                  {category.category}
                </h2>
                <div>
                  {category.questions.map((item) => (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section className="bg-[#1a1a1a] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-[#f2e421]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#f2e421]" />
            </div>
            <h2 className="text-2xl font-[family-name:var(--font-trade-winds)] text-white mb-4">
              Still have <span className="text-[#f2e421]">questions</span>?
            </h2>
            <p className="text-white/60 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f2e421] hover:bg-[#d4c91e] text-black font-medium rounded-full transition-all shadow-lg hover:shadow-[#f2e421]/30"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
