'use client';

import Link from 'next/link';

const staticCategories = [
  {
    id: 'jewellery',
    label: 'Jewellery',
    emoji: '💎',
    href: '/jewellery',
    color: '#ad1457',
    image: '/images/jew.png',
    tag: 'Elegant',
  },
  {
    id: 'nail-essentials',
    label: 'Nail Essentials',
    emoji: '💅',
    href: '/nails',
    color: '#880e4f',
    image: '/images/uu.jpg',
    tag: 'Trendy',
  },
  {
    id: 'hair-accessories',
    label: 'Hair Accessories',
    emoji: '🎀',
    href: '/hair-accessories',
    color: '#d81b60',
    image: '/images/pp.jpg',
    tag: 'Stylish',
  },
  {
    id: 'cute-items',
    label: 'Cute Items',
    emoji: '🌸',
    href: '/cute-items',
    color: '#e91e8c',
    image: '/images/cut.jpg',
    tag: 'Adorable',
  },
  {
    id: 'stationary',
    label: 'Stationary',
    emoji: '📓',
    href: '/stationary',
    color: '#c2185b',
    image: '/images/stat.jpg',
    tag: 'Creative',
  },
  {
    id: 'self-care',
    label: 'Self Care',
    emoji: '✨',
    href: '/self-care',
    color: '#ad1457',
    image: '/images/dd.jpg',
    tag: 'Nourishing',
  },
];

export default function CategoriesPage() {
  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: '#fdfafa',
        minHeight: '100vh',
      }}
    >
      {/* Hero */}
      <div
        style={{
          background:
            'linear-gradient(135deg, #2a0a16 0%, #4a0e2a 50%, #2a0a16 100%)',
          padding: '48px 24px 44px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-40px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, #e91e8c33 0%, transparent 70%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 60px)',
              fontWeight: 900,
              color: '#fff',
              margin: '0 0 12px',
              letterSpacing: '-2px',
              textTransform: 'uppercase',
            }}
          >
            Shop By{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e91e8c, #f9a8d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Category
            </span>
          </h1>

          <p
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Premium collections for your lifestyle
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '48px 24px 60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '24px',
        }}
      >
        {staticCategories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 18px rgba(233,30,140,0.08)',
                transition: '0.3s',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
                    bottom: '16px',
                    left: '16px',
                  }}
                >
                  <p
                    style={{
                      color: '#fff',
                      fontSize: '22px',
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    {cat.emoji} {cat.label}
                  </p>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      margin: '4px 0 0',
                      fontSize: '12px',
                    }}
                  >
                    {cat.tag}
                  </p>
                </div>
              </div>

              <div style={{ padding: '18px' }}>
                <button
                  style={{
                    width: '100%',
                    background: cat.color,
                    color: '#fff',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Explore Collection →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}