import React from "react";

const Agenda = () => {
  const dayOne = [
    { time: "12:30-13:00", event: "Kayıt & Networking" },
    {
      time: "13:00-13:15",
      event: "Açılış Konuşması: Tuzla TEKMER Tanıtımı & Vizyonumuz",
    },
    {
      time: "13:15-13:30",
      event: "Keynote Speech: Kentsel İnovasyonun Geleceği",
    },
    {
      time: "13:30-14:10",
      event: "Panel 1: Akıllı Altyapı ve Sürdürülebilir Şehirler",
    },
    { time: "14:10-14:50", event: "Panel 2: Veri Odaklı Kentsel Yönetim" },
    { time: "14:50-15:20", event: "Network Arası" },
    {
      time: "15:20-16:00",
      event: "Panel 3: Akıllı Şehirlerde Yerel Yönetimlerin Rolü",
    },
    { time: "16:00-17:00", event: "Kapanış Konuşması & Networking" },
  ];

  const dayTwo = [
    { time: "09:00-12:00", event: "Python Programlamaya Giriş" },
    { time: "12:00-13:00", event: "Ara" },
    { time: "13:00-16:00", event: "Excel Eğitimi" },
  ];

  const dayThree = [
    { time: "09:00-10:00", event: "Ideathon Açılışı ve Takım Oluşturma" },
    { time: "10:00-16:00", event: "Proje Çalışmaları" },
    { time: "16:00-17:00", event: "Sunumlar ve Değerlendirme" },
    { time: "17:00-18:00", event: "Ödül Töreni ve Kapanış" },
  ];

  return (
    <section id="agenda" className="py-16 bg-[#111622]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-300 mb-12">
          Etkinlik Programı
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gün 1 */}
          <div className="bg-[#1A2236] text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Gün 1
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-base md:text-lg">
                  <th className="py-2">Saat</th>
                  <th className="py-2">Etkinlikler</th>
                </tr>
              </thead>
              <tbody>
                {dayOne.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 text-sm md:text-base"
                  >
                    <td className="py-2 text-gray-300">{item.time}</td>
                    <td className="py-2">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Gün 2 */}
          <div className="bg-[#1A2236] text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Gün 2
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-base md:text-lg">
                  <th className="py-2">Saat</th>
                  <th className="py-2">Etkinlikler</th>
                </tr>
              </thead>
              <tbody>
                {dayTwo.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-700 text-sm md:text-base"
                  >
                    <td className="py-2 text-gray-300">{item.time}</td>
                    <td className="py-2">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
