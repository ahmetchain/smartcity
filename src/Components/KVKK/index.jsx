import React from "react";

const KVKK = () => {
  return (
    <section className="py-16 mt-20">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-8">
          Tuzla Belediyesi Kişisel Verilerin İşlenmesine İlişkin Genel
          Aydınlatma Metni
        </h1>

        {/* Açıklama */}
        <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-justify mb-8">
          Tuzla Belediyesi olarak, kişisel verilerinizin güvenliği bizim için
          önceliklidir. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)
          kapsamında, kişisel verilerinizin korunması ve işlenmesi süreçleriyle
          ilgili sizleri bilgilendirmek amacıyla bu metni hazırladık.
          Belediyemizin hizmetlerinden yararlanırken kişisel verilerinizin nasıl
          toplandığı, işlendiği, aktarıldığı ve saklandığı ile ilgili detaylar
          aşağıda açıklanmaktadır.
        </p>

        {/* Metin */}
        <div className="  rounded-lg p-8 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            1 – Kişisel Verilerinizin Toplanması ve İşlenmesinin Amacı
          </h2>
          <p className="mb-6">
            Tuzla Belediyesi, yasal yükümlülüklerini yerine getirmek, hizmet
            kalitesini artırmak ve vatandaş memnuniyetini sağlamak amacıyla
            kişisel verilerinizi işlemektedir. Bu veriler, kamu hizmetlerinin
            sunumu, etkinlik organizasyonları ve belediye projelerinin
            planlanması gibi faaliyetlerde kullanılmaktadır.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            2 – Kişisel Verilerinizin Hukuki Sebepleri
          </h2>
          <p className="mb-6">
            Belediyemiz, kişisel verilerinizi 5393 sayılı Belediye Kanunu ve
            ilgili diğer mevzuat çerçevesinde, kanunlara uygun şekilde toplar ve
            işler.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            3 – Kişisel Verilerin Aktarımı
          </h2>
          <p className="mb-6">
            Tuzla Belediyesi, kişisel verilerinizi yalnızca yasal zorunluluklar
            ve hizmetlerin sağlanması amacıyla yetkili kamu kurum ve
            kuruluşlarıyla paylaşabilir.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            4 – Kişisel Verilerin Saklanması ve Güvenliği
          </h2>
          <p className="mb-6">
            Toplanan kişisel veriler, gerekli teknik ve idari tedbirler alınarak
            korunur ve yalnızca işleme amacına uygun süre boyunca saklanır.
            Yasal süre sona erdiğinde, veriler güvenli bir şekilde imha edilir.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            5 – Kişisel Veri Sahiplerinin Hakları
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşleme amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>
              Eksik veya yanlış işlenen verilerin düzeltilmesini talep etme
            </li>
            <li>Verilerinizin silinmesini veya yok edilmesini talep etme</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            6 – İletişim
          </h2>
          <p>
            Haklarınızla ilgili taleplerinizi, Belediyemizin{" "}
            <span className="underline">Tuzla Belediye Başkanlığı</span>{" "}
            adresine yazılı olarak iletebilir veya e-posta yoluyla başvuru
            yapabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KVKK;
