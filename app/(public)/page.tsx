import { Metadata } from 'next';
import { 
  HeroSlideshow, 
  FeaturedPackages, 
  WhyChooseUs, 
  PhotoGallery,
  Testimonials,
  SafetyCertifications,
  Location,
} from '@/components/home';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';

export const metadata: Metadata = {
  ...generatePageMetadata(
    `${siteConfig.name} - #1 Zipline Adventure in Phuket`,
    'Experience the ultimate zipline adventure at Flying Hanuman Phuket. Soar through the ancient rainforest canopy with thrilling ziplines, roller coasters, skywalks, and more. Book your adventure today!',
    '/',
  ),
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSlideshow />
      <FeaturedPackages />
      <WhyChooseUs />
      <PhotoGallery />
      <Testimonials />
      <SafetyCertifications />
      <Location />
    </main>
  );
}
