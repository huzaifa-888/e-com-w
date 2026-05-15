"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 108px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
        background: "#fff0f5",
      }}>

        {/* Background video */}
        <video
          autoPlay loop muted playsInline
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="video/model video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(42,10,22,0.55) 0%, rgba(42,10,22,0.4) 50%, rgba(42,10,22,0.35) 100%)",
        }} />

        {/* Corner decorations */}
        <div style={{ position: "absolute", top: "24px", left: "24px", width: "48px", height: "48px", borderTop: "2px solid rgba(233,30,140,0.5)", borderLeft: "2px solid rgba(233,30,140,0.5)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "24px", right: "24px", width: "48px", height: "48px", borderBottom: "2px solid rgba(233,30,140,0.5)", borderRight: "2px solid rgba(233,30,140,0.5)", pointerEvents: "none" }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          textAlign: "center", padding: "60px 24px 56px",
          maxWidth: "760px", margin: "0 auto",
        }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            fontSize: "10px", fontWeight: 700, letterSpacing: "5px",
            color: "#f9a8d4", textTransform: "uppercase", marginBottom: "24px",
          }}>
            <div style={{ height: "1px", width: "32px", background: "#f9a8d4" }} />
            Welcome to Twinkle Chic
            <div style={{ height: "1px", width: "32px", background: "#f9a8d4" }} />
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(44px, 8vw, 90px)",
            fontWeight: 900, lineHeight: 0.92,
            letterSpacing: "-3px", color: "#fff",
            marginBottom: "20px", textTransform: "uppercase",
          }}>
            Discover Your<br />
            <span style={{
              background: "linear-gradient(135deg, #e91e8c, #f48fb1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Beauty
            </span>
          </h1>

          {/* Divider */}
          <div style={{ width: "64px", height: "2px", background: "linear-gradient(90deg, #e91e8c, #f9a8d4)", borderRadius: "100px", margin: "0 auto 24px" }} />

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(13px, 1.8vw, 16px)",
            color: "rgba(255,255,255,0.8)", maxWidth: "500px",
            margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 400,
            letterSpacing: "0.3px",
          }}>
            Premium makeup, branded beauty products, jewellery and cute accessories — all in one place
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginBottom: "52px" }}>
            <Link href="/shop">
              <span style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #e91e8c, #c2185b)",
                color: "#fff", padding: "14px 40px",
                borderRadius: "8px", fontWeight: 800,
                fontSize: "13px", letterSpacing: "2px",
                textTransform: "uppercase",
                boxShadow: "0 10px 30px rgba(233,30,140,0.3)",
                cursor: "pointer", transition: "all 0.2s ease",
              }}>
                Shop Now
              </span>
            </Link>

            <Link href="/deals">
              <span style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff", padding: "14px 40px",
                borderRadius: "8px", fontWeight: 700,
                fontSize: "13px", letterSpacing: "2px",
                textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                Today&apos;s Deals 🔥
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            {[["500+", "Products"], ["8", "Categories"], ["100%", "Authentic"]].map(([val, label], i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "34px", fontWeight: 900,
                  background: "linear-gradient(135deg, #e91e8c, #f48fb1)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", lineHeight: 1, marginBottom: "4px",
                }}>{val}</p>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
