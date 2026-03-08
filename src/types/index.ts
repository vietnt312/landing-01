export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  publishedAt: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
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
}
