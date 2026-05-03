export function getOptimizedImageUrl(url: string, width = 900) {
  if (!url) return url
  if (!url.includes("res.cloudinary.com")) return url
  if (!url.includes("/upload/")) return url
  if (
    url.includes("/upload/f_auto") ||
    url.includes("/upload/q_auto") ||
    url.includes("/upload/w_") ||
    url.includes("/upload/c_limit")
  ) {
    return url
  }

  // Keep payload low for catalog cards while preserving quality across DPRs.
  return url.replace("/upload/", `/upload/f_auto,q_auto:eco,c_limit,w_${width},dpr_auto/`)
}
