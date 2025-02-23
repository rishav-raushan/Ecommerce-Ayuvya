import { products } from '@/lib/products';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage() {
  return <ProductClient />;
}