'use client';
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const navLinks = [
  ["Home", "/"],
  ["Categories", "/Categories"],
  ["About", "/About"],
  ["Deals 🔥", "/deals"],
  ["Contact", "/login"],
];

const catLinks = [
  ["Makeup", "/makeup"],
  ["Branded Makeup", "/brandedmakeup"],
  ["Perfumes", "/Perfume"],
  ["Hair Accessories", "/hair-accessories"],
  ["Nails", "/nails"],
  ["Jewellery", "/jewellery"],
  ["Cute Items", "/cute-items"],
  ["Stationary", "/stationary"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav style={{
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #f7b3d0",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "0 24px", height: "64px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "16px",
        }}>

          {/* Logo */}
          <Link href="/" style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "22px", fontWeight: 800,
            color: "#2a0a16", textDecoration: "none",
            letterSpacing: "0px", whiteSpace: "nowrap",
            flexShrink: 0, textTransform: "uppercase",
          }}>
            Twinkle{" "}
            <span style={{
              background: "linear-gradient(135deg, #e91e8c, #c2185b)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Chic
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="desktop-links" style={{
            display: "flex", alignItems: "center", gap: "28px",
            listStyle: "none", margin: 0, padding: 0,
          }}>
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="nav-link">{label}</Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
            <Link href="/cart" className="icon-link" style={{ position: "relative", color: "#7a3050", textDecoration: "none" }}>
              <ShoppingCart size={22} strokeWidth={1.8} />
              <span style={{
                position: "absolute", top: "-8px", right: "-8px",
                background: "#e91e8c", color: "#fff",
                fontSize: "9px", fontWeight: 700,
                width: "16px", height: "16px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>2</span>
            </Link>

            <Link href="/account" className="icon-link" style={{
              display: "flex", alignItems: "center", gap: "6px",
              color: "#7a3050", textDecoration: "none",
              fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px",
            }}>
              <User size={22} strokeWidth={1.8} />
              <span className="account-label">Account</span>
            </Link>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none",
                cursor: "pointer", color: "#2a0a16",
                display: "none", padding: "4px",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div style={{
            background: "#fff",
            borderTop: "1px solid #f7b3d0",
            padding: "16px 24px 24px",
          }}>
            <ul style={{ listStyle: "none", margin: "0 0 20px", padding: 0 }}>
              {navLinks.map(([label, href]) => (
                <li key={href} style={{ borderBottom: "1px solid #fff0f5" }}>
                  <Link href={href} onClick={() => setMenuOpen(false)} style={{
                    display: "block", padding: "12px 0",
                    fontSize: "14px", fontWeight: 600,
                    color: "#2a0a16", textDecoration: "none",
                    textTransform: "uppercase", letterSpacing: "1px",
                  }}>{label}</Link>
                </li>
              ))}
            </ul>
            <div style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "3px",
              color: "#e91e8c", textTransform: "uppercase", marginBottom: "12px",
            }}>Categories</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {catLinks.map(([label, href]) => (
                <li key={href} style={{ borderBottom: "1px solid #fff0f5" }}>
                  <Link href={href} onClick={() => setMenuOpen(false)} style={{
                    display: "block", padding: "10px 0",
                    fontSize: "13px", fontWeight: 500,
                    color: "#7a3050", textDecoration: "none",
                  }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Pink stripe */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)" }} />

      {/* CATEGORY NAVBAR */}
      <nav className="cat-nav" style={{
        width: "100%",
        background: "#fff0f5",
        borderBottom: "1px solid #f7b3d0",
        fontFamily: "'Montserrat', sans-serif",
        overflowX: "auto",
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "0 24px", height: "40px",
          display: "flex", alignItems: "center", justifyContent: "center",
          minWidth: "max-content",
        }}>
          <ul style={{
            display: "flex", alignItems: "center",
            listStyle: "none", margin: 0, padding: 0,
          }}>
            {catLinks.map(([label, href], i) => (
              <li key={href}>
                <Link href={href} className="cat-link" style={{
                  display: "block",
                  fontSize: "11px", fontWeight: 600,
                  color: "#7a3050", textDecoration: "none",
                  padding: "0 14px", lineHeight: "40px",
                  whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: "0.5px",
                  borderRight: i < catLinks.length - 1 ? "1px solid #f7b3d0" : "none",
                }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style>{`
        .nav-link {
          font-size: 12px; font-weight: 600;
          color: #7a3050; text-decoration: none;
          letter-spacing: 1px; text-transform: uppercase;
          position: relative; padding-bottom: 2px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: ''; position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #e91e8c;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #e91e8c; }
        .nav-link:hover::after { width: 100%; }
        .icon-link:hover { color: #e91e8c !important; }
        .cat-link:hover { color: #e91e8c !important; background: #ffe0ef; }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .hamburger { display: flex !important; }
          .account-label { display: none; }
          .cat-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
