import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          What some of our customers say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Arjun K.",
              role: "Small Business Owner",
              content:
                "Exceptional service and expertise! I brought in my laptop for a screen replacement, and the team took care of it in no time. They even went the extra mile to clean the device and ensure everything was functioning properly. It’s clear they take pride in their work and genuinely care about their customers. I will definitely return for any future repairs.",
            },
            {
              name: "Priya M.",
              role: "Graphic Designer",
              content:
                "The laptop repair service exceeded my expectations. My laptop was running slow and had become almost unusable. They did a full system upgrade, and it’s now incredibly fast. I appreciated their clear communication, fair pricing, and willingness to explain the technical details. It’s great to have a trustworthy repair shop I can rely on",
            },
            {
              name: "Rahul S.",
              role: "IT Consultant",
              content:
                "Quick, professional, and affordable. I had an issue with my laptop’s keyboard, and it was fixed in just a few hours. The technician even took the time to give me advice on maintaining the laptop’s performance in the long run. I’ve been to a few repair shops before, but this one definitely stands out for their quality of service and customer care.",
            },
            {
              name: "Vikram Nath",
              role: "Student",
              content:
                "I thought my laptop was beyond saving after it got water-damaged, but this repair service worked wonders. They managed to get it back up and running, and I didn’t lose a single file. The staff was friendly, professional, and kept me updated throughout the process. I’m very happy with the results and would recommend them to anyone in need of tech repairs.",
            },
            {
              name: "Anjali T.",
              role: "Student",
              content:
                "I had a serious issue with my laptop crashing repeatedly, and I was worried I’d lose all my important work. The team here quickly diagnosed the problem and fixed it the same day. Not only did they repair my laptop, but they also optimized its performance. It’s running like brand new! I’m extremely grateful for their fast, efficient service and would highly recommend them to anyone in need of reliable laptop repair.",
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
  );
};

export default Testimonials;
