// IdeathonApply.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IdeathonApply = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    member1Name: "",
    member1Phone: "",
    member1Email: "",
    member2Name: "",
    member3Name: "",
    ideaSummary: "",
    presentation: null,
    kvkkAccepted: false,
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, files, checked, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKVKKClick = () => {
    navigate("/kvkk"); // Update this path to your KVKK page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.kvkkAccepted || !formData.termsAccepted) {
      alert("Lütfen tüm şartları kabul edin.");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-dots text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Ideathon Başvuru Formu
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-[#1A2236] p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
        >
          {/* Team Member 1 */}
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            1. Ekip Üyesi (Zorunlu)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="member1Name"
              placeholder="İsim Soyisim"
              value={formData.member1Name}
              onChange={handleInputChange}
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="member1Phone"
              placeholder="Telefon Numarası"
              value={formData.member1Phone}
              onChange={handleInputChange}
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="member1Email"
              placeholder="E-posta Adresi"
              value={formData.member1Email}
              onChange={handleInputChange}
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 w-full md:col-span-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Team Member 2 */}
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            2. Ekip Üyesi (Opsiyonel)
          </h3>
          <div className="mb-6">
            <input
              type="text"
              name="member2Name"
              placeholder="İsim Soyisim"
              value={formData.member2Name}
              onChange={handleInputChange}
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Team Member 3 */}
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">
            3. Ekip Üyesi (Opsiyonel)
          </h3>
          <div className="mb-6">
            <input
              type="text"
              name="member3Name"
              placeholder="İsim Soyisim"
              value={formData.member3Name}
              onChange={handleInputChange}
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Idea Summary */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-300 mb-2">
              Fikir Özeti (Maksimum 500 kelime)
            </label>
            <textarea
              name="ideaSummary"
              value={formData.ideaSummary}
              onChange={handleInputChange}
              rows="6"
              maxLength="3000" // Approximate 500 words
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Fikir özetinizi buraya yazın..."
              required
            ></textarea>
          </div>

          {/* Upload Presentation */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-300 mb-2">
              Sunum Yükleme (PDF / PPTX / PPT)
            </label>
            <input
              type="file"
              name="presentation"
              accept=".pdf, .pptx, .ppt"
              onChange={handleInputChange}
              className="text-gray-400"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="mb-6">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                name="kvkkAccepted"
                checked={formData.kvkkAccepted}
                onChange={handleInputChange}
                className="mr-2 rounded border-gray-700 text-blue-500 focus:ring-0"
                required
              />
              <span>
                KVKK şartlarını{" "}
                <span
                  onClick={handleKVKKClick}
                  className="text-blue-500 underline cursor-pointer"
                >
                  kabul ediyorum
                </span>
                .
              </span>
            </label>
          </div>
          <div className="mb-6">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mr-2 rounded border-gray-700 text-blue-500 focus:ring-0"
                required
              />
              <span>
                Teknik şartnamede yer alan başvuru şartlarını kabul ediyorum.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 transition duration-300"
          >
            Başvuruyu Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default IdeathonApply;
