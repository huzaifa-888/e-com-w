'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { databases } from '../../lib/appwrite';

const DATABASE_ID   = '6984904c003190f72f82';
const COLLECTION_ID = 'perfumes';
const BUCKET_ID     = '698c5f5400260d9cc7f5';
const PROJECT_ID    = '697f0ae70017907b4c35';
const ENDPOINT      = 'https://sgp.cloud.appwrite.io/v1';

function getImageUrl(fileId) {
  if (!fileId) return null;
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${PROJECT_ID}`;
}

export default function PerfumeDetailPage() {
  const { id } = useParams();
  const router  = useRouter();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [imgErr, setImgErr]   = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!id) return;
    async function load() {
      try {
        const doc = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
        setProduct(doc);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (!mounted) return null;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff0f6 0%, #ffe4f0 50%, #ffd6e8 100%)',
      padding: '30px 20px 60px',
      fontFamily: 'Georgia, serif'
    }}>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        style={{
          background: '#fff',
          border: '1px solid #f8bbd0',
          borderRadius: 10,
          padding: '8px 18px',
          fontSize: 14,
          color: '#e91e8c',
          cursor: 'pointer',
          fontFamily: 'sans-serif',
          marginBottom: 32,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 2px 10px rgba(233,30,140,0.1)',
          transition: 'transform 0.15s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-3px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
      >
        ← Back
      </button>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <div style={{
            width: 48, height: 48,
            border: '4px solid #fce4ec',
            borderTop: '4px solid #ec4899',
            borderRadius: '50%',
            margin: '0 auto 16px',
            animation: 'spin 0.8s linear infinite'
          }} />
          <p style={{ color: '#e91e8c', fontFamily: 'sans-serif' }}>Loading...</p>
        </div>
      )}

      {/* Not Found */}
      {!loading && !product && (
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🌸</div>
          <p style={{ color: '#880e4f', fontSize: 20, marginBottom: 20 }}>Product nahi mila</p>
          <button
            onClick={() => router.back()}
            style={{ padding: '10px 24px', background: '#ec4899', color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, cursor: 'pointer', fontFamily: 'sans-serif' }}
          >
            ← Wapas Jao
          </button>
        </div>
      )}

      {/* Product Detail */}
      {!loading && product && (
        <div style={{
          maxWidth: 980,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: '0 12px 60px rgba(233,30,140,0.12)',
          border: '1px solid #fce4ec',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 420px) 1fr',
          gap: 0
        }}>

          {/* Left — Image */}
          <div style={{
            background: 'linear-gradient(160deg, #fce4ec 0%, #f8bbd0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 480,
            position: 'relative'
          }}>
            {!imgErr && getImageUrl(product.Image) ? (
              <img
                src={getImageUrl(product.Image)}
                alt={product.Name}
                onError={() => setImgErr(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 480 }}
              />
            ) : (
              <div style={{ fontSize: 100 }}>🧴</div>
            )}
            <div style={{
              position: 'absolute', top: 20, left: 20,
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #fce4ec',
              borderRadius: 20,
              padding: '5px 14px',
              fontSize: 12,
              color: '#e91e8c',
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: '0.1em'
            }}>
              ✦ PERFUME
            </div>
          </div>

          {/* Right — Info */}
          <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: '#e91e8c', textTransform: 'uppercase', fontFamily: 'sans-serif', margin: 0 }}>
              ✦ Fragrance
            </p>

            <h1 style={{ fontSize: 40, fontWeight: 600, color: '#880e4f', margin: 0, lineHeight: 1.15 }}>
              {product.Name}
            </h1>

            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #ec4899, #f48fb1)', borderRadius: 10 }} />

            <p style={{ fontSize: 36, color: '#ec4899', fontWeight: 700, margin: 0, fontFamily: 'sans-serif' }}>
              Rs {product.Price?.toLocaleString()}
            </p>

            {product.Description && (
              <p style={{ fontSize: 15, color: '#6d3a4f', lineHeight: 1.75, margin: 0, fontFamily: 'sans-serif' }}>
                {product.Description}
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {product.Brand && (
                <p style={{ margin: 0, fontSize: 14, fontFamily: 'sans-serif', color: '#880e4f' }}>
                  <span style={{ fontWeight: 600 }}>Brand:</span> {product.Brand}
                </p>
              )}
              {product.Volume && (
                <p style={{ margin: 0, fontSize: 14, fontFamily: 'sans-serif', color: '#880e4f' }}>
                  <span style={{ fontWeight: 600 }}>Volume:</span> {product.Volume}
                </p>
              )}
            </div>

            <button
              style={{
                marginTop: 8,
                padding: '15px 28px',
                background: 'linear-gradient(135deg, #ec4899, #e91e8c)',
                color: '#fff',
                border: 'none',
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                fontFamily: 'sans-serif',
                cursor: 'pointer',
                letterSpacing: '0.04em',
                boxShadow: '0 6px 24px rgba(233,30,140,0.35)',
                transition: 'transform 0.15s ease, opacity 0.15s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}