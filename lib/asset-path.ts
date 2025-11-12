/**
 * Prepends the base path to asset URLs for GitHub Pages deployment
 * In production (GitHub Pages): /auri-concept/image.jpg
 * In development: /image.jpg
 */
export function assetPath(path: string): string {
  // Only use NEXT_PUBLIC_BASE_PATH if explicitly set (for project pages)
  let basePath = ''
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH
  }
  // For custom domains, basePath should be empty
  let url = `${basePath}${path}`
  url = url.replace(/\/+/g, '/').replace(':/', '://')
  return url
}
