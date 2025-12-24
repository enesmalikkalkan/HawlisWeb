'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Sayfa yolu (pathname) her değiştiğinde scroll'u sıfırla
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Bu bileşen ekranda hiçbir şey göstermez
}