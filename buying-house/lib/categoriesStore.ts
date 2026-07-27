"use client";

import { useState, useEffect } from "react";
import { productCategories, ProductCategory } from "./data";

const STORAGE_KEY = "buying_house_categories_v1";
const EVENT_NAME = "buying_house_categories_updated";

export function getStoredCategories(): ProductCategory[] {
  if (typeof window === "undefined") return productCategories;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return productCategories;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : productCategories;
  } catch (e) {
    console.error("Failed to load categories from localStorage", e);
    return productCategories;
  }
}

export function saveCategoriesToStore(categories: ProductCategory[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (e) {
    console.error("Failed to save categories to localStorage", e);
  }
}

export function resetCategoriesStore(): ProductCategory[] {
  if (typeof window === "undefined") return productCategories;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (e) {
    console.error("Failed to reset categories", e);
  }
  return productCategories;
}

export function useCategoriesStore() {
  const [categories, setCategories] = useState<ProductCategory[]>(productCategories);

  useEffect(() => {
    setCategories(getStoredCategories());

    const handleUpdate = () => {
      setCategories(getStoredCategories());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return {
    categories,
    publishedCategories: categories.filter((c) => c.status === "Published"),
    saveCategories: (newCats: ProductCategory[]) => {
      setCategories(newCats);
      saveCategoriesToStore(newCats);
    },
    resetCategories: () => {
      const defs = resetCategoriesStore();
      setCategories(defs);
    },
  };
}
