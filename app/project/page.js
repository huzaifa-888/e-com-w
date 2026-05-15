'use client';

import { useState } from 'react';
import Link from 'next/link';

const deals = [
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={deal.image} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hov ? 'scale(1.07)' : 'scale(1)' }} onError={e => { e.target.style.display = 'none'; }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,2,10,0.65) 0%, rgba(20,2,10,0.1) 55%)' }} />
      </div>

      <div style={{ padding: '18px 20px 20px' }}>
        <h3>{deal.title}</h3>
        <p>{deal.subtitle}</p>
        <p>Rs {deal.salePrice}</p>
      </div>
    </div>
  );
}

export default function DealsPage() {
  return (
    <div>
      <h1>
        TODAY&apos;S DEALS
      </h1>

      <div className="deals-grid">
        {deals.map((deal, i) => (
          <DealCard key={deal.id} deal={deal} index={i} />
        ))}
      </div>
    </div>
  );
}