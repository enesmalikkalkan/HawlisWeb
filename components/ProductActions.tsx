'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Share2 } from 'lucide-react';

export function BackButton() {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            // ✅ MOBİL FIX: 'p-3' ile dokunma alanını büyüttük ve 'min-h-[48px]' ekledik.
            className="flex items-center space-x-2 text-gray-700 hover:text-black mb-6 transition group p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[48px] min-w-[48px]"
            aria-label="Önceki sayfaya dön"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Ürünlere Dön</span>
        </button>
    );
}

export function ShareButton() {
    const copyUrlAddress = () => {
        if (typeof window !== 'undefined') {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('Ürün linki kopyalandı!');
            }).catch(err => {
                console.error('Kopyalama hatası: ', err);
            });
        }
    };

    return (
        <button
            // ✅ MOBİL FIX: Dokunma hedefi yeterince büyük (p-4)
            className="p-4 rounded-lg border-2 border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition flex items-center justify-center min-w-[56px] min-h-[56px]"
            onClick={copyUrlAddress}
            aria-label="Ürün linkini kopyala"
        >
            <Share2 className="w-6 h-6" aria-hidden="true" />
        </button>
    );
}