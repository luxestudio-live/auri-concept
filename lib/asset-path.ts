/**
 * Prepends the base path to asset URLs for GitHub Pages deployment
 * In production (GitHub Pages): /auri-concept/image.jpg
 * In development: /image.jpg
 */
export function assetPath(path: string): string {
  // Use NEXT_PUBLIC_BASE_PATH if set, fallback to Next.js basePath if available, else empty string
  let basePath = ''
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH
  } else if (typeof process !== 'undefined' && process.env.NEXT_BASE_PATH) {
    basePath = process.env.NEXT_BASE_PATH
  } else if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    basePath = '/auri-concept'
  }
  // Ensure no double slashes
  let url = `${basePath}${path}`
  url = url.replace(/\/+/g, '/').replace(':/', '://')
  return url
}
