'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    MapPin,
    Mail,
    Clock,
    MessageCircle
} from 'lucide-react';

export default function ContactPage() {
    const router = useRouter();
    // Form kullanılmadığı için state'i şimdilik yorum satırına aldım veya silebilirsiniz
    // const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* 1. DÜZELTME: Buton için Aria-Label ve Kontrast */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 text-gray-700 hover:text-black mb-8 transition group p-2 -ml-2 rounded-lg hover:bg-gray-50"
                    aria-label="Önceki sayfaya geri dön"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="font-medium">Geri Dön</span>
                </button>

                <div className="grid md:grid-cols-1 gap-12 mb-16">
                    {/* Sol: İletişim Bilgileri */}
                    <div className="flex flex-col justify-start">
                        <div>
                            {/* Kontrast için gray-800 ve bold font */}
                            <span className="inline-block bg-gray-100 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                                Bize Ulaşın
                            </span>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">İletişim & Konum</h1>

                            {/* Kontrast: text-gray-600 -> text-gray-700 */}
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed border-b border-gray-100 pb-6">
                                Toptan siparişleriniz, özel üretim talepleriniz veya genel sorularınız için bize aşağıdaki kanallardan ulaşabilirsiniz.
                            </p>

                            {/* İletişim Kartları */}
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-gray-900" aria-hidden="true" />
                                    </div>
                                    <div>
                                        {/* 2. DÜZELTME: Başlık Hiyerarşisi (h3 -> h2) */}
                                        <h2 className="font-bold text-gray-900 text-lg">Merkez Ofis & Showroom</h2>
                                        <p className="text-gray-700 mt-1">
                                            Fuat Paşa Caddesi Bereket Han<br />
                                            No:73, 34116 Fatih/İSTANBUL
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-gray-900" aria-hidden="true" />
                                    </div>
                                    <div>
                                        {/* h3 -> h2 */}
                                        <h2 className="font-bold text-gray-900 text-lg">E-Posta</h2>
                                        <p className="text-gray-700 mt-1">kalkantekstil00@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. DÜZELTME: İç içe Button hatası giderildi */}
                            {/* <button> etiketi kaldırıldı, doğrudan <a> etiketi buton gibi stillendirildi */}
                            <a
                                href='https://wa.me/+905352355467'
                                target='_blank'
                                rel="noopener noreferrer" // Güvenlik için eklendi
                                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg mb-6 flex items-center justify-center space-x-2 no-underline"
                                aria-label="WhatsApp üzerinden bizimle iletişime geçin"
                            >
                                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                <span>WhatsApp'tan Hızlı Destek Alın</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Harita Bölümü */}
                <div className="border-t border-gray-200 py-16">
                    {/* Bu h2 hiyerarşik olarak doğru (h1 -> h2) */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Ulaşım Bilgileri</h2>

                    <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative shadow-inner group border border-gray-200">

                        <iframe
                            // Not: src http yerine https olmalı, yoksa güvenlik uyarısı verir
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.1614241215278!2d28.965865150094032!3d41.01250415582942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab945eadce631%3A0x43d393516e090c0d!2sHawlis%20Jeans%20%7C%20Wessa%20Kids%20Club!5e0!3m2!1str!2str!4v1766470489594!5m2!1str!2str"
                            className="w-full h-full object-cover"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Fuat Paşa Caddesi Bereket Han Konumu"
                            aria-label="Google Haritalar Konumu"
                        ></iframe>

                        {/* Bilgi Kartı */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block z-10 border border-gray-100">
                            <div className="flex items-center space-x-2 text-sm font-bold text-gray-900 mb-1">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                <span>Çalışma Saatleri</span>
                            </div>
                            <p className="text-sm text-gray-700 pl-6">
                                Pazartesi - Cuma: 08:00 - 16:30<br />
                                Cumartesi: 08:00 - 11:30
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}