import { Cpu, Wrench, ShieldCheck, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Cpu size={32} className="text-blue-500" />,
      title: "Expert Technicians",
      description:
        "Our technicians are certified and experienced in all kinds of repairs and builds.",
      imageUrl: "/images/3d-cartoon-lumberjack-character.jpg",
    },
    {
      icon: <Wrench size={32} className="text-blue-500" />,
      title: "Quick and Reliable Service",
      description:
        "We offer fast turnaround times without compromising quality.",
      imageUrl: "/images/laptop-repair-animated.webp",
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-500" />,
      title: "Warranty on Repairs",
      description:
        "All repairs come with a 6-month warranty for your peace of mind.",
      imageUrl: "/images/doll-display-out-surfing.jpg",
    },
    {
      icon: <ThumbsUp size={32} className="text-blue-500" />,
      title: "Customer Satisfaction",
      description:
        "Our clients love our service, with a 98% customer satisfaction rate.",
      imageUrl: "/images/computerRepair.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={reason.imageUrl}
                alt={reason.title}
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-30">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
