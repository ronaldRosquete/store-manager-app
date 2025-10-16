'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchProducts } from "@/lib/fetchProducts";
import { Products } from "@/types/products";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(products => (
          <Card className="bg-white w-full rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="p-3">
            <img
              src={products.img}
              alt={products.title}
              className="w-full h-32 object-cover rounded"
            />
            <CardTitle className="text-base mt-2">
              {products.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {products.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-3 pb-2">
            <p className="text-md font-semibold text-green-600">$79.99</p>
          </CardContent>
          <CardFooter className="px-3 pb-3 flex justify-center space-x-3">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm w-32">
              Edit
            </button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-red-700 text-sm w-32">
              Delete
            </button>
          </CardFooter>
        </Card>
        ))}

      </div>
    </div>
  );
}
