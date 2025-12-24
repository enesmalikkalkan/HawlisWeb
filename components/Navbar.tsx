'use client';

import { useState } from 'react'; // 1. State için eklendi
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // 2. Kapatma ikonu (X) eklendi
import Image from 'next/image';

export default function Navbar() {
    // Menünün açık/kapalı durumunu tutan state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Linkleri tek bir yerden yönetmek için diziye çıkardık
    const navItems = [
        { name: 'Koleksiyonlar', path: 'allproducts', filterValue: 'Tümü' },
        { name: 'Hakkımızda', path: 'company', filterValue: null },
        { name: 'İletişim', path: 'contact', filterValue: null },
    ];

    // Linke tıklandığında yapılacak işlemler (Filtreleme + Menü kapama)
    const handleLinkClick = (filterValue: string | null) => {
        if (filterValue) {
            localStorage.setItem('selectedCategory', filterValue);
        }
        // Linke tıklayınca mobil menüyü kapat
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed text-[#0A0A0A] top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* --- SOL TARAFTAKİ LOGO VE HAMBURGER BUTONU --- */}
                    <div className="flex items-center space-x-4 lg:space-x-8">

                        {/* Mobil Menü Butonu (Toggle) */}
                        <button
                            className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menüyü Aç/Kapat"
                        >
                            {/* Menü açıksa X (Kapat), kapalıysa Menu (Çizgiler) göster */}
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/favicon.ico"
                                alt="Hawlis Jeans Logo"
                                width={28}
                                height={28}
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold tracking-tight">HAWLIS JEANS</span>
                        </Link>

                        {/* --- MASAÜSTÜ MENÜ (lg:flex) --- */}
                        <div className="hidden lg:flex space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={`/${item.path}`}
                                    onClick={() => handleLinkClick(item.filterValue)}
                                    className="text-sm font-medium text-gray-800 hover:text-[#1A73E8] transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MOBİL MENÜ PANELİ (Sadece State true ise görünür) --- */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white absolute top-16 left-0 right-0 shadow-lg animate-in slide-in-from-top-5 duration-200">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={`/${item.path}`}
                                onClick={() => handleLinkClick(item.filterValue)}
                                className="block w-full py-3 px-3 text-base font-medium text-gray-700 hover:text-[#1A73E8] hover:bg-gray-50 rounded-lg transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}