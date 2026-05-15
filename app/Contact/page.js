'use client';
import { Typewriter } from 'react-simple-typewriter';

export default function Contact() {
  return (
    <main style={{
      fontFamily: "'Outfit', sans-serif",
      background: "#fff0f5",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Top stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      {/* Main content */}
      <div style={{
        flex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "60px 24px",
        position: "relative", overflow: "hidden",
      }}>

        {/* Background blobs */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, #ffd6e8 0%, transparent 70%)", opacity: 0.6, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, #ffb6d1 0%, transparent 70%)", opacity: 0.4, pointerEvents: "none" }} />

        {/* Card */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "#fff",
          border: "1px solid #f7b3d0",
          borderRadius: "24px",
          padding: "48px",
          width: "100%", maxWidth: "640px",
          boxShadow: "0 12px 40px rgba(233,30,140,0.07)",
        }} className="contact-card">

          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            fontSize: "10px", fontWeight: 700, letterSpacing: "5px",
            color: "#e91e8c", textTransform: "uppercase", marginBottom: "16px",
          }}>
            <div style={{ height: "1px", width: "28px", background: "#e91e8c" }} />
            Get In Touch
            <div style={{ height: "1px", width: "28px", background: "#e91e8c" }} />
          </div>

          {/* Animated heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700, color: "#2a0a16",
            lineHeight: 1, letterSpacing: "-1.5px",
            marginBottom: "10px",
          }}>
            <Typewriter
              words={['Contact Us', 'Say Hello', 'Work With Us']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h1>

          {/* Divider */}
          <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg, #e91e8c, #f9a8d4)", borderRadius: "100px", margin: "0 0 16px" }} />

          <p style={{ fontSize: "14px", color: "#7a3050", lineHeight: 1.75, fontWeight: 300, marginBottom: "32px" }}>
            We would love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message below.
          </p>

          {/* Form */}
          <form>
            {/* Name */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c2185b", marginBottom: "8px" }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="contact-input"
                style={{
                  width: "100%", padding: "12px 16px",
                  border: "1px solid #f7b3d0", borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                  color: "#2a0a16", background: "#fff8fb", outline: "none",
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c2185b", marginBottom: "8px" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="contact-input"
                style={{
                  width: "100%", padding: "12px 16px",
                  border: "1px solid #f7b3d0", borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                  color: "#2a0a16", background: "#fff8fb", outline: "none",
                }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#c2185b", marginBottom: "8px" }}>
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Type your message here..."
                className="contact-input"
                style={{
                  width: "100%", padding: "12px 16px",
                  border: "1px solid #f7b3d0", borderRadius: "10px",
                  fontFamily: "'Outfit', sans-serif", fontSize: "14px",
                  color: "#2a0a16", background: "#fff8fb", outline: "none",
                  resize: "vertical", minHeight: "120px",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="contact-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                width: "100%", padding: "14px",
                background: "linear-gradient(135deg, #e91e8c, #c2185b)",
                color: "#fff", border: "none", borderRadius: "12px",
                fontFamily: "'Outfit', sans-serif", fontSize: "14px", fontWeight: 700,
                letterSpacing: "0.5px", cursor: "pointer",
                boxShadow: "0 8px 24px rgba(233,30,140,0.25)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom stripe */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

        .contact-input:focus {
          border-color: #e91e8c !important;
          box-shadow: 0 0 0 3px rgba(233,30,140,0.08) !important;
        }
        .contact-input::placeholder { color: #d4a0b4; }

        .contact-btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .contact-btn { transition: opacity 0.2s, transform 0.2s; }

        @media (max-width: 520px) {
          .contact-card { padding: 32px 20px 28px !important; }
        }
      `}</style>
    </main>
  );
}