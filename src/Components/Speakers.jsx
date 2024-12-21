import React from "react";
import { FaLinkedin } from "react-icons/fa";
import AlperKaracar from "../assets/speakers/alperkaracar.jpg";
import OsmanAksoy from "../assets/speakers/TaskinOsmanAksoy.jpg";
import ErolOzguner from "../assets/speakers/ErolÖzgüner.jpg";
import CanDagdelen from "../assets/speakers/CanDagdelen.jpg";
import ErolYilmaz from "../assets/speakers/ErolYilmaz.jpg";
import MuratErtem from "../assets/speakers/MuratErtem.jpg";
import IlkemOzar from "../assets/speakers/IlkemOzar.jpg";
import AnilTangül from "../assets/speakers/AnilTangül.jpg";
import BetülErtem from "../assets/speakers/BetülErtemYildiz.jpg";
import ErdemEris from "../assets/speakers/ErdemEris.jpg";
import BarisUz from "../assets/speakers/BarisUz.jpg";
import CicekBayulken from "../assets/speakers/CicekBayulken.jpg";
import HarunEsur from "../assets/speakers/HarunEsur.jpg";
import EnesAladas from "../assets/speakers/EnesAladas.jpg";
import KutlaySimsek from "../assets/speakers/KutlaySimsek.jpg";
import MuratYilmaz from "../assets/speakers/MuratYilmaz.jpg";
const Speakers = () => {
  const speakers = [
    {
      name: "Alper",
      surname: "Karaçar",
      title: "Danışmanlık Bölüm Başkanı ",
      company: "KPMG Türkiye",
      photo: AlperKaracar,
      linkedin: "https://www.linkedin.com/in/alperkaracar",
    },
    {
      name: "Taşkın",
      surname: "Aksoy",
      title: "Co-Founder & CEO",
      company: "Linktera",
      photo: OsmanAksoy,
      linkedin: "https://www.linkedin.com/in/taskin-osman-aksoy-99a10a21",
    },
    {
      name: "Erol",
      surname: "Özgüner",
      title: "Teknoloji Grup Başkanı",
      company: "İBB",
      photo: ErolOzguner,
      linkedin: "https://www.linkedin.com/in/erol-%C3%B6zg%C3%BCner-78893a22",
    },
    {
      name: "Can",
      surname: "Dağdelen",
      title: "Genel Müdür",
      company: "İSBAK",
      photo: CanDagdelen,
      linkedin: "https://www.linkedin.com/in/candagdelen",
    },
    {
      name: "Erol",
      surname: "Yılmaz",
      title: "CEO",
      company: "Çekino Bilgi Teknolojileri",
      photo: ErolYilmaz,
      linkedin: "https://www.linkedin.com/in/erolyilmazz",
    },
    {
      name: "İlkem",
      surname: "Özar",
      title: "Genel Müdür",
      company: "Kaspersky Türkiye",
      photo: IlkemOzar,
      linkedin: "https://www.linkedin.com/in/ilkemozar",
    },
    {
      name: "Anıl",
      surname: "Tangül",
      title: "CTO",
      company: "NKolay",
      photo: AnilTangül,
      linkedin: "https://www.linkedin.com/in/aniltangul",
    },
    {
      name: "Betül Ertem",
      surname: "Yıldız",
      title: "Yönetişim, Risk ve Uyum Ortağı",
      company: "BDO Türkiye",
      photo: BetülErtem,
      linkedin: "https://www.linkedin.com/in/bet%C3%BCl-ertem-y%C4%B1ld%C4%B1z",
    },
    {
      name: "Erdem",
      surname: "Eriş",
      title: "Co-Founder",
      company: "CyberArts & VentureArts",
      photo: ErdemEris,
      linkedin: "https://www.linkedin.com/in/erdemeris",
    },
    {
      name: "Barış",
      surname: "Uz",
      title: "CEO",
      company: "Esri Türkiye",
      photo: BarisUz,
      linkedin: "https://www.linkedin.com/in/barisuz",
    },
    {
      name: "Murat",
      surname: "Yılmaz",
      title: "Ülke Müdürü",
      company: "Hitachi Europe Türkiye",
      photo: MuratYilmaz,
      linkedin: "https://www.linkedin.com/in/murat-yilmaz-47616534/",
    },
    {
      name: "Çiçek",
      surname: "Bayülken",
      title: "Türkiye ve CIS Bölge Müdürü",
      company: "Pure Storage",
      photo: CicekBayulken,
      linkedin: "https://www.linkedin.com/in/cicek-bayulken-86986919/",
    },
    {
      name: "Harun",
      surname: "Esur",
      title: "Co-Founder",
      company: "Sceptive",
      photo: HarunEsur,
      linkedin: "https://www.linkedin.com/in/harunesur/",
    },
    {
      name: "Enes",
      surname: "Aladaş",
      title: "Co-Founder & CEO",
      company: "RumiTech",
      photo: EnesAladas,
      linkedin: "https://www.linkedin.com/in/enes-alada%C5%9F-33a01489/",
    },
    {
      name: "Kutlay",
      surname: "Şimşek",
      title: "Co-founder",
      company: "Ereteam Analytics USA",
      photo: KutlaySimsek,
      linkedin: "https://www.linkedin.com/in/kutlay-simsek-930358/",
    },
  ];

  const sortedSpeakers = speakers.sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );

  return (
    <section id="speakers" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:h-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center mb-12">
          Konuşmacılar
        </h2>
        <div
          className={`grid ${
            sortedSpeakers.length === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-8"
          }`}
        >
          {sortedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="relative group transform hover:-translate-y-2 transition duration-300 w-[330px] lg:w-[350px] h-[520px]"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-1"></div>
              {/* Card Content */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-full h-full flex flex-col justify-between">
                <div className="w-full h-[80%] overflow-hidden rounded-t-3xl">
                  <img
                    src={speaker.photo}
                    alt={`${speaker.name} ${speaker.surname}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center flex flex-col justify-between ">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {speaker.name} {speaker.surname}
                  </h3>
                  <div className="flex flex-col items-center text-blue-600 text-lg">
                    <span className="font-medium">{speaker.title}</span>
                    <span className="text-gray-500 mt-1">
                      {speaker.company}
                    </span>
                  </div>
                  <div className="mt-4">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-blue-600 hover:text-teal-500 transition duration-300"
                    >
                      <FaLinkedin className="mr-2" size={20} />
                      <span className="text-sm font-medium">
                        LinkedIn Profiline Git
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border border-gray-200 opacity-50 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
