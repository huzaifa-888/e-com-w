'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from 'lucide-react';

const inputStyle = {
  width: '100%', padding: '11px 40px 11px 14px',
  border: '1px solid #f7b3d0', borderRadius: '10px',
  fontFamily: "'Outfit', sans-serif", fontSize: '14px',
  color: '#2a0a16', background: '#fff8fb', outline: 'none',
};

function Field({ label, type = 'text', placeholder, icon: Icon, value, onChange }) {
  const [show, setShow] = useState(false);
  const isPass = type === 'password';
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#c2185b', marginBottom: '7px' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={isPass && show ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="tc-input"
          style={inputStyle}
        />
        <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#d4a0b4', display: 'flex', cursor: isPass ? 'pointer' : 'default' }}
          onClick={() => isPass && setShow(!show)}>
          {isPass ? (show ? <EyeOff size={15} /> : <Eye size={15} />) : <Icon size={15} />}
        </span>
      </div>
    </div>
  );
}

function SocialBtns() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '0 0 18px' }}>
        <div style={{ flex: 1, height: '1px', background: '#f5d0e0' }} />
        <span style={{ fontSize: '11px', color: '#b06080' }}>or continue with</span>
        <div style={{ flex: 1, height: '1px', background: '#f5d0e0' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
        {[
          { label: 'Google', color: '#4285F4' },
          { label: 'Facebook', color: '#1877F2' },
        ].map(({ label, color }) => (
          <button key={label} className="social-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', border: '1px solid #f7b3d0', borderRadius: '10px', background: '#fff', fontSize: '13px', fontWeight: 500, color: '#7a3050', cursor: 'pointer' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default function AuthPage() {
  const [tab, setTab] = useState('login');

  // login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  // signup state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPass, setSignupPass] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log({ loginEmail, loginPass });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log({ signupName, signupEmail, signupPass, signupConfirm });
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: '#fff0f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Top stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)' }} />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>

        {/* Blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, #ffd6e8 0%, transparent 70%)', opacity: 0.55, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, #ffb6d1 0%, transparent 70%)', opacity: 0.4, pointerEvents: 'none' }} />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 2, background: '#fff', border: '1px solid #f7b3d0', borderRadius: '24px', width: '100%', maxWidth: '460px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(233,30,140,0.09)' }}
        >
          {/* Top line */}
          <div style={{ height: '3px', background: 'linear-gradient(90deg, #e91e8c, #f9a8d4, transparent)' }} />

          {/* Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f7b3d0' }}>
            {['login', 'signup'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: '16px', textAlign: 'center',
                  fontSize: '13px', fontWeight: 600, letterSpacing: '0.5px',
                  color: tab === t ? '#e91e8c' : '#b06080',
                  background: tab === t ? '#fff' : '#fff8fb',
                  border: 'none', cursor: 'pointer',
                  borderBottom: tab === t ? '2px solid #e91e8c' : '2px solid transparent',
                  marginBottom: '-1px',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {t === 'login' ? 'Login' : 'Sign Up'}
              </button>
            ))}
          </div>

          <div style={{ padding: '36px 36px 32px' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 700, color: '#2a0a16', letterSpacing: '-1px', marginBottom: '6px' }}>
              Twinkle{' '}
              <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Chic
              </em>
            </Link>

            <p style={{ fontSize: '12px', color: '#b06080', textAlign: 'center', fontWeight: 300, marginBottom: '28px' }}>
              {tab === 'login' ? 'Welcome back! Please login to your account.' : 'Create your account and start shopping!'}
            </p>

            <AnimatePresence mode="wait">
              {tab === 'login' ? (
                <motion.form key="login" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.25 }} onSubmit={handleLogin}>

                  <Field label="Email" type="email" placeholder="your@email.com" icon={Mail} value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
                  <Field label="Password" type="password" placeholder="Enter password" icon={Lock} value={loginPass} onChange={e => setLoginPass(e.target.value)} />

                  <div style={{ textAlign: 'right', marginTop: '-10px', marginBottom: '20px' }}>
                    <a href="#" style={{ fontSize: '11px', color: '#b06080', textDecoration: 'none', fontWeight: 500 }} className="forgot-link">Forgot password?</a>
                  </div>

                  <button type="submit" className="submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '13px', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', color: '#fff', border: 'none', borderRadius: '12px', fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px', cursor: 'pointer', boxShadow: '0 8px 24px rgba(233,30,140,0.22)', marginBottom: '20px' }}>
                    Login to Account
                  </button>

                  <SocialBtns />

                  <p style={{ textAlign: 'center', fontSize: '12px', color: '#b06080', fontWeight: 300 }}>
                    Don&apos;t have an account?{' '}
                    <span onClick={() => setTab('signup')} style={{ color: '#e91e8c', fontWeight: 600, cursor: 'pointer' }}>Sign up</span>
                  </p>
                </motion.form>
              ) : (
                <motion.form key="signup" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }} onSubmit={handleSignup}>

                  <Field label="Full Name" type="text" placeholder="Your full name" icon={User} value={signupName} onChange={e => setSignupName(e.target.value)} />
                  <Field label="Email" type="email" placeholder="your@email.com" icon={Mail} value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
                  <Field label="Password" type="password" placeholder="Create password" icon={Lock} value={signupPass} onChange={e => setSignupPass(e.target.value)} />
                  <div style={{ marginBottom: '24px' }}>
                    <Field label="Confirm Password" type="password" placeholder="Confirm password" icon={CheckCircle} value={signupConfirm} onChange={e => setSignupConfirm(e.target.value)} />
                  </div>

                  <button type="submit" className="submit-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '13px', background: 'linear-gradient(135deg, #e91e8c, #c2185b)', color: '#fff', border: 'none', borderRadius: '12px', fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.5px', cursor: 'pointer', boxShadow: '0 8px 24px rgba(233,30,140,0.22)', marginBottom: '20px' }}>
                    Create Account
                  </button>

                  <SocialBtns />

                  <p style={{ textAlign: 'center', fontSize: '12px', color: '#b06080', fontWeight: 300 }}>
                    Already have an account?{' '}
                    <span onClick={() => setTab('login')} style={{ color: '#e91e8c', fontWeight: 600, cursor: 'pointer' }}>Login</span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #e91e8c, #ffb6d9, #e91e8c, transparent)' }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        .tc-input:focus { border-color: #e91e8c !important; box-shadow: 0 0 0 3px rgba(233,30,140,0.08) !important; }
        .tc-input::placeholder { color: #d4a0b4; }
        .submit-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .submit-btn { transition: opacity 0.2s, transform 0.2s; }
        .social-btn:hover { background: #fff0f5 !important; border-color: #e91e8c !important; color: #e91e8c !important; }
        .forgot-link:hover { color: #e91e8c !important; }
      `}</style>
    </div>
  );
}