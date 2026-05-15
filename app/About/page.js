"use client";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const offerings = [
  "Branded Makeup",
  "Makeup",
  "Hair Accessories",
  "Jewellery",
  "Stationary",
  "Cute Items",
  "Self Care",
  "Nail Essentials",
];

export default function AboutPage() {
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      background: "#fff0f5",
      color: "#2a0a16",
      minHeight: "100vh",
    }}>

      {/* Top stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      {/* HERO */}
      <div style={{
        padding: "48px 40px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
        maxWidth: "960px",
        margin: "0 auto",
      }} className="hero-grid">

        {/* Left */}
        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{
            fontSize: "10px", fontWeight: 600, letterSpacing: "5px",
            color: "#e91e8c", textTransform: "uppercase",
            marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px",
          }}>
            <div style={{ height: "1px", width: "32px", background: "#e91e8c" }} />
            Est. 2024
            <div style={{ height: "1px", width: "32px", background: "#e91e8c" }} />
          </div>

          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(52px, 7vw, 88px)",
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: "-2px",
            marginBottom: "18px",
          }}>
            <span style={{ display: "block", color: "#2a0a16" }}>Twinkle</span>
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #e91e8c, #ff6ec7, #c2185b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Chic</span>
          </div>

          <p style={{
            fontSize: "14px", color: "#7a3050", lineHeight: 1.75,
            fontWeight: 300, marginBottom: "28px",
          }}>
            Your one-stop destination for all things pretty, cute & stylish — where luxury meets everyday beauty.
          </p>

          <div style={{ display: "flex", gap: "28px" }}>
            {[["500+", "Products"], ["8", "Categories"], ["100%", "Authentic"]].map(([val, label]) => (
              <div key={label}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "32px", fontWeight: 700, color: "#e91e8c", lineHeight: 1,
                }}>{val}</div>
                <div style={{
                  fontSize: "10px", letterSpacing: "2px", color: "#b06080",
                  textTransform: "uppercase", marginTop: "2px",
                }}>{label}</div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Right — Quote panel */}
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            background: "linear-gradient(145deg, #fff 60%, #ffe8f2 100%)",
            border: "1px solid #f7b3d0",
            borderRadius: "16px",
            padding: "36px 32px",
            boxShadow: "0 8px 28px rgba(233,30,140,0.07)",
            position: "relative",
          }}
        >
          <div style={{
            fontSize: "68px",
            fontFamily: "'Montserrat', sans-serif",
            color: "#ffd6e8", lineHeight: 1,
            position: "absolute", top: "8px", left: "20px",
          }}>&ldquo;</div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "19px", fontStyle: "italic",
            color: "#2a0a16", lineHeight: 1.65,
            marginTop: "24px", marginBottom: "18px",
          }}>
            Because you deserve pretty things, every single day.
          </p>
          <div style={{ height: "1px", background: "linear-gradient(90deg, #e91e8c, transparent)", marginBottom: "12px" }} />
          <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#e91e8c", textTransform: "uppercase", fontWeight: 600 }}>
            Twinkle Chic ✦ Pakistan
          </div>
        </MotionDiv>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "32px 40px 40px" }}>

        {/* WHAT WE OFFER */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          marginBottom: "20px", fontSize: "10px", fontWeight: 600,
          letterSpacing: "4px", color: "#e91e8c", textTransform: "uppercase",
        }}>
          <span>What We Offer</span>
          <div style={{ height: "1px", flex: 1, background: "#f5b8d0" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          marginBottom: "32px",
          paddingBottom: "32px",
          borderBottom: "1px solid #f5b8d0",
        }} className="offer-grid">
          {offerings.map((item) => (
            <MotionDiv
              key={item}
              whileHover={{ translateY: -2, boxShadow: "0 8px 20px rgba(233,30,140,0.1)" }}
              style={{
                background: "#fff",
                border: "1px solid #f7b3d0",
                borderRadius: "12px",
                padding: "16px 14px",
                display: "flex", flexDirection: "column", gap: "6px",
              }}
            >
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#2a0a16", lineHeight: 1.3 }}>{item}</div>
              <div style={{ width: "16px", height: "2px", background: "#e91e8c" }} />
            </MotionDiv>
          ))}
        </div>

        {/* CONTACT */}
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          marginBottom: "20px", fontSize: "10px", fontWeight: 600,
          letterSpacing: "4px", color: "#e91e8c", textTransform: "uppercase",
        }}>
          <span>Contact Us</span>
          <div style={{ height: "1px", flex: 1, background: "#f5b8d0" }} />
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px", marginBottom: "14px",
        }} className="contact-grid">

          <div style={{ background: "#fff", border: "1px solid #f7b3d0", borderRadius: "12px", padding: "20px 18px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, color: "#e91e8c", marginBottom: "8px" }}>Email</div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#2a0a16" }}>info@faylstech.com</div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #f7b3d0", borderRadius: "12px", padding: "20px 18px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, color: "#e91e8c", marginBottom: "8px" }}>Location</div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#2a0a16" }}>Wah Cantt, Pakistan</div>
          </div>

          <MotionDiv
            whileHover={{ translateY: -2, boxShadow: "0 6px 18px rgba(37,211,102,0.13)" }}
            style={{ background: "#fff", border: "1px solid #f7b3d0", borderRadius: "12px", padding: "20px 18px", cursor: "pointer" }}
            onClick={() => window.open("https://wa.me/923455350391", "_blank")}
          >
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600, color: "#1a8a48", marginBottom: "8px" }}>WhatsApp</div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#2a0a16" }}>+92 345 535 0391</div>
          </MotionDiv>
        </div>

        <MotionDiv whileHover={{ translateY: -2 }}>
          <a
            href="https://wa.me/923455350391"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "10px", width: "100%", padding: "16px",
              background: "linear-gradient(135deg, #e91e8c, #c2185b)",
              color: "#fff", borderRadius: "12px",
              fontWeight: 700, fontSize: "13px",
              letterSpacing: "2px", textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(233,30,140,0.28)",
            }}
          >
            Chat With Us on WhatsApp
          </a>
        </MotionDiv>
      </div>

      {/* Bottom stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 32px 20px 24px !important; }
          .offer-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}