import React from "react";
import { FaDownload } from "react-icons/fa";

const IdeathonDetail = () => {
  const awards = [
    {
      place: "1.",
      prize: "Sürpriz Ödül",
      color: "bg-white ",
    },
    {
      place: "2.",
      prize: "Sürpriz Ödül",
      color: "bg-white ",
    },
    {
      place: "3.",
      prize: "Sürpriz Ödül",
      color: "bg-white ",
    },
  ];

  return (
    <section className="py-12 mt-14 text-gray-800 relative">
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
            href="/tekniksartname.pdf"
            download
            className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:scale-105 text-center"
          >
            <FaDownload className="mr-2" />
            Teknik Şartnameyi İndirin
          </a>
          <a
            href="/FikirYarismasiSunumTaslaği.pptx"
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

        {/* Ödüller */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 text-center">
            Ödüller
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 bg-gradient-to-br ${award.color} text-white flex flex-col items-center`}
              >
                <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500  font-bold mb-4">
                  {award.place}
                </div>
                <p className="text-xl font-medium text-gray-600 text-center">
                  {award.prize}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ödüller ve Başvuru */}
        <div className="flex justify-center mt-8">
          <a
            href="https://tuzlatekmer.com/ideathonApplications/new"
            target="_blank"
          >
            <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-10 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-600 transition-transform transform hover:scale-105 text-lg">
              Başvuru Yap
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdeathonDetail;
