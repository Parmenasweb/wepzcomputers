"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: "Sending...", isError: false });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus({
          message: "Message sent successfully!",
          isError: false,
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus({
          message: "Error sending message. Please try again.",
          isError: true,
        });
      }
    } catch (error) {
      setFormStatus({
        message: "An unexpected error occurred. Please try again later.",
        isError: true,
      });
    }
  };
  const [formStatus, setFormStatus] = useState({ message: "", isError: false });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white mr-2 mt-1" />
                <p className="text-gray-600 dark:text-white">
                  <Link
                    href="https://www.google.com/maps/uv?pb=!1s0x375a59743677c519%3A0xa5c007e030c0bd83!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNzvb1wYZpuhti7-2L2LDne5icP02B_JoaPcR5A%3Dw213-h160-k-no!5swepz%20computers%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNzvb1wYZpuhti7-2L2LDne5icP02B_JoaPcR5A&hl=en&sa=X&ved=2ahUKEwib_vfYwvD1AhWf4zgGHdRvAK8Qoip6BAgmEAM&cshid=1644337567839149"
                    className="hover:text-indigo-500"
                  >
                    <span className="font-bold">Address:</span>- Dona planet,
                    1st floor, Gs road , guwahati, Assam 781005
                  </Link>
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white mr-2" />
                <p className="text-gray-600 dark:text-white">
                  <a href="tel:+1234567890" className="hover:text-indigo-500">
                    <span className="font-bold">Phone:</span>- 9401655366
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white mr-2" />
                <p className="text-gray-600 dark:text-white">
                  {" "}
                  info@wepzcomputers.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3 px-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded-lg p-6"
            >
              {formStatus.message && (
                <div
                  className={`mb-4 p-3 rounded ${
                    formStatus.isError
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
