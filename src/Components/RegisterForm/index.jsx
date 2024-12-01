import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    events: [],
    termsAccepted: false,
  });

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedEvents = checked
        ? [...prev.events, value]
        : prev.events.filter((event) => event !== value);
      return { ...prev, events: updatedEvents };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Lütfen KVKK onayını kabul edin.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16  text-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mt-10 sm:mt-0 md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
          Kayıt Alanı
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Katılmak istediğiniz etkinlikleri seçin ve bilgilerinizi doldurun!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Name and Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 mb-2 text-sm font-medium"
              >
                İsim
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Adınızı girin..."
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 mb-2 text-sm font-medium"
              >
                Soyisim
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Soyadınızı girin..."
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 mb-2 text-sm font-medium"
            >
              Cep Telefonu
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="0555-555-5555"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white border border-gray-300 rounded-lg p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ornek@ornek.com"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white border border-gray-300 rounded-lg p-3 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Events */}
          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-700">
              Katılmak İstediğiniz Etkinlikler
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "23 Aralık Akıllı Şehir Teknolojileri Panel",
                "24 Aralık Python Eğitimi",
                "24 Aralık Excel Eğitimi",
              ].map((event) => (
                <label
                  key={event}
                  className="flex items-center text-gray-600 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={event}
                    onChange={handleCheckboxChange}
                    className="mr-3 h-6 w-6 appearance-none border-2 border-gray-300 rounded-lg bg-white checked:border-none checked:bg-gradient-to-r checked:from-blue-600 checked:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {event}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) =>
                setFormData({ ...formData, termsAccepted: e.target.checked })
              }
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-teal-600 transition duration-300"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
