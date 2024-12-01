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
    navigate("/kvkk");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.kvkkAccepted || !formData.termsAccepted) {
      alert("Lütfen tüm şartları kabul edin.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
          Ideathon Başvuru Formu
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* Team Member 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              1. Ekip Üyesi (Zorunlu)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="member1Name"
                placeholder="İsim Soyisim"
                value={formData.member1Name}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="member1Phone"
                placeholder="Telefon Numarası"
                value={formData.member1Phone}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="member1Email"
                placeholder="E-posta Adresi"
                value={formData.member1Email}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 w-full md:col-span-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Optional Members */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              2. ve 3. Ekip Üyesi (Opsiyonel)
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="member2Name"
                placeholder="2. Üye - İsim Soyisim"
                value={formData.member2Name}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="member3Name"
                placeholder="3. Üye - İsim Soyisim"
                value={formData.member3Name}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Idea Summary */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Fikir Özeti (Maksimum 500 kelime)
            </label>
            <textarea
              name="ideaSummary"
              value={formData.ideaSummary}
              onChange={handleInputChange}
              rows="6"
              maxLength="3000"
              className="bg-white border border-gray-300 rounded-lg p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Fikir özetinizi buraya yazın..."
              required
            ></textarea>
          </div>

          {/* Upload Presentation */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Sunum Yükleme (PDF / PPTX / PPT)
            </label>
            <input
              type="file"
              name="presentation"
              accept=".pdf, .pptx, .ppt"
              onChange={handleInputChange}
              className="text-gray-600"
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="kvkkAccepted"
              checked={formData.kvkkAccepted}
              onChange={handleInputChange}
              className="mr-3 h-6 w-6 appearance-none border-2 border-gray-300 rounded-lg bg-white checked:border-none checked:bg-gradient-to-r checked:from-blue-600 checked:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="text-gray-600 text-sm">
              Okudum, onaylıyorum.{" "}
              <a href="/kvkk" className="text-blue-600 underline">
                KVKK metnini okuyun.
              </a>
            </span>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mr-3 h-6 w-6 appearance-none border-2 border-gray-300 rounded-lg bg-white checked:border-none checked:bg-gradient-to-r checked:from-blue-600 checked:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="text-gray-600 text-sm">
              Teknik şartnamede yer alan başvuru şartlarını kabul ediyorum.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-teal-600 transition duration-300"
          >
            Başvuruyu Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default IdeathonApply;
