/**
 * Prepends the base path to asset URLs for GitHub Pages deployment
 * In production (GitHub Pages): /auri-concept/image.jpg
 * In development: /image.jpg
 */
export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/auri-concept' : ''
  return `${basePath}${path}`
}
