export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  catLabel: string;
  image: string;
  imageAlt: string;
  isAvailable: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  group?: string;
  sortOrder: number;
  isFeatured: boolean;
}

export interface Slide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  sortOrder: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  hotline: string;
  email: string;
  address: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  zalo?: string;
  messenger?: string;
  bookingUrl?: string;
  mapEmbedUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  copyright?: string;
}
