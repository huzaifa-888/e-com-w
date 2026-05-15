'use client';

import { useState } from 'react';
import Link from 'next/link';

const deals = [
  {
    id: 1,
    title: 'JEWELLERY SET',
    subtitle: 'Necklace + Earrings Combo',
    originalPrice: 3000,
    salePrice: 1999,
    discount: 33,
    emoji: '💎',
    href: '/jewellery',
    color: '#ad1457',
    dark: '#560a2b',
    image: '/images/jew.png',
  },
  {
    id: 2,
    title: 'HAIR PACK',
    subtitle: '10-Piece Accessories Set',
    originalPrice: 2500,
    salePrice: 1499,
    discount: 40,
    emoji: '🎀',
    href: '/hair-accessories',
    color: '#d81b60',
    dark: '#7b0d37',
    image: '/images/pp.jpg',
  },
  {
    id: 3,
    title: 'NAIL KIT',
    subtitle: 'Polish + Tools + Stickers',
    originalPrice: 2000,
    salePrice: 1199,
    discount: 40,
    emoji: '💅',
    href: '/nails',
    color: '#880e4f',
    dark: '#3d0726',
    image: '/images/uu.jpg',
  },
  {
    id: 4,
    title: 'SELF CARE',
    subtitle: 'Premium Essentials Bundle',
    originalPrice: 6000,
    salePrice: 3999,
    discount: 33,
    emoji: '✨',
    href: '/self-care',
    color: '#e91e8c',
    dark: '#7a0847',
    image: '/images/dd.jpg',
  },
];

function DealCard({ deal }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        borderRadius: '18px',
        overflow: 'hidden',
        transition: '0.3s',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hover
          ? `0 16px 40px ${deal.color}33`
          : '0 4px 18px rgba(233,30,140,0.08)',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '240px',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={deal.image}
          alt={deal.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: '0.4s',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#fff',
            color: deal.color,
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '18px',
          }}
        >
          {deal.discount}%
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
          }}
        >
          <h2
            style={{
              color: '#fff',
              margin: 0,
              fontSize: '24px',
              fontWeight: 900,
            }}
          >
            {deal.title}
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              margin: '6px 0 0',
              fontSize: '13px',
            }}
          >
            {deal.subtitle}
          </p>
        </div>
      </div>

      <div style={{ padding: '22px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
          }}
        >
          <span
            style={{
              fontSize: '30px',
              fontWeight: 900,
              color: deal.color,
            }}
          >
            Rs {deal.salePrice}
          </span>

          <span
            style={{
              textDecoration: 'line-through',
              color: '#999',
              fontSize: '14px',
            }}
          >
            Rs {deal.originalPrice}
          </span>
        </div>

        <Link href={deal.href} style={{ textDecoration: 'none' }}>
          <button
            style={{
              width: '100%',
              background: `linear-gradient(135deg, ${deal.color}, ${deal.dark})`,
              color: '#fff',
              border: 'none',
              padding: '14px',
              borderRadius: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            SHOP NOW →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function DealsPage() {
  return (
    <div
      style={{
        background: '#fdfafa',
        minHeight: '100vh',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background:
            'linear-gradient(135deg, #1a0510 0%, #3a0a20 50%, #2a0a16 100%)',
          padding: '60px 24px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(42px, 7vw, 90px)',
            fontWeight: 900,
            color: '#fff',
            margin: 0,
            letterSpacing: '-3px',
          }}
        >
          TODAY&apos;S{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #e91e8c, #f48fb1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DEALS
          </span>
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            marginTop: '14px',
            fontSize: '14px',
            letterSpacing: '1px',
          }}
        >
          Limited Time Offers • Best Prices • Trending Products
        </p>
      </div>

      {/* Deals Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '50px 24px 70px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '28px',
        }}
      >
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
}