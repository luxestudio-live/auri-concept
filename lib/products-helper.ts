"use client"

import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import { categories, type Category } from "./categories-data"

type ProductBucket =
  | "lighting"
  | "outdoor"
  | "wires-cables"
  | "switches"
  | "smart-switches"
  | "smart-fans"
  | "smart-locks"
  | "smart-home"
  | "accessories"
  | "other"

const PRODUCT_BUCKET_ORDER: ProductBucket[] = [
  "lighting",
  "outdoor",
  "wires-cables",
  "switches",
  "smart-switches",
  "smart-fans",
  "smart-locks",
  "smart-home",
  "accessories",
  "other",
]

function normalizeText(value?: string): string {
  return (value || "").toLowerCase().trim()
}

function includesAny(value: string, terms: string[]): boolean {
  return terms.some((term) => value.includes(term))
}

function resolveProductBucket(product: Pick<Category, "title" | "category" | "key">): ProductBucket {
  const categoryText = normalizeText(product.category)
  const titleText = normalizeText(product.title)
  const keyText = normalizeText(product.key)
  const combinedText = `${categoryText} ${titleText} ${keyText}`

  if (includesAny(combinedText, ["wire", "cable", "cabel"])) return "wires-cables"
  if (includesAny(combinedText, ["smart fans", "fan"])) return "smart-fans"
  if (includesAny(combinedText, ["smart locks", "smart lock", "lock"])) return "smart-locks"
  if (includesAny(combinedText, ["smart switches", "smart switch", "automation"])) return "smart-switches"
  if (combinedText.includes("switch")) return "switches"
  if (includesAny(combinedText, ["wall", "bollard", "garden", "gate", "outdoor", "solar"])) return "outdoor"
  if (includesAny(combinedText, ["indoor lighting", "lights", "lighting", "light", "driver", "rope", "strip"])) return "lighting"
  if (combinedText.includes("smart home")) return "smart-home"
  if (combinedText.includes("accessor")) return "accessories"

  return "other"
}

function compareCreatedAtAsc(a: Category, b: Category): number {
  const aTime = a.createdAt ? new Date(a.createdAt).getTime() : Number.MIN_SAFE_INTEGER
  const bTime = b.createdAt ? new Date(b.createdAt).getTime() : Number.MIN_SAFE_INTEGER

  if (Number.isNaN(aTime) && Number.isNaN(bTime)) return 0
  if (Number.isNaN(aTime)) return -1
  if (Number.isNaN(bTime)) return 1
  return aTime - bTime
}

function mergeProductsByCategoryOrder(dynamicProducts: Category[]): Category[] {
  const staticBuckets = new Map<ProductBucket, Category[]>()
  const dynamicBuckets = new Map<ProductBucket, Category[]>()

  PRODUCT_BUCKET_ORDER.forEach((bucket) => {
    staticBuckets.set(bucket, [])
    dynamicBuckets.set(bucket, [])
  })

  for (const product of categories) {
    const bucket = resolveProductBucket(product)
    staticBuckets.get(bucket)?.push(product)
  }

  for (const product of dynamicProducts) {
    const bucket = resolveProductBucket(product)
    dynamicBuckets.get(bucket)?.push(product)
  }

  for (const bucket of PRODUCT_BUCKET_ORDER) {
    dynamicBuckets.get(bucket)?.sort(compareCreatedAtAsc)
  }

  const mergedProducts: Category[] = []
  for (const bucket of PRODUCT_BUCKET_ORDER) {
    mergedProducts.push(...(staticBuckets.get(bucket) || []))
    mergedProducts.push(...(dynamicBuckets.get(bucket) || []))
  }

  return mergedProducts
}

export async function getAllProducts(): Promise<Category[]> {
  try {
    // Get dynamic products from Firestore
    const productsRef = collection(db, "products")
    const q = query(productsRef, orderBy("createdAt", "asc"))
    const querySnapshot = await getDocs(q)
    
    const dynamicProducts: Category[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      dynamicProducts.push({
        key: data.key || doc.id,
        title: data.title,
        desc: data.desc,
        images: data.images,
        altTexts: data.altTexts,
        category: data.category,
        createdAt: data.createdAt,
      })
    })

    // Keep fixed category sequence and insert dynamic products inside their category block.
    return mergeProductsByCategoryOrder(dynamicProducts)
  } catch (error) {
    console.error("Error fetching products:", error)
    // Preserve deterministic category order even when Firestore fetch fails.
    return mergeProductsByCategoryOrder([])
  }
}
