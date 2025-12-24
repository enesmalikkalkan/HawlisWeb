import { notFound } from 'next/navigation';
import { cache } from 'react';
import productsData from '../../data/products.json';
// Import yollarının doğru olduğundan emin ol (senin proje yapına göre ../ sayısı değişebilir)
import { Product } from '../../../types/Type';
import ProductDetails from '@/components/ProductDetails';

type Props = {
    params: Promise<{ id: string }>
};

// 1. Ürünü Bulma Fonksiyonu (Cache'lenmiş)
const getProduct = cache((id: string): Product | undefined => {
    const allProducts: Product[] = productsData.categories.flatMap((category: any) => category.products);

    return allProducts.find(p => {
        return String(p.id).trim() === String(id).trim();
    });
});

// 2. Statik Parametreler (Build zamanı çalışır)
export async function generateStaticParams() {
    const allProducts: Product[] = productsData.categories.flatMap((category: any) => category.products);

    return allProducts.map((product) => ({
        id: String(product.id),
    }));
}

// 3. SEO Metadata Oluşturma
export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) return { title: 'Ürün Bulunamadı' };

    return {
        title: `${product.name} | Toptan Satış`,
        description: `${product.name} ürünü özellikleri ve toptan fiyatları.`,
        openGraph: {
            images: [product.image],
        },
    };
}

// 4. Ana Sayfa Bileşeni (Hatanın çözüldüğü yer)
export default async function ProductPage({ params }: Props) {
    const { id } = await params;

    // Ürünü getir
    const product = getProduct(id);

    // Ürün yoksa 404 sayfasına yönlendir
    // Bu kontrol sayesinde aşağıdaki product değişkeni asla "undefined" olamaz.
    if (!product) {
        notFound();
    }

    // ÇÖZÜM BURADA:
    // Hata veren kod muhtemelen şuydu: <ProductDetails />
    // Doğrusu aşağıdakidir (veriyi prop olarak geçiyoruz):
    return <ProductDetails product={product} />;
}