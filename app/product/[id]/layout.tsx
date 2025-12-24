import React from 'react';
// YANLIŞ IMPORT BUYDU:
// import Product from '../../../components/ProductDetails'; 

// DOĞRUSU (Dosya ismin neyse onu yazmalısın, tahmin yürütüyorum):
// Eğer bir ürün listesi bileşenin varsa onu import et:
import ProductList from '../../../components/AllProducts';
// Veya AllProducts ise:
// import AllProducts from '@/components/AllProducts';

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white pt-20">

            {/* Burada tek bir ürün detayı (ProductDetails) DEĞİL, 
               genel ürün listesi veya kategori başlığı olmalı.
               Eğer öyle bir bileşenin yoksa bu <Product /> satırını tamamen silmelisin.
            */}

            {/* Eğer bir listen varsa: */}
            {/* <ProductList /> */}

            {/* Eğer amacın sadece detay sayfasını sarmalamaksa, 
                burada <Product /> çağırmana GEREK YOKTUR. 
                Çünkü page.tsx zaten ProductDetails'i çağırıyor.
            */}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}