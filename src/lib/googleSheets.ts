/**
 * Google Sheets data fetching utilities.
 *
 * Setup: publish your Google Sheet to the web as CSV:
 *   File → Share → Publish to web → CSV format → Copy link
 *
 * Set the following env variables (or replace the constants below):
 *   GOOGLE_SHEET_MENU_URL   — CSV export URL for the Menu sheet
 *   GOOGLE_SHEET_BLOG_URL   — CSV export URL for the Blog sheet
 *   GOOGLE_SHEET_GALLERY_URL — CSV export URL for the Gallery sheet
 *   GOOGLE_SHEET_CONFIG_URL  — CSV export URL for the Site Config sheet
 */

import type { MenuItem, BlogPost, GalleryImage, SiteConfig } from '@/types';

const SHEET_URLS = {
  menu:    import.meta.env.GOOGLE_SHEET_MENU_URL    ?? '',
  blog:    import.meta.env.GOOGLE_SHEET_BLOG_URL    ?? '',
  gallery: import.meta.env.GOOGLE_SHEET_GALLERY_URL ?? '',
  config:  import.meta.env.GOOGLE_SHEET_CONFIG_URL  ?? '',
} as const;

/** Fetch a published Google Sheet CSV and parse it into row objects. */
async function fetchSheet<T>(url: string): Promise<T[]> {
  if (!url) {
    console.warn('[googleSheets] Sheet URL is not configured. Returning empty array.');
    return [];
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sheet: ${res.status} ${res.statusText}`);

  const csv = await res.text();
  const [headerLine, ...rows] = csv.trim().split('\n');
  const headers = headerLine.split(',').map((h) => h.trim().replace(/^"|"$/g, ''));

  return rows.map((row) => {
    const values = row.split(',').map((v) => v.trim().replace(/^"|"$/g, ''));
    return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ''])) as T;
  });
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const rows = await fetchSheet<Record<string, string>>(SHEET_URLS.menu);
  return rows.map((r) => ({
    id:            r.id,
    name:          r.name,
    description:   r.description ?? '',
    price:         Number(r.price) || 0,
    originalPrice: r.originalPrice ? Number(r.originalPrice) : undefined,
    category:      r.category ?? '',
    image:         r.image ?? '',
  }));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const rows = await fetchSheet<Record<string, string>>(SHEET_URLS.blog);
  return rows.map((r) => ({
    id:          r.id,
    title:       r.title,
    slug:        r.slug,
    excerpt:     r.excerpt ?? '',
    thumbnail:   r.thumbnail ?? '',
    publishedAt: r.publishedAt ?? '',
  }));
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const rows = await fetchSheet<Record<string, string>>(SHEET_URLS.gallery);
  return rows.map((r) => ({
    id:      r.id,
    src:     r.src,
    alt:     r.alt ?? '',
    caption: r.caption ?? undefined,
  }));
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const rows = await fetchSheet<Record<string, string>>(SHEET_URLS.config);

  // Config sheet: two columns — key | value
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));

  return {
    name:     map.name     ?? 'Bê Thui Hà Nội',
    tagline:  map.tagline  ?? 'Hệ thống Nhà hàng Bê thui Hà Nội',
    hotline:  map.hotline  ?? '',
    email:    map.email    ?? '',
    address:  map.address  ?? '',
    facebook: map.facebook ?? undefined,
    tiktok:   map.tiktok   ?? undefined,
    youtube:  map.youtube  ?? undefined,
  };
}
