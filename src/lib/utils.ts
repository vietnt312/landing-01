export const base = import.meta.env.BASE_URL;

export function imgSrc(src: string): string {
    if (!src) return "";
    if (src.startsWith("http")) return src;

    // Add /images prefix if it's a relative path and doesn't already have it
    let normalizedSrc = src.replace(/^\//, "");
    if (!normalizedSrc.startsWith("images/")) {
        normalizedSrc = `images/${normalizedSrc}`;
    }

    // Ensure base doesn't have a trailing slash
    const b = base.replace(/\/$/, "");

    return `${b}/${normalizedSrc}`;
}
