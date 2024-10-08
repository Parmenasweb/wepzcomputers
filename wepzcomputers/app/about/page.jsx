"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Zap, Shield, Smile, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Cpu, Wrench, Flag } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <main className="container mx-auto px-4 py-32">
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            About WEPZ Computers
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering users with expert computer repairs and custom builds.
            We're dedicated to providing top-notch service and innovative
            solutions for all your tech needs.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Image
            src="/images/wepz-3d.webp"
            alt="Team collaboration"
            width={600}
            height={600}
            className="w-full h-72 md:h-96 object-cover object-top rounded-lg shadow-lg"
          />
        </motion.section>
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Our Impact since 2015
        </h2>
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              number: "2015",
              text: "Founded",
              icon: <Flag className="w-8 h-8 mb-2 mx-auto text-blue-500" />,
            },
            {
              number: "20+",
              text: "Team members",
              icon: <Users className="w-8 h-8 mb-2 mx-auto text-blue-500" />,
            },
            {
              number: "10,000+",
              text: "Devices repaired",
              icon: <Wrench className="w-8 h-8 mb-2 mx-auto text-blue-500" />,
            },
            {
              number: "500+",
              text: "Custom PC builds",
              icon: <Cpu className="w-8 h-8 mb-2 mx-auto text-blue-500" />,
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-6 text-center">
                {stat.icon}
                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  {stat.number}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{stat.text}</p>
              </CardContent>
            </Card>
          ))}
        </motion.section>

        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Our values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Customer-focused",
                description:
                  "We prioritize our customers' needs and satisfaction above all else.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Innovation",
                description:
                  "Constantly updating our skills and adopting the latest technologies.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Reliability",
                description:
                  "Delivering consistent, high-quality service you can count on.",
              },
              {
                icon: <Smile className="w-6 h-6" />,
                title: "Transparency",
                description:
                  "We believe in clear communication and honest pricing.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded-full">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                About Our Business
              </h2>
              <p className="text-black font-semibold text-lg dark:text-white mb-6">
                WEPZ Computers has been serving the community since 2015,
                providing top-notch computer repair and custom build services.
                Our founder, John Doe, started this business with a vision to
                make technology accessible and reliable for everyone.
              </p>
              <p className="text-black font-semibold text-lg dark:text-white mb-6">
                We pride ourselves on our technical expertise, customer-first
                approach, and our commitment to staying ahead of the curve in
                the ever-evolving world of technology. Whether you need a quick
                repair or a fully customized PC build, we're here to exceed your
                expectations.
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                Contact Us
              </Button>
            </div>
            <div className="h-full">
              <Image
                src="https://wepzcomputers.in/wp-content/uploads/2024/01/WepZ-Computer-Laptop-repair-.jpg"
                alt="John Doe, Founder of WEPZ Computers"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid md:grid-cols-2 gap-8 items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              We deal with all laptop and pc related issues
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At WEPZ Computers, we specialize in a wide range of laptop and PC
              services. From hardware repairs and software troubleshooting to
              custom builds and upgrades, our expert technicians are equipped to
              handle all your computer-related needs. We stay up-to-date with
              the latest technology trends to provide you with cutting-edge
              solutions for any issue you may encounter.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Hardware repairs and upgrades",
                "Software troubleshooting and optimization",
                "Custom PC builds and configurations",
                "Data recovery and backup solutions",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
              Reach out to us on Whatsapp
            </Button>
          </div>
          <div className="h-full">
            <img
              src="/images/laptop-build.webp"
              alt="Join our team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>
      </main>
    </div>
  );
}
