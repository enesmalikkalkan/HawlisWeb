import React from 'react';
import Information from '../../components/Information';
// veya alias kullanıyorsanız: import AllProducts from '@/components/AllProducts';

export default function InformationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* AllProducts bileşeni burada çağrılıyor. 
        Böylece bu route altındaki tüm sayfalarda (varsa) bu liste görünecek.
      */}
            <Information />

            {/* Eğer /allproducts rotasında ayrıca başka içerikler (children) gösterecekseniz
        onlar burada render edilir. Eğer göstermeyecekseniz children boş gelecektir.
      */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}