import { assetPath } from "@/lib/asset-path"

export type Category = {
  key: string
  title: string
  desc: string
  images: string[]
  altTexts: string[]
  category?: string
  createdAt?: string
}

export const categories: Category[] = [
  {
    key: "Pernia Lights",
    title: "Pernia Lights",
    desc: "Pernia Lights infuse your spaces with refined brilliance, offering architectural lighting that elevates every environment to a new level of luxury.",
    images: [assetPath("/Pernia1.jpeg"), assetPath("/Pernia2.jpeg")],
    altTexts: ["Pernia Lights product image 1", "Pernia Lights product image 2"],
  },
  {
    key: "Viona Lights",
    title: "Viona Lights",
    desc: "Viona Lights blend silent performance with exquisite finishes, creating a serene and sophisticated ambiance for the modern home.",
    images: [assetPath("/Viona1.jpeg"), assetPath("/Viona2.jpeg"), assetPath("/Viona3.jpeg")],
    altTexts: ["Viona Lights product image 1", "Viona Lights product image 2", "Viona Lights product image 3"],
  },
  {
    key: "Vatica Lights",
    title: "Vatica Lights",
    desc: "Vatica Lights deliver seamless control and contemporary design, with intuitive dimming and smart automation for every mood and occasion.",
    images: [assetPath("/Vatica1.jpeg"), assetPath("/Vatica2.jpeg"), assetPath("/Vatica3.jpeg")],
    altTexts: ["Vatica Lights product image 1", "Vatica Lights product image 2", "Vatica Lights product image 3"],
  },
  {
    key: "Tiara Lights",
    title: "Tiara Lights",
    desc: "Tiara Lights transform interiors with radiant beauty and architectural flair, perfect for those who seek to inspire and impress.",
    images: [assetPath("/Tiara1.jpeg"), assetPath("/Tiara2.jpeg"), assetPath("/Tiara3.jpeg")],
    altTexts: ["Tiara Lights product image 1", "Tiara Lights product image 2", "Tiara Lights product image 3"],
  },
  {
    key: "Yesha Lights",
    title: "Yesha Lights",
    desc: "Yesha Lights are crafted for discerning tastes, offering whisper-quiet operation and a luxurious aesthetic for refined living.",
    images: [assetPath("/Yesha1.jpeg"), assetPath("/Yesha2.jpeg"), assetPath("/Yesha3.jpeg"), assetPath("/Yesha4.jpeg")],
    altTexts: ["Yesha Lights product image 1", "Yesha Lights product image 2", "Yesha Lights product image 3", "Yesha Lights product image 4"],
  },
  {
    key: "Elara Lights",
    title: "Elara Lights",
    desc: "Elara Lights embody elegance and tranquility, designed for those who appreciate both comfort and sophisticated style.",
    images: [assetPath("/Elara1.jpeg"), assetPath("/Elara2.jpeg"), assetPath("/Elara3.jpeg"), assetPath("/Elara4.jpeg")],
    altTexts: ["Elara Lights product image 1", "Elara Lights product image 2", "Elara Lights product image 3", "Elara Lights product image 4"],
  },
  {
    key: "Persia Lights",
    title: "Persia Lights",
    desc: "Persia Lights offer a harmonious blend of luxury and performance, illuminating spaces with timeless grace and modern refinement.",
    images: [assetPath("/Persia1.jpeg"), assetPath("/Persia2.jpeg"), assetPath("/Persia3.jpeg"), assetPath("/Persia4.jpeg")],
    altTexts: ["Persia Lights product image 1", "Persia Lights product image 2", "Persia Lights product image 3", "Persia Lights product image 4"],
  },
  {
    key: "Freya Lights",
    title: "Freya Lights",
    desc: "Freya Lights bring smart living to life, with intuitive automation and scene control for a seamlessly connected home.",
    images: [assetPath("/Freya1.jpeg"), assetPath("/Freya2.jpeg")],
    altTexts: ["Freya Lights product image 1", "Freya Lights product image 2"],
  },
  {
    key: "Breeza Lights",
    title: "Breeza Lights",
    desc: "Breeza Lights redefine simplicity and intelligence, offering effortless automation and elegant scene control for every lifestyle.",
    images: [assetPath("/Breeza1.jpeg"), assetPath("/Breeza2.jpeg")],
    altTexts: ["Breeza Lights product image 1", "Breeza Lights product image 2"],
  },
  {
    key: "Strip Lights",
    title: "Strip Lights",
    desc: "Strip Lights add a touch of modern sophistication, delivering flexible illumination and a premium finish to any setting.",
    images: [assetPath("/StripLight1.jpeg"), assetPath("/StripLight2.jpeg"), assetPath("/StripLight3.jpeg"), assetPath("/StripLight4.jpeg")],
    altTexts: ["Strip Lights product image 1", "Strip Lights product image 2", "Strip Lights product image 3", "Strip Lights product image 4"],
  },
  {
    key: "Driver/SMPS",
    title: "Driver/SMPS",
    desc: "Driver/SMPS solutions ensure reliable, efficient power delivery for your lighting systems, engineered for lasting performance and safety.",
    images: [assetPath("/Gamma1.jpeg"), assetPath("/Gamma2.jpeg"), assetPath("/Gamma3.jpeg")],
    altTexts: ["Gamma Lights product image 1", "Gamma Lights product image 2", "Gamma Lights product image 3"],
  },
  {
    key: "Rope Lights",
    title: "Rope Lights",
    desc: "Rope Lights offer versatile, ambient illumination, perfect for accentuating architectural features with a premium glow.",
    images: [assetPath("/RopeLight1.jpeg"), assetPath("/RopeLight2.jpeg"), assetPath("/RopeLight3.jpeg"), assetPath("/RopeLight4.jpeg")],
    altTexts: ["Rope Lights product image 1", "Rope Lights product image 2", "Rope Lights product image 3"],
  },
  {
    key: "Wall Lights - Corea",
    title: "Wall Lights",
    desc: "Wall Lights combine premium design with efficient illumination, enhancing interiors with subtle elegance and modern appeal.",
    images: [assetPath("/Corea1.jpeg"), assetPath("/Corea2.jpeg")],
    altTexts: ["Corea Lights product image 1", "Corea Lights product image 2"],
  },
  {
    key: "Wall Lights - Haina",
    title: "Wall Lights",
    desc: "Wall Lights combine premium design with efficient illumination, enhancing interiors with subtle elegance and modern appeal.",
    images: [assetPath("/Haina1.jpeg"), assetPath("/Haina2.jpeg")],
    altTexts: ["Haina Lights product image 1", "Haina Lights product image 2"],
  },
  {
    key: "Wall Lights - Kaama",
    title: "Wall Lights",
    desc: "Wall Lights combine premium design with efficient illumination, enhancing interiors with subtle elegance and modern appeal.",
    images: [assetPath("/Kaama1.jpeg"), assetPath("/Kaama2.jpeg")],
    altTexts: ["kaama Lights product image 1", "kaama Lights product image 2"],
  },
  {
    key: "Wall Solar Lights - Kiaora",
    title: "Wall Solar Lights",
    desc: "Wall Solar Lights offer sustainable, stylish lighting solutions, harnessing solar power for eco-friendly elegance.",
    images: [assetPath("/Kiaora1.jpeg"), assetPath("/Kiaora2.jpeg"), assetPath("/Limca1.jpeg")],
    altTexts: ["Kiora Lights product image 1", "Kiora Lights product image 2"],
  },
  {
    key: "Bollard Lights - Kymaa",
    title: "Bollard Lights",
    desc: "Bollard Lights provide robust, contemporary outdoor illumination, perfect for pathways and landscapes that demand distinction.",
    images: [assetPath("/Kymaa1.jpeg"), assetPath("/Kymaa2.jpeg")],
    altTexts: ["Kymaa Lights product image 1", "Kymaa Lights product image 2"],
  },
  {
    key: "Bollard Solar Lights - Kea",
    title: "Bollard Solar Lights",
    desc: "Bollard Solar Lights combine modern design with sustainable technology, lighting outdoor spaces with effortless sophistication.",
    images: [assetPath("/Kea1.jpeg"), assetPath("/Kea2.jpeg")],
    altTexts: ["Kea Lights product image 1", "Kea Lights product image 2"],
  },
  {
    key: "Bollard Lights - Mamba",
    title: "Bollard Lights",
    desc: "Bollard Lights provide robust, contemporary outdoor illumination, perfect for pathways and landscapes that demand distinction.",
    images: [assetPath("/Mamba1.jpeg"), assetPath("/Mamba2.jpeg")],
    altTexts: ["Mamba Lights product image 1", "Mamba Lights product image 2"],
  },
  {
    key: "Bollard Lights - Jariva",
    title: "Bollard Lights",
    desc: "Bollard Lights provide robust, contemporary outdoor illumination, perfect for pathways and landscapes that demand distinction.",
    images: [assetPath("/Jariva1.jpeg"), assetPath("/Jariva2.jpeg")],
    altTexts: ["jariva Lights product image 1", "jariva Lights product image 2"],
  },
  {
    key: "Gate Lights",
    title: "Gate Lights",
    desc: "Gate Lights welcome you home with a statement of prestige, combining security and style for a grand entrance.",
    images: [assetPath("/Tresa1.jpeg"), assetPath("/Tresa2.jpeg")],
    altTexts: ["Tresa Lights product image 1", "Tresa Lights product image 2"],
  },
  {
    key: "Garden Lights - Fiesta",
    title: "Garden Lights",
    desc: "Garden Lights illuminate outdoor spaces with refined charm, creating enchanting landscapes for elegant evenings.",
    images: [assetPath("/Fiesta1.jpeg"), assetPath("/Fiesta2.jpeg")],
    altTexts: ["Fiesta Lights product image 1", "Fiesta Lights product image 2"],
  },
  {
    key: "Garden Lights - Shanaya",
    title: "Garden Lights",
    desc: "Garden Lights illuminate outdoor spaces with refined charm, creating enchanting landscapes for elegant evenings.",
    images: [assetPath("/Shanaya1.jpeg"), assetPath("/Shanaya2.jpeg"), assetPath("/Hydra1.jpeg")],
    altTexts: ["Shanaya Lights product image 1", "Shanaya Lights product image 2"],
  },
  {
    key: "Wires & Cabels - Set 1",
    title: "Wires & Cabels",
    desc: "Wires & Cabels by Vaaya deliver secure, innovative connectivity, engineered for reliability and a flawless finish in every installation.",
    images: [assetPath("/Wire1.jpeg"), assetPath("/Wire2.jpeg"), assetPath("/Wire3.jpeg"), assetPath("/Wire4.jpeg")],
    altTexts: ["Vaaya Wire product image 1", "Vaaya Wire product image 2", "Vaaya Wire product image 3", "Vaaya Wire product image 4"],
  },
  {
    key: "Wires & Cabels - Set 2",
    title: "Wires & Cabels",
    desc: "Wires & Cabels by Vaaya deliver secure, innovative connectivity, engineered for reliability and a flawless finish in every installation.",
    images: [assetPath("/Wire5.jpeg"), assetPath("/Wire6.jpeg"), assetPath("/Wire7.jpeg"), assetPath("/Wire8.jpeg")],
    altTexts: ["Vaaya Wire product image 1", "Vaaya Wire product image 2", "Vaaya Wire product image 3", "Vaaya Wire product image 4"],
  },
  {
    key: "Switches",
    title: "Switches",
    desc: "Switches that combine intuitive design with advanced automation, offering seamless control and a premium tactile experience.",
    images: [assetPath("/Switch1.jpg"), assetPath("/Switch2.jpg"), assetPath("/Switches1.jpeg"), assetPath("/Switches2.jpeg")],
    altTexts: ["Switches product image 1", "Switches product image 2"],
  },
  {
    key: "Smart Switches & Automation",
    title: "Smart Switches & Automation",
    desc: "Smart Switches & Automation elevate your home with intelligent, elegant solutions for effortless living and total control.",
    images: [assetPath("/SSwitch1.jpg"), assetPath("/smartliving1.jpg"), assetPath("/smartliving2.jpg"), assetPath("/SSwitch2.jpg"), assetPath("/SSwitches1.jpeg"), assetPath("/SSwitches2.jpeg"), assetPath("/SSwitches3.jpeg")],
    altTexts: ["Smart Switches product image 1", "Smart Switches product image 2"],
  },
  {
    key: "Smart Fans - Atomberg 1",
    title: "Smart Fans",
    desc: "Smart Fans deliver silent, energy-efficient airflow with premium finishes, redefining comfort and style for your interiors.",
    images: [assetPath("/Atomberg1.png"), assetPath("/Atomberg2.png")],
    altTexts: ["Smart Fans product image 1", "Smart Fans product image 2"],
  },
  {
    key: "Smart Fans - Atomberg 2",
    title: "Smart Fans",
    desc: "Smart Fans deliver silent, energy-efficient airflow with premium finishes, redefining comfort and style for your interiors.",
    images: [assetPath("/Atomberg3.png"), assetPath("/Atomberg4.png")],
    altTexts: ["Smart Fans product image 3", "Smart Fans product image 4"],
  },
  {
    key: "Altis Smart Lock",
    title: "Altis Smart Lock",
    desc: "Altis Smart Lock unites advanced security with contemporary design, protecting your home with intelligence and elegance.",
    images: [assetPath("/Atlis1.png"), assetPath("/Atlis2.png")],
    altTexts: ["Altis Smart Lock product image 1", "Altis Smart Lock product image 2"],
  },
  {
    key: "Qlick Smart Lock",
    title: "Qlick Smart Lock",
    desc: "Qlick Smart Lock offers quick, secure access with a modern aesthetic, bringing peace of mind and style to your entryways.",
    images: [assetPath("/Qlick1.png"), assetPath("/Qlick2.jpg")],
    altTexts: ["Qlick Smart Lock product image 1", "Qlick Smart Lock product image 2"],
  },
  {
    key: "Smart Lock",
    title: "Smart Lock",
    desc: "Smart Lock solutions deliver advanced protection and sleek design, ensuring your home is both secure and sophisticated.",
    images: [assetPath("/SmartLock1.jpeg"), assetPath("/SmartLock2.jpeg"), assetPath("/SmartLock3.jpeg")],
    altTexts: ["Qlick Smart Lock product image 1", "Qlick Smart Lock product image 2"],
  },
]

// Helper function to categorize products
export function getCategoryStats() {
  const lighting = categories.filter(c => 
    c.title.toLowerCase().includes('light') && 
    !c.title.toLowerCase().includes('wall') && 
    !c.title.toLowerCase().includes('bollard') &&
    !c.title.toLowerCase().includes('gate') &&
    !c.title.toLowerCase().includes('garden')
  )

  const outdoor = categories.filter(c => 
    c.title.toLowerCase().includes('wall') || 
    c.title.toLowerCase().includes('bollard') ||
    c.title.toLowerCase().includes('gate') ||
    c.title.toLowerCase().includes('garden') ||
    c.title.toLowerCase().includes('solar')
  )

  const smartHome = categories.filter(c => 
    c.title.toLowerCase().includes('smart') ||
    c.title.toLowerCase().includes('switch') ||
    c.title.toLowerCase().includes('automation') ||
    c.title.toLowerCase().includes('lock') ||
    c.title.toLowerCase().includes('fan')
  )

  const accessories = categories.filter(c => 
    c.title.toLowerCase().includes('wire') ||
    c.title.toLowerCase().includes('cable') ||
    c.title.toLowerCase().includes('driver') ||
    c.title.toLowerCase().includes('rope') ||
    c.title.toLowerCase().includes('strip')
  )

  return {
    total: categories.length,
    lighting: lighting.length,
    outdoor: outdoor.length,
    smartHome: smartHome.length,
    accessories: accessories.length,
    lightingProducts: lighting,
    outdoorProducts: outdoor,
    smartHomeProducts: smartHome,
    accessoriesProducts: accessories,
  }
}
