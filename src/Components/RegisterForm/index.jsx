import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    status: [],
    education: [],
    termsAccepted: false,
  });

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedField = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updatedField };
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
    <section className="py-16 bg-dots text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mt-10 sm:mt-0 md:text-4xl font-bold mb-4 text-center">
          Kayıt Alanı
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Kaydınızı buradan kolayca yapabilirsiniz!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-300 mb-2 text-sm font-medium"
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
                className="bg-[#111622] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-300 mb-2 text-sm font-medium"
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
                className="bg-[#111622] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 mb-2 text-sm font-medium"
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
              className="bg-[#111622] border border-gray-700 rounded-lg p-3 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Status */}
          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-300">
              Statüler
            </legend>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[
                "Öğrenciyim",
                "Çalışıyorum",
                "Staj arıyorum",
                "Yatırım arıyorum",
                "Stajyerim",
                "İş arıyorum",
                "Girişimim var",
              ].map((status) => (
                <label
                  key={status}
                  className="flex items-center text-gray-400 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={status}
                    onChange={(e) => handleCheckboxChange(e, "status")}
                    className="mr-3 h-6 w-6 appearance-none border-2 border-gray-700 rounded-lg bg-[#111622] checked:border-none checked:bg-gradient-to-r checked:from-blue-500 checked:to-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {status}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Education */}
          <fieldset className="space-y-2">
            <legend className="text-lg font-semibold text-gray-300">
              Hangi Eğitime Katılmak İstiyorsunuz?
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Python Eğitimi", "Excel Eğitimi"].map((education) => (
                <label
                  key={education}
                  className="flex items-center text-gray-400 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={education}
                    onChange={(e) => handleCheckboxChange(e, "education")}
                    className="mr-3 h-6 w-6 appearance-none border-2 border-gray-700 rounded-lg bg-[#111622] checked:border-none checked:bg-gradient-to-r checked:from-blue-500 checked:to-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {education}
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
              className="mr-3 h-6 w-6 appearance-none border-2 border-gray-700 rounded-lg bg-[#111622] checked:border-none checked:bg-gradient-to-r checked:from-blue-500 checked:to-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="text-gray-400 text-sm">
              Okudum, onaylıyorum.{" "}
              <a href="#" className="text-blue-500 underline">
                KVKK metnini okuyun.
              </a>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-teal-500 transition duration-300"
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
