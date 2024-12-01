import React from "react";
import { FaLinkedin } from "react-icons/fa";
import SpeakerPhoto from "../assets/osmankuzucu.webp";

const Speakers = () => {
  const speakers = [
    {
      name: "Osman Kuzucu",
      title: "CEO",
      company: "Omchain Foundation",
      photo: SpeakerPhoto,
      session: "Açılış Konuşması: Kentsel İnovasyonun Geleceği",
      linkedin: "https://www.linkedin.com/in/osmankuzucu", // LinkedIn URL
    },
    // Daha fazla konuşmacı eklenebilir
  ];

  return (
    <section id="speakers" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:h-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center mb-12">
          Konuşmacılar
        </h2>
        <div
          className={`grid ${
            speakers.length === 1
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          }`}
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative group transform hover:-translate-y-2 transition duration-300 w-[330px] lg:w-[350px] h-[500px]"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-1"></div>
              {/* Card Content */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg w-full h-full flex flex-col justify-between">
                <div className="w-full h-[70%] overflow-hidden rounded-t-3xl">
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center flex flex-col justify-between ">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {speaker.name}
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
