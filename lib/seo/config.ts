import { Metadata } from 'next';

export const siteConfig = {
  name: 'Flying Hanuman',
  description: 'Experience the ultimate zipline adventure in Phuket, Thailand. Soar through the rainforest canopy with thrilling ziplines, roller coasters, skywalks, and more. Book your adventure today!',
  url: 'https://flyinghanuman.com',
  ogImage: '/images/og-image.jpg',
  locale: 'en_US',
  creator: 'Flying Hanuman',
  keywords: [
    'flying hanuman',
    'zipline phuket',
    'phuket adventure',
    'thailand zipline',
    'rainforest zipline',
    'phuket attractions',
    'things to do in phuket',
    'roller zipline',
    'skywalk phuket',
    'eco adventure phuket',
    'family activities phuket',
    'canopy tour phuket',
    'zipline tour thailand',
    'phuket outdoor activities',
    'flying hanuman phuket',
  ],
  social: {
    facebook: 'https://www.facebook.com/flyinghanuman',
    instagram: 'https://www.instagram.com/flyinghanuman',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g293920-d3519838-Reviews-Flying_Hanuman-Phuket.html',
  },
  contact: {
    email: 'info@flyinghanuman.com',
    phone: '+66 76 323 264',
    address: '89/16 Moo 6, Soi Namtok Kathu, Kathu, Phuket 83120, Thailand',
  },
  geo: {
    latitude: 7.9285,
    longitude: 98.3185,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - #1 Zipline Adventure in Phuket`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - #1 Zipline Adventure in Phuket`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - #1 Zipline Adventure in Phuket`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@flyinghanuman',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}
