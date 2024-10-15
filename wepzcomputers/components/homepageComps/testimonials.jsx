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
    <section className="py-16 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50"></div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-all duration-300 ease-in-out">
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <svg
                          className="h-8 w-8 text-indigo-500 mb-4"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="flex items-center mt-4">
                        <Image
                          className="h-10 w-10 rounded-full object-cover"
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=wepzcomputers+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Read More Reviews on Google
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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
