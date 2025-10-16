'use client'

import { useEffect, useState } from 'react';
import { fetchProducts } from '@/lib/fetchProducts'
import { Products } from '@/types/products';

export default function CategoryPage() {
  
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);
  
  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(products => (
          <li key={products.id}> {products.title} ({products.price})</li>
        ))}
      </ul>
    </div>
  );
}

