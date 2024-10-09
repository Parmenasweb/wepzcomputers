"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

// Sample data for the brand logos
const brands = [
  {
    id: 1,
    name: "Dell",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png", // Replace with your logo paths
  },
  {
    id: 2,
    name: "HP",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/480px-HP_logo_2012.svg.png",
  },
  {
    id: 3,
    name: "Apple",
    logoUrl:
      "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png",
  },
  {
    id: 4,
    name: "Lenovo",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png",
  },
  {
    id: 5,
    name: "Asus",
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png",
  },
  {
    id: 6,
    name: "Acer",
    logoUrl: "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png",
  },
  {
    id: 7,
    name: "Microsoft",
    logoUrl:
      "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 8,
    name: "Samsung",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  },
];

const BrandsWeWorkWith = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const animateScroll = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollDistance = container.scrollWidth / brands.length;
      container.scrollLeft += scrollDistance;
      if (container.scrollLeft >= scrollDistance) {
        container.scrollLeft = 0;
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(animateScroll, 3000);
    }
    return () => clearInterval(interval);
  }, [isVisible, animateScroll]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Brands We Work With</h2>
        <div
          ref={containerRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="m-4 flex-none w-32">
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className="w-full h-auto object-contain transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsWeWorkWith;
