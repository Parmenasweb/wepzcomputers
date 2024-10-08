// import Image from "next/image";
// import Link from "next/link";
// import {
//   Cpu,
//   HardDrive,
//   Wifi,
//   Battery,
//   Monitor,
//   Shield,
//   Clock,
//   ThumbsUp,
//   Star,
// } from "lucide-react";

// export default function FeaturedService({ details }) {
//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
//           Our Expert Services in Detail
//         </h2>
//         <div className="space-y-12">
//           {details.map((service, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row items-center gap-8 transition duration-300 ease-in-out transform hover:scale-[1.02]"
//             >
//               <div className="md:w-1/2">
//                 <h3 className="text-2xl font-semibold mb-4 dark:text-white">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {service.description}
//                 </p>
//                 <Link
//                   href="#contact"
//                   className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition duration-300 ease-in-out"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//               <div className="md:w-1/2 overflow-hidden rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={400}
//                   height={300}
//                   className="transition duration-300 ease-in-out transform hover:scale-110"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
