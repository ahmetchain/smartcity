import React from "react";
import Sponsor1 from "../assets/paraph.png";
import Sponsor2 from "../assets/starx.png";
import Sponsor3 from "../assets/okint.png";

const Sponsors = () => {
  const sponsors = [
    { name: "Paraph", logo: Sponsor1 },
    { name: "StarX", logo: Sponsor2 },
    { name: "Okint", logo: Sponsor3 },
  ];

  return (
    <section id="sponsors" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center mb-12">
          Sponsorlar ve Ortaklar
        </h2>
        {/* Sponsor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-40 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
