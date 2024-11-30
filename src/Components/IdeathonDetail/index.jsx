// IdeathonDetail.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const IdeathonDetail = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/ideathon-apply");
  };

  return (
    <section className="py-12 mt-14 bg-[#111622] text-white relative">
      {/* Arka plan grid deseni */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        {/* Başlık ve Hikaye */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-12">
          Tuzla Belediyesi Teknoloji Fikir Maratonu
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center mb-12">
          <span className="text-white font-semibold underline">
            Genç fikirler, yenilikçi çözümler!
          </span>{" "}
          Tuzla Belediyesi tarafından düzenlenen Teknoloji Fikir Maratonu,
          Tuzla'nın yerel sorunlarına teknolojik yaklaşımlarla çözüm bulmayı
          amaçlıyor. Bu ideathon, genç girişimcileri, öğrencileri ve teknoloji
          meraklılarını bir araya getirerek, şehir yaşamını iyileştirecek
          projeler geliştirmelerini hedefliyor. Sen de ekibinle birlikte
          geleceğin Tuzla'sını şekillendirmek ister misin?
        </p>

        {/* Teknik Şartname İndirme Butonu */}
        <div className="flex justify-center mb-12">
          <a
            href="/path/to/teknik-sartname.pdf" // PDF dosyanızın gerçek yolunu güncelleyin
            download
            className="flex items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-transform transform hover:scale-105"
          >
            <FaDownload className="mr-2" />
            Teknik Şartnameyi İndirin
          </a>
        </div>

        {/* Yarışma Hakkında */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-6 text-center">
            Yarışma Hakkında
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
            Tuzla Belediyesi Teknoloji Fikir Maratonu, gençlerin yenilikçi
            düşüncelerini ve teknolojik becerilerini kullanarak, Tuzla'nın
            karşılaştığı kentsel sorunlara sürdürülebilir çözümler üretmelerini
            teşvik eder. Bu etkinlik, takım çalışmasını destekleyerek,
            katılımcıların yaratıcı fikirlerini gerçeğe dönüştürmelerine olanak
            tanır.
          </p>
        </div>

        {/* Yarışma Temaları */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-6 text-center">
            Yarışma Temaları
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4 max-w-3xl mx-auto text-lg">
            <li>
              <span className="font-semibold text-white underline">
                Akıllı Şehir Teknolojileri
              </span>{" "}
              (IoT, yapay zeka, dijital ikiz, atık yönetimi vb.)
            </li>
            <li>
              <span className="font-semibold text-white underline">
                Yenilenebilir Enerji ve Sürdürülebilirlik
              </span>
            </li>
            <li>Dijital Dönüşüm ve Kamu Hizmetleri</li>
            <li>Gençlik ve Eğitim Teknolojileri</li>
            <li>Kentsel Hareketlilik ve Erişilebilirlik</li>
            <li>Çevresel Gözetim ve Koruma</li>
          </ul>
        </div>

        {/* Katılım Koşulları */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-6 text-center">
            Katılım Koşulları
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-4 max-w-3xl mx-auto text-lg">
            <li>
              Yarışmaya bireysel veya en fazla{" "}
              <span className="font-semibold text-white underline">
                3 kişilik ekipler
              </span>{" "}
              halinde katılabilirsiniz.
            </li>
            <li>
              Katılımcıların{" "}
              <span className="font-semibold text-white underline">
                18 yaşından büyük
              </span>{" "}
              olması gerekmektedir.
            </li>
            <li>
              Fikirler, Tuzla Belediyesi tarafından uygulanabilir olmalı ve{" "}
              <span className="font-semibold text-white underline">
                Tuzla'nın yerel konularına odaklanmalıdır
              </span>
              .
            </li>
          </ul>
        </div>

        {/* Ödüller */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-6 text-center">
            Ödüller
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-[#1A2236] rounded-xl p-6 text-center hover:shadow-xl transform hover:scale-105 transition duration-300">
              {/* Parlayan Çerçeve */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
              <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                Birinci Ödül
              </h3>
              <p className="text-xl text-white">MacBook Pro</p>
            </div>
            <div className="relative bg-[#1A2236] rounded-xl p-6 text-center hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
              <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                İkinci Ödül
              </h3>
              <p className="text-xl text-white">iPhone 14</p>
            </div>
            <div className="relative bg-[#1A2236] rounded-xl p-6 text-center hover:shadow-xl transform hover:scale-105 transition duration-300">
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
              <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                Üçüncü Ödül
              </h3>
              <p className="text-xl text-white">Çeyrek Altın</p>
            </div>
          </div>
        </div>

        {/* Başvuru Butonu */}
        <div className="flex justify-center">
          <button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 px-10 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500 transition-transform transform hover:scale-105 text-lg"
          >
            Başvuru Yap
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeathonDetail;
