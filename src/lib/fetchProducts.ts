
import { Products } from '../types/products';

export async function fetchProducts(): Promise<Products[]> {
  const response = await fetch('https://68f046d30b966ad500326005.mockapi.io/api/v1/products');
  if (!response.ok) {
    throw new Error('Error al obtener los productos');
  }
  const data: Products[] = await response.json();
  return data;
}
