'use client';

import { useState } from 'react';
import Link from 'next/link';

const deals = [
  { id: 1, title: 'PERFUME BUNDLE', subtitle: 'Any 2 Fragrances', originalPrice: 4000, salePrice: 2999, saving: 1001, discount: 25, emoji: '🧴', tag: 'BEST SELLER', href: '/Perfume', color: '#e91e8c', dark: '#880e4f', image: '/images/oo.jpg', expires: '2d 14h', sold: 87 },
  { id: 2, title: 'MAKEUP STARTER KIT', subtitle: 'Foundation + Lipstick + Mascara', originalPrice: 5500, salePrice: 3499, saving: 2001, discount: 36, emoji: '💄', tag: 'LIMITED TIME', href: '/brandedmakeup', color: '#c2185b', dark: '#6a0f34', image: '/images/hh.jpg', expires: '1d 6h', sold: 64 },
  { id: 3, title: 'JEWELLERY SET', subtitle: 'Necklace + Earrings Combo', originalPrice: 3000, salePrice: 1999, saving: 1001, discount: 33, emoji: '💎', tag: 'HOT DEAL', href: '/jewellery', color: '#ad1457', dark: '#560a2b', image: '/images/jew.png', expires: '3d 0h', sold: 43 },
  { id: 4, title: 'HAIR PACK', subtitle: '10-Piece Accessories Set', originalPrice: 2500, salePrice: 1499, saving: 1001, discount: 40, emoji: '🎀', tag: 'FAN FAVORITE', href: '/hair-accessories', color: '#d81b60', dark: '#7b0d37', image: '/images/pp.jpg', expires: '5d 12h', sold: 129 },
  { id: 5, title: 'NAIL KIT', subtitle: 'Polish + Tools + Stickers', originalPrice: 2000, salePrice: 1199, saving: 801, discount: 40, emoji: '💅', tag: 'TOP PICK', href: '/nails', color: '#880e4f', dark: '#3d0726', image: '/images/uu.jpg', expires: '4d 8h', sold: 55 },
  { id: 6, title: 'SELF-CARE BUNDLE', subtitle: '5 Premium Essentials', originalPrice: 6000, salePrice: 3999, saving: 2001, discount: 33, emoji: '✨', tag: 'NEW ARRIVAL', href: '/self-care', color: '#e91e8c', dark: '#7a0847', image: '/images/dd.jpg', expires: '6d 22h', sold: 31 },
];

function DealCard({ deal, index }) {
  const [hov, setHov] = useState(false);
  const isFeatured = index === 0;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff', borderRadius: '16px', overflow: 'hidden',
        border: `1px solid ${hov ? deal.color + '55' : '#f0d0de'}`,
        boxShadow: hov ? `0 20px 48px ${deal.color}25` : '0 2px 12px rgba(233,30,140,0.08)',
        transition: 'all 0.3s ease',
        transform: hov ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
        gridColumn: isFeatured ? 'span 2' : 'span 1',
      }}
      className={isFeatured ? 'featured-card' : ''}
    >
      <div style={{ position: 'relative', height: isFeatured ? '260px' : '200px', overflow: 'hidden', background: `linear-gradient(135deg, ${deal.color}22, ${deal.dark}18)` }}>
        <img src={deal.image} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hov ? 'scale(1.07)' : 'scale(1)' }} onError={e => { e.target.style.display = 'none'; }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,2,10,0.65) 0%, rgba(20,2,10,0.1) 55%)' }} />
        <div style={{ position: 'absolute', top: '14px', left: '14px', background: deal.color, color: '#fff', fontSize: '9px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px', letterSpacing: '2px' }}>{deal.tag}</div>
        <div style={{ position: 'absolute', top: '14px', right: '14px', background: '#fff', color: deal.color, fontSize: '15px', fontWeight: 900, width: '52px', height: '52px', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1, boxShadow: `0 4px 14px ${deal.color}44` }}>
          <span>{deal.discount}%</span>
          <span style={{ fontSize: '8px', fontWeight: 700 }}>OFF</span>
        </div>
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 4px' }}>{deal.subtitle}</p>
          <h3 style={{ fontSize: isFeatured ? '24px' : '18px', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.5px', textTransform: 'uppercase' }}>{deal.title}</h3>
        </div>
      </div>

      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '26px', fontWeight: 900, color: deal.color, letterSpacing: '-1px' }}>Rs {deal.salePrice.toLocaleString()}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '13px', color: '#bbb', fontWeight: 500, textDecoration: 'line-through', lineHeight: 1.2 }}>Rs {deal.originalPrice.toLocaleString()}</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#2ead60' }}>Save Rs {deal.saving.toLocaleString()}</span>
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#7a3050', textTransform: 'uppercase', letterSpacing: '0.5px' }}>🔥 {deal.sold} sold today</span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#b06080' }}>Selling fast</span>
            </div>
            <div style={{ height: '5px', background: '#f5e0ea', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${Math.min(deal.sold, 100)}%`, background: `linear-gradient(90deg, ${deal.color}, ${deal.dark})`, borderRadius: '100px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700 }}>
            <span>⏰</span><span style={{ color: deal.color }}>Ends in {deal.expires}</span>
          </div>
        </div>
        <Link href={deal.href} style={{ textDecoration: 'none', display: 'block', marginTop: '16px' }}>
          <div style={{ width: '100%', padding: '13px 0', background: `linear-gradient(135deg, ${deal.color}, ${deal.dark})`, color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 800, textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', boxShadow: hov ? `0 8px 24px ${deal.color}44` : 'none', transition: 'box-shadow 0.3s' }}>
            Grab This Deal →
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function DealsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [
    { label: 'All Deals', value: 'all' },
    { label: 'Under Rs 2000', value: 'under2k' },
    { label: '35%+ Off', value: 'big' },
    { label: 'Ending Soon', value: 'soon' },
  ];
  const filtered = deals.filter(d => {
    if (activeFilter === 'under2k') return d.salePrice < 2000;
    if (activeFilter === 'big') return d.discount >= 35;
    if (activeFilter === 'soon') return d.expires.startsWith('1') || d.expires.startsWith('2');
    return true;
  });

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#fdfafa', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a0510 0%, #3a0a20 40%, #2a0a16 100%)', padding: '52px 24px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c22 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', right: '-40px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, #c2185b22 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, background: 'repeating-linear-gradient(-45deg, #e91e8c 0px, #e91e8c 1px, transparent 1px, transparent 20px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', color: '#fff', fontSize: '10px', fontWeight: 800, padding: '6px 20px', borderRadius: '100px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '22px', boxShadow: '0 4px 18px rgba(233,30,140,0.4)' }}>
            🔥 Flash Sale Active
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, color: '#fff', margin: '0 0 8px', letterSpacing: '-3px', lineHeight: 0.9, textTransform: 'uppercase' }}>
            TODAY'S{' '}
            <span style={{ background: 'linear-gradient(135deg, #e91e8c, #f48fb1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>DEALS</span>
          </h1>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, marginTop: '14px' }}>Save up to 40% · Limited time · While stocks last</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '30px' }}>
            {[['6', 'Active Deals'], ['40%', 'Max Discount'], ['500+', 'Happy Buyers']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '28px', fontWeight: 900, color: '#e91e8c', margin: 0, lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', margin: '3px 0 0', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #f0d0de', padding: '14px 24px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 12px rgba(233,30,140,0.06)' }}>
        {filters.map(f => (
          <button key={f.value} onClick={() => setActiveFilter(f.value)} style={{ padding: '7px 18px', borderRadius: '100px', border: `1px solid ${activeFilter === f.value ? '#e91e8c' : '#f7b3d0'}`, background: activeFilter === f.value ? 'linear-gradient(135deg, #e91e8c, #c2185b)' : '#fff', color: activeFilter === f.value ? '#fff' : '#7a3050', fontSize: '11px', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.5px', textTransform: 'uppercase', transition: 'all 0.2s' }}>{f.label}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 60px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#b06080' }}>
            <p style={{ fontSize: '36px', marginBottom: '12px' }}>🛍️</p>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#2a0a16' }}>No deals match this filter</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="deals-grid">
            {filtered.map((deal, i) => <DealCard key={deal.id} deal={deal} index={i} />)}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '56px', background: 'linear-gradient(135deg, #2a0a16, #4a0e2a)', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c22, transparent)', pointerEvents: 'none' }} />
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#f9a8d4', textTransform: 'uppercase', marginBottom: '12px' }}>Want More Deals?</p>
          <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#fff', letterSpacing: '-1px', marginBottom: '8px' }}>Shop Full Collections</h3>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', fontWeight: 400 }}>Explore all 500+ products across 8 categories</p>
          <Link href="/Categories" style={{ textDecoration: 'none' }}>
            <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', color: '#fff', padding: '13px 36px', borderRadius: '10px', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', boxShadow: '0 8px 24px rgba(233,30,140,0.35)' }}>Browse All Categories →</span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .deals-grid { grid-template-columns: repeat(2, 1fr) !important; } .featured-card { grid-column: span 2 !important; } }
        @media (max-width: 560px) { .deals-grid { grid-template-columns: 1fr !important; } .featured-card { grid-column: span 1 !important; } }
      `}</style>
    </div>
  );
}
