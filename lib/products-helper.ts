"use client"

import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import { categories, type Category } from "./categories-data"

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

    // Combine static and dynamic products
    return [...categories, ...dynamicProducts]
  } catch (error) {
    console.error("Error fetching products:", error)
    // Return only static products if Firestore fails
    return categories
  }
}
