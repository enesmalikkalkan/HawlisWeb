'use client';

import Link from 'next/link';
import { PhoneForwardedIcon } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-sm font-semibold tracking-wider uppercase text-gray-600 bg-white px-4 py-2 rounded-full">
                                2026 Kış Koleksiyonu
                            </span>
                        </div>
                        <h1 className="text-5xl bg-gradient-to-r from-[#1A73E8] to-gray-900 bg-clip-text text-transparent md:text-6xl lg:text-7xl font-bold leading-tight">
                            Hawlis Jeans ile
                            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-[#1A73E8] bg-clip-text text-transparent">
                                Tarzınızı Yansıtın
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Konfor ve stil için tasarlanmış birinci sınıf erkek pantolonlarını keşfedin. Kargo pantolonlardan özel dikim model pantolonlarına kadar, size en uygun olanı bulun.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="group bg-black text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all transform hover:scale-105"
                            >
                                <span>Bize Ulaşın</span>
                                <PhoneForwardedIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/allproducts"
                                onClick={() => {
                                    localStorage.setItem("selectedCategory", "Tümü");
                                }}
                                className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-all text-center flex items-center justify-center"
                            >
                                Koleksiyonları Keşfet
                            </Link>
                        </div>
                    </div>
                    <div className="relative lg:h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl h-full flex items-center justify-center overflow-hidden">
                            {/* Not: Arka plan resimleri için Next.js Image component yerine CSS bg kullanmak bazen stil açısından daha kolaydır. Eğer LCP optimizasyonu gerekirse Image component kullanılabilir. */}
                            <div className="absolute inset-0 bg-[url('https://kalkan-tekstil-web.s3.eu-central-1.amazonaws.com/logo-bg.png')] bg-cover bg-center opacity-90"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="relative z-10 text-white text-center p-8">
                                <p className="text-6xl font-bold mb-2">En Son Çıkan</p>
                                <p className="text-xl">Modellerimizi Keşfedin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}