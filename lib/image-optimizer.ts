export function getOptimizedImageUrl(url: string, width = 1200) {
  if (!url) return url
  if (!url.includes("res.cloudinary.com")) return url
  if (!url.includes("/upload/")) return url
  if (url.includes("/upload/f_auto") || url.includes("/upload/q_auto") || url.includes("/upload/w_")) {
    return url
  }
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`)
}
