"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    author: "Leslie Alexander",
    role: "@lesliealexander",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
    author: "Breanna Olaythe",
    role: "@breannaolaythe",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint.",
    author: "Leonard Krasner",
    role: "@leonardkrasner",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.",
    author: "Michael Foster",
    role: "@michaelfoster",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
    author: "Lindsay Walton",
    role: "@lindsaywalton",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
    author: "Tom Cook",
    role: "@tomcook",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    author: "Dries Vincent",
    role: "@driesvincent",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Nam praesentium iusto voluptas enim dolor maxime provident. Culpa aliquam, hic aut omnis dolores natus tenetur quaerat inventore fugiat perferendis.",
    author: "Courtney Henry",
    role: "@courtneyhenry",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Velit dolorem quo explicabo id. Voluptatibus harum ullam odio sed animi corporis.",
    author: "Whitney Francis",
    role: "@whitneyfrancis",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function ScatteredTestimonialsSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-center text-lg font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
              Testimonials
            </span>
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="relative w-[90%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col rounded-lg shadow-lg overflow-hidden `}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div
                    className={`flex-1 bg-white h-full dark:bg-gray-800 p-6 flex flex-col justify-between transform hover:shadow-2xl transition-all duration-300 ease-in-out ${
                      index === 1 ? "md:col-span-3" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        <span className="text-4xl leading-none font-extrabold text-indigo-600 dark:text-indigo-400">
                          "
                        </span>
                      </p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={testimonial.avatar}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=wepzcomputers+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Read More About us on google
          </a>
        </div>
      </div>
    </section>
  );
}

// function getRandomPosition() {
//   const positions = [
//     "sm:col-start-1 sm:row-start-1 span-2",
//     "sm:col-start-2 sm:row-start-2 span-1",
//     "lg:col-start-1 lg:row-start-3 span-1",
//     "lg:col-start-2 lg:row-start-1 span-2",
//     "lg:col-start-3 lg:row-start-2 span-1",
//     "sm:col-start-1 sm:row-start-3 span-1",
//     "sm:col-start-2 sm:row-start-4 span-1",
//     "lg:col-start-3 lg:row-start-4 span-1",
//     "lg:col-start-1 lg:row-start-5 span-1   ",
//   ];
//   return positions[Math.floor(Math.random() * positions.length)];
// }
