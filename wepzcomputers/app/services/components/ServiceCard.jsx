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
import { motion } from "framer-motion";

export default function ServiceCard({ services }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional {service.title.toLowerCase()} services for all
                laptop brands.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
