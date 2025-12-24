'use client';

import { Suspense, useState } from 'react'; // useState eklendi
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, SearchIcon, ChevronDown, ChevronUp } from 'lucide-react'; // İkonlar eklendi
import Link from 'next/link';
import Image from 'next/image';
import productsData from '../app/data/products.json';
import { Product } from '../types/Type';

function ProductListContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // ✅ YENİ: Mobil filtre menüsünün durumunu tutan state
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const currentCategory = searchParams.get('category') || 'Tümü';
    const currentSort = searchParams.get('sort') || 'newest';

    const categories = [
        { name: 'Tümü', categoryOption: 'Tümü' },
        { name: 'Kargo Pantolonlar', categoryOption: 'Kargo' },
        { name: 'Kot Pantolonlar', categoryOption: 'Kot' },
        { name: 'Hawlis Exclusive', categoryOption: 'Exclusive' },
        { name: 'Kumaş Pantolonlar', categoryOption: 'Kumaş' },
        { name: 'Jogger Pantolonlar', categoryOption: 'Jogger' },
    ];

    const allProducts: Product[] = productsData.categories.flatMap(category => category.products);

    const filteredProducts = allProducts
        .filter((product) => currentCategory === 'Tümü' || product.category === currentCategory)
        .sort((a, b) => {
            if (currentSort === 'name') return a.name.localeCompare(b.name);
            if (currentSort === 'category-asc') return a.category.localeCompare(b.category);
            if (currentSort === 'category-desc') return b.category.localeCompare(a.category);
            return 0;
        });

    const updateFilters = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
        router.push(`?${params.toString()}`, { scroll: false });

        // ✅ İSTEĞE BAĞLI: Filtre seçince mobilde menüyü otomatik kapatmak isterseniz bu satırı açın:
        // setIsMobileFiltersOpen(false);
    };

    const resetFilters = () => {
        router.push('?', { scroll: false });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Koleksiyonlar</h1>
                <p className="text-gray-600">{filteredProducts.length} ürün listeleniyor</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
                {/* --- SIDEBAR (FİLTRELER) --- */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">

                            {/* ✅ YENİ: Mobil Başlık ve Aç/Kapa Butonu */}
                            <button
                                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                                className="w-full flex items-center justify-between p-6 lg:cursor-default"
                            >
                                <h2 className="font-bold text-lg flex items-center space-x-2">
                                    <Filter className="w-5 h-5" aria-hidden="true" />
                                    <span>Filtreler</span>
                                </h2>

                                {/* Sadece mobilde görünen Ok İkonu */}
                                <div className="lg:hidden text-gray-500">
                                    {isMobileFiltersOpen ? <ChevronUp /> : <ChevronDown />}
                                </div>
                            </button>

                            {/* ✅ YENİ: Açılır/Kapanır Alan */}
                            {/* lg:block her zaman gösterir, mobilde state'e bakar */}
                            <div className={`px-6 pb-6 pt-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                                <div className="space-y-4">
                                    {/* Kategori Seçimi */}
                                    <div>
                                        <h3 className="font-semibold text-sm mb-3">Kategori</h3>
                                        <div className="space-y-2">
                                            {categories.map((category) => (
                                                <label key={category.name} className="flex items-center space-x-3 cursor-pointer hover:text-blue-600 transition-colors">
                                                    <Link href={`/allproducts?category=${category.categoryOption}`} className="flex items-center space-x-3 w-full">
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            value={category.categoryOption}
                                                            checked={currentCategory === category.categoryOption}
                                                            onChange={(e) => updateFilters('category', e.target.value)}
                                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                                                        />
                                                        <span className="text-sm">{category.name}</span>
                                                    </Link>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sıralama Seçimi */}
                                    <div className="border-t pt-4">
                                        <label htmlFor="sort-select" className="block font-semibold text-sm mb-3">Sıralama</label>
                                        <select
                                            id="sort-select"
                                            value={currentSort}
                                            onChange={(e) => updateFilters('sort', e.target.value)}
                                            aria-label="Ürünleri Sırala"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                        >
                                            <option value="newest">Önerilen</option>
                                            <option value="name">İsim: A'dan Z'ye</option>
                                            <option value="category-asc">Kategori: A'dan Z'ye</option>
                                            <option value="category-desc">Kategori: Z'den A'ya</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- ÜRÜN LİSTESİ --- */}
                <div className="lg:col-span-3">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <div key={product.id} className="group flex flex-col">
                                    <Link href={`/product/${product.id}`} className="flex flex-col">
                                        {/* Görsel Alanı */}
                                        <div className="relative bg-gray-100 rounded-t-xl overflow-hidden aspect-[4/5]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                priority={index < 4}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-10">
                                                <div className="w-full bg-white/95 backdrop-blur shadow-lg text-gray-900 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 hover:bg-black hover:text-white transition-colors">
                                                    <SearchIcon className="w-4 h-4" aria-hidden="true" />
                                                    <span>Ürünü İncele</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 bg-gray-50 border-2 border-gray-500/10 rounded-b-lg border-t-0 p-4 flex flex-col justify-between">
                                            <div className="flex flex-col items-start">
                                                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-full mb-2">
                                                    {product.category}
                                                </span>
                                                <h3 className="font-semibold text-gray-900 text-base leading-tight">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {product.colors ? product.colors.join(', ') : 'Çok Renk Seçeneği'}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center bg-gray-50 rounded-2xl border-dashed border-2 border-gray-200">
                                <p className="text-gray-500 text-lg mb-2">Filtrelerinizle uyuşan ürün bulunamadı.</p>
                                <button
                                    onClick={resetFilters}
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Filtreleri Sıfırla
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AllProducts() {
    return (
        <div className="bg-white text-black">
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-pulse text-gray-500">Ürünler Yükleniyor...</div>
                </div>
            }>
                <ProductListContent />
            </Suspense>
        </div>
    );
}
