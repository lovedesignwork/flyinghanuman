import { Metadata } from 'next';
import { 
  HeroSlideshow, 
  FeaturedPackages, 
  WhyChooseUs, 
  PhotoGallery,
  Testimonials,
  SafetyCertifications,
  CTABanner,
  Location,
} from '@/components/home';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...generatePageMetadata(
    `${siteConfig.name} - #1 Zipline Adventure in Phuket`,
    'Experience the ultimate zipline adventure at Flying Hanuman Phuket. Soar through the ancient rainforest canopy with thrilling ziplines, combo packages with ATV, elephants, and fine dining. Book your adventure today!',
    '/',
  ),
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <HeroSlideshow />
      <FeaturedPackages />
      <WhyChooseUs />
      <PhotoGallery />
      <Testimonials />
      <SafetyCertifications />
      <CTABanner />
      <Location />
    </main>
  );
}
