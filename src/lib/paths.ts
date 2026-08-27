export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a public asset path for GitHub Pages.
 * Use only on raw src URLs (img, etc). Never wrap next/link hrefs:
 * Next.js already applies next.config basePath once.
 */
export function withBase(path: string) {
  if (path.startsWith("#") || path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (
    BASE_PATH &&
    (normalized === BASE_PATH || normalized.startsWith(`${BASE_PATH}/`))
  ) {
    return normalized;
  }
  return `${BASE_PATH}${normalized}`;
}
