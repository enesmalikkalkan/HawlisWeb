'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2 text-white">
                            <Image
                                src="/favicon.ico"
                                alt="Hawlis Jeans Logo"
                                width={28}
                                height={28}
                                className="w-8 h-8"
                            />
                            <span className="text-2xl font-bold">HAWLIS JEANS</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="https://www.instagram.com/hawlisjeans/" target='_blank' className="hover:text-white transition">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=61581464069062" target='_blank' className="hover:text-white transition">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Ürünler</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Kargo Pantolonlar', categoryOption: 'Kargo', filterValue: 'Kargo' },
                                { name: 'Klasik Kotlar', categoryOption: 'Kot', filterValue: 'Kot' },
                                { name: 'Hawlis Exclusive', categoryOption: 'Exclusive', filterValue: 'Exclusive' },
                                { name: 'Kumaş Pantolonlar', categoryOption: 'Kumaş', filterValue: 'Kumaş' },
                                { name: 'Jogger Pantolonlar', categoryOption: 'Jogger', filterValue: 'Jogger' }].map((item) => (
                                    <li key={item.name}>
                                        <Link href={`/allproducts?category=${item.filterValue}`} onClick={() => {
                                            if (item.filterValue) {
                                                localStorage.setItem('selectedCategory', item.filterValue);
                                            }
                                        }} className="hover:text-white transition text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Şirket</h4>
                        <ul className="space-y-2">
                            {[{ name: 'Hakkımızda', path: 'about' },
                            { name: 'Sürdürülebilirlik', path: 'sustainability' }].map((item) => (
                                <li key={item.path}>
                                    <Link href={`/company?section=${item.path}`} className="hover:text-white transition text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-3">
                            <li>
                                <a className="flex items-start space-x-3 text-sm" href='https://maps.app.goo.gl/8tF2FfHrDeA3nrGK8' target='_blank'>
                                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <span>Fuat Paşa Caddesi Bereket Han No:73 Mercan/İSTANBUL</span>
                                </a>
                            </li>
                            <li>
                                <a className='flex flex-row items-center space-x-3 text-sm' href='mailto:kalkantekstil00@gmail.com'>
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <span>kalkantekstil00@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#1A73E8] pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm">© 2026 HAWLIS JEANS. Tüm hakları saklıdır.</p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy-policy" className="hover:text-white transition">Gizlilik Politikası</Link>
                            <Link href="/terms-of-use" className="hover:text-white transition">Kullanım Koşulları</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}