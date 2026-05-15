"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { slug: "brandedmakeup", title: "Branded Makeup", image: "/images/hh.jpg", description: "Premium branded makeup for a flawless, long-lasting glow.", accent: "#e91e8c", num: "01", items: "120+", emoji: "💄" },
  { slug: "makeup", title: "Makeup", image: "/images/oo.jpg", description: "Everyday makeup essentials for your perfect daily look.", accent: "#c2185b", num: "02", items: "85+", emoji: "🌹" },
  { slug: "nails", title: "Nail Essentials", image: "/images/uu.jpg", description: "Nail polishes, tools & stickers for salon-perfect nails.", accent: "#ad1457", num: "03", items: "60+", emoji: "💅" },
  { slug: "jewellery", title: "Jewellery", image: "/images/jew.png", description: "Elegant pieces — necklaces, earrings, rings & more.", accent: "#880e4f", num: "04", items: "75+", emoji: "💎" },
  { slug: "hair-accessories", title: "Hair Accessories", image: "/images/pp.jpg", description: "Clips, bands, scrunchies — style your hair every day.", accent: "#d81b60", num: "05", items: "90+", emoji: "🎀" },
  { slug: "stationary", title: "Stationary", image: "/images/stat.jpg", description: "Cute notebooks, pens & stationery for daily creativity.", accent: "#e91e8c", num: "06", items: "45+", emoji: "📓" },
  { slug: "cute-items", title: "Cute Items", image: "/images/cut.jpg", description: "Adorable décor and lifestyle pieces for your space.", accent: "#c2185b", num: "07", items: "55+", emoji: "🌸" },
  { slug: "self-care", title: "Self Care", image: "/images/dd.jpg", description: "Skincare and wellness essentials for your daily routine.", accent: "#ad1457", num: "08", items: "40+", emoji: "✨" },
];

function CategoryCard({ cat, index }) {
  const [hov, setHov] = useState(false);

  return (
    <Link href={`/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          height: index === 0 || index === 3 ? '420px' : '300px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: hov ? 'scale(1.02)' : 'scale(1)',
          boxShadow: hov ? `0 24px 56px ${cat.accent}35` : '0 4px 20px rgba(0,0,0,0.12)',
        }}
      >
        {/* Image */}
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease', transform: hov ? 'scale(1.08)' : 'scale(1)' }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, ${cat.accent}ee 0%, rgba(0,0,0,0.4) 50%, transparent 80%)`,
          transition: 'opacity 0.3s',
        }} />

        {/* Top number */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px', fontWeight: 800,
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '3px',
        }}>
          {cat.num}
        </div>

        {/* Items count badge */}
        <div style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.25)',
          color: '#fff',
          fontSize: '10px', fontWeight: 700,
          padding: '4px 10px', borderRadius: '100px',
          letterSpacing: '0.5px',
        }}>
          {cat.items} items
        </div>

        {/* Bottom content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 22px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                fontSize: '11px', fontWeight: 700,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '2px', textTransform: 'uppercase',
                marginBottom: '5px',
              }}>
                {cat.emoji} {cat.num}
              </div>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: index === 0 || index === 3 ? '28px' : '20px',
                fontWeight: 900, color: '#fff',
                margin: 0, lineHeight: 1.1, letterSpacing: '-0.5px',
                textTransform: 'uppercase',
              }}>
                {cat.title}
              </h3>
              <p style={{
                fontSize: '12px', color: 'rgba(255,255,255,0.7)',
                margin: '6px 0 0', lineHeight: 1.5, fontWeight: 400,
                maxWidth: '220px',
                opacity: hov ? 1 : 0,
                transform: hov ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.3s ease',
              }}>
                {cat.description}
              </p>
            </div>

            {/* Arrow */}
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              transform: hov ? 'rotate(-45deg)' : 'rotate(0)',
              transition: 'transform 0.3s',
            }}>
              <span style={{ color: '#fff', fontSize: '16px' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {

  return (
    <main style={{ fontFamily: "'Montserrat', sans-serif", background: '#fdfafa', minHeight: '100vh' }}>

      {/* Header section */}
      <div style={{ background: '#fff0f5', padding: '52px 40px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f7b3d0' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, #ffd6e8 0%, transparent 70%)', pointerEvents: 'none', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, #ffb6d1 0%, transparent 70%)', pointerEvents: 'none', opacity: 0.35 }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '10px', fontWeight: 700, letterSpacing: '5px', color: '#e91e8c', textTransform: 'uppercase', marginBottom: '20px' }}>
            <div style={{ height: '1px', width: '36px', background: '#e91e8c' }} />
            Our Collections
            <div style={{ height: '1px', width: '36px', background: '#e91e8c' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 900, lineHeight: 0.92,
            letterSpacing: '-2px', color: '#2a0a16',
            marginBottom: '16px', textTransform: 'uppercase',
          }}>
            Where Pretty{' '}
            <span style={{ background: 'linear-gradient(135deg, #e91e8c, #c2185b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Finds You
            </span>
          </h1>

          <p style={{ fontSize: '14px', color: '#7a3050', fontWeight: 400, marginBottom: '24px', letterSpacing: '1px' }}>
            8 Curated Categories · All Things Pretty
          </p>

          <div style={{ width: '56px', height: '2px', background: 'linear-gradient(90deg, #e91e8c, #f9a8d4)', borderRadius: '100px', margin: '0 auto' }} />
        </div>
      </div>

      {/* Bento grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 64px' }}>
        {/* Row 1: 2 cols — first tall, second normal */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="grid-row-1">
          <CategoryCard cat={categories[0]} index={0} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CategoryCard cat={categories[1]} index={1} />
            <CategoryCard cat={categories[2]} index={2} />
          </div>
        </div>

        {/* Row 2: 3 cols */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }} className="grid-row-2">
          <CategoryCard cat={categories[3]} index={3} />
          <CategoryCard cat={categories[4]} index={4} />
          <CategoryCard cat={categories[5]} index={5} />
        </div>

        {/* Row 3: 2 cols */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="grid-row-3">
          <CategoryCard cat={categories[6]} index={6} />
          <CategoryCard cat={categories[7]} index={7} />
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '48px', background: 'linear-gradient(135deg, #fff0f5, #ffe0ef)', border: '1px solid #f7b3d0', borderRadius: '16px', padding: '36px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#e91e8c', textTransform: 'uppercase', marginBottom: '8px' }}>Today's Special</p>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#2a0a16', letterSpacing: '-0.5px', margin: 0 }}>Don't Miss Our Flash Deals 🔥</h3>
            <p style={{ fontSize: '13px', color: '#7a3050', margin: '6px 0 0', fontWeight: 400 }}>Save up to 40% on bundles and curated sets</p>
          </div>
          <Link href="/deals" style={{ textDecoration: 'none' }}>
            <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', color: '#fff', padding: '13px 32px', borderRadius: '10px', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', boxShadow: '0 8px 24px rgba(233,30,140,0.3)' }}>
              Shop Deals →
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-row-1 { grid-template-columns: 1fr !important; }
          .grid-row-2 { grid-template-columns: 1fr 1fr !important; }
          .grid-row-3 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
