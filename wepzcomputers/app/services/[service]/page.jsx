import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  Monitor,
  Shield,
  Clock,
  ThumbsUp,
  Star,
} from "lucide-react";
import { services } from "@/lib/data";
import BrandsWeWorkWith from "@/components/homepageComps/logoHeads";
import WhyChooseUs from "@/components/homepageComps/why-us";
import ServiceCard from "../components/ServiceCard";
// import FeaturedService from "../components/FeaturedService";

export default function Services({ params }) {
  const service = params.service;
  const serviceData = services.find((item) => item.slug === service);
  if (!serviceData) {
    throw new Error(`Service not found: ${service}`);
  }

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section with Background Image */}
      <section className="relative w-full mx-auto rounded-2xl border border-gray-300 dark:border-gray-700 text-white py-20 h-[500px]">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src={serviceData.image}
            alt="Laptop Repair Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50"></div>
        </div>
        <div className="container mx-auto mt-24 lg:mt-32 px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-gray-100">
            Wepzcomputers {serviceData.title} Services
          </h1>
          <p className="text-xl mb-8 text-white dark:text-gray-200 animate-fade-in-up">
            {serviceData.description}
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white mt-12 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"
          >
            contact Us today
          </Link>
        </div>
      </section>

      {/* Main Services Overview */}
      <ServiceCard services={serviceData.features} />

      {/* Brands We Work With */}
      <BrandsWeWorkWith />

      {/* Detailed Service Descriptions */}
      {/* <FeaturedService details={serviceData.details} /> */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            What some of our customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Software Developer",
                content:
                  "They fixed my laptop in record time. Excellent service!",
              },
              {
                name: "Jane Smith",
                role: "Graphic Designer",
                content:
                  "The team went above and beyond to recover my lost files. Highly recommended!",
              },
              {
                name: "Mike Johnson",
                role: "Student",
                content:
                  "Affordable and professional. They saved me from a potential disaster before my finals.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {testimonial.content}
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Your device Fixed?
          </h2>
          <p className="text-xl mb-8">
            Contact wepzcomputers now for a free diagnostic and quote!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
