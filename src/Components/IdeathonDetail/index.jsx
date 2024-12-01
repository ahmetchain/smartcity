import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const IdeathonDetail = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/ideathon-apply");
  };

  return (
    <section className="py-12 mt-14  text-gray-800 relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        {/* Başlık ve Hikaye */}
        <h1 className="text-5xl lg:h-[70px] md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-12">
          Tuzla Belediyesi Teknoloji Fikir Maratonu
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto text-center mb-12">
          <span className="text-gray-800 font-semibold underline">
            Genç fikirler, yenilikçi çözümler!
          </span>{" "}
          Tuzla Belediyesi tarafından düzenlenen Teknoloji Fikir Maratonu,
          Tuzla'nın yerel sorunlarına teknolojik yaklaşımlarla çözüm bulmayı
          amaçlıyor. Bu ideathon, genç girişimcileri, öğrencileri ve teknoloji
          meraklılarını bir araya getirerek, şehir yaşamını iyileştirecek
          projeler geliştirmelerini hedefliyor. Sen de ekibinle birlikte
          geleceğin Tuzla'sını şekillendirmek ister misin?
        </p>

        {/* Teknik Şartname ve Sunum Taslağı İndirme Butonları */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="../../assets/IdeathonTeknikSartname.pdf"
            download
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:scale-105 text-center"
          >
            <FaDownload className="mr-2" />
            Teknik Şartnameyi İndirin
          </a>
          <a
            href="../../assets/FikirYarismasiSunumTaslaği.pptx"
            download
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:scale-105 text-center"
          >
            <FaDownload className="mr-2" />
            Sunum Taslağını İndirin
          </a>
        </div>

        {/* Yarışma Hakkında */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 text-center">
            Yarışma Hakkında
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
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
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 text-center">
            Yarışma Temaları
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-4 max-w-3xl mx-auto text-lg">
            <li>
              <span className="font-semibold text-gray-800 underline">
                Akıllı Şehir Teknolojileri
              </span>{" "}
              (IoT, yapay zeka, dijital ikiz, atık yönetimi vb.)
            </li>
            <li>
              <span className="font-semibold text-gray-800 underline">
                Yenilenebilir Enerji ve Sürdürülebilirlik
              </span>
            </li>
            <li>Dijital Dönüşüm ve Kamu Hizmetleri</li>
            <li>Gençlik ve Eğitim Teknolojileri</li>
            <li>Kentsel Hareketlilik ve Erişilebilirlik</li>
            <li>Çevresel Gözetim ve Koruma</li>
          </ul>
        </div>

        {/* Ödüller ve Başvuru */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-10 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:scale-105 text-lg"
          >
            Başvuru Yap
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdeathonDetail;
