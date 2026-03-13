/**
 * Build-time data helpers — reads local CSV files from the /data directory.
 *
 * Local dev:
 *   Place your CSV files in /data (gitignored).
 *   Run `npm run fetch-data` to download them from Google Sheets.
 *
 * CI (GitHub Pages):
 *   The workflow downloads the CSVs before `astro build` runs.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { MenuItem, GalleryImage, Slide, SiteConfig } from "@/types";

function readCsv(filename: string): string {
  const filepath = join(process.cwd(), "data", filename);
  return readFileSync(filepath, "utf-8");
}

/** Cached text map — parsed once per build from data/text.csv */
let _textMap: Record<string, string> | null = null;

/**
 * Look up a UI string by its dot-notation id (e.g. `layout.header.banner`).
 * Falls back to the id itself if the key is missing, so gaps are immediately visible.
 */
export function getText(id: string): string {
  if (!_textMap) {
    _textMap = {};
    const csv = readCsv("text.csv");
    for (const line of csv.trim().split("\n").slice(1)) {
      const commaIdx = line.indexOf(",");
      if (commaIdx === -1) continue;
      const key = line.slice(0, commaIdx).trim();
      const value = line.slice(commaIdx + 1).trim();
      if (key) _textMap[key] = value;
    }
  }
  return _textMap[id] ?? id;
}

function parseCsvRows(csv: string): Record<string, string>[] {
  const [headerLine, ...rows] = csv.trim().split("\n");
  const headers = headerLine.split(",").map((h) => h.trim().replace(/^"|"$/g, ""));

  return rows
    .filter((row) => row.trim())
    .map((row) => {
      const values = row.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
      return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""]));
    });
}

export function getSlides(): Slide[] {
  const rows = parseCsvRows(readCsv("slides.csv"));
  return rows
    .map((r) => ({
      id: r.id,
      image: r.image,
      title: r.title,
      subtitle: r.subtitle ?? "",
      ctaLabel: r.ctaLabel ?? "",
      ctaHref: r.ctaHref ?? "/",
      sortOrder: Number(r.sortOrder) || 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getMenuItems(): MenuItem[] {
  const rows = parseCsvRows(readCsv("menu.csv"));
  return rows
    .filter((r) => r.isAvailable !== "FALSE")
    .map((r) => ({
      id: r.id,
      name: r.name,
      slug: r.slug ?? "",
      description: r.description ?? "",
      price: Number(r.price) || 0,
      originalPrice: r.originalPrice ? Number(r.originalPrice) : undefined,
      category: r.category ?? "",
      catLabel: r.catLabel ?? "",
      image: r.image ?? "",
      imageAlt: r.imageAlt ?? r.name,
      isAvailable: r.isAvailable !== "FALSE",
      isFeatured: r.isFeatured === "TRUE",
      sortOrder: Number(r.sortOrder) || 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getGalleryImages(): GalleryImage[] {
  const rows = parseCsvRows(readCsv("gallery.csv"));
  return rows
    .map((r) => ({
      id: r.id,
      src: r.src,
      alt: r.alt ?? "",
      caption: r.caption || undefined,
      group: r.group || undefined,
      sortOrder: Number(r.sortOrder) || 0,
      isFeatured: r.isFeatured === "TRUE",
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getSiteConfig(): SiteConfig {
  const csv = readCsv("config.csv");

  // Split each row on the first comma so values with commas are preserved
  const map: Record<string, string> = {};
  for (const line of csv.trim().split("\n").slice(1)) {
    const commaIdx = line.indexOf(",");
    if (commaIdx === -1) continue;
    const key = line.slice(0, commaIdx).trim().replace(/^"|"$/g, "");
    const value = line
      .slice(commaIdx + 1)
      .trim()
      .replace(/^"|"$/g, "");
    if (key) map[key] = value;
  }

  return {
    name: map.name ?? "Bê Thui Hà Nội",
    tagline: map.tagline ?? "Hệ thống Nhà hàng Bê thui Hà Nội",
    hotline: map.hotline ?? "",
    email: map.email ?? "",
    address: map.address ?? "",
    address2: map.address2 || undefined,
    facebook: map.facebook || undefined,
    tiktok: map.tiktok || undefined,
    youtube: map.youtube || undefined,
    zalo: map.zalo || undefined,
    messenger: map.messenger || undefined,
    bookingUrl: map.bookingUrl || undefined,
    mapEmbedUrl: map.mapEmbedUrl || undefined,
    mapEmbedUrl2: map.mapEmbedUrl2 || undefined,
    seoTitle: map.seoTitle || undefined,
    seoDescription: map.seoDescription || undefined,
    copyright: map.copyright || undefined,
  };
}
