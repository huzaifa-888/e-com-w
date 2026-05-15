'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { databases } from '../lib/appwrite';

const DATABASE_ID   = '6984904c003190f72f82';
const COLLECTION_ID = 'perfumes';
const BUCKET_ID     = '698c5f5400260d9cc7f5';
const PROJECT_ID    = '697f0ae70017907b4c35';
const ENDPOINT      = 'https://sgp.cloud.appwrite.io/v1';

function getImageUrl(fileId) {
  if (!fileId) return null;
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
}

export default function PerfumesPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [mounted, setMounted]   = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    loadPerfumes();
  }, []);

  async function loadPerfumes() {
    setLoading(true);
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setProducts(res.documents || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function addPerfume() {
    const name = prompt('Enter perfume name:');
    const price = prompt('Enter price (number):');
    if (!name || !price) { alert('Name and Price are required!'); return; }
    try {
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
        Name: name, Price: parseInt(price, 10), Description: '', Image: ''
      });
      alert('Perfume added successfully!');
      loadPerfumes();
    } catch (err) {
      console.error(err);
      alert('Error adding perfume: ' + err.message);
    }
  }

  if (!mounted) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #fff5f9 0%, #fff0f5 60%, #fce8f3 100%)',
      padding: '0 0 60px',
      fontFamily: "'Montserrat', sans-serif",
    }}>

      {/* Top stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', padding: '48px 24px 36px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, #ffd6e8 0%, transparent 70%)', pointerEvents: 'none', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, #ffb6d1 0%, transparent 70%)', pointerEvents: 'none', opacity: 0.35 }} />

        <div style={{
          display: 'inline-block',
          background: '#ffe0ef', border: '1px solid #f7b3d0',
          borderRadius: '100px', padding: '5px 20px',
          fontSize: '10px', fontWeight: 700, letterSpacing: '4px',
          color: '#c2185b', textTransform: 'uppercase', marginBottom: '18px',
        }}>✦ Our Collection ✦</div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800, color: '#2a0a16',
          margin: '0 0 12px', lineHeight: 1.1,
          letterSpacing: '-1px', textTransform: 'uppercase',
        }}>
          Perfumes
        </h1>

        <p style={{ fontSize: '13px', color: '#7a3050', fontWeight: 400, marginBottom: '24px', letterSpacing: '1px' }}>
          Discover your signature scent
        </p>

        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #ec4899, #f48fb1)', borderRadius: 10, margin: '0 auto 28px' }} />
      </div>

      {/* Add Button */}
      <div style={{ textAlign: 'center', marginBottom: 40, padding: '0 24px' }}>
        <button
          onClick={addPerfume}
          style={{
            padding: '12px 32px',
            background: 'linear-gradient(135deg, #ec4899, #e91e8c)',
            color: '#fff', border: 'none', borderRadius: 8,
            fontSize: 13, fontWeight: 700, cursor: 'pointer',
            letterSpacing: '1px', textTransform: 'uppercase',
            boxShadow: '0 6px 20px rgba(233,30,140,0.25)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(233,30,140,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(233,30,140,0.25)'; }}
        >
          + Add Perfume
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: '#b06080' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: '#e91e8c', opacity: 0.6,
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }} />
            ))}
          </div>
          <p style={{ fontSize: '13px', letterSpacing: '2px', fontWeight: 500, textTransform: 'uppercase' }}>Loading...</p>
        </div>
      )}

      {/* Empty */}
      {!loading && products.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 24px', color: '#b06080' }}>
          <p style={{ fontSize: '28px', marginBottom: '8px' }}>🧴</p>
          <p style={{ fontSize: '16px', fontWeight: 600, color: '#2a0a16', marginBottom: '6px' }}>No perfumes found</p>
          <p style={{ fontSize: '13px', fontWeight: 400 }}>Check back soon for new arrivals</p>
        </div>
      )}

      {/* Grid */}
      {!loading && products.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 24, maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {products.map((p) => (
            <div
              key={p.$id}
              style={{
                background: '#fff', borderRadius: 12, overflow: 'hidden',
                border: '1px solid #fce4ec',
                boxShadow: '0 4px 16px rgba(233,30,140,0.07)',
                transition: 'all 0.25s ease', cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(233,30,140,0.16)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(233,30,140,0.07)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 220, background: 'linear-gradient(135deg, #fce4ec, #f8bbd0)', overflow: 'hidden' }}>
                {getImageUrl(p.Image) ? (
                  <img
                    src={getImageUrl(p.Image)}
                    alt={p.Name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 56 }}>🧴</div>
                )}
                {/* Price badge */}
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: '#e91e8c', color: '#fff',
                  fontSize: '13px', fontWeight: 700,
                  padding: '4px 12px', borderRadius: '100px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Rs {p.Price?.toLocaleString()}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '16px 18px 20px' }}>
                <h3 style={{
                  fontSize: 16, fontWeight: 700, color: '#2a0a16',
                  margin: '0 0 14px', fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: '-0.3px',
                }}>{p.Name}</h3>
                <button
                  onClick={() => router.push(`/Perfume/${p.$id}`)}
                  style={{
                    width: '100%', padding: '11px 0',
                    background: 'linear-gradient(135deg, #ec4899, #e91e8c)',
                    color: '#fff', border: 'none', borderRadius: 8,
                    fontSize: 12, fontWeight: 700,
                    fontFamily: "'Montserrat', sans-serif",
                    cursor: 'pointer', letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  View Detail →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (max-width: 520px) {
          div[style*="repeat(auto-fill"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
