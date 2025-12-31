import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-neutral-50 px-6">
            <div className="max-w-xl text-center">
                {/* Denim Temalı SVG – Telifsiz & Özgün */}
                <div className="mx-auto mb-8 w-40 h-40">
                    <svg
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <rect
                            x="40"
                            y="10"
                            width="120"
                            height="180"
                            rx="12"
                            fill="#1E3A5F"
                        />
                        <rect
                            x="95"
                            y="10"
                            width="10"
                            height="180"
                            fill="#162E4A"
                        />
                        <path
                            d="M40 60 H160"
                            stroke="#D1D5DB"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        <text
                            x="100"
                            y="115"
                            textAnchor="middle"
                            fill="#E5E7EB"
                            fontSize="32"
                            fontWeight="bold"
                        >
                            404
                        </text>
                    </svg>
                </div>

                {/* Başlık */}
                <h1 className="text-3xl font-semibold text-neutral-800 mb-4">
                    Aradığın Sayfayı Bulamadık
                </h1>

                {/* Açıklama */}
                <p className="text-neutral-600 mb-8 leading-relaxed">
                    Görünüşe göre yanlış bir adrese geldin ya da bu sayfa artık mevcut
                    değil. Kotlarımız kadar sağlam olmayan tek şey bu bağlantı olabilir.
                </p>

                {/* Ana Sayfaya Dönüş */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-md
                     bg-neutral-900 px-6 py-3 text-white
                     hover:bg-neutral-800 transition-colors"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    );
}
