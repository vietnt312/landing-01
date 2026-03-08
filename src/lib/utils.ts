const base = import.meta.env.BASE_URL;

export function imgSrc(src: string): string {
  return src.startsWith("http") ? src : `${base}/${src.replace(/^\//, "")}`;
}
