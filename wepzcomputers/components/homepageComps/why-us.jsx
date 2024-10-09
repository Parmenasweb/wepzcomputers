import { Cpu, Wrench, ShieldCheck, ThumbsUp } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: <Cpu size={32} className="text-blue-500" />,
    title: "Expert Technicians",
    description: "Our certified technicians excel in all repairs and builds.",
    imageUrl: "/images/3d-cartoon-lumberjack-character.jpg",
  },
  {
    icon: <Wrench size={32} className="text-blue-500" />,
    title: "Quick and Reliable Service",
    description: "Fast turnaround without compromising on quality.",
    imageUrl: "/images/laptop-repair-animated.webp",
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-500" />,
    title: "Warranty on Repairs",
    description: "6-month warranty on all repairs for your peace of mind.",
    imageUrl: "/images/doll-display-out-surfing.jpg",
  },
  {
    icon: <ThumbsUp size={32} className="text-blue-500" />,
    title: "Customer Satisfaction",
    description: "98% customer satisfaction rate - our clients love us!",
    imageUrl: "/images/computerRepair.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReasonCard = ({ icon, title, description, imageUrl }) => (
  <div className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={300}
      className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-30">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default WhyChooseUs;
