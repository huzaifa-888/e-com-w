"use client";

import React from "react";
import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" style={{ fill: "#fff0f5" }} />
        <circle cx="17.5" cy="6.5" r="1" style={{ fill: "#fff0f5" }} />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622z" />
      </svg>
    ),
  },
];

const quickLinks = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Categories", "/categories"],
  ["About Us", "/about"],
  ["Contact", "/Contact"],
];

const infoLinks = [
  ["Privacy Policy", "#"],
  ["Terms of Use", "#"],
  ["Partners", "#"],
];

function ColTitle({ children }) {
  return (
    <div
      style={{
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "4px",
        color: "#e91e8c",
        textTransform: "uppercase",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {children}
      <div style={{ flex: 1, height: "1px", background: "#f5d0e0" }} />
    </div>
  );
}

function ColLinks({ links }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {links.map(([label, href]) => (
        <li key={label} style={{ marginBottom: "10px" }}>
          <Link
            href={href}
            style={{
              fontSize: "13px",
              color: "#7a3050",
              textDecoration: "none",
            }}
          >
            • {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <>
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)",
        }}
      />

      <footer
        style={{
          background: "#fff",
          borderTop: "1px solid #f7b3d0",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "48px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr",
              gap: "40px",
            }}
          >
            {/* Brand */}
            <div>
              <Link
                href="/"
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "#2a0a16",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                Twinkle{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    background:
                      "linear-gradient(135deg, #e91e8c, #c2185b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Chic
                </em>
              </Link>

              <p style={{ fontSize: "13px", color: "#7a3050" }}>
                Your one-stop beauty destination ✨
              </p>
            </div>

            {/* Links */}
            <div>
              <ColTitle>Quick Links</ColTitle>
              <ColLinks links={quickLinks} />
            </div>

            {/* Info */}
            <div>
              <ColTitle>Information</ColTitle>
              <ColLinks links={infoLinks} />
            </div>
          </div>

          {/* Bottom */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              fontSize: "12px",
              color: "#b06080",
            }}
          >
            <p>© 2024 Twinkle Chic</p>
            <p>
              Made with <span style={{ color: "#e91e8c" }}>♥</span> in Pakistan
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}