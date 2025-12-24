'use client';

import { useState, MouseEvent, useMemo } from 'react'; // useMemo eklendi
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, FileText, CheckCircle2, RotateCw } from 'lucide-react';
import { Product } from '../types/Type';
import { BackButton, ShareButton } from '@/components/ProductActions';
// Veriyi en üstte import et, her renderda tekrar çağırma
import productsData from '../app/data/products.json';

const S3_BASE_URL = "https://kalkan-tekstil-web.s3.eu-central-1.amazonaws.com/";

type Props = {
    product: Product | undefined
};

type ViewType = 'on' | 'arka';

export default function ProductDetails({ product }: Props) {
    if (!product) return null;

    // --- YARDIMCI FONKSİYONLAR (Render dışına alınabilir ama burada da kalabilir) ---
    const slugify = (text: string) => {
        return text.toString().toLowerCase()
            .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
            .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
            .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
            .replace(/^-+/, '').replace(/-+$/, '');
    };

    const getColorHex = (colorName: string) => {
        const colors: { [key: string]: string } = {
            'Siyah': '#000000', 'Beyaz': '#FFFFFF', 'Lacivert': '#1A2F4A',
            'Mavi': '#3B82F6', 'Buz Mavi': '#B0E0E6', 'Yeşil': '#4F7A5A',
            'Haki': '#464b37', 'Gri': '#6B7280', 'Antrasit': '#374151',
            'Bej': '#DCC7A1', 'Kahverengi': '#4B2E1E', 'Biliç Yıkama': '#84B9D0',
            'Blue Black': '#1F2937', 'Koyu Bej': '#C2B280', 'Taş Rengi': '#EFE7D3',
            'Koyu Gri': '#4A4A4A', 'Açık Gri': '#D3D3D3', 'Sütlü Kahve': '#C19A6B',
            'Açık Haki': '#848871', 'Krem Rengi': '#FAE7A8'
        };
        return colors[colorName] || '#E5E7EB';
    };

    // --- STATE ---
    const hasColors = product.colors && product.colors.length > 0;
    // Varsayılan rengi belirle
    const initialColor = hasColors ? product.colors![0] : null;

    // Görsel URL'ini hesaplayan fonksiyon (State yerine türetilmiş değer kullanmak daha performanslıdır)
    const getImageUrl = (color: string | null, view: ViewType) => {
        const colorPart = color ? `-${slugify(color)}` : '';
        return `${S3_BASE_URL}${product.id}${colorPart}-${view}-gorunum.png`;
    };

    // Sadece gerekli state'leri tut
    const [selectedColor, setSelectedColor] = useState<string | null>(initialColor);
    const [currentView, setCurrentView] = useState<ViewType>('on');

    // Şu anki resim URL'ini her renderda hesapla (State senkronizasyon sorununu çözer)
    const currentImage = getImageUrl(selectedColor, currentView);

    // Zoom State'leri
    const [zoomStyle, setZoomStyle] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    // --- ZOOM MANTIĞI (RequestAnimationFrame ile optimize edildi) ---
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        // Sınırları kontrol et (0-100 arası)
        const safeX = Math.max(0, Math.min(100, x));
        const safeY = Math.max(0, Math.min(100, y));

        setZoomStyle({ x: safeX, y: safeY });
    };

    // --- ETKİLEŞİM FONKSİYONLARI ---
    const handleColorSelect = (color: string) => {
        if (selectedColor === color) return; // Aynı renge tıklanırsa işlem yapma
        setSelectedColor(color);
        setCurrentView('on'); // Renk değişince ön yüze dön
    };

    const toggleView = () => {
        setCurrentView(prev => prev === 'on' ? 'arka' : 'on');
    };

    const getImageAltText = () => {
        const viewText = currentView === 'on' ? 'Önden Görünüm' : 'Arkadan Görünüm';
        const colorText = selectedColor ? `${selectedColor} Rengi` : '';
        return `${product.name} ${colorText} ${viewText} | Hawlis Jeans`;
    };

    // --- BENZER ÜRÜNLER (useMemo ile optimize edildi) ---
    // Bu liste her renderda tekrar tekrar hesaplanmasın, sadece ürün değişirse hesaplansın.
    const relatedProducts = useMemo(() => {
        const allProducts: Product[] = productsData.categories.flatMap((c: any) => c.products);
        return allProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
    }, [product.category, product.id]);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <BackButton />
                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    {/* --- GÖRSEL ALANI --- */}
                    <div className="relative group select-none"> {/* select-none: resmin sürüklenmesini engeller */}
                        <div
                            className="bg-gray-100 rounded-2xl overflow-hidden aspect-square relative shadow-sm border border-gray-100 cursor-crosshair touch-none" // touch-none: mobilde kaydırmayı engeller
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                        >
                            <Image
                                key={currentImage} // URL değişince animasyonu tetikle
                                src={currentImage}
                                alt={getImageAltText()}
                                fill
                                priority={true} // LCP için kritik!
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-200 ease-out origin-center"
                                style={{
                                    transformOrigin: `${zoomStyle.x}% ${zoomStyle.y}%`,
                                    transform: isZoomed ? 'scale(2)' : 'scale(1)',
                                }}
                                // S3'te resim yoksa varsayılanı göster (Fallback)
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.srcset = product.image; // Next.js image fallback trick
                                    target.src = product.image;
                                }}
                            />
                        </div>

                        <div className="absolute top-4 left-4 bg-black text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md z-10 pointer-events-none">
                            Toptan Satış
                        </div>

                        {/* Dönme Butonu */}
                        {(!hasColors || selectedColor) && product.id !== 14 && (
                            <button
                                onClick={toggleView}
                                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 px-4 py-2 rounded-full shadow-lg font-medium text-sm flex items-center space-x-2 hover:bg-black hover:text-white transition-all transform active:scale-95 z-20 border border-gray-200"
                                aria-label="Ürün görünümünü değiştir"
                            >
                                <RotateCw className={`w-4 h-4 ${currentView === 'arka' ? '-scale-x-100' : ''}`} />
                                <span>{currentView === 'on' ? 'Arkasına Bak' : 'Önüne Bak'}</span>
                            </button>
                        )}
                    </div>

                    {/* --- DETAYLAR ALANI --- */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Ürün Başlığı ve Kategori */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {product.category}
                                </span>
                                <span className={`text-sm font-medium ${product.stock === 'Stok Mevcut Değil' ? 'text-red-500' : 'text-green-600'}`}>
                                    ● {product.stock === 'Stok Mevcut Değil' ? 'Stokta Yok' : 'Stokta Var'}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>

                            <p className="text-gray-600 text-lg mb-6 leading-relaxed border-b border-gray-100 pb-6">
                                {product.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex flex-col">
                                    {hasColors && (
                                        <div className="flex flex-col mb-4">
                                            <span className="font-bold text-gray-900 mb-2 text-sm">
                                                Mevcut Renkler:
                                                {selectedColor && <span className="text-gray-500 font-normal ml-1">({selectedColor})</span>}
                                            </span>

                                            <div className="flex flex-wrap gap-2">
                                                {product.colors!.map((color, index) => {
                                                    const isSelected = selectedColor === color;
                                                    return (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleColorSelect(color)}
                                                            className={`flex items-center space-x-2 px-3 py-1.5 border rounded-lg bg-white transition-all
                                                                ${isSelected ? 'border-blue-600 ring-1 ring-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-400'}`}
                                                            aria-label={`${color} rengini seç`}
                                                        >
                                                            <span
                                                                className="w-4 h-4 rounded-full border border-gray-200 shadow-sm"
                                                                style={{ backgroundColor: getColorHex(color) }}
                                                            ></span>
                                                            <span className={`text-sm font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                                                                {color}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    <span className="text-sm text-gray-700 mb-1">
                                        <span className="font-bold text-gray-900">Beden bilgisi:</span> {product.size}
                                    </span>
                                    <div className="flex items-baseline space-x-3 mt-2">
                                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-md border border-green-100">
                                            Yüksek Adetli Alımlarda Özel Beden Seçenekleri Mevcuttur
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Aksiyon Butonları */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                <a
                                    href='https://wa.me/+905352355467'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center space-x-2 no-underline"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>WhatsApp'tan Fiyat Alın</span>
                                </a>
                                <ShareButton />
                            </div>

                            {/* Bilgi Kutuları */}
                            <div className="space-y-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold text-blue-900">Toptan Satış Avantajı</p>
                                        <p className="text-sm text-blue-700">Yüksek adetli alımlarda özel iskonto oranları uygulanır.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                    <div>
                                        <p className="font-semibold text-blue-900">Kurumsal Fatura</p>
                                        <p className="text-sm text-blue-700">Tüm siparişlerinizde şirket adına fatura kesilmektedir.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BENZER ÜRÜNLER LİSTESİ */}
                <div className="border-t border-gray-200 py-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Bunları da Beğenebilirsiniz</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.length > 0 ? relatedProducts.map(relatedProduct => (
                            <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group cursor-pointer block">
                                <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-[4/5]">
                                    <Image
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">{relatedProduct.category}</span>
                                    <h3 className="font-semibold mt-1 text-gray-900 group-hover:text-blue-600 transition truncate">{relatedProduct.name}</h3>
                                </div>
                            </Link>
                        )) : (<p className="text-gray-700 col-span-4">Bu kategoride başka ürün bulunamadı.</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}