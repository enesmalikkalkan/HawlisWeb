'use client';

import { useState, useEffect } from 'react'; // useState ve useEffect eklendi
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category } from '../types/Type';
import data from '../app/data/products.json'; // Veri dosyanız

const categories: Category[] = data.categories;

export default function ProductGrid() {
    // Rastgele seçilen görselleri tutacak state
    // Örn: { 1: "url1.jpg", 2: "url2.jpg" }
    const [randomImages, setRandomImages] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        // Bu kod sadece tarayıcıda çalışır, böylece Hydration hatası önlenir.
        const selectedImages: { [key: number]: string } = {};

        categories.forEach(category => {
            // Eğer kategorinin altında ürün varsa
            if (category.products && category.products.length > 0) {
                // 0 ile ürün sayısı arasında rastgele bir sayı seç
                const randomIndex = Math.floor(Math.random() * category.products.length);
                // O indexteki ürünün resmini al
                selectedImages[category.id] = category.products[randomIndex].image;
            }
        });

        setRandomImages(selectedImages);
    }, []); // Boş array [] sayesinde sadece sayfa ilk açıldığında 1 kez çalışır

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent md:text-[44px] font-bold mb-4">
                        Koleksiyonlarımız
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-white">
                    {categories.map(category => {
                        // GÖRSEL SEÇİM MANTIĞI:
                        // 1. Önce randomImages state'ine bak (useEffect çalıştıysa burası doludur)
                        // 2. Yoksa (sayfa ilk yükleniyorsa) listenin İLK ürününü göster (Fallback)
                        // 3. O da yoksa placeholder göster.
                        const displayImage = randomImages[category.id] ||
                            (category.products && category.products.length > 0 ? category.products[0].image : '/placeholder.jpg');

                        // Link oluşturma (Mevcut kodunuz)
                        const categoryLinkParams = category.name.split(" ").length > 2
                            ? category.name.split(" ").slice(0, 2).join(" ")
                            : category.name.split(" ")[0];

                        return (
                            <div
                                key={category.id}
                                className={`group relative bg-linear-to-b rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${category.id === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <Link
                                    href={`/allproducts?category=${categoryLinkParams}`}
                                    onClick={() => {
                                        if (category.name) {
                                            localStorage.setItem('selectedCategory', categoryLinkParams);
                                        }
                                    }}
                                >
                                    {/* Görsel Alanı */}
                                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                                        <Image
                                            // ✅ Dinamik olarak seçilen görsel
                                            src={displayImage}
                                            alt={`${category.name} Koleksiyonu`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Hover Overlay (Mevcut kodunuz) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex items-center space-x-2 font-medium">
                                                <span>Ürünleri İncele</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-6 bg-gray-50 border-t border-gray-100">
                                    <h3 className="text-2xl text-[#0A0A0A]/90 font-bold mb-2">
                                        {category.id === 5 ? 'Hawlis Exclusive' : category.name}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}