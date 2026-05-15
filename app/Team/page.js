"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const dealsData = [
  {
    id: "1",
    title: "50% Off on Electronics",
    desc: "Limited time deal on mobiles, laptops and accessories.",
    price: "Rs. 25,000",
    oldPrice: "Rs. 50,000",
    discount: "50%",
    tag: "Hot Deal",
    accent: "#e91e8c",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
  {
    id: "2",
    title: "Home Appliances Deal",
    desc: "Best price on AC, fridge, washing machines.",
    price: "Rs. 55,000",
    oldPrice: "Rs. 85,000",
    discount: "35%",
    tag: "Limited",
    accent: "#c2185b",
    img: "https://images.unsplash.com/photo-1586201375754-1421e0aa2cfe?w=800&q=80",
  },
  {
    id: "3",
    title: "Fashion Summer Sale",
    desc: "Top brands up to 60% off — dresses, shoes & bags.",
    price: "Rs. 3,500",
    oldPrice: "Rs. 9,000",
    discount: "60%",
    tag: "Trending",
    accent: "#ad1457",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "4",
    title: "Beauty & Skincare",
    desc: "Premium skincare bundles at unbeatable prices.",
    price: "Rs. 4,200",
    oldPrice: "Rs. 12,000",
    discount: "65%",
    tag: "Premium",
    accent: "#e91e8c",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
];

function DealCard({ deal, whatsappLink }) {
  return (
    <motion.div
      whileHover={{ translateY: -4, boxShadow: "0 16px 40px rgba(233,30,140,0.13)" }}
      transition={{ duration: 0.2 }}
      style={{
        background: "#fff",
        border: "1px solid #f7b3d0",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Top accent line */}
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${deal.accent}, #f9a8d4, transparent)` }} />

      {/* Image */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#fce4ec" }}>
        <motion.img
          src={deal.img}
          alt={deal.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(42,10,22,0.55) 0%, transparent 55%)" }} />

        {/* Tag */}
        <div style={{
          position: "absolute", bottom: "10px", left: "10px",
          background: "rgba(255,255,255,0.18)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "100px", padding: "3px 10px",
          fontSize: "11px", fontWeight: 600, color: "#fff",
          backdropFilter: "blur(6px)",
        }}>
          {deal.tag}
        </div>

        {/* Discount badge */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          width: "52px", height: "52px", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "13px", fontWeight: 800, color: "#fff",
          background: `linear-gradient(135deg, ${deal.accent}, #880e4f)`,
        }}>
          -{deal.discount}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "17px", fontWeight: 700, color: "#2a0a16",
          marginBottom: "6px", lineHeight: 1.3,
        }}>
          {deal.title}
        </h2>

        <p style={{ fontSize: "12px", color: "#7a3050", lineHeight: 1.6, marginBottom: "14px", fontWeight: 300 }}>
          {deal.desc}
        </p>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#e91e8c" }}>{deal.price}</span>
          <span style={{ fontSize: "12px", color: "#b06080", textDecoration: "line-through" }}>{deal.oldPrice}</span>
          <span style={{
            marginLeft: "auto",
            background: "#ffe0ef", border: "1px solid #f7b3d0",
            color: "#c2185b", fontSize: "10px", fontWeight: 700,
            padding: "2px 8px", borderRadius: "100px",
          }}>
            Save {deal.discount}
          </span>
        </div>

        {/* WhatsApp button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ opacity: 0.88 }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "7px", width: "100%", padding: "10px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #25D366, #128C7E)",
            color: "#fff", fontWeight: 700, fontSize: "13px",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp size={16} />
          Chat on WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function DealsPage() {
  const whatsappLink = `https://wa.me/923455350391?text=${encodeURIComponent("Hello! I want to know more about your deals.")}`;

  return (
    <div style={{
      fontFamily: "'Jost', sans-serif",
      background: "#fff0f5",
      color: "#2a0a16",
      minHeight: "100vh",
    }}>

      {/* Top stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      <div style={{ padding: "40px 24px 48px", maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <div style={{
            display: "inline-block",
            background: "#ffe0ef", border: "1px solid #f7b3d0",
            borderRadius: "100px", padding: "5px 18px",
            fontSize: "11px", fontWeight: 700, letterSpacing: "3px",
            color: "#c2185b", textTransform: "uppercase", marginBottom: "16px",
          }}>
            Exclusive Offers
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 700, color: "#2a0a16",
            lineHeight: 1.05, marginBottom: "12px",
          }}>
            Latest{" "}
            <span style={{
              background: "linear-gradient(135deg, #e91e8c, #c2185b)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Deals
            </span>
          </h1>

          <p style={{ fontSize: "14px", color: "#7a3050", fontWeight: 300, maxWidth: "380px", margin: "0 auto 20px" }}>
            Handpicked offers updated daily — grab them before they expire
          </p>

          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #e91e8c, #f9a8d4)", borderRadius: "100px", margin: "0 auto" }} />
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "32px",
        }} className="deals-grid">
          {dealsData.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <DealCard deal={deal} whatsappLink={whatsappLink} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ translateY: -2, boxShadow: "0 12px 32px rgba(233,30,140,0.3)" }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 36px",
              background: "linear-gradient(135deg, #e91e8c, #c2185b)",
              color: "#fff", borderRadius: "100px",
              fontWeight: 700, fontSize: "14px",
              textDecoration: "none", letterSpacing: "0.5px",
            }}
          >
            <FaWhatsapp size={20} />
            View All Deals on WhatsApp
          </motion.a>
          <p style={{ fontSize: "12px", color: "#b06080", marginTop: "10px", fontWeight: 300 }}>
            Limited stock — offers change daily
          </p>
        </motion.div>
      </div>

      {/* Bottom stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Jost:wght@300;400;500;600;700&display=swap');
        @media (max-width: 500px) {
          .deals-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}