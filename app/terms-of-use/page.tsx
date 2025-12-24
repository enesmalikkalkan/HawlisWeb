'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText } from 'lucide-react'; // İkonlar eklendi

export default function TermsOfService() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* --- GERİ DÖN BUTONU --- */}
                {/* Mobilde kolay tıklanması için min-h-[48px] ve padding ayarlandı */}
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
                                <FileText className="w-8 h-8 text-blue-600" aria-hidden="true" />
                            </div>
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Yasal Sözleşmeler</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Hizmet Şartları</h1>
                        <p className="text-sm text-gray-500">
                            Son güncelleme: <time dateTime="2025-10-01">23 Aralık 2025</time>
                        </p>
                    </div>

                    {/* Metin İçeriği */}
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Lütfen <span className="font-semibold text-gray-900">hawlisjeans.com</span> web sitesini ziyaret etmeden önce bu Hizmet Şartları’nı dikkatlice okuyunuz.
                            Bu siteyi kullanarak aşağıdaki şartları peşinen kabul etmiş sayılırsınız.
                        </p>

                        {/* Madde 1 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Hizmet Tanımı</h2>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">hawlisjeans.com</span>, Hawlis Jeans'a ait kot pantolon ürünlerinin tanıtıldığı;
                                ürün fotoğraflarının, beden bilgilerinin ve üretim detaylarının herkese açık olarak sunulduğu dijital bir vitrindir.
                                Web sitesi üzerinden doğrudan herhangi bir çevrimiçi satış (e-ticaret) işlemi gerçekleştirilmemektedir.
                            </p>
                        </section>

                        {/* Madde 2 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Kullanım Koşulları</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700 marker:text-blue-500">
                                <li>
                                    Site içeriği yalnızca bilgi verme ve marka tanıtımı amaçlıdır.
                                </li>
                                <li>
                                    Ürünlerle ilgili detaylı bilgi, fiyat teklifi veya toptan sipariş talebi oluşturmak isteyen kullanıcılar,
                                    sayfada belirtilen iletişim kanallarını (WhatsApp, Telefon, E-posta) kullanarak doğrudan Hawlis Jeans yetkilileri ile iletişime geçmelidir.
                                </li>
                                <li>
                                    Kullanıcılar, siteyi yalnızca yasalara uygun ve etik amaçlar doğrultusunda kullanmayı kabul eder.
                                </li>
                            </ul>
                        </section>

                        {/* Madde 3 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. İçerik Hakları</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Sitede yer alan tüm ürün fotoğrafları, metinler, grafikler, logolar ve diğer içerikler <strong>Hawlis Jeans</strong>'a aittir
                                ve uluslararası telif hakkı yasaları ile korunmaktadır. Bu içeriklerin Hawlis Jeans'ın yazılı izni olmaksızın kopyalanması,
                                başka platformlarda yayınlanması, dağıtılması veya ticari amaçla kullanılması kesinlikle yasaktır.
                            </p>
                        </section>

                        {/* Madde 4 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Sorumluluk Sınırlamaları</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Sitede yer alan ürün bilgileri (renk tonu, stok durumu, beden ölçüleri vb.), mümkün olduğunca doğru ve güncel tutulmaya çalışılsa da;
                                dijital ekran farklılıklarından veya teknik hatalardan kaynaklanabilecek bilgi eksikliklerinden veya yanlışlıklardan Hawlis Jeans sorumlu tutulamaz.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Üçüncü taraf bağlantılar (örneğin: sosyal medya hesapları, harita konumları) kullanıcıya kolaylık sağlamak amacıyla sunulmuştur.
                                Bu dış bağlantıların içeriklerinden veya güvenlik politikalarından <span className="font-semibold">hawlisjeans.com</span> sorumlu değildir.
                            </p>
                        </section>

                        {/* Madde 5 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Değişiklik Hakkı</h2>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">hawlisjeans.com</span>, işbu hizmet şartlarında önceden bildirim yapmaksızın değişiklik yapma hakkını saklı tutar.
                                Yapılan değişiklikler sitede yayınlandığı andan itibaren geçerli sayılır. Kullanıcılar, bu şartları düzenli olarak gözden geçirmekle sorumludur.
                            </p>
                        </section>

                        {/* Madde 6 */}
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Yürürlük ve Uyuşmazlıklar</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Bu şartlar, Türkiye Cumhuriyeti yasalarına tabidir. Taraflar arasında bu sitenin kullanımından doğabilecek her türlü uyuşmazlıkta
                                <strong>İstanbul Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
                            </p>
                        </section>

                        {/* İletişim Footer */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-10 text-center sm:text-left">
                            <p className="text-gray-700 mb-2">Bu şartlarla ilgili sorularınız mı var?</p>
                            <a href="/contact" className="text-blue-600 font-bold hover:underline hover:text-blue-700 transition">
                                İletişim sayfamızdan bize ulaşın →
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};