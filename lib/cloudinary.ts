import { v2 as cloudinary } from "cloudinary"

// Cloudinary uses CLOUDINARY_URL env var for config. We just ensure secure URLs.
cloudinary.config({ secure: true })

export { cloudinary }
