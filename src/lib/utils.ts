export const base = import.meta.env.BASE_URL;

export function imgSrc(src: string): string {
    if (src.startsWith("http")) return src;

    // Ensure base doesn't have a trailing slash and src doesn't have a leading slash
    const b = base.replace(/\/$/, "");
    const s = src.replace(/^\//, "");

    return `${b}/${s}`;
}
