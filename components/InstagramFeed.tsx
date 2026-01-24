import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react'; // Instagram ikonu eklendi
import { BeholdFeedResponse } from '@/types/BeholdPost';

async function getInstagramFeed(): Promise<BeholdFeedResponse | null> {
    const BEHOLD_URL = 'https://feeds.behold.so/zofeSSEd9LVNL9R1pilm';

    try {
        const res = await fetch(BEHOLD_URL, { next: { revalidate: 600 } });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Instagram verisi çekilemedi:", error);
        return null;
    }
}

export default async function InstagramSection() {
    const feedData = await getInstagramFeed();

    if (!feedData || !feedData.posts) return null;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Başlık Alanı - ProductGrid ile aynı stil */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent md:text-[44px] font-bold mb-4">
                        Instagram'da Hawlis Jeans
                    </h2>
                    <p className="text-gray-500 font-medium">@hawlisjeans koleksiyonlarını yakından takip edin</p>
                </div>

                {/* Grid Yapısı */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {feedData.posts.slice(0, 6).map((post) => (
                        <div
                            key={post.id}
                            className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <Link
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* Görsel Alanı - ProductGrid ile uyumlu aspect-[4/5] */}
                                <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                                    <Image
                                        src={post.sizes.medium.mediaUrl}
                                        alt={post.caption || "Instagram Post"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Hover Overlay - ProductGrid ile aynı gradient ve ikon yapısı */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">
                                            <div className="flex items-center space-x-2 font-medium">
                                                <Instagram className="w-5 h-5" />
                                                <span>Instagram'da Gör</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Alt Metin Alanı - Caption'ın bir kısmını gösterir */}
                                <div className="p-6 bg-gray-50 border-t border-gray-100">
                                    <p className="text-sm text-gray-600 line-clamp-2 italic">
                                        {post.caption || "Yeni koleksiyon parçalarımızı inceleyin."}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Alt Buton - Daha fazlası için Instagram'a yönlendirir */}
                <div className="text-center">
                    <Link
                        href={`https://instagram.com/${feedData.username}`}
                        target="_blank"
                        className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300"
                    >
                        <span>Tüm Paylaşımları Gör</span>
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}