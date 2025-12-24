import { notFound } from 'next/navigation';
// ✅ OPTİMİZASYON 1: React Cache mekanizmasını ekliyoruz
import { cache } from 'react';
import productsData from '../../data/products.json';
import { Product } from '../../../types/Type';
import ProductDetails from '@/components/ProductDetails';

type Props = {
    params: Promise<{ id: string }>
};

// ✅ OPTİMİZASYON 2: Veri çekme işlemini "cache" içine alıyoruz.
// Bu sayede generateMetadata ve ProductPage aynı anda çağırsa bile
// fonksiyon sadece 1 kere çalışır. İşlemci yorulmaz.
const getProduct = cache((id: string): Product | undefined => {
    const allProducts: Product[] = productsData.categories.flatMap(category => category.products);

    return allProducts.find(p => {
        return String(p.id).trim() === String(id).trim();
    });
});

// ✅ OPTİMİZASYON 3: Statik Sayfa Oluşturma (SSG - Static Site Generation)
// Bu fonksiyon Next.js'e "Benim şu ID'lere sahip ürünlerim var, bunları önceden hazırla" der.
// Böylece kullanıcı F5 attığında sunucu hesaplama yapmaz, hazır HTML'i milisaniyeler içinde fırlatır.
export async function generateStaticParams() {
    const allProducts: Product[] = productsData.categories.flatMap(category => category.products);

    return allProducts.map((product) => ({
        id: String(product.id),
    }));
}

// SEO METADATA
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

// ANA SAYFA BİLEŞENİ
export default async function ProductPage({ params }: Props) {
    const { id } = await params;

    // Ürünü bul (Cache sayesinde tekrar hesaplama yapmaz)
    const product = getProduct(id);

    // Ürün yoksa 404 sayfasına at
    if (!product) {
        notFound();
    }

    // Ürünü bulduysan Detay Bileşenine gönder
    return <ProductDetails product={product} />;
}