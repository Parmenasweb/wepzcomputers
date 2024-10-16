"use client";

// import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import ContactForm from "./components/ContactForm";
import BusinessHours from "./components/BusinessHours";
import { useRouter } from "next/navigation";
import WhatsappButton from "@/components/navComponents/WhatsappClick";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

// ... rest of your imports and component code

export default function ContactPage() {
  const router = useRouter();

  const handleWhatsAppClick = () => {
    const phoneNumber = "6003145149"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      "Hello wepzcomputers, I have a question about laptop repair."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Modern Hero Section */}
      <section className="relative rounded-md bg-gradient-to-r from-blue-500 to-teal-400 text-white dark:from-blue-800 dark:to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] -z-10"></div>
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert laptop repair solutions at your fingertips. We're here to
              help.
            </p>
            <WhatsappButton />
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl">
              <Image
                src="/images/wepz-3d.webp"
                alt="Laptop-sRepair"
                width={600}
                height={400}
                className="rounded-xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg">24/7 Support</h3>
              <p>We're here to help anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours with modern styling */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
            Our Business Hours
          </h2>
          <BusinessHours />
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
            Reach Out to Us
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Map Section with sleek design */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
            Find Us Here
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}
