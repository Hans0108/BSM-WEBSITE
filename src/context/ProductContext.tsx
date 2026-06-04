import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product, PRODUCTS as DEFAULT_PRODUCTS, CATEGORIES } from "../data/products";

interface ProductContextType {
  products: Product[];
  categories: { id: string; label: string; }[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("bsm_products");
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  });

  const addProduct = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem("bsm_products", JSON.stringify(newProducts));
  };

  const updateProduct = (updatedProduct: Product) => {
    const newProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    setProducts(newProducts);
    localStorage.setItem("bsm_products", JSON.stringify(newProducts));
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(p => p.id !== id);
    setProducts(newProducts);
    localStorage.setItem("bsm_products", JSON.stringify(newProducts));
  };

  return (
    <ProductContext.Provider value={{ products, categories: CATEGORIES, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts must be used within ProductProvider");
  return context;
}
