"use client";

import React, { useState, useEffect, useRef } from "react";
import SwipeLogos from "./components/SwipeLogos";
import ProductItem from "./components/ItemComponents/ProductItem";
import DiscountProductItem from "./components/ItemComponents/DiscountProductItem";

const TOTAL_PRODUCTS = 100;
const LOAD_COUNT = 20;

export default function Page() {
  const [products, setProducts] = useState(Array.from({ length: LOAD_COUNT }));
  const [loadedCount, setLoadedCount] = useState(LOAD_COUNT);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && loadedCount < TOTAL_PRODUCTS) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadedCount]);

  const loadMoreProducts = () => {
    setTimeout(() => {
      setProducts((prev) => [...prev, ...Array.from({ length: LOAD_COUNT })]);
      setLoadedCount((prev) => prev + LOAD_COUNT);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <SwipeLogos />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8">
        {
          products.map((product, index) => (
            index >= 10 ? <ProductItem key={index}></ProductItem> : <DiscountProductItem key={index}></DiscountProductItem>
          ))
        }
      </div>
      <div ref={observerRef} className="h-10"></div> {/* Boş div gözlemci */}
    </div>
  );
}
