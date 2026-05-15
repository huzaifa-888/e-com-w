'use client'; // Only for app directory. Remove if you're using pages directory.

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ router import

export default function Home() {
  const typedRef = useRef(null);
  const elRef = useRef(null);
  const router = useRouter(); // ✅ router defined here

  useEffect(() => {
    const options = {
      strings: [
        "Website Developer",
        "App Developer",
        "Video Designer",
        "Creative Coder",
        "UI/UX Enthusiast",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    typedRef.current = new Typed(elRef.current, options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#111] text-white flex items-center justify-center p-8">
      <div className="bg-gradient-to-r from-[#111] mb-14 to-[#111] rounded-xl shadow-lg p-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            CODE THE <span className="text-pink-500">FUTURE</span>
            <br />
            WITH <span className="text-pink-500">FALESTIX</span>
          </h1>

          <h2 className="text-xl mt-4 font-semibold text-pink-400">
            <span ref={elRef} />
          </h2>

          <p className="mt-4 text-gray-400">
            I create immersive digital experiences that blend cutting-edge
            technology with stunning visuals. My passion is turning complex
            ideas into intuitive interfaces that captivate users and push
            boundaries.
          </p>

          <div className="mt-6 flex gap-4">
            <button 
              onClick={() => router.push("/project")} 
              className="px-5 py-2 rounded bg-pink-600 text-white font-semibold shadow-pink-500 shadow-md hover:bg-pink-700 transition"
            >
              🔥 New Projects
            </button>

            <button
              onClick={() => router.push("/Services")} 
              className="px-5 py-2 rounded border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white transition"
            >
              📧 Services
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="rounded-full p-1 bg-pink-600 animate-pulse">
            <Image
              src="/images/mmm.png"   // ✅ Must be in public/images/
              alt="Neon Person"
              width={350}
              height={350}
              className="rounded-full"
              unoptimized   // ✅ helps avoid Next.js image optimization issues
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 px-3 py-1 rounded flex items-center gap-2 text-white mt-2">
            <span className="text-lg">👍</span> <span>2</span>
          </div>
        </div>
      </div>
    </main>
  );
}
