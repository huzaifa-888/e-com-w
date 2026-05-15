'use client';

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "App Development",
    image: "/images/App.jpg",
    description: "Build high-performance Android & iOS apps using modern frameworks.",
  },
  {
    title: "Website Development",
    image: "/images/web.jpg",
    description: "Responsive and modern websites using Next.js, React, and more.",
  },
  {
    title: "Video Editing",
    image: "/images/ve.jpg",
    description: "Stunning video edits, intros, motion graphics and reels.",
  },
  {
    title: "Software Development",
    image: "/images/SE.jpg",
    description: "Powerful software tailored to business needs and automation.",
  },
  {
    title: "Desktop Applications",
    image: "/images/desk.jpg",
    description: "Cross-platform apps with Electron, Python or native frameworks.",
  },
  {
    title: "WordPress Websites",
    image: "/images/wp.jpg", // ✅ new unique image
    description: "Custom WordPress sites with themes, plugins & SEO optimization.",
  },
  {
    title: "Flutter Apps",
    image: "/images/flu.png", // ✅ new unique image
    description: "Cross-platform apps built with Flutter for Android & iOS.",
  },
];

export default function ServicesPage() {
  const typedRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, {
      strings: ["What I Do", "My Services", "Falestix Offers"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span ref={elRef} className="text-pink-500" />
        </h1>
        <p className="text-gray-400 mb-12">
          I provide top-notch digital services to turn your ideas into reality.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-pink-500 transition cursor-pointer flex flex-col items-center text-center w-full sm:w-72"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.png"; // ✅ fallback agar image missing ho
                }}
              />
              <h3 className="text-xl font-bold text-pink-500">{service.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
