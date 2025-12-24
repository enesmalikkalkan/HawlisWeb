'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck } from 'lucide-react'; // Shield ikonu görsel zenginlik için eklendi

export default function PrivacyPolicy() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* --- GERİ DÖN BUTONU --- */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 text-gray-700 hover:text-black mb-8 transition group p-2 -ml-2 rounded-lg hover:bg-gray-50 min-h-[48px]"
                    aria-label="Önceki sayfaya dön"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="font-medium">Geri Dön</span>
                </button>

                {/* --- İÇERİK ALANI --- */}
                <div className="max-w-4xl mx-auto">

                    {/* Başlık Bölümü */}
                    <div className="mb-10 border-b border-gray-100 pb-6">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <ShieldCheck className="w-8 h-8 text-blue-600" aria-hidden="true" />
                            </div>
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Yasal Bilgilendirme</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Gizlilik Politikası</h1>
                        <p className="text-sm text-gray-500">
                            Son güncelleme: <time dateTime="2025-12-23">23 Aralık 2025</time>
                        </p>
                    </div>

                    {/* Metin İçeriği */}
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-8">
                            <span className="font-semibold text-gray-900">hawlisjeans.com</span> olarak ziyaretçilerimizin gizliliğine önem veriyoruz.
                            Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını,
                            bu bilgilerin nasıl kullanıldığını ve ne şekilde korunduğunu açıklamaktadır.
                        </p>

                        {/* Madde 1 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Toplanan Bilgiler</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Web sitemiz ziyaretçiden doğrudan herhangi bir kişisel bilgi talep etmemektedir. Ancak sayfalarda yer alan telefon numaraları,
                                sosyal medya bağlantıları gibi içerikler aracılığıyla bizimle iletişime geçen kullanıcılar, gönüllü olarak kendi iletişim bilgilerini paylaşabilir.
                            </p>
                            <p className="text-gray-700 mb-2">Sitemiz ayrıca aşağıdaki teknik bilgileri otomatik olarak toplayabilir:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700 marker:text-blue-500">
                                <li>IP adresi</li>
                                <li>Tarayıcı türü ve versiyonu</li>
                                <li>Ziyaret edilen sayfalar</li>
                                <li>Ziyaret süresi ve etkileşimler</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Bu bilgiler yalnızca site performansını izlemek ve geliştirmek amacıyla anonim olarak analiz edilir.
                            </p>
                        </section>

                        {/* Madde 2 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Çerezler (Cookies)</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) kullanabilir.
                                Bu çerezler, kullanıcı tercihlerini hatırlamak veya site trafiğini analiz etmek için kullanılır.
                                Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman devre dışı bırakabilirsiniz.
                            </p>
                        </section>

                        {/* Madde 3 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Kişisel Verilerin Korunması</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Sitemiz, kullanıcılar tarafından doğrudan paylaşılmadığı sürece kişisel veri işlemez.
                                Paylaşılan iletişim bilgileri, sadece ziyaretçinin talebine yanıt vermek amacıyla kullanılır ve yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.
                            </p>
                        </section>

                        {/* Madde 4 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Üçüncü Taraf Bağlantılar</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Sitemiz üzerinden telefon numaraları ve sosyal medya hesaplarına yönlendirme yapılabilir.
                                Bu bağlantılar üçüncü taraf platformlara ait olup, bu platformların gizlilik uygulamalarından
                                <span className="font-semibold mx-1">hawlisjeans.com</span> sorumlu değildir.
                                Ziyaret etmeden önce ilgili platformların gizlilik politikalarını incelemenizi öneririz.
                            </p>
                        </section>

                        {/* Madde 5 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Değişiklikler</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Gizlilik politikamız zaman zaman güncellenebilir. Önemli değişiklikler bu sayfada duyurulacaktır.
                                Güncellenme tarihi sayfanın üst kısmında yer almaktadır.
                            </p>
                        </section>

                        {/* Madde 6 */}
                        <section className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-10">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. İletişim</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-gray-900">E-posta:</span>
                                <a href="mailto:kalkantekstil00@gmail.com" className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition">
                                    kalkantekstil00@gmail.com
                                </a>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}