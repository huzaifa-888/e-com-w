'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { databases } from '../lib/appwrite';
import Link from 'next/link';

const DATABASE_ID = '6984904c003190f72f82';
const BUCKET_ID = '698c5f5400260d9cc7f5';
const PROJECT_ID = '697f0ae70017907b4c35';
const ENDPOINT = 'https://sgp.cloud.appwrite.io/v1';

function getImageUrl(fileId) {
  if (!fileId) return null;
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
}

// Static categories with local images
const staticCategories = [
  {
    id: 'branded-makeup',
    label: 'Branded Makeup',
    emoji: '💄',
    href: '/brandedmakeup',
    color: '#e91e8c',
    image: '/images/hh.jpg',
    collection: 'brandedmakeup',
    tag: 'Premium',
  },
  {
    id: 'perfumes',
    label: 'Perfumes',
    emoji: '🧴',
    href: '/Perfume',
    color: '#c2185b',
    image: '/images/oo.jpg',
    collection: 'perfumes',
    tag: 'Signature',
  },
  {
    id: 'jewellery',
    label: 'Jewellery',
    emoji: '💎',
    href: '/jewellery',
    color: '#ad1457',
    image: '/images/jew.png',
    collection: null,
    tag: 'Elegant',
  },
  {
    id: 'nail-essentials',
    label: 'Nail Essentials',
    emoji: '💅',
    href: '/nails',
    color: '#880e4f',
    image: '/images/uu.jpg',
    collection: null,
    tag: 'Trendy',
  },
  {
    id: 'hair-accessories',
    label: 'Hair Accessories',
    emoji: '🎀',
    href: '/hair-accessories',
    color: '#d81b60',
    image: '/images/pp.jpg',
    collection: null,
    tag: 'Stylish',
  },
  {
    id: 'cute-items',
    label: 'Cute Items',
    emoji: '🌸',
    href: '/cute-items',
    color: '#e91e8c',
    image: '/images/cut.jpg',
    collection: null,
    tag: 'Adorable',
  },
  {
    id: 'stationary',
    label: 'Stationary',
    emoji: '📓',
    href: '/stationary',
    color: '#c2185b',
    image: '/images/stat.jpg',
    collection: null,
    tag: 'Creative',
  },
  {
    id: 'self-care',
    label: 'Self Care',
    emoji: '✨',
    href: '/self-care',
    color: '#ad1457',
    image: '/images/dd.jpg',
    collection: null,
    tag: 'Nourishing',
  },
];

// Featured product card
function ProductCard({ product, accent, onClick }) {
  const [hov, setHov] = useState(false);
  const imgUrl = getImageUrl(product.Image);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{
        background: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        border: `1px solid ${hov ? accent + '55' : '#fce4ec'}`,
        boxShadow: hov ? `0 12px 32px ${accent}22` : '0 2px 10px rgba(233,30,140,0.06)',
        transition: 'all 0.22s ease',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'pointer',
        flexShrink: 0,
        width: '160px',
      }}
    >
      <div style={{ height: '130px', background: `linear-gradient(135deg, ${accent}18, ${accent}08)`, overflow: 'hidden', position: 'relative' }}>
        {imgUrl ? (
          <img src={imgUrl} alt={product.Name || product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s', transform: hov ? 'scale(1.08)' : 'scale(1)' }} onError={e => { e.target.style.display = 'none'; }} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '36px' }}>🛍️</div>
        )}
        <div style={{ position: 'absolute', bottom: 8, right: 8, background: accent, color: '#fff', fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '100px' }}>
          Rs {(product.Price || product.price || 0).toLocaleString()}
        </div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#2a0a16', margin: 0, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {product.Name || product.name}
        </p>
      </div>
    </div>
  );
}

// Category section
function CategorySection({ cat, products, loading, router }) {
  const displayed = products.slice(0, 6);
  return (
    <div style={{ marginBottom: '56px' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Color stripe */}
          <div style={{ width: '4px', height: '40px', background: `linear-gradient(to bottom, ${cat.color}, ${cat.color}88)`, borderRadius: '100px' }} />
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: cat.color, textTransform: 'uppercase', marginBottom: '2px' }}>{cat.tag}</div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#2a0a16', margin: 0, letterSpacing: '-0.5px' }}>
              {cat.emoji} {cat.label}
            </h2>
          </div>
        </div>
        <Link href={cat.href} style={{ textDecoration: 'none' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, color: cat.color,
            border: `1px solid ${cat.color}44`, borderRadius: '100px',
            padding: '6px 16px', textTransform: 'uppercase', letterSpacing: '1px',
            background: `${cat.color}0a`, transition: 'all 0.2s',
            display: 'inline-block',
          }}>
            View All →
          </span>
        </Link>
      </div>

      {/* Products horizontal scroll */}
      {loading ? (
        <div style={{ display: 'flex', gap: '16px', paddingBottom: '12px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ width: '160px', height: '180px', borderRadius: '10px', background: `${cat.color}10`, flexShrink: 0, animation: 'pulse 1.4s ease-in-out infinite' }} />
          ))}
        </div>
      ) : displayed.length > 0 ? (
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px' }} className="scroll-row">
          {displayed.map((p) => (
            <ProductCard
              key={p.$id}
              product={p}
              accent={cat.color}
              onClick={() => router.push(`${cat.href}/${p.$id}`)}
            />
          ))}
          {/* View all card */}
          <Link href={cat.href} style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '160px', height: '180px',
              borderRadius: '10px',
              border: `2px dashed ${cat.color}44`,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '8px', cursor: 'pointer',
              background: `${cat.color}06`,
              transition: 'background 0.2s',
            }}>
              <span style={{ fontSize: '28px' }}>{cat.emoji}</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: cat.color, textTransform: 'uppercase', letterSpacing: '1px' }}>See All</span>
            </div>
          </Link>
        </div>
      ) : (
        /* No live products – show static category card */
        <div style={{ display: 'flex', gap: '16px', paddingBottom: '12px' }}>
          <Link href={cat.href} style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: '220px', height: '180px',
              borderRadius: '10px', overflow: 'hidden',
              border: `1px solid ${cat.color}33`,
              position: 'relative', cursor: 'pointer',
            }}>
              <img src={cat.image} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(42,10,22,0.6) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0 }}>{cat.label}</p>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', margin: 0, fontWeight: 500 }}>Explore Collection →</p>
              </div>
            </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
            <p style={{ fontSize: '13px', color: '#7a3050', fontWeight: 500, maxWidth: '240px', lineHeight: 1.6 }}>
              Explore our full {cat.label.toLowerCase()} collection — new arrivals added regularly!
            </p>
            <Link href={cat.href} style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: cat.color, textTransform: 'uppercase', letterSpacing: '1px' }}>Shop Now →</span>
            </Link>
          </div>
        </div>
      )}

      {/* Divider */}
      <div style={{ marginTop: '32px', height: '1px', background: `linear-gradient(90deg, ${cat.color}33, transparent)` }} />
    </div>
  );
}

export default function CategoriesPage() {
  const router = useRouter();
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const collectionsToLoad = staticCategories.filter(c => c.collection);
    collectionsToLoad.forEach(cat => {
      setLoading(prev => ({ ...prev, [cat.id]: true }));
      databases.listDocuments(DATABASE_ID, cat.collection)
        .then(res => {
          setAllProducts(prev => ({ ...prev, [cat.id]: res.documents || [] }));
        })
        .catch(() => {
          setAllProducts(prev => ({ ...prev, [cat.id]: [] }));
        })
        .finally(() => {
          setLoading(prev => ({ ...prev, [cat.id]: false }));
        });
    });
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#fdfafa', minHeight: '100vh' }}>

      {/* Hero banner */}
      <div style={{
        background: 'linear-gradient(135deg, #2a0a16 0%, #4a0e2a 50%, #2a0a16 100%)',
        padding: '48px 24px 44px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-60px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c33 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, #c2185b33 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(#e91e8c 1px, transparent 1px), linear-gradient(90deg, #e91e8c 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontSize: '10px', fontWeight: 700, letterSpacing: '4px',
            color: '#f9a8d4', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            <div style={{ height: '1px', width: '28px', background: '#f9a8d4' }} />
            All Collections
            <div style={{ height: '1px', width: '28px', background: '#f9a8d4' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 900, color: '#fff', margin: '0 0 12px',
            letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1,
          }}>
            Shop By{' '}
            <span style={{ background: 'linear-gradient(135deg, #e91e8c, #f9a8d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Category
            </span>
          </h1>

          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 400, letterSpacing: '1px' }}>
            8 categories · 500+ products · 100% authentic
          </p>

          {/* Category pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {staticCategories.map(cat => (
              <Link key={cat.id} href={cat.href} style={{ textDecoration: 'none' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '11px', fontWeight: 600,
                  padding: '6px 14px', borderRadius: '100px',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}>
                  {cat.emoji} {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 60px' }}>
        {staticCategories.map(cat => (
          <CategorySection
            key={cat.id}
            cat={cat}
            products={allProducts[cat.id] || []}
            loading={!!loading[cat.id]}
            router={router}
          />
        ))}
      </div>

      <style>{`
        .scroll-row::-webkit-scrollbar { height: 4px; }
        .scroll-row::-webkit-scrollbar-track { background: #fff0f5; border-radius: 10px; }
        .scroll-row::-webkit-scrollbar-thumb { background: #f9a8d4; border-radius: 10px; }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
