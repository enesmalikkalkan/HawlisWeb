'use client';

import { useEffect, Suspense } from 'react'; // 1. Suspense eklendi
import { useRouter, useSearchParams } from 'next/navigation';
import { Leaf, Award, Users, TrendingUp, Globe, Heart, ArrowRight } from 'lucide-react';

// 2. Asıl içeriği ayrı bir bileşen (InformationContent) olarak ayırıyoruz.
// useSearchParams burada kullanılıyor.
function InformationContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Belirli bir ID'ye yumuşak geçiş yapan fonksiyon
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Header'ın yüksekliğini hesaba katarak scroll pozisyonunu ayarlama (offset)
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // URL'de ?section=about gibi bir parametre varsa sayfa açılışında oraya git
    useEffect(() => {
        const section = searchParams.get('section');
        if (section) {
            // DOM'un yüklenmesi için ufak bir gecikme
            setTimeout(() => {
                scrollToSection(section);
            }, 100);
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-white text-gray-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Kısmı */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Hikayemiz</h1>
                    <p className="text-xl text-gray-600">Premium erkek giyim ürünlerini üretmemizdeki tutkuyu keşfedin.</p>
                </div>

                {/* 1. Bölüm: Hakkımızda */}
                <section id="about" className="mb-24 scroll-mt-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Marka Hakkında</span>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Hawlis Jeans Hakkında</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Hawlis Jeans, konfor, stil ve kaliteyi bir araya getiren giysiler üretmeye adanmış premium bir erkek giyim markasıdır. Kurulduğumuz günden bu yana, müşterilerimize sadece olağanüstü görünen değil, aynı zamanda giyildiğinde inanılmaz hissettiren ürünler sunmaya kararlıyız.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Ürettiğimiz her pantolon, özenle tasarlanmış ve titizlikle işlenmiştir. Harika giyimin, müşterilerimizin ihtiyaçlarını anlamakla ve beklentilerini aşan ürünler sunmakla başladığına inanıyoruz.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg text-center sm:text-left">
                                    <div className="text-3xl font-bold mb-1 text-gray-900">25+</div>
                                    <p className="text-sm text-gray-600">Yıllık Tecrübe</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center sm:text-left">
                                    <div className="text-3xl font-bold mb-1 text-gray-900">50+</div>
                                    <p className="text-sm text-gray-600">Ürün Çeşidi</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gray-200 rounded-2xl aspect-[4/5] md:aspect-square overflow-hidden shadow-lg">
                                <img
                                    src="https://kalkan-tekstil-web.s3.eu-central-1.amazonaws.com/logo-bg.png"
                                    alt="Hawlis Jeans Team"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center p-6 rounded-xl hover:bg-gray-100 transition duration-300">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Premium Kalite</h3>
                            <p className="text-gray-600">Her giyside en iyi malzemeleri tedarik ediyor ve uzman işçilik uyguluyoruz.</p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:bg-gray-100 transition duration-300">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Müşteri Odaklılık</h3>
                            <p className="text-gray-600">Olağanüstü destek ve kolay iade süreçleriyle memnuniyetiniz önceliğimizdir.</p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:bg-gray-100 transition duration-300">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sürekli İnovasyon</h3>
                            <p className="text-gray-600">Trendlerin önünde kalmak için tasarımlarımızı ve süreçlerimizi sürekli geliştiriyoruz.</p>
                        </div>
                    </div>
                </section>

                {/* 3. Bölüm: Sürdürülebilirlik */}
                <section id="sustainability" className="mb-12 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Gelecek İçin</span>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Sürdürülebilirlik Taahhüdümüz</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 md:order-1">
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Hammaddelerin tedarikinden son teslimata kadar sürecimizin her adımı sürdürülebilirlik göz önünde bulundurularak tasarlanmıştır. Premium kalite ile çevresel sorumluluğun el ele gittiğine inanıyoruz.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Minimum Su Tüketimi
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Doğa Dostu Malzemeler
                                    </li>
                                    <li className="flex items-center text-gray-700 font-medium">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Etik İşgücü Standartları
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl aspect-video md:aspect-square flex items-center justify-center overflow-hidden shadow-sm">
                            <img src="https://kalkan-tekstil-web.s3.eu-central-1.amazonaws.com/surdurulebilirlik.png" alt="Sustainability" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: Leaf, color: 'text-green-600', title: 'Doğa Dostu Malzemeler', desc: '%80 organik pamuk ve geri dönüştürülmüş malzemeler kullanarak ham kaynak kullanımını azaltıyoruz.' },
                            { icon: Heart, color: 'text-red-600', title: 'Adil Çalışma Koşulları', desc: 'Sadece adil ücretler ödeyen ve güvenli çalışma koşulları sağlayan üreticilerle çalışıyoruz.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl hover:shadow-lg hover:border-gray-200 transition duration-300">
                                <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

// 3. Varsayılan dışa aktarımda Suspense kullanıyoruz.
// Bu sayede Next.js build sırasında hata vermez.
export default function InformationPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <InformationContent />
        </Suspense>
    );
}