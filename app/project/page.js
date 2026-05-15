'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Mobile App 1",
    image: "/images/App.jpg",
    description: "A task manager with reminders, local DB and sync.",
    video: "https://youtube.com/shorts/s1cPZ9GIxjM?si=syjveFvbzmabf3iv",
    link: "/projects/mobile-app-1",
  },
  {
    id: 2,
    title: "Mobile App 2",
    image: "/images/aa.jpg",
    description: "A productivity app with YouTube demo link.",
    video: "https://youtube.com/shorts/D558TdNEfX8?si=ULWLv8HrIrmuKPj4",
    link: "/projects/mobile-app-2",
  },
  {
    id: 3,
    title: "Website",
    image: "/images/ww.jpg",
    description: "Responsive marketing site with CMS integration.",
    video: "/videos/web.mp4",
    link: "/projects/website",
  },
  {
    id: 4,
    title: "Desktop Application",
    image: "/images/desk.jpg",
    description: "Electron-based inventory manager with barcode scanning.",
    video: "https://youtu.be/rKAReNowzZ4?si=LoMkM3KaQ8hJ5dQw",
    link: "/projects/desktop-app",
  },
  {
    id: 5,
    title: "Hand Gesture Detection (AI)",
    image: "/images/main.png",
    description: "Real-time gesture recognition using a trained ML model.",
    video: "https://youtu.be/YwE4Rg6QSzg?si=RQaef3-ThjYehZU5",
    link: "/projects/hand-gesture-ai",
  },
  {
    id: 6,
    title: "E-Commerce Store",
    image: "/images/web.jpg",
    description: "Full-stack online store with cart, checkout & payments.",
    video: "/videos/ecommerce.mp4",
    link: "/projects/ecommerce",
  },
  {
    id: 8,
    title: "Video Editing Project",
    image: "/images/ve.jpg",
    description: "Cinematic edits, motion graphics & storytelling.",
    video: "/videos/editing.mp4",
    link: "/projects/video-editing",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectsPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleWatchVideo = (videoUrl) => {
    if (videoUrl.includes("youtube") || videoUrl.includes("youtu.be")) {
      window.open(videoUrl, "_blank");
    } else {
      setActiveVideo(videoUrl);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#1a1a1a] rounded-xl p-5 shadow-md hover:shadow-pink-500 transition cursor-pointer flex flex-col items-center text-center w-full sm:w-60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 mb-4 rounded-full border-2 border-pink-600 object-cover"
            />
            <h3 className="text-lg font-bold text-pink-500">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleWatchVideo(project.video)}
                className="bg-pink-600 text-white px-3 py-1 rounded text-sm hover:bg-pink-700 transition"
              >
                🎥 Watch Video
              </button>
              <a
                href={project.link}
                className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition"
              >
                📖 Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Only for local mp4 videos */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              ✕
            </button>
            <div className="relative pb-[56.25%] h-0">
              <video
                src={activeVideo}
                controls
                className="absolute top-0 left-0 w-full h-full"
              ></video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}