import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products } from '@/lib/data/products';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — PURTC Robotics`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
