import { writeFileSync } from 'fs';
import { join } from 'path';

const DIR = '/Users/jrios/autopecas-itatiaia';

// ── SVG ICONS ──────────────────────────────────────────────
const WPP_SVG_18 = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
const WPP_SVG_16 = WPP_SVG_18.replace(/width="18" height="18"/, 'width="16" height="16"');
const WPP_SVG_20 = WPP_SVG_18.replace(/width="18" height="18"/, 'width="20" height="20"');
const ARROW_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>`;
const PIN_SVG_18 = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const CLOCK_SVG_18 = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
const PHONE_SVG_18 = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`;
const MAP_ARROW_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>`;

const WPP_LINK = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Vim%20pelo%20site.';
const WPP_LINK_PECA = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20uma%20pe%C3%A7a.';
const WPP_LINK_ORC = 'https://wa.me/5524993099190?text=Ol%C3%A1!%20Preciso%20de%20um%20or%C3%A7amento.';
const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d-44.5614109!3d-22.4939592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e79e3e3a07d47:0xce6aced7aeeef147!2sAuto+Pe%C3%A7as+Itatiaia!5e0!3m2!1spt-BR!2sbr!4v1`;

// ── FULL CSS (extracted from index.html) ────────────────────
const CSS = `
:root {
  --orange: #FF6633;
  --orange-hover: #FF7A4D;
  --orange-soft: rgba(255, 102, 51, .08);
  --orange-glow: rgba(255, 102, 51, .15);
  --orange-border: rgba(255, 102, 51, .2);
  --green-wpp: #25D366;
  --green-wpp-hover: #1ebe5d;
  --bg-primary: #000000;
  --bg-secondary: #0A0A0A;
  --bg-card: #111111;
  --bg-card-hover: #1A1A1A;
  --bg-elevated: #151515;
  --bg-glass: rgba(10, 10, 10, .85);
  --border: rgba(255, 255, 255, .06);
  --border-hover: rgba(255, 255, 255, .12);
  --border-orange: rgba(255, 102, 51, .25);
  --text-primary: #FAFAFA;
  --text-secondary: #999999;
  --text-tertiary: #666666;
  --text-muted: #444444;
  --font-display: 'Inter', -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'Space Grotesk', monospace;
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-5: 24px;
  --s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 80px; --s-10: 120px;
  --r-sm: 6px; --r-md: 12px; --r-lg: 20px; --r-xl: 28px; --r-full: 100px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,.3);
  --shadow-md: 0 8px 32px rgba(0,0,0,.4);
  --shadow-lg: 0 24px 64px rgba(0,0,0,.5);
  --shadow-orange: 0 8px 32px rgba(255,102,51,.25);
  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
  --duration-fast: .2s;
  --duration-normal: .4s;
  --duration-slow: .7s;
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: auto; -webkit-font-smoothing: antialiased; }
body { background: var(--bg-primary); color: var(--text-secondary); font-family: var(--font-display); font-size: 16px; line-height: 1.6; overflow-x: hidden; cursor: none; }
a { color: inherit; text-decoration: none; cursor: none; }
img { max-width: 100%; display: block; }
button { border: none; background: none; cursor: none; font-family: inherit; }
ul, ol { list-style: none; }

/* LOADER */
.loader { position: fixed; inset: 0; background: var(--bg-primary); z-index: 9999; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 32px; }
.loader-phrase { font-family: var(--font-serif); font-size: clamp(24px, 5vw, 48px); font-style: italic; color: rgba(255, 255, 255, .9); letter-spacing: .01em; text-align: center; max-width: 650px; padding: 0 24px; }
.loader-phrase span { display: inline-block; opacity: 0; transform: translateY(14px); transition: opacity .45s ease, transform .45s ease; }
.loader-phrase span.visible { opacity: 1; transform: translateY(0); }
.loader-line { width: 56px; height: 1px; background: rgba(255, 255, 255, .1); position: relative; overflow: hidden; }
.loader-line::after { content: ''; position: absolute; left: 0; top: 0; height: 100%; width: 0%; background: var(--orange); transition: width 2s var(--ease-out); }
.loader-line.active::after { width: 100%; }
.loader-brand { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: var(--orange); opacity: 0; transition: opacity .6s ease .3s; }
.loader-brand.visible { opacity: 1; }
.loader.done { opacity: 0; transition: opacity .7s ease; pointer-events: none; }

/* CURSOR */
.cursor { position: fixed; width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--orange); pointer-events: none; z-index: 10000; transition: width .3s var(--ease-out), height .3s var(--ease-out), border-color .3s, background .3s, opacity .3s; transform: translate(-50%, -50%); mix-blend-mode: difference; background: transparent; }
.cursor.hover { width: 60px; height: 60px; background: rgba(255, 102, 51, .12); border-color: var(--orange-hover); }
.cursor-label { position: fixed; pointer-events: none; z-index: 10001; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #fff; opacity: 0; transition: opacity .25s; transform: translate(-50%, -50%); font-family: var(--font-mono); }
.cursor-label.visible { opacity: 1; }
@media (hover: none), (pointer: coarse) { .cursor, .cursor-label { display: none !important; } body, a, button { cursor: auto; } }

/* ANIMATIONS */
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marqueeReverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
@keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, .4); } 50% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); } }
@keyframes scrollLine { 0% { top: -50%; } 100% { top: 150%; } }
@keyframes grain { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); } 30% { transform: translate(3%, -15%); } 50% { transform: translate(12%, 9%); } 70% { transform: translate(9%, 4%); } 90% { transform: translate(-1%, 7%); } }

.noise::before { content: ''; position: absolute; inset: -50%; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E"); animation: grain 8s steps(10) infinite; pointer-events: none; z-index: 1; }
.reveal { opacity: 0; transform: translateY(40px); }

/* LAYOUT */
.container { max-width: 1280px; margin: 0 auto; padding: 0 var(--s-7); }
.section { padding: var(--s-10) 0; position: relative; }

/* HEADER */
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 72px; display: flex; align-items: center; background: transparent; transition: background var(--duration-normal), border-color var(--duration-normal); border-bottom: 1px solid transparent; }
.header.scrolled { background: var(--bg-glass); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-bottom-color: var(--border); }
.header-inner { max-width: 1280px; margin: 0 auto; padding: 0 var(--s-7); width: 100%; display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; gap: var(--s-3); }
.logo-mark { width: 40px; height: 40px; background: var(--orange); border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; color: var(--bg-primary); letter-spacing: -.02em; }
.logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.logo-name { font-weight: 800; font-size: 15px; color: var(--text-primary); letter-spacing: -.02em; }
.logo-sub { font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary); letter-spacing: .08em; text-transform: uppercase; }
.nav { display: flex; align-items: center; gap: var(--s-6); }
.nav-link { font-size: 13px; font-weight: 500; color: var(--text-secondary); letter-spacing: .02em; transition: color var(--duration-fast); position: relative; }
.nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1.5px; background: var(--orange); transition: width var(--duration-normal) var(--ease-out); }
.nav-link:hover { color: var(--text-primary); }
.nav-link:hover::after { width: 100%; }
.nav-link.active { color: var(--orange); }
.nav-link.active::after { width: 100%; }
.nav-cta { background: var(--orange); color: var(--bg-primary); font-weight: 700; font-size: 13px; padding: 10px 22px; border-radius: var(--r-full); letter-spacing: .02em; transition: background var(--duration-fast), transform var(--duration-fast); position: relative; overflow: hidden; }
.nav-cta::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent); transition: left .5s; }
.nav-cta:hover { background: var(--orange-hover); transform: translateY(-1px); }
.nav-cta:hover::before { left: 100%; }
.menu-toggle { display: none; flex-direction: column; gap: 5px; padding: 4px; z-index: 1001; }
.menu-toggle span { width: 24px; height: 2px; background: var(--text-primary); border-radius: 2px; transition: all .3s var(--ease-out); }
.menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* HERO */
.hero { position: relative; min-height: 70vh; display: flex; align-items: center; overflow: hidden; background: var(--bg-primary); }
.hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255, 102, 51, .08) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(255, 102, 51, .05) 0%, transparent 60%); will-change: transform; }
.hero-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px); background-size: 80px 80px; }
.hero-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: var(--s-9) var(--s-7); padding-top: calc(72px + var(--s-9)); width: 100%; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: var(--s-2); font-family: var(--font-mono); font-size: 12px; font-weight: 500; color: var(--text-tertiary); letter-spacing: .1em; text-transform: uppercase; margin-bottom: var(--s-5); opacity: 0; }
.hero-eyebrow .dot { width: 6px; height: 6px; background: var(--orange); border-radius: 50%; }
.hero h1 { font-family: var(--font-display); font-size: clamp(40px, 5.5vw, 72px); font-weight: 900; line-height: .95; letter-spacing: -.04em; color: var(--text-primary); margin-bottom: var(--s-6); opacity: 0; }
.hero h1 .highlight { color: var(--orange); position: relative; display: inline-block; }
.hero h1 .highlight::after { content: ''; position: absolute; bottom: 2px; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--orange), transparent); transform: scaleX(0); transform-origin: left; }
.hero-desc { font-size: 18px; font-weight: 300; color: var(--text-secondary); line-height: 1.7; max-width: 620px; margin-bottom: var(--s-7); opacity: 0; }
.hero-desc strong { color: var(--text-primary); font-weight: 600; }
.hero-actions { display: flex; gap: var(--s-4); flex-wrap: wrap; margin-bottom: var(--s-7); opacity: 0; }

/* BUTTONS */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: var(--s-3); font-weight: 700; font-size: 15px; padding: 16px 32px; border-radius: var(--r-full); transition: all var(--duration-fast) var(--ease-out); white-space: nowrap; position: relative; overflow: hidden; }
.btn-primary::before, .btn-wpp::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent); transition: left .5s; }
.btn-primary:hover::before, .btn-wpp:hover::before { left: 100%; }
.btn-primary { background: var(--orange); color: var(--bg-primary); box-shadow: var(--shadow-orange); }
.btn-primary:hover { background: var(--orange-hover); transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,102,51,.35); }
.btn-secondary { background: transparent; color: var(--text-primary); border: 1px solid var(--border-hover); }
.btn-secondary:hover { border-color: var(--orange-border); background: var(--orange-soft); }
.btn-wpp { background: var(--green-wpp); color: #fff; box-shadow: 0 8px 32px rgba(37, 211, 102, .3); }
.btn-wpp:hover { background: var(--green-wpp-hover); transform: translateY(-2px); }

/* METRICS */
.hero-metrics { display: flex; gap: var(--s-7); opacity: 0; }
.metric { display: flex; flex-direction: column; }
.metric-num { font-family: var(--font-display); font-size: 28px; font-weight: 900; color: var(--text-primary); letter-spacing: -.02em; line-height: 1; }
.metric-num .accent { color: var(--orange); }
.metric-label { font-family: var(--font-mono); font-size: 11px; color: var(--text-tertiary); letter-spacing: .06em; text-transform: uppercase; margin-top: var(--s-1); }

/* MARQUEE */
.marquee-strip { background: var(--orange); padding: 14px 0; overflow: hidden; }
.marquee-track { display: flex; white-space: nowrap; animation: marquee 30s linear infinite; width: max-content; }
.marquee-item { display: inline-flex; align-items: center; gap: 14px; padding: 0 24px; font-family: var(--font-display); font-size: 13px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--bg-primary); }
.marquee-sep { width: 5px; height: 5px; background: rgba(0,0,0,.25); border-radius: 50%; flex-shrink: 0; }

/* STATS */
.stats-section { background: var(--bg-secondary); border-bottom: 1px solid var(--border); padding: var(--s-8) 0; position: relative; overflow: hidden; }
.stats-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,102,51,.04), transparent); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--s-6); text-align: center; position: relative; z-index: 2; }
.stat-number { font-family: var(--font-display); font-size: clamp(44px, 5vw, 72px); font-weight: 900; line-height: 1; color: var(--orange); margin-bottom: var(--s-2); }
.stat-label { font-size: 14px; font-weight: 500; color: var(--text-secondary); line-height: 1.4; }

/* SECTION HEADERS */
.sec-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--orange); margin-bottom: var(--s-3); display: flex; align-items: center; gap: var(--s-3); }
.sec-label::before { content: ''; width: 24px; height: 1.5px; background: var(--orange); border-radius: 2px; }
.sec-title { font-family: var(--font-display); font-size: clamp(32px, 4vw, 52px); font-weight: 900; letter-spacing: -.03em; color: var(--text-primary); line-height: 1; margin-bottom: var(--s-4); }
.sec-sub { font-size: 16px; color: var(--text-tertiary); max-width: 520px; line-height: 1.7; }

/* ABOUT */
.about { background: var(--bg-secondary); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); position: relative; overflow: hidden; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-8); align-items: center; }
.about-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--orange-soft); backdrop-filter: blur(16px); border: 1px solid var(--orange-border); color: var(--orange); font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; padding: 6px 16px; border-radius: var(--r-full); margin-bottom: var(--s-5); }
.about-title { font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 900; letter-spacing: -.03em; color: var(--text-primary); line-height: 1.05; margin-bottom: var(--s-5); }
.about-title em { font-family: var(--font-serif); font-style: italic; color: var(--orange); }
.about-desc { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--s-5); }
.about-desc strong { color: var(--text-primary); font-weight: 600; }
.about-values { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-4); }
.about-value { display: flex; align-items: flex-start; gap: var(--s-3); padding: var(--s-4); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-sm); transition: border-color var(--duration-fast); }
.about-value:hover { border-color: var(--orange-border); }
.about-value-icon { width: 36px; height: 36px; flex-shrink: 0; background: var(--orange-soft); border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; font-size: 18px; }
.about-value-title { font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 2px; }
.about-value-desc { font-size: 12px; color: var(--text-tertiary); line-height: 1.5; }
.about-visual { display: flex; flex-direction: column; gap: var(--s-4); }
.about-big-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-lg); padding: var(--s-7); position: relative; overflow: hidden; }
.about-big-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--orange), transparent); }
.about-big-num { font-size: clamp(64px, 8vw, 96px); font-weight: 900; color: var(--orange); line-height: .9; letter-spacing: -.04em; margin-bottom: var(--s-3); }
.about-big-label { font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.about-big-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.6; }
.about-mini-cards { display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-4); }
.about-mini { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: var(--s-5); text-align: center; transition: border-color var(--duration-fast), transform var(--duration-fast); }
.about-mini:hover { border-color: var(--orange-border); transform: translateY(-3px); }
.about-mini-num { font-size: 28px; font-weight: 900; color: var(--orange); margin-bottom: 4px; }
.about-mini-label { font-size: 12px; color: var(--text-tertiary); font-family: var(--font-mono); letter-spacing: .04em; }

/* SERVICE CARDS — grid version */
.svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--s-4); margin-top: var(--s-7); }
.svc-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: var(--s-6); position: relative; overflow: hidden; transition: all var(--duration-normal) var(--ease-out); display: flex; flex-direction: column; }
.svc-card::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--orange); transform: scaleX(0); transition: transform .5s var(--ease-out); }
.svc-card:hover { border-color: var(--border-orange); transform: translateY(-4px); box-shadow: var(--shadow-md); }
.svc-card:hover::after { transform: scaleX(1); }
.svc-card-icon { font-size: 32px; margin-bottom: var(--s-4); display: block; }
.svc-card-title { font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.svc-card-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.7; margin-bottom: var(--s-5); flex: 1; }
.svc-card-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: var(--orange); letter-spacing: .04em; text-transform: uppercase; transition: gap var(--duration-fast); }
.svc-card-link:hover { gap: 10px; }

/* CONTENT SECTIONS — for service pages */
.content-section { padding: var(--s-9) 0; position: relative; }
.content-section:nth-child(even) { background: var(--bg-secondary); }
.content-section h2 { font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 42px); font-weight: 900; letter-spacing: -.03em; color: var(--text-primary); line-height: 1.05; margin-bottom: var(--s-5); }
.content-section h3 { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--text-primary); margin-bottom: var(--s-3); }
.content-section p { font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: var(--s-5); }
.content-section p strong { color: var(--text-primary); font-weight: 600; }
.content-section ul { margin-bottom: var(--s-5); }
.content-section ul li { font-size: 15px; color: var(--text-secondary); line-height: 1.7; padding: 8px 0; padding-left: 28px; position: relative; border-bottom: 1px solid var(--border); }
.content-section ul li::before { content: ''; position: absolute; left: 0; top: 16px; width: 8px; height: 8px; border-radius: 50%; background: var(--orange); }

/* GRID CARDS — for values, features, etc */
.feature-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--s-4); margin-top: var(--s-6); }
.feature-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); padding: var(--s-6); transition: all var(--duration-normal); }
.feature-card:hover { border-color: var(--orange-border); transform: translateY(-3px); }
.feature-card-icon { font-size: 28px; margin-bottom: var(--s-4); display: block; }
.feature-card-title { font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.feature-card-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.7; }

/* PROCESS STEPS */
.process-steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--s-5); margin-top: var(--s-7); }
.step { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
.step-num { width: 54px; height: 54px; border-radius: 50%; background: var(--orange); color: var(--bg-primary); font-weight: 900; font-size: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: var(--s-5); box-shadow: 0 0 0 5px var(--bg-primary), 0 0 0 7px var(--orange-border); transition: all var(--duration-normal); }
.step:hover .step-num { box-shadow: 0 0 0 5px var(--bg-primary), 0 0 0 12px rgba(255,102,51,.3); transform: scale(1.08); }
.step-card { background: var(--orange-soft); border: 1px solid var(--orange-border); border-top: 3px solid var(--orange); border-radius: var(--r-md); padding: var(--s-6) var(--s-5); width: 100%; transition: all var(--duration-normal); }
.step:hover .step-card { background: var(--orange-glow); transform: translateY(-4px); box-shadow: var(--shadow-md); }
.step-title { font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: var(--s-2); }
.step-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
.step-desc strong { color: var(--orange); }

/* FAQ */
.faq-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: var(--s-8); align-items: start; }
.faq-list { border: 1px solid var(--border); border-radius: var(--r-md); overflow: hidden; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-item:last-child { border-bottom: none; }
.faq-q { width: 100%; background: var(--bg-card); padding: var(--s-5); display: flex; justify-content: space-between; align-items: center; text-align: left; gap: var(--s-4); transition: background var(--duration-fast); }
.faq-q:hover { background: var(--bg-card-hover); }
.faq-q-text { font-size: 15px; font-weight: 600; color: var(--text-primary); line-height: 1.4; }
.faq-toggle { width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%; background: var(--orange-soft); border: 1px solid var(--orange-border); display: flex; align-items: center; justify-content: center; color: var(--orange); font-size: 18px; transition: all .3s var(--ease-out); }
.faq-item.open .faq-toggle { transform: rotate(45deg); background: var(--orange); color: var(--bg-primary); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height .4s var(--ease-out); }
.faq-item.open .faq-a { max-height: 400px; }
.faq-a-inner { padding: 0 var(--s-5) var(--s-5); font-size: 14px; color: var(--text-tertiary); line-height: 1.8; border-top: 1px solid var(--border); padding-top: var(--s-4); background: var(--bg-secondary); }

/* PRE-CTA */
.pre-cta { background: var(--bg-card); border-top: 1px solid var(--border); padding: var(--s-7) 0; }
.pre-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: var(--s-6); flex-wrap: wrap; }
.pre-cta-title { font-size: clamp(22px, 2.5vw, 30px); font-weight: 800; color: var(--text-primary); letter-spacing: -.02em; }
.pre-cta-sub { font-size: 14px; color: var(--text-tertiary); font-family: var(--font-mono); }

/* CONTACT */
.contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: var(--s-8); align-items: start; }
.contact-wpp { background: rgba(37,211,102,.05); border: 1px solid rgba(37,211,102,.15); border-radius: var(--r-md); padding: var(--s-6); display: flex; flex-direction: column; gap: var(--s-3); }
.contact-wpp-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: rgba(37,211,102,.7); }
.contact-info-card { display: flex; align-items: flex-start; gap: var(--s-4); padding: var(--s-5); background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-md); transition: border-color var(--duration-fast); }
.contact-info-card:hover { border-color: var(--border-orange); }
.contact-info-icon { width: 40px; height: 40px; flex-shrink: 0; background: var(--orange-soft); border: 1px solid var(--orange-border); border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center; color: var(--orange); }
.contact-info-label { font-family: var(--font-mono); font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--orange); margin-bottom: 2px; }
.contact-info-value { font-size: 14px; color: var(--text-primary); line-height: 1.5; }
.contact-info-value a { transition: color var(--duration-fast); }
.contact-info-value a:hover { color: var(--orange); }
.map-wrapper { border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--border); height: 400px; }
.map-wrapper iframe { width: 100%; height: 100%; border: none; display: block; filter: grayscale(.8) contrast(1.1); transition: filter var(--duration-normal); }
.map-wrapper:hover iframe { filter: grayscale(.3) contrast(1); }
.map-link { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: var(--orange); margin-top: var(--s-3); transition: gap var(--duration-fast); }
.map-link:hover { gap: 10px; }

/* FOOTER */
.footer { background: var(--bg-secondary); border-top: 1px solid var(--border); padding: var(--s-8) 0 var(--s-6); }
.footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: var(--s-7); margin-bottom: var(--s-7); }
.footer-brand-desc { font-size: 14px; color: var(--text-tertiary); line-height: 1.7; max-width: 280px; margin-bottom: var(--s-3); }
.footer-col-title { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-primary); margin-bottom: var(--s-4); }
.footer-links { display: flex; flex-direction: column; gap: var(--s-3); }
.footer-links a { font-size: 13px; color: var(--text-tertiary); transition: color var(--duration-fast); }
.footer-links a:hover { color: var(--orange); }
.footer-hours-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--text-tertiary); }
.footer-hours-row strong { color: var(--text-primary); font-weight: 600; }
.footer-bottom { padding-top: var(--s-5); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--s-3); font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); }

/* WPP FLOAT */
.wpp-float { position: fixed; bottom: 28px; right: 28px; z-index: 999; display: flex; align-items: center; gap: 10px; background: var(--green-wpp); color: #fff; font-weight: 700; font-size: 14px; padding: 14px 22px; border-radius: var(--r-full); box-shadow: 0 8px 32px rgba(37,211,102,.4); transition: all var(--duration-fast); animation: pulseGlow 3s ease infinite; opacity: 0; transform: translateY(16px); pointer-events: none; }
.wpp-float.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
.wpp-float:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 16px 48px rgba(37,211,102,.5); }

/* STICKY CTA */
.sticky-cta { display: none; }
@media (max-width: 768px) {
  .sticky-cta { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 998; background: var(--bg-glass); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border-top: 1px solid var(--border); padding: 12px 16px; align-items: center; justify-content: space-between; gap: 12px; transform: translateY(100%); transition: transform .4s var(--ease-out); }
  .sticky-cta.visible { transform: translateY(0); }
  .sticky-cta-info { display: flex; flex-direction: column; min-width: 0; }
  .sticky-cta-title { font-size: 14px; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sticky-cta-sub { font-family: var(--font-mono); font-size: 10px; color: var(--text-tertiary); letter-spacing: .04em; }
  .sticky-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--orange); color: var(--bg-primary); font-weight: 800; font-size: 13px; padding: 12px 20px; border-radius: var(--r-full); white-space: nowrap; flex-shrink: 0; transition: background var(--duration-fast), transform var(--duration-fast); position: relative; overflow: hidden; letter-spacing: .02em; }
  .sticky-cta-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent); transition: left .5s; }
  .sticky-cta-btn:hover::before { left: 100%; }
  .wpp-float { display: none !important; }
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .about-grid { grid-template-columns: 1fr; gap: var(--s-7); }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: var(--s-5); }
  .faq-layout { grid-template-columns: 1fr; gap: var(--s-5); }
}
@media (max-width: 768px) {
  body { cursor: auto; }
  a, button { cursor: auto; }
  .container { padding: 0 14px; }
  .section { padding: 48px 0; }
  .content-section { padding: 48px 0; }
  .header { height: 56px; }
  .logo-mark { width: 34px; height: 34px; font-size: 15px; }
  .logo-name { font-size: 13px; }
  .logo-sub { font-size: 9px; }
  .nav { display: none; position: fixed; top: 56px; left: 0; right: 0; background: var(--bg-glass); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 1px solid var(--border); padding: var(--s-3); flex-direction: column; align-items: stretch; gap: 0; z-index: 999; }
  .nav.open { display: flex; }
  .nav.open .nav-link { padding: 12px var(--s-2); border-bottom: 1px solid var(--border); font-size: 14px; }
  .nav.open .nav-cta { margin-top: var(--s-2); padding: 14px; text-align: center; }
  .menu-toggle { display: flex; }
  .hero { min-height: auto; padding-bottom: 32px; }
  .hero-inner { padding: 32px 14px; padding-top: calc(56px + 32px); }
  .hero h1 { font-size: clamp(32px, 9vw, 44px); margin-bottom: 16px; }
  .hero-eyebrow { font-size: 10px; margin-bottom: 12px; }
  .hero-desc { font-size: 15px; margin-bottom: 24px; line-height: 1.6; }
  .hero-actions { flex-direction: column; gap: 10px; }
  .btn { width: 100%; justify-content: center; padding: 14px 24px; font-size: 14px; }
  .hero-metrics { gap: 20px; }
  .metric-num { font-size: 22px; }
  .metric-label { font-size: 10px; }
  .marquee-strip { padding: 10px 0; }
  .marquee-item { font-size: 11px; padding: 0 16px; }
  .stats-section { padding: 36px 0; }
  .stat-number { font-size: clamp(32px, 8vw, 44px); }
  .stat-label { font-size: 12px; }
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .about-grid { grid-template-columns: 1fr; gap: 32px; }
  .about-title { font-size: clamp(26px, 6vw, 36px); }
  .about-desc { font-size: 14px; margin-bottom: 16px; }
  .about-values { grid-template-columns: 1fr; gap: 10px; }
  .about-mini-cards { grid-template-columns: 1fr 1fr; gap: 10px; }
  .svc-grid { grid-template-columns: 1fr; }
  .feature-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr; gap: 16px; }
  .faq-layout { grid-template-columns: 1fr; gap: 24px; }
  .faq-q { padding: 16px; }
  .faq-q-text { font-size: 14px; }
  .faq-a-inner { font-size: 13px; padding: 0 16px 16px; padding-top: 12px; }
  .pre-cta { padding: 32px 0; }
  .pre-cta-inner { flex-direction: column; gap: 16px; text-align: center; }
  .pre-cta-title { font-size: 20px; }
  .contact-grid { grid-template-columns: 1fr; gap: 20px; }
  .map-wrapper { height: 220px; }
  .footer { padding: 40px 0 24px; }
  .footer-grid { grid-template-columns: 1fr; gap: 24px; }
  .footer-bottom { flex-direction: column; text-align: center; gap: 6px; }
  .sec-title { font-size: clamp(26px, 6vw, 36px); margin-bottom: 10px; }
  .sec-sub { font-size: 14px; }
  .sec-label { font-size: 10px; }
  .footer { padding-bottom: 80px; }
  .content-section h2 { font-size: clamp(24px, 6vw, 32px); }
}
@media (max-width: 480px) {
  .hero h1 { font-size: clamp(28px, 8vw, 36px); }
  .hero-desc { font-size: 14px; }
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
  .stat-number { font-size: 28px; }
}
`;

// ── JS (from index.html) ────────────────────────────────────
function buildJS(loaderPhrase) {
  return `
/* LOADER */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const phrase = document.getElementById('loaderPhrase');
  const line = document.getElementById('loaderLine');
  const brand = document.getElementById('loaderBrand');
  const words = '${loaderPhrase}'.split(' ');
  phrase.innerHTML = words.map(w => '<span>' + w + '</span>').join(' ');
  const spans = phrase.querySelectorAll('span');
  requestAnimationFrame(() => line.classList.add('active'));
  spans.forEach((s, i) => { setTimeout(() => s.classList.add('visible'), 300 + i * 280); });
  setTimeout(() => brand.classList.add('visible'), 300 + words.length * 280 + 300);
  setTimeout(() => {
    loader.classList.add('done');
    document.body.style.overflow = '';
    setTimeout(() => { loader.style.display = 'none'; initAnimations(); }, 700);
  }, 300 + words.length * 280 + 1000);
});

/* LENIS */
const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

/* HEADER SCROLL */
const header = document.getElementById('header');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); }, { passive: true });

/* MOBILE MENU */
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); nav.classList.toggle('open'); });
nav.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { menuToggle.classList.remove('active'); nav.classList.remove('open'); }); });

/* CURSOR */
const cursor = document.getElementById('cursor');
const cursorLabel = document.getElementById('cursorLabel');
let cx = 0, cy = 0, mx = 0, my = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function updateCursor() { cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15; cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px'; cursorLabel.style.left = cx + 'px'; cursorLabel.style.top = (cy + 36) + 'px'; requestAnimationFrame(updateCursor); }
updateCursor();
document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); const label = el.dataset.cursor; if (label) { cursorLabel.textContent = label; cursorLabel.classList.add('visible'); } });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorLabel.classList.remove('visible'); });
});

/* GSAP */
gsap.registerPlugin(ScrollTrigger);
function initAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .to('#heroH1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .to('#heroDesc', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .to('#heroActions', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    .to('#heroMetrics', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
  gsap.to('.highlight::after', { scaleX: 1, duration: 0.6, delay: 1.5, ease: 'power3.out' });
  gsap.to('#heroBg', { y: 150, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }, delay: (i % 4) * 0.08 });
  });
  document.querySelectorAll('.stat-number').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    ScrollTrigger.create({ trigger: counter, start: 'top 85%', onEnter: () => {
      gsap.to({ val: 0 }, { val: target, duration: 2, ease: 'power2.out', onUpdate: function() { counter.textContent = Math.round(this.targets()[0].val) + suffix; } });
    }, once: true });
  });
}

/* WPP FLOAT */
const wppFloat = document.getElementById('wpp-float');
const heroEl = document.getElementById('hero');
if (heroEl && wppFloat) {
  const wppObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { wppFloat.classList.toggle('visible', !entry.isIntersecting); }); }, { threshold: 0 });
  wppObserver.observe(heroEl);
}

/* STICKY CTA */
const stickyCta = document.getElementById('stickyCta');
if (stickyCta && heroEl) {
  const stickyObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { stickyCta.classList.toggle('visible', !entry.isIntersecting); }); }, { threshold: 0, rootMargin: '0px 0px -100px 0px' });
  stickyObserver.observe(heroEl);
}
`;
}

// ── SHARED HTML PARTS ───────────────────────────────────────

function head(title, desc, canonical, extraSchema = '') {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://autopecasitatiaia.com.br/${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="https://autopecasitatiaia.com.br/${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script>
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"><\/script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "name": "Auto Peças Itatiaia",
  "url": "https://autopecasitatiaia.com.br",
  "telephone": "+55-24-99309-9190",
  "address": { "@type": "PostalAddress", "streetAddress": "Av. dos Expedicionários, 275 - loja 5 - Centro", "addressLocality": "Itatiaia", "addressRegion": "RJ", "postalCode": "27580-216", "addressCountry": "BR" },
  "geo": { "@type": "GeoCoordinates", "latitude": "-22.4939592", "longitude": "-44.5614109" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "347" }
}
<\/script>
${extraSchema}
<style>${CSS}</style>
</head>`;
}

function faqSchema(faqs) {
  const items = faqs.map(f => `{ "@type": "Question", "name": "${f.q.replace(/"/g, '\\"')}", "acceptedAnswer": { "@type": "Answer", "text": "${f.a.replace(/"/g, '\\"')}" } }`).join(',\n    ');
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    ${items}
  ]
}
<\/script>`;
}

function serviceSchema(name, desc) {
  return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "${name}",
  "description": "${desc.replace(/"/g, '\\"')}",
  "provider": {
    "@type": "AutoPartsStore",
    "name": "Auto Peças Itatiaia",
    "telephone": "+55-24-99309-9190",
    "address": { "@type": "PostalAddress", "streetAddress": "Av. dos Expedicionários, 275 - loja 5 - Centro", "addressLocality": "Itatiaia", "addressRegion": "RJ", "postalCode": "27580-216", "addressCountry": "BR" }
  },
  "areaServed": ["Itatiaia", "Resende", "Penedo", "Volta Redonda", "Barra Mansa", "Porto Real", "Quatis"]
}
<\/script>`;
}

const stickyCta = `
<div class="sticky-cta" id="stickyCta">
  <div class="sticky-cta-info">
    <div class="sticky-cta-title">Auto Peças Itatiaia</div>
    <div class="sticky-cta-sub">&#11088; 4.9 · 40+ marcas · Itatiaia RJ</div>
  </div>
  <a href="${WPP_LINK_PECA}" class="sticky-cta-btn" target="_blank" rel="noopener">
    ${WPP_SVG_16} Pedir Peça
  </a>
</div>`;

function loader() {
  return `
<div class="loader" id="loader">
  <div class="loader-phrase" id="loaderPhrase"></div>
  <div class="loader-line" id="loaderLine"></div>
  <div class="loader-brand" id="loaderBrand">Auto Peças Itatiaia</div>
</div>
<div class="cursor" id="cursor"></div>
<div class="cursor-label" id="cursorLabel"></div>`;
}

const wppFloat = `
<a href="${WPP_LINK_PECA}" class="wpp-float" id="wpp-float" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp" data-cursor="WhatsApp">
  ${WPP_SVG_20} Chamar no WhatsApp
</a>`;

function headerHTML(activePage) {
  const links = [
    { href: '/', label: 'Início', id: 'home' },
    { href: '/sobre.html', label: 'Sobre', id: 'sobre' },
    { href: '/servicos.html', label: 'Serviços', id: 'servicos' },
    { href: '/contato.html', label: 'Contato', id: 'contato' },
  ];
  const navLinks = links.map(l => `<a href="${l.href}" class="nav-link${activePage === l.id ? ' active' : ''}">${l.label}</a>`).join('\n      ');
  return `
<header class="header" id="header">
  <div class="header-inner">
    <a href="/" class="logo" data-cursor="Início">
      <div class="logo-mark">AP</div>
      <div class="logo-text">
        <span class="logo-name">Auto Peças Itatiaia</span>
        <span class="logo-sub">Itatiaia &middot; RJ &middot; Centro</span>
      </div>
    </a>
    <nav class="nav" id="nav">
      ${navLinks}
      <a href="${WPP_LINK}" class="nav-cta" target="_blank" rel="noopener" data-cursor="Chamar">WhatsApp</a>
    </nav>
    <button class="menu-toggle" id="menu-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;
}

function heroSection(eyebrow, h1Text, desc) {
  return `
<section class="hero noise" id="hero">
  <div class="hero-bg" id="heroBg" aria-hidden="true"></div>
  <div class="hero-grid-bg" aria-hidden="true"></div>
  <div class="hero-inner" id="heroContent">
    <div class="hero-eyebrow" id="heroEyebrow"><span class="dot"></span> ${eyebrow}</div>
    <h1 id="heroH1">${h1Text}</h1>
    <p class="hero-desc" id="heroDesc">${desc}</p>
    <div class="hero-actions" id="heroActions">
      <a href="${WPP_LINK_ORC}" class="btn btn-wpp" target="_blank" rel="noopener" data-cursor="Chamar">${WPP_SVG_18} Solicitar Orçamento</a>
      <a href="/servicos.html" class="btn btn-secondary" data-cursor="Ver">Ver Todos os Serviços ${ARROW_SVG}</a>
    </div>
    <div class="hero-metrics" id="heroMetrics">
      <div class="metric"><div class="metric-num">4.9<span class="accent">/5</span></div><div class="metric-label">Google Reviews</div></div>
      <div class="metric"><div class="metric-num">40<span class="accent">+</span></div><div class="metric-label">Marcas</div></div>
      <div class="metric"><div class="metric-num">15<span class="accent">+</span></div><div class="metric-label">Anos no mercado</div></div>
    </div>
  </div>
</section>`;
}

function marqueeStrip(items) {
  const doubled = [...items, ...items];
  const html = doubled.map(t => `<span class="marquee-item">${t}</span><span class="marquee-sep"></span>`).join('');
  return `<div class="marquee-strip"><div class="marquee-track">${html}</div></div>`;
}

function preCta(titleText) {
  return `
<div class="pre-cta">
  <div class="container">
    <div class="pre-cta-inner">
      <div><h2 class="pre-cta-title">${titleText}</h2><div class="pre-cta-sub">Orçamento rápido pelo WhatsApp &mdash; (24) 99309-9190</div></div>
      <a href="${WPP_LINK_ORC}" class="btn btn-wpp" target="_blank" rel="noopener" data-cursor="Chamar">${WPP_SVG_18} Pedir Orçamento</a>
    </div>
  </div>
</div>`;
}

const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom:var(--s-4);"><div class="logo-mark">AP</div><div class="logo-text"><span class="logo-name">Auto Peças Itatiaia</span><span class="logo-sub">Itatiaia &middot; RJ</span></div></div>
        <p class="footer-brand-desc">Referência em autopeças na região. Mais de 40 marcas, atendimento especializado para mecânicos, motoristas e frotas.</p>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);letter-spacing:.06em;">&#11088; 4.9/5 — 347 AVALIAÇÕES</div>
      </div>
      <div>
        <div class="footer-col-title">Navegação</div>
        <div class="footer-links">
          <a href="/">Início</a>
          <a href="/sobre.html">Sobre Nós</a>
          <a href="/servicos.html">Serviços</a>
          <a href="/contato.html">Contato</a>
          <a href="/troca-de-bateria.html">Troca de Bateria</a>
          <a href="/troca-de-oleo.html">Troca de Óleo</a>
          <a href="/troca-de-filtros.html">Troca de Filtros</a>
          <a href="/troca-de-pastilhas.html">Troca de Pastilhas</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Horário</div>
        <div style="display:flex;flex-direction:column;gap:var(--s-2);">
          <div class="footer-hours-row"><span>Segunda a Sexta</span><strong>08h — 18h</strong></div>
          <div class="footer-hours-row"><span>Sábado</span><strong>08h — 13h</strong></div>
          <div class="footer-hours-row"><span>Domingo</span><strong>Fechado</strong></div>
        </div>
        <div style="margin-top:var(--s-5);">
          <div class="footer-col-title">Contato</div>
          <div class="footer-links">
            <a href="tel:+5524993099190">(24) 99309-9190</a>
            <a href="${WPP_LINK}" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://www.instagram.com/autopecasitatiaia" target="_blank" rel="noopener">@autopecasitatiaia</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2025 Auto Peças Itatiaia &mdash; Peças Automotivas em Itatiaia, RJ</div>
      <div>Av. dos Expedicionários, 275 - loja 5 - Centro, Itatiaia - RJ | (24) 99309-9190</div>
    </div>
  </div>
</footer>`;

function faqSection(faqs, sectionTitle = 'Dúvidas Frequentes') {
  const items = faqs.map(f => `
        <div class="faq-item"><button class="faq-q" onclick="this.parentElement.classList.toggle('open')"><span class="faq-q-text">${f.q}</span><span class="faq-toggle">+</span></button><div class="faq-a"><div class="faq-a-inner">${f.a}</div></div></div>`).join('');
  return `
<section class="section" style="background:var(--bg-secondary);">
  <div class="container">
    <div class="faq-layout">
      <div class="reveal">
        <div class="sec-label">FAQ</div>
        <h2 class="sec-title">${sectionTitle}</h2>
        <div class="sec-sub">Não encontrou sua resposta? Fale com a equipe da Auto Peças Itatiaia pelo WhatsApp.</div>
        <a href="${WPP_LINK}" class="btn btn-wpp" target="_blank" rel="noopener" style="margin-top:var(--s-6);" data-cursor="Chamar">${WPP_SVG_16} Tirar Dúvida</a>
      </div>
      <div class="faq-list">${items}
      </div>
    </div>
  </div>
</section>`;
}

function contactSection() {
  return `
<section class="section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Contato</div><h2 class="sec-title">Localização e Contato</h2></div>
    <div class="contact-grid" style="margin-top:var(--s-7);">
      <div style="display:flex;flex-direction:column;gap:var(--s-3);">
        <div class="contact-wpp reveal">
          <div class="contact-wpp-label">WhatsApp principal</div>
          <a href="${WPP_LINK}" class="btn btn-wpp" target="_blank" rel="noopener" style="width:100%;" data-cursor="Chamar">${WPP_SVG_18} (24) 99309-9190</a>
        </div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${PIN_SVG_18}</div><div><div class="contact-info-label">Endereço</div><div class="contact-info-value">Av. dos Expedicionários, 275 - loja 5 - Centro<br>Itatiaia &mdash; RJ, 27580-216</div></div></div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${CLOCK_SVG_18}</div><div><div class="contact-info-label">Horário</div><div class="contact-info-value">Seg–Sex: 08h–18h<br>Sábado: 08h–13h</div></div></div>
        <div class="contact-info-card reveal"><div class="contact-info-icon">${PHONE_SVG_18}</div><div><div class="contact-info-label">Telefone</div><div class="contact-info-value"><a href="tel:+5524993099190">(24) 99309-9190</a></div></div></div>
      </div>
      <div class="reveal" style="display:flex;flex-direction:column;gap:var(--s-3);">
        <div class="map-wrapper"><iframe src="${MAP_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização Auto Peças Itatiaia"></iframe></div>
        <a href="https://maps.google.com/?q=Auto+Pecas+Itatiaia+RJ" class="map-link" target="_blank" rel="noopener">Abrir no Google Maps ${MAP_ARROW_SVG}</a>
      </div>
    </div>
  </div>
</section>`;
}

function buildPage({ title, metaDesc, canonical, loaderPhrase, activePage, extraSchema, bodyContent }) {
  return `${head(title, metaDesc, canonical, extraSchema)}
<body style="overflow: hidden;">
${stickyCta}
${loader()}
${wppFloat}
${headerHTML(activePage)}
${bodyContent}
${preCta('Precisa de Peças Automotivas em Itatiaia?')}
${footerHTML}
<script>${buildJS(loaderPhrase)}<\/script>
</body>
</html>`;
}

// ══════════════════════════════════════════════════════════════
// PAGE DEFINITIONS
// ══════════════════════════════════════════════════════════════

const pages = [];

// ── 1. SOBRE ────────────────────────────────────────────────
pages.push({
  file: 'sobre.html',
  title: 'Sobre a Auto Peças Itatiaia | Autopeças em Itatiaia - RJ',
  metaDesc: 'Conheça a história da Auto Peças Itatiaia. Há mais de 15 anos atendendo mecânicos e motoristas em Itatiaia, Resende, Penedo e Sul Fluminense com 40+ marcas.',
  canonical: 'sobre.html',
  loaderPhrase: 'Conheça Nossa História',
  activePage: 'sobre',
  extraSchema: `<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "AboutPage", "name": "Sobre a Auto Peças Itatiaia", "description": "História, missão e valores da Auto Peças Itatiaia." }
<\/script>` + '\n' + faqSchema([
    { q: 'Desde quando a Auto Peças Itatiaia existe?', a: 'A Auto Peças Itatiaia foi fundada em 2010, com mais de 15 anos de experiência no mercado de autopeças em Itatiaia e região do Sul Fluminense.' },
    { q: 'Onde fica a Auto Peças Itatiaia?', a: 'Estamos na Av. dos Expedicionários, 275, loja 5, Centro de Itatiaia - RJ, próximo à Via Dutra BR-116. CEP: 27580-216.' },
    { q: 'A Auto Peças Itatiaia atende quais cidades?', a: 'Atendemos Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real, Quatis e toda a região do Sul Fluminense.' },
    { q: 'Vocês fazem entrega de peças?', a: 'Sim, fazemos entrega para oficinas e mecânicos em Itatiaia e cidades vizinhas. Consulte disponibilidade pelo WhatsApp.' },
    { q: 'Quantas marcas a loja trabalha?', a: 'Trabalhamos com mais de 40 marcas nacionais e importadas, incluindo Cofap, Nakata, TRW, NGK, Moura, Tudor, Mobil, Shell e muitas outras.' }
  ]),
  bodyContent: `
${heroSection('Itatiaia, RJ &mdash; desde 2010', 'Sobre a Auto Peças <span class="highlight">Itatiaia</span>', 'Há mais de <strong>15 anos</strong>, somos referência em peças automotivas no Sul Fluminense. Nossa loja fica no coração de Itatiaia, na Av. dos Expedicionários, próximo à Via Dutra <strong>BR-116</strong>, atendendo mecânicos, motoristas e frotistas de <strong>Itatiaia, Resende, Penedo, Volta Redonda</strong> e região.')}

${marqueeStrip(['15+ Anos de História', '40+ Marcas Premium', '347 Avaliações 5 Estrelas', 'Sul Fluminense', 'Via Dutra BR-116', 'Centro de Itatiaia', 'Entrega para Oficinas', 'Parceiro do Mecânico'])}

<div class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div><div class="stat-number" data-target="15" data-suffix="+">0</div><div class="stat-label">Anos de experiência</div></div>
      <div><div class="stat-number" data-target="40" data-suffix="+">0</div><div class="stat-label">Marcas disponíveis</div></div>
      <div><div class="stat-number" data-target="347" data-suffix="">0</div><div class="stat-label">Avaliações no Google</div></div>
      <div><div class="stat-number" data-target="60" data-suffix="+">0</div><div class="stat-label">Categorias de produtos</div></div>
    </div>
  </div>
</div>

<section class="section about">
  <div class="container">
    <div class="about-grid">
      <div class="reveal">
        <div class="about-badge">&#128197; Nossa História</div>
        <h2 class="about-title">Uma Trajetória de <em>Confiança</em></h2>
        <p class="about-desc">A <strong>Auto Peças Itatiaia</strong> nasceu em 2010 com uma missão clara: oferecer peças automotivas de qualidade com atendimento honesto e preço justo. Localizada estrategicamente na <strong>Av. dos Expedicionários</strong>, no Centro de Itatiaia, próxima à <strong>Via Dutra BR-116</strong>, a loja se tornou ponto de referência para mecânicos, motoristas e frotistas de toda a região do Sul Fluminense.</p>
        <p class="about-desc">Ao longo de mais de uma década, construímos relações sólidas com oficinas em <strong>Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis</strong>. Nosso diferencial está no atendimento especializado: conhecemos cada peça, cada marca, cada aplicação. Não vendemos apenas autopeças — entregamos <strong>soluções completas</strong> para manutenção veicular.</p>
        <p class="about-desc">Hoje trabalhamos com <strong>mais de 40 marcas</strong> consagradas — de Cofap a Moura, de NGK a Shell — cobrindo motor, suspensão, freios, elétrica, iluminação, lubrificação e muito mais. Tudo isso com <strong>nota 4.9 no Google</strong> e 347 avaliações de clientes satisfeitos.</p>
      </div>
      <div class="about-visual reveal">
        <div class="about-big-card">
          <div class="about-big-num">15+</div>
          <div class="about-big-label">Anos no Mercado de Autopeças</div>
          <div class="about-big-desc">Desde 2010 servindo Itatiaia e o Sul Fluminense com peças originais e alternativas de alta qualidade.</div>
        </div>
        <div class="about-mini-cards">
          <div class="about-mini"><div class="about-mini-num">40+</div><div class="about-mini-label">Marcas</div></div>
          <div class="about-mini"><div class="about-mini-num">4.9</div><div class="about-mini-label">Nota Google</div></div>
          <div class="about-mini"><div class="about-mini-num">347</div><div class="about-mini-label">Avaliações</div></div>
          <div class="about-mini"><div class="about-mini-num">60+</div><div class="about-mini-label">Categorias</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <div class="sec-label" style="justify-content:center;">Nossos Valores</div>
      <h2 class="sec-title">Missão, Visão e Valores</h2>
      <p class="sec-sub" style="margin:0 auto;">Os pilares que guiam a Auto Peças Itatiaia desde 2010.</p>
    </div>
    <div class="feature-grid" style="margin-top:var(--s-7);">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128170;</div><div class="feature-card-title">Qualidade Garantida</div><div class="feature-card-desc">Trabalhamos exclusivamente com marcas reconhecidas no mercado. Cada peça que sai da nossa loja tem procedência certificada e garantia de fábrica.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#129309;</div><div class="feature-card-title">Honestidade e Transparência</div><div class="feature-card-desc">Preço justo, sem surpresas. Apresentamos todas as opções disponíveis para que o cliente escolha a melhor relação custo-benefício para seu veículo.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9889;</div><div class="feature-card-title">Agilidade no Atendimento</div><div class="feature-card-desc">Sabemos que carro parado é prejuízo. Respondemos rápido no WhatsApp, temos estoque amplo e fazemos entrega para oficinas em Itatiaia e região.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#127891;</div><div class="feature-card-title">Conhecimento Técnico</div><div class="feature-card-desc">Nossa equipe conhece cada peça por aplicação. Orientamos sobre compatibilidade, marcas recomendadas e intervalos de troca. Suporte real para mecânicos e motoristas.</div></div>
    </div>
  </div>
</section>

${faqSection([
  { q: 'Desde quando a Auto Peças Itatiaia existe?', a: 'A Auto Peças Itatiaia foi fundada em 2010, com mais de 15 anos de experiência no mercado de autopeças em Itatiaia e região do Sul Fluminense.' },
  { q: 'Onde fica a Auto Peças Itatiaia?', a: 'Estamos na Av. dos Expedicionários, 275, loja 5, Centro de Itatiaia - RJ, próximo à Via Dutra BR-116. CEP: 27580-216.' },
  { q: 'A Auto Peças Itatiaia atende quais cidades?', a: 'Atendemos Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real, Quatis e toda a região do Sul Fluminense.' },
  { q: 'Vocês fazem entrega de peças?', a: 'Sim, fazemos entrega para oficinas e mecânicos em Itatiaia e cidades vizinhas. Consulte disponibilidade pelo WhatsApp.' },
  { q: 'Quantas marcas a loja trabalha?', a: 'Trabalhamos com mais de 40 marcas nacionais e importadas, incluindo Cofap, Nakata, TRW, NGK, Moura, Tudor, Mobil, Shell e muitas outras.' }
], 'Dúvidas Sobre a<br>Auto Peças Itatiaia')}

${contactSection()}`
});

// ── 2. CONTATO ──────────────────────────────────────────────
pages.push({
  file: 'contato.html',
  title: 'Contato | Auto Peças Itatiaia - Itatiaia RJ',
  metaDesc: 'Entre em contato com a Auto Peças Itatiaia. WhatsApp (24) 99309-9190, endereço no Centro de Itatiaia-RJ, horário de funcionamento e mapa.',
  canonical: 'contato.html',
  loaderPhrase: 'Fale Conosco',
  activePage: 'contato',
  extraSchema: `<script type="application/ld+json">
{ "@context": "https://schema.org", "@type": "ContactPage", "name": "Contato - Auto Peças Itatiaia", "description": "Informações de contato da Auto Peças Itatiaia." }
<\/script>` + '\n' + faqSchema([
    { q: 'Qual o WhatsApp da Auto Peças Itatiaia?', a: 'Nosso WhatsApp é (24) 99309-9190. Respondemos rapidamente durante o horário de funcionamento.' },
    { q: 'Qual o horário de funcionamento?', a: 'Funcionamos de segunda a sexta das 08h às 18h e aos sábados das 08h às 13h. Domingos e feriados estamos fechados.' },
    { q: 'Onde fica a loja?', a: 'Estamos na Av. dos Expedicionários, 275, loja 5, Centro de Itatiaia - RJ, CEP 27580-216, próximo à Via Dutra BR-116.' },
    { q: 'Tem estacionamento na loja?', a: 'Sim, há estacionamento gratuito nas proximidades e vagas na rua em frente à loja.' },
    { q: 'Vocês entregam peças em outras cidades?', a: 'Sim, entregamos para oficinas e mecânicos em Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis.' }
  ]),
  bodyContent: `
${heroSection('Itatiaia, RJ &mdash; Centro', 'Entre em Contato com a<br>Auto Peças <span class="highlight">Itatiaia</span>', 'Precisa de peças automotivas? Fale conosco pelo <strong>WhatsApp, telefone ou visite nossa loja</strong> no Centro de Itatiaia. Atendemos mecânicos, motoristas e frotistas de <strong>Itatiaia, Resende, Penedo, Volta Redonda</strong> e região com agilidade e preço justo.')}

${marqueeStrip(['WhatsApp Rápido', '(24) 99309-9190', 'Centro de Itatiaia', 'Seg-Sex 08h-18h', 'Sáb 08h-13h', 'Entrega para Oficinas', 'Sul Fluminense', 'Via Dutra BR-116'])}

<section class="section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Canais de Contato</div><h2 class="sec-title">Como Falar com a<br>Auto Peças Itatiaia</h2></div>
    <div class="feature-grid" style="margin-top:var(--s-7);">
      <div class="feature-card reveal" style="text-align:center;">
        <div class="feature-card-icon" style="margin:0 auto var(--s-4);">&#128241;</div>
        <div class="feature-card-title">WhatsApp</div>
        <div class="feature-card-desc" style="margin-bottom:var(--s-4);">Canal mais rápido. Envie a peça que precisa e receba orçamento em minutos.</div>
        <a href="${WPP_LINK}" class="btn btn-wpp" target="_blank" rel="noopener" style="width:100%;">${WPP_SVG_16} (24) 99309-9190</a>
      </div>
      <div class="feature-card reveal" style="text-align:center;">
        <div class="feature-card-icon" style="margin:0 auto var(--s-4);">&#128222;</div>
        <div class="feature-card-title">Telefone</div>
        <div class="feature-card-desc" style="margin-bottom:var(--s-4);">Ligue durante o horário de funcionamento para tirar dúvidas ou fazer pedidos.</div>
        <a href="tel:+5524993099190" class="btn btn-primary" style="width:100%;">(24) 99309-9190</a>
      </div>
      <div class="feature-card reveal" style="text-align:center;">
        <div class="feature-card-icon" style="margin:0 auto var(--s-4);">&#128205;</div>
        <div class="feature-card-title">Visite a Loja</div>
        <div class="feature-card-desc" style="margin-bottom:var(--s-4);">Av. dos Expedicionários, 275 - loja 5, Centro, Itatiaia - RJ, 27580-216</div>
        <a href="https://maps.google.com/?q=Auto+Pecas+Itatiaia+RJ" class="btn btn-secondary" target="_blank" rel="noopener" style="width:100%;">Abrir no Maps ${ARROW_SVG}</a>
      </div>
      <div class="feature-card reveal" style="text-align:center;">
        <div class="feature-card-icon" style="margin:0 auto var(--s-4);">&#128247;</div>
        <div class="feature-card-title">Instagram</div>
        <div class="feature-card-desc" style="margin-bottom:var(--s-4);">Siga @autopecasitatiaia para novidades, promoções e dicas de manutenção.</div>
        <a href="https://www.instagram.com/autopecasitatiaia" class="btn btn-secondary" target="_blank" rel="noopener" style="width:100%;">@autopecasitatiaia ${ARROW_SVG}</a>
      </div>
    </div>
  </div>
</section>

<section class="content-section" style="background:var(--bg-secondary);">
  <div class="container">
    <div class="reveal"><div class="sec-label">Horário</div><h2 class="sec-title">Horário de Funcionamento</h2></div>
    <div class="feature-grid" style="margin-top:var(--s-6);max-width:600px;">
      <div class="feature-card reveal"><div class="feature-card-title">Segunda a Sexta</div><div class="feature-card-desc" style="font-size:24px;font-weight:900;color:var(--orange);">08h — 18h</div></div>
      <div class="feature-card reveal"><div class="feature-card-title">Sábado</div><div class="feature-card-desc" style="font-size:24px;font-weight:900;color:var(--orange);">08h — 13h</div></div>
    </div>
    <p class="reveal" style="margin-top:var(--s-5);font-size:15px;color:var(--text-tertiary);">Domingos e feriados: fechado. Para urgências, envie mensagem pelo WhatsApp que respondemos no próximo dia útil.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Mapa</div><h2 class="sec-title">Nossa Localização em Itatiaia</h2><p class="sec-sub">Estamos no Centro de Itatiaia, próximos à Via Dutra BR-116. Fácil acesso para quem vem de Resende, Penedo, Volta Redonda e região.</p></div>
    <div style="margin-top:var(--s-7);">
      <div class="map-wrapper reveal" style="height:450px;"><iframe src="${MAP_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização Auto Peças Itatiaia" style="width:100%;height:100%;border:none;"></iframe></div>
      <a href="https://maps.google.com/?q=Auto+Pecas+Itatiaia+RJ" class="map-link" target="_blank" rel="noopener">Abrir no Google Maps ${MAP_ARROW_SVG}</a>
    </div>
    <div class="reveal" style="margin-top:var(--s-7);">
      <h3 style="font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:var(--s-3);">Cidades Atendidas</h3>
      <p style="font-size:15px;color:var(--text-secondary);line-height:1.8;">A Auto Peças Itatiaia atende clientes e oficinas de <strong style="color:var(--text-primary);">Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis</strong>. Fazemos entrega para mecânicos e oficinas da região. Solicite seu orçamento pelo WhatsApp e receba com rapidez.</p>
    </div>
  </div>
</section>

${faqSection([
  { q: 'Qual o WhatsApp da Auto Peças Itatiaia?', a: 'Nosso WhatsApp é (24) 99309-9190. Respondemos rapidamente durante o horário de funcionamento.' },
  { q: 'Qual o horário de funcionamento?', a: 'Funcionamos de segunda a sexta das 08h às 18h e aos sábados das 08h às 13h. Domingos e feriados estamos fechados.' },
  { q: 'Onde fica a loja?', a: 'Estamos na Av. dos Expedicionários, 275, loja 5, Centro de Itatiaia - RJ, CEP 27580-216, próximo à Via Dutra BR-116.' },
  { q: 'Tem estacionamento na loja?', a: 'Sim, há estacionamento gratuito nas proximidades e vagas na rua em frente à loja.' },
  { q: 'Vocês entregam peças em outras cidades?', a: 'Sim, entregamos para oficinas e mecânicos em Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis.' }
], 'Dúvidas Sobre<br>Contato e Localização')}`
});

// ── 3. SERVIÇOS HUB ─────────────────────────────────────────
const services = [
  { icon: '&#128267;', name: 'Troca de Bateria', slug: 'troca-de-bateria.html', desc: 'Teste gratuito, instalação inclusa e baterias Moura, Tudor, Heliar e Zetta com garantia.' },
  { icon: '&#128167;', name: 'Troca de Óleo', slug: 'troca-de-oleo.html', desc: 'Óleo mineral, semi e sintético das marcas Mobil, Shell, Lubrax, Petronas e Castrol. Serviço em 20 minutos.' },
  { icon: '&#129691;', name: 'Troca de Filtros', slug: 'troca-de-filtros.html', desc: 'Filtros de óleo, ar, combustível e cabine. Marcas Tecfil, Mann, Wega e Fram.' },
  { icon: '&#128711;', name: 'Troca de Disco de Freio', slug: 'troca-de-disco-de-freio.html', desc: 'Discos Fremax e Hipper Freios. Inspeção completa e instalação profissional.' },
  { icon: '&#128161;', name: 'Troca de Lâmpadas', slug: 'troca-de-lampadas.html', desc: 'Lâmpadas halógenas, LED e xenon. Marcas Philips e Osram com instalação inclusa.' },
  { icon: '&#127783;&#65039;', name: 'Troca de Palhetas', slug: 'troca-de-palhetas.html', desc: 'Palhetas Valeo e Bosch em todos os tamanhos. Verificação do sistema de limpeza.' },
  { icon: '&#9888;&#65039;', name: 'Troca de Fluido de Freio', slug: 'troca-de-fluido-de-freio.html', desc: 'Sangria completa com fluido DOT 3 e DOT 4. Segurança garantida para seu veículo.' },
  { icon: '&#128296;', name: 'Troca de Pastilhas de Freio', slug: 'troca-de-pastilhas.html', desc: 'Pastilhas cerâmicas e convencionais. Marcas Cobreq, Ecopads, TRW e Frasle.' },
];

pages.push({
  file: 'servicos.html',
  title: 'Serviços | Auto Peças Itatiaia - Troca de Óleo, Baterias e Mais',
  metaDesc: 'Conheça os serviços da Auto Peças Itatiaia: troca de óleo, bateria, filtros, freios, lâmpadas, palhetas e mais. Atendimento rápido em Itatiaia e região.',
  canonical: 'servicos.html',
  loaderPhrase: 'Nossos Serviços',
  activePage: 'servicos',
  extraSchema: faqSchema([
    { q: 'Quais serviços a Auto Peças Itatiaia oferece?', a: 'Oferecemos troca de óleo, bateria, filtros, disco de freio, pastilhas de freio, lâmpadas, palhetas e fluido de freio. Todos com peças de marcas premium e instalação profissional.' },
    { q: 'Preciso agendar os serviços?', a: 'Não é obrigatório. Atendemos por ordem de chegada, mas você pode agendar pelo WhatsApp (24) 99309-9190 para garantir horário.' },
    { q: 'Quanto tempo demora cada serviço?', a: 'A maioria dos serviços é realizada em 20 a 40 minutos. Troca de óleo leva cerca de 20 minutos; troca de bateria, 15 minutos.' },
    { q: 'Vocês atendem carros importados?', a: 'Sim, trabalhamos com peças para veículos nacionais e importados. Temos mais de 40 marcas disponíveis em estoque.' },
    { q: 'Aceitam quais formas de pagamento?', a: 'Aceitamos dinheiro, PIX, cartão de débito e crédito com parcelamento em até 3x sem juros.' }
  ]),
  bodyContent: `
${heroSection('Itatiaia, RJ &mdash; Serviços', 'Serviços da Auto Peças <span class="highlight">Itatiaia</span>', 'Realizamos <strong>troca de óleo, bateria, filtros, freios, lâmpadas, palhetas e mais</strong> com peças de qualidade e instalação profissional. Atendimento rápido para mecânicos e motoristas de <strong>Itatiaia, Resende, Penedo e região</strong>.')}

${marqueeStrip(['Troca de Óleo', 'Troca de Bateria', 'Troca de Filtros', 'Disco de Freio', 'Pastilhas de Freio', 'Lâmpadas', 'Palhetas', 'Fluido de Freio'])}

<section class="section">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <div class="sec-label" style="justify-content:center;">Serviços</div>
      <h2 class="sec-title">Todos os Nossos Serviços</h2>
      <p class="sec-sub" style="margin:0 auto;">8 serviços automotivos realizados com peças das melhores marcas do mercado. Atendimento em Itatiaia e região do Sul Fluminense.</p>
    </div>
    <div class="svc-grid">
      ${services.map(s => `
      <div class="svc-card reveal">
        <div class="svc-card-icon">${s.icon}</div>
        <div class="svc-card-title">${s.name}</div>
        <div class="svc-card-desc">${s.desc}</div>
        <a href="/${s.slug}" class="svc-card-link">Saiba mais ${MAP_ARROW_SVG}</a>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-secondary);border-top:1px solid var(--border);">
  <div class="container">
    <div class="reveal" style="text-align:center;">
      <div class="sec-label" style="justify-content:center;">Por que nos escolher</div>
      <h2 class="sec-title">Vantagens da Auto Peças Itatiaia</h2>
    </div>
    <div class="feature-grid" style="margin-top:var(--s-7);">
      <div class="feature-card reveal"><div class="feature-card-icon">&#9989;</div><div class="feature-card-title">Peças com Garantia</div><div class="feature-card-desc">Todas as peças vendidas e instaladas contam com garantia de fábrica. Trabalhamos exclusivamente com marcas reconhecidas pelo mercado.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#9201;</div><div class="feature-card-title">Serviço Rápido</div><div class="feature-card-desc">A maioria dos serviços é realizada em 20 a 40 minutos. Troca de óleo, bateria e filtros sem precisar de agendamento.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128176;</div><div class="feature-card-title">Preço Competitivo</div><div class="feature-card-desc">Oferecemos preços justos para todas as faixas de orçamento. Pagamento em PIX, cartão ou dinheiro. Parcelamos em até 3x sem juros.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128666;</div><div class="feature-card-title">Entrega para Oficinas</div><div class="feature-card-desc">Entregamos peças para oficinas e mecânicos em Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa e região.</div></div>
    </div>
  </div>
</section>

${faqSection([
  { q: 'Quais serviços a Auto Peças Itatiaia oferece?', a: 'Oferecemos troca de óleo, bateria, filtros, disco de freio, pastilhas de freio, lâmpadas, palhetas e fluido de freio. Todos com peças de marcas premium e instalação profissional.' },
  { q: 'Preciso agendar os serviços?', a: 'Não é obrigatório. Atendemos por ordem de chegada, mas você pode agendar pelo WhatsApp (24) 99309-9190 para garantir horário.' },
  { q: 'Quanto tempo demora cada serviço?', a: 'A maioria dos serviços é realizada em 20 a 40 minutos. Troca de óleo leva cerca de 20 minutos; troca de bateria, 15 minutos.' },
  { q: 'Vocês atendem carros importados?', a: 'Sim, trabalhamos com peças para veículos nacionais e importados. Temos mais de 40 marcas disponíveis em estoque.' },
  { q: 'Aceitam quais formas de pagamento?', a: 'Aceitamos dinheiro, PIX, cartão de débito e crédito com parcelamento em até 3x sem juros.' }
], 'Dúvidas Sobre<br>Nossos Serviços')}

${contactSection()}`
});

// ── SERVICE PAGE BUILDER ────────────────────────────────────
function buildServicePage(config) {
  const { file, title, metaDesc, canonical, h1, keyword, loaderPhrase, serviceSchemaName, serviceSchemaDesc, faqs, sections } = config;

  const bodyContent = `
${heroSection('Itatiaia, RJ &mdash; Serviços', h1.replace(/<[^>]+>/g, ''), sections.heroDesc)}

${marqueeStrip(sections.marqueeItems)}

${sections.mainContent}

${faqSection(faqs, sections.faqTitle || 'Dúvidas Frequentes Sobre<br>' + keyword)}

${contactSection()}`;

  return {
    file,
    title,
    metaDesc,
    canonical,
    loaderPhrase,
    activePage: 'servicos',
    extraSchema: serviceSchema(serviceSchemaName, serviceSchemaDesc) + '\n' + faqSchema(faqs),
    bodyContent,
  };
}

// ── 4. TROCA DE BATERIA ─────────────────────────────────────
pages.push(buildServicePage({
  file: 'troca-de-bateria.html',
  title: 'Troca de Bateria em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de bateria em Itatiaia com teste gratuito e instalação inclusa. Baterias Moura, Tudor, Heliar e Zetta com garantia. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-bateria.html',
  h1: 'Troca de Bateria em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Bateria',
  loaderPhrase: 'Troca de Bateria',
  serviceSchemaName: 'Troca de Bateria',
  serviceSchemaDesc: 'Serviço de troca de bateria automotiva em Itatiaia-RJ com teste gratuito, instalação inclusa e baterias Moura, Tudor, Heliar e Zetta.',
  faqs: [
    { q: 'Quanto custa uma troca de bateria em Itatiaia?', a: 'O valor varia conforme o modelo do veículo e a marca da bateria. Trabalhamos com Moura, Tudor, Heliar e Zetta. Consulte pelo WhatsApp (24) 99309-9190 para um orçamento personalizado.' },
    { q: 'O teste de bateria é gratuito?', a: 'Sim! Realizamos o teste de bateria gratuitamente na loja. Em poucos minutos verificamos a carga, tensão e condição geral da bateria.' },
    { q: 'Qual a garantia da bateria nova?', a: 'A garantia varia conforme a marca e modelo: baterias Moura têm até 24 meses, Tudor até 18 meses. A garantia é de fábrica.' },
    { q: 'Como saber se preciso trocar a bateria?', a: 'Sinais comuns: dificuldade para ligar o carro, luzes fracas no painel, sistema elétrico instável, bateria com mais de 3 anos de uso. Faça o teste gratuito na nossa loja.' },
    { q: 'Vocês trocam bateria de carro importado?', a: 'Sim, temos baterias para veículos nacionais e importados. Trabalhamos com diversas amperagens e tamanhos para atender todos os modelos.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de bateria</strong> com teste gratuito e instalação inclusa. Trabalhamos com as melhores marcas: <strong>Moura, Tudor, Heliar e Zetta</strong>. Garantia de fábrica para motoristas e mecânicos de <strong>Itatiaia, Resende, Penedo</strong> e região.',
    marqueeItems: ['Troca de Bateria', 'Teste Gratuito', 'Moura', 'Tudor', 'Heliar', 'Zetta', 'Instalação Inclusa', 'Itatiaia RJ'],
    faqTitle: 'Dúvidas Sobre<br>Troca de Bateria em Itatiaia',
    mainContent: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Serviço</div><h2>O Que Inclui a Troca de Bateria na Auto Peças Itatiaia</h2></div>
    <p class="reveal">Na <strong>Auto Peças Itatiaia</strong>, o serviço de troca de bateria é completo e rápido. Realizamos o <strong>teste gratuito da bateria atual</strong> para confirmar a necessidade de substituição, indicamos a bateria ideal para seu veículo e fazemos a <strong>instalação na hora</strong>, sem custo adicional. Todo o processo leva aproximadamente 15 minutos.</p>
    <p class="reveal">Atendemos veículos nacionais e importados de todas as marcas. Clientes de <strong>Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis</strong> podem contar com nosso estoque completo de baterias automotivas com garantia de fábrica.</p>
    <ul class="reveal">
      <li>Teste gratuito da bateria atual com equipamento profissional</li>
      <li>Diagnóstico completo do sistema elétrico</li>
      <li>Instalação inclusa sem custo adicional</li>
      <li>Descarte ecológico da bateria usada</li>
      <li>Garantia de fábrica em todas as marcas</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Baterias Disponíveis em Itatiaia</h2></div>
    <p class="reveal">Trabalhamos com as <strong>principais marcas de bateria automotiva</strong> do mercado brasileiro, garantindo qualidade e durabilidade para seu veículo:</p>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128267;</div><div class="feature-card-title">Moura</div><div class="feature-card-desc">Líder do mercado brasileiro de baterias automotivas. Tecnologia avançada, durabilidade superior e até 24 meses de garantia de fábrica.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128267;</div><div class="feature-card-title">Tudor</div><div class="feature-card-desc">Marca do grupo Exide, reconhecida mundialmente. Baterias de alta performance com ótima relação custo-benefício e até 18 meses de garantia.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128267;</div><div class="feature-card-title">Heliar</div><div class="feature-card-desc">Marca premium da Johnson Controls. Tecnologia PowerFrame para maior durabilidade e partidas confiáveis mesmo em condições extremas.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128267;</div><div class="feature-card-title">Zetta</div><div class="feature-card-desc">Fabricada pela Moura, a Zetta é a opção com melhor custo-benefício. Ideal para quem precisa de uma bateria confiável sem gastar muito.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Sinais de Que Sua Bateria Precisa Ser Trocada</h2></div>
    <p class="reveal">A bateria automotiva tem vida útil média de <strong>2 a 4 anos</strong>, dependendo do uso e das condições climáticas. Fique atento aos seguintes sinais que indicam necessidade de substituição:</p>
    <ul class="reveal">
      <li><strong>Dificuldade para dar partida</strong> — o motor demora a ligar ou faz barulho fraco ao girar a chave</li>
      <li><strong>Luzes do painel mais fracas</strong> — iluminação fraca ou oscilando indica queda de tensão na bateria</li>
      <li><strong>Sistema elétrico instável</strong> — vidros elétricos lentos, som desligando sozinho ou falhas na central</li>
      <li><strong>Bateria com mais de 3 anos</strong> — mesmo sem sintomas aparentes, baterias antigas podem falhar a qualquer momento</li>
      <li><strong>Corrosão nos terminais</strong> — acúmulo de pó branco ou verde nos polos da bateria</li>
    </ul>
    <p class="reveal">Se você identificou algum desses sinais, passe na Auto Peças Itatiaia para um <strong>teste gratuito de bateria</strong>. Em poucos minutos, nosso equipamento profissional analisa a carga, tensão e condição geral da sua bateria. Estamos na Av. dos Expedicionários, 275, Centro de Itatiaia.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Como Funciona o Processo de Troca</h2></div>
    <div class="process-steps">
      <div class="step reveal"><div class="step-num">1</div><div class="step-card"><div class="step-title">Teste Gratuito</div><div class="step-desc">Testamos sua bateria atual com equipamento profissional para confirmar a necessidade de troca.</div></div></div>
      <div class="step reveal"><div class="step-num">2</div><div class="step-card"><div class="step-title">Escolha a Marca</div><div class="step-desc">Apresentamos as opções disponíveis: <strong>Moura, Tudor, Heliar ou Zetta</strong>, com preços e garantias.</div></div></div>
      <div class="step reveal"><div class="step-num">3</div><div class="step-card"><div class="step-title">Instalação na Hora</div><div class="step-desc">Instalamos a bateria nova em 15 minutos. <strong>Descarte ecológico</strong> da bateria usada incluso.</div></div></div>
    </div>
  </div>
</section>`
  }
}));

// ── 5. TROCA DE ÓLEO ────────────────────────────────────────
pages.push(buildServicePage({
  file: 'troca-de-oleo.html',
  title: 'Troca de Óleo em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de óleo em Itatiaia com filtro incluso. Óleos Mobil, Shell, Lubrax, Petronas e Castrol. Serviço em 20 minutos. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-oleo.html',
  h1: 'Troca de Óleo em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Óleo',
  loaderPhrase: 'Troca de Óleo',
  serviceSchemaName: 'Troca de Óleo',
  serviceSchemaDesc: 'Serviço de troca de óleo em Itatiaia-RJ com filtro incluso. Óleos mineral, semi-sintético e sintético das marcas Mobil, Shell, Lubrax, Petronas e Castrol.',
  faqs: [
    { q: 'Quanto custa a troca de óleo em Itatiaia?', a: 'O valor depende do tipo de óleo (mineral, semi-sintético ou sintético) e da quantidade necessária para seu veículo. Consulte pelo WhatsApp (24) 99309-9190.' },
    { q: 'O filtro de óleo está incluso?', a: 'Sim! Na Auto Peças Itatiaia, o filtro de óleo está incluso no serviço de troca de óleo. Usamos filtros de marcas como Tecfil, Mann e Wega.' },
    { q: 'De quanto em quanto tempo devo trocar o óleo?', a: 'Depende do tipo: óleo mineral a cada 5.000 km, semi-sintético a cada 7.500 km e sintético a cada 10.000 km. Consulte o manual do veículo.' },
    { q: 'Quanto tempo demora a troca de óleo?', a: 'O serviço completo (drenagem + filtro + óleo novo) leva aproximadamente 20 minutos na Auto Peças Itatiaia.' },
    { q: 'Qual óleo é melhor para meu carro?', a: 'Depende do modelo e ano do veículo. Nossa equipe indica a viscosidade e o tipo ideal. Temos óleos 5W30, 5W40, 10W40, 15W40, 20W50 e outros.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de óleo</strong> rápido e completo com <strong>filtro incluso</strong>. Trabalhamos com <strong>Mobil, Shell, Lubrax, Petronas e Castrol</strong>. Óleos mineral, semi-sintético e sintético para carros nacionais e importados em <strong>Itatiaia e região</strong>.',
    marqueeItems: ['Troca de Óleo', 'Filtro Incluso', 'Mobil', 'Shell', 'Lubrax', 'Petronas', 'Castrol', '20 Minutos'],
    faqTitle: 'Dúvidas Sobre<br>Troca de Óleo em Itatiaia',
    mainContent: `
<section class="content-section">
  <div class="container">
    <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Óleo Completa na Auto Peças Itatiaia</h2></div>
    <p class="reveal">Na <strong>Auto Peças Itatiaia</strong>, a troca de óleo é feita com atenção a cada detalhe. Drenamos completamente o óleo usado, substituímos o <strong>filtro de óleo</strong> (incluso no serviço) e adicionamos o óleo novo na quantidade e viscosidade recomendadas pelo fabricante do seu veículo.</p>
    <p class="reveal">O serviço leva aproximadamente <strong>20 minutos</strong> e pode ser feito por ordem de chegada ou com agendamento pelo WhatsApp. Atendemos motoristas e mecânicos de <strong>Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa</strong> e toda a região do Sul Fluminense.</p>
    <ul class="reveal">
      <li>Drenagem completa do óleo usado</li>
      <li>Troca do filtro de óleo (incluso)</li>
      <li>Óleo novo na viscosidade recomendada</li>
      <li>Verificação de nível e possíveis vazamentos</li>
      <li>Etiqueta de próxima troca no para-brisa</li>
    </ul>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Tipos de Óleo Disponíveis em Itatiaia</h2></div>
    <p class="reveal">Oferecemos todos os tipos de óleo lubrificante para atender qualquer veículo, do popular ao premium:</p>
    <div class="feature-grid">
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Óleo Mineral</div><div class="feature-card-desc">Indicado para veículos mais antigos ou com alta quilometragem. Troca recomendada a cada 5.000 km. Boa proteção com custo acessível.</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Óleo Semi-Sintético</div><div class="feature-card-desc">Equilíbrio entre proteção e custo. Troca a cada 7.500 km. Ideal para veículos de uso misto (cidade e estrada).</div></div>
      <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Óleo Sintético</div><div class="feature-card-desc">Máxima proteção para motores modernos. Troca a cada 10.000 km. Recomendado para veículos turbo, importados e de alta performance.</div></div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Marcas de Óleo Disponíveis</h2></div>
    <p class="reveal">Trabalhamos com as <strong>marcas mais conceituadas</strong> do mercado de lubrificantes automotivos:</p>
    <ul class="reveal">
      <li><strong>Mobil</strong> — Líder mundial em lubrificantes. Linha completa: Mobil Super, Mobil 1, Mobil Delvac</li>
      <li><strong>Shell</strong> — Tecnologia PurePlus. Linha Helix HX5, HX7 e HX8. Excelente proteção contra desgaste</li>
      <li><strong>Lubrax</strong> — Marca da Petrobras. Óleos Lubrax Essencial, Top Turbo e Tecno. Referência nacional</li>
      <li><strong>Petronas</strong> — Tecnologia CoolTech. Linha Syntium com proteção térmica avançada</li>
      <li><strong>Castrol</strong> — Tradição e inovação. Castrol GTX, Magnatec e Edge para todas as necessidades</li>
    </ul>
    <p class="reveal">Não sabe qual óleo usar? Nossa equipe da Auto Peças Itatiaia indica a viscosidade e tipo ideais para seu veículo. Consulte disponibilidade e preços pelo <strong>WhatsApp (24) 99309-9190</strong>.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="reveal"><h2>Quando Trocar o Óleo do Carro</h2></div>
    <p class="reveal">A frequência da troca de óleo depende do <strong>tipo de óleo</strong> e do <strong>uso do veículo</strong>. Siga a tabela abaixo como referência geral:</p>
    <ul class="reveal">
      <li><strong>Óleo mineral:</strong> a cada 5.000 km ou 6 meses</li>
      <li><strong>Óleo semi-sintético:</strong> a cada 7.500 km ou 8 meses</li>
      <li><strong>Óleo sintético:</strong> a cada 10.000 km ou 12 meses</li>
    </ul>
    <p class="reveal">Para quem dirige muito no trânsito urbano de Itatiaia, Resende ou Volta Redonda, considere intervalos menores. O uso severo (muitas partidas, baixa velocidade, poeira) reduz a vida útil do óleo. Sempre consulte o manual do fabricante do seu veículo.</p>
  </div>
</section>`
  }
}));

// ── GENERIC SERVICE PAGE FACTORY ────────────────────────────
function genericServicePage(cfg) {
  return buildServicePage(cfg);
}

// ── 6. TROCA DE FILTROS ─────────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-filtros.html', title: 'Troca de Filtros em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de filtros em Itatiaia: óleo, ar, combustível e cabine. Marcas Tecfil, Mann, Wega e Fram. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-filtros.html', h1: 'Troca de Filtros em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Filtros', loaderPhrase: 'Troca de Filtros',
  serviceSchemaName: 'Troca de Filtros', serviceSchemaDesc: 'Troca de filtros automotivos em Itatiaia-RJ: óleo, ar, combustível e cabine. Marcas Tecfil, Mann, Wega e Fram.',
  faqs: [
    { q: 'Quais tipos de filtro vocês trocam?', a: 'Trocamos filtro de óleo, filtro de ar do motor, filtro de combustível e filtro de cabine (ar-condicionado). Todos com peças de marcas premium.' },
    { q: 'De quanto em quanto tempo trocar os filtros?', a: 'Filtro de óleo: junto com o óleo. Filtro de ar: 10.000 a 15.000 km. Filtro de combustível: 20.000 a 40.000 km. Filtro de cabine: 10.000 a 15.000 km.' },
    { q: 'O filtro de óleo está incluso na troca de óleo?', a: 'Sim! Na Auto Peças Itatiaia, o filtro de óleo sempre é substituído junto com a troca de óleo, sem custo adicional.' },
    { q: 'Quanto custa trocar os filtros em Itatiaia?', a: 'O valor varia conforme o tipo de filtro e modelo do veículo. Consulte pelo WhatsApp (24) 99309-9190 para orçamento personalizado.' },
    { q: 'Posso trocar só o filtro de cabine?', a: 'Sim! Trocamos cada filtro individualmente. O filtro de cabine é especialmente importante para quem usa ar-condicionado.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de filtros</strong> para veículos nacionais e importados. Filtros de óleo, ar, combustível e cabine das marcas <strong>Tecfil, Mann, Wega e Fram</strong>. Atendimento rápido em <strong>Itatiaia, Resende, Penedo</strong> e região.',
    marqueeItems: ['Filtro de Óleo', 'Filtro de Ar', 'Filtro de Combustível', 'Filtro de Cabine', 'Tecfil', 'Mann', 'Wega', 'Fram'],
    faqTitle: 'Dúvidas Sobre<br>Troca de Filtros em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Filtros na Auto Peças Itatiaia</h2></div>
  <p class="reveal">Os filtros são peças essenciais para o funcionamento correto do motor e para a saúde dos ocupantes do veículo. Na <strong>Auto Peças Itatiaia</strong>, realizamos a troca de todos os tipos de filtros automotivos com peças das <strong>melhores marcas do mercado</strong>.</p>
  <p class="reveal">Atendemos motoristas e mecânicos de <strong>Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis</strong>. Cada filtro que vendemos tem garantia de fábrica e aplicação verificada para o seu veículo.</p>
</div></section>

<section class="content-section"><div class="container">
  <div class="reveal"><h2>Tipos de Filtros Automotivos</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#128167;</div><div class="feature-card-title">Filtro de Óleo</div><div class="feature-card-desc">Retém impurezas do óleo lubrificante, protegendo o motor contra desgaste prematuro. Deve ser trocado junto com o óleo a cada 5.000 a 10.000 km.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#127744;</div><div class="feature-card-title">Filtro de Ar do Motor</div><div class="feature-card-desc">Impede que poeira e partículas entrem no motor. Filtro sujo reduz potência e aumenta consumo. Troca recomendada a cada 10.000 a 15.000 km.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#9981;</div><div class="feature-card-title">Filtro de Combustível</div><div class="feature-card-desc">Remove impurezas do combustível antes de chegar ao motor. Essencial para o bom funcionamento da injeção eletrônica. Troca a cada 20.000 a 40.000 km.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#10052;&#65039;</div><div class="feature-card-title">Filtro de Cabine (AC)</div><div class="feature-card-desc">Filtra o ar do ar-condicionado e ventilação. Remove poeira, pólen, fungos e bactérias. Fundamental para a saúde dos passageiros. Troca a cada 10.000 a 15.000 km.</div></div>
  </div>
</div></section>

<section class="content-section"><div class="container">
  <div class="reveal"><h2>Marcas de Filtros em Itatiaia</h2></div>
  <p class="reveal">Na Auto Peças Itatiaia, trabalhamos com as marcas mais confiáveis de filtros automotivos:</p>
  <ul class="reveal">
    <li><strong>Tecfil</strong> — Maior fabricante de filtros do Brasil. Cobertura para 98% da frota nacional, qualidade reconhecida por montadoras</li>
    <li><strong>Mann-Filter</strong> — Marca alemã premium. Tecnologia de ponta e alta eficiência de filtragem para veículos nacionais e importados</li>
    <li><strong>Wega</strong> — Fabricante brasileiro com mais de 50 anos. Excelente custo-benefício e ampla cobertura de aplicações</li>
    <li><strong>Fram</strong> — Marca norte-americana reconhecida mundialmente. Filtros de alta performance para diversas aplicações</li>
  </ul>
  <p class="reveal">Consulte preços e disponibilidade para o seu veículo pelo <strong>WhatsApp (24) 99309-9190</strong>. Atendemos Itatiaia e toda a região do Sul Fluminense.</p>
</div></section>

<section class="content-section"><div class="container">
  <div class="reveal"><h2>Por Que a Troca de Filtros é Importante</h2></div>
  <p class="reveal">Filtros automotivos funcionam como barreiras contra impurezas que podem danificar o motor e prejudicar a saúde dos ocupantes. Filtros sujos ou saturados causam diversos problemas:</p>
  <ul class="reveal">
    <li><strong>Aumento no consumo de combustível</strong> — filtro de ar entupido força o motor a trabalhar mais</li>
    <li><strong>Perda de potência</strong> — o motor não recebe ar ou combustível limpo na quantidade ideal</li>
    <li><strong>Desgaste prematuro do motor</strong> — impurezas no óleo aceleram o desgaste de componentes internos</li>
    <li><strong>Problemas respiratórios</strong> — filtro de cabine saturado permite passagem de fungos, bactérias e alérgenos</li>
    <li><strong>Falhas na injeção eletrônica</strong> — combustível contaminado pode entupir bicos injetores</li>
  </ul>
  <p class="reveal">Manter os filtros em dia é uma das formas mais simples e econômicas de proteger seu veículo. Na Auto Peças Itatiaia, nosso time verifica a condição de todos os filtros durante qualquer serviço de manutenção.</p>
</div></section>`
  }
}));

// ── 7. DISCO DE FREIO ───────────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-disco-de-freio.html', title: 'Troca de Disco de Freio em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de disco de freio em Itatiaia com inspeção completa. Discos Fremax e Hipper Freios. Segurança garantida. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-disco-de-freio.html', h1: 'Troca de Disco de Freio em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Disco de Freio', loaderPhrase: 'Disco de Freio',
  serviceSchemaName: 'Troca de Disco de Freio', serviceSchemaDesc: 'Serviço de troca de disco de freio em Itatiaia-RJ. Discos Fremax e Hipper Freios com inspeção completa.',
  faqs: [
    { q: 'Quando devo trocar o disco de freio?', a: 'Troque quando ouvir ruídos ao frear, sentir vibração no pedal ou volante, ou quando o disco estiver abaixo da espessura mínima. Inspeção gratuita na Auto Peças Itatiaia.' },
    { q: 'Qual a vida útil de um disco de freio?', a: 'Em média, 40.000 a 60.000 km, dependendo do estilo de condução e condições das estradas de Itatiaia e região.' },
    { q: 'Posso trocar só as pastilhas sem trocar o disco?', a: 'Depende. Se o disco estiver na espessura mínima ou com trincas, precisa ser substituído. Nossa equipe avalia gratuitamente.' },
    { q: 'Quais marcas de disco de freio vocês trabalham?', a: 'Trabalhamos com Fremax e Hipper Freios, duas das marcas mais reconhecidas do mercado brasileiro de freios.' },
    { q: 'Quanto custa trocar o disco de freio em Itatiaia?', a: 'O valor varia conforme o veículo e a marca do disco. Consulte pelo WhatsApp (24) 99309-9190 para um orçamento personalizado.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de disco de freio</strong> com inspeção completa do sistema de frenagem. Discos <strong>Fremax e Hipper Freios</strong> com garantia de fábrica. Segurança para motoristas de <strong>Itatiaia, Resende, Penedo, Volta Redonda</strong> e região.',
    marqueeItems: ['Disco de Freio', 'Fremax', 'Hipper Freios', 'Inspeção Completa', 'Segurança', 'Itatiaia RJ', 'Garantia de Fábrica', 'Instalação Profissional'],
    faqTitle: 'Dúvidas Sobre<br>Disco de Freio em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Disco de Freio Profissional em Itatiaia</h2></div>
  <p class="reveal">O disco de freio é um componente crítico para a <strong>segurança do seu veículo</strong>. Na Auto Peças Itatiaia, realizamos a troca com inspeção completa do sistema de frenagem, incluindo verificação das pastilhas, pinças e mangueiras de freio.</p>
  <p class="reveal">Usamos exclusivamente discos de marcas reconhecidas: <strong>Fremax e Hipper Freios</strong>, com garantia de fábrica. Nosso atendimento cobre Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis.</p>
  <ul class="reveal">
    <li>Inspeção visual completa do sistema de frenagem</li>
    <li>Medição da espessura do disco com paquímetro</li>
    <li>Verificação de empenamento e trincas</li>
    <li>Instalação profissional com torque correto</li>
    <li>Teste de frenagem após a instalação</li>
  </ul>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Sinais de Disco de Freio Desgastado</h2></div>
  <p class="reveal">Fique atento a estes sinais que indicam necessidade de troca do disco de freio. Não ignore — a frenagem é o principal sistema de segurança do veículo:</p>
  <ul class="reveal">
    <li><strong>Vibração ao frear</strong> — o volante ou pedal tremem quando você pisa no freio. Indica empenamento do disco</li>
    <li><strong>Ruídos metálicos</strong> — chiados ou rangidos ao frear indicam contato metal com metal</li>
    <li><strong>Aumento da distância de frenagem</strong> — o carro demora mais para parar</li>
    <li><strong>Pedal de freio esponjoso</strong> — sensação de que o pedal afunda mais que o normal</li>
    <li><strong>Marcas ou sulcos visíveis</strong> — riscos profundos na superfície do disco</li>
  </ul>
  <p class="reveal">Se você dirige frequentemente pelas estradas e ruas de Itatiaia, Resende ou pela Via Dutra, o desgaste dos discos pode ser mais acelerado. Passe na Auto Peças Itatiaia para uma inspeção gratuita.</p>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Marcas de Discos de Freio em Itatiaia</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#128711;</div><div class="feature-card-title">Fremax</div><div class="feature-card-desc">Maior fabricante de discos de freio da América Latina. Tecnologia de ponta, acabamento superior e cobertura para 95% da frota brasileira.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#128711;</div><div class="feature-card-title">Hipper Freios</div><div class="feature-card-desc">Referência nacional em componentes de freio. Discos com tratamento anticorrosivo, balanceamento dinâmico e garantia de fábrica.</div></div>
  </div>
  <p class="reveal" style="margin-top:var(--s-5);">Ambas as marcas são aprovadas pelo INMETRO e atendem às normas internacionais de segurança. Consulte disponibilidade para o seu veículo pelo WhatsApp (24) 99309-9190.</p>
</div></section>`
  }
}));

// ── 8. LÂMPADAS ─────────────────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-lampadas.html', title: 'Troca de Lâmpadas Automotivas em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de lâmpadas automotivas em Itatiaia: halógenas, LED e xenon. Marcas Philips e Osram com instalação inclusa. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-lampadas.html', h1: 'Troca de Lâmpadas em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Lâmpadas', loaderPhrase: 'Troca de Lâmpadas',
  serviceSchemaName: 'Troca de Lâmpadas Automotivas', serviceSchemaDesc: 'Troca de lâmpadas automotivas em Itatiaia-RJ: halógenas, LED e xenon. Marcas Philips e Osram com instalação inclusa.',
  faqs: [
    { q: 'Vocês instalam as lâmpadas na hora?', a: 'Sim! A instalação está inclusa no serviço. Trocamos faróis, lanternas, setas, luzes de freio e farol de milha em poucos minutos.' },
    { q: 'Posso colocar LED no meu carro?', a: 'Depende do modelo. Para alguns veículos é necessário adaptador ou cancelador de erro. Nossa equipe orienta sobre a melhor opção.' },
    { q: 'Quanto custa trocar as lâmpadas do farol?', a: 'O valor varia conforme o tipo (halógena, LED ou xenon) e modelo do veículo. Consulte pelo WhatsApp (24) 99309-9190.' },
    { q: 'Lâmpada queimada é motivo de multa?', a: 'Sim! Dirigir com faróis, lanternas ou luzes de freio queimadas é infração média com multa de R$ 130,16 e 4 pontos na CNH.' },
    { q: 'Quais marcas de lâmpada vocês trabalham?', a: 'Trabalhamos com Philips e Osram, as duas marcas mais reconhecidas do mercado mundial de iluminação automotiva.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de lâmpadas automotivas</strong> com instalação inclusa. Lâmpadas <strong>halógenas, LED e xenon</strong> das marcas <strong>Philips e Osram</strong>. Faróis, lanternas, setas e farol de milha para veículos em <strong>Itatiaia, Resende, Penedo</strong> e região.',
    marqueeItems: ['Lâmpadas Automotivas', 'Philips', 'Osram', 'Halógena', 'LED', 'Xenon', 'Instalação Inclusa', 'Itatiaia RJ'],
    faqTitle: 'Dúvidas Sobre<br>Troca de Lâmpadas em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Lâmpadas na Auto Peças Itatiaia</h2></div>
  <p class="reveal">A iluminação do veículo é fundamental para a <strong>segurança na estrada</strong> e para evitar multas. Na Auto Peças Itatiaia, realizamos a troca de todos os tipos de lâmpadas automotivas com <strong>instalação inclusa</strong> e peças das marcas <strong>Philips e Osram</strong>.</p>
  <p class="reveal">Trocamos lâmpadas de faróis, lanternas traseiras, luzes de freio, setas, luz de ré, farol de milha e iluminação interna. Atendemos veículos nacionais e importados em Itatiaia, Resende, Penedo, Volta Redonda e região.</p>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Tipos de Lâmpadas Automotivas</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#128161;</div><div class="feature-card-title">Lâmpadas Halógenas</div><div class="feature-card-desc">O tipo mais comum. Boa luminosidade, preço acessível e ampla compatibilidade. Modelos H1, H3, H4, H7, H11 e outros disponíveis em estoque.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#128161;</div><div class="feature-card-title">Lâmpadas LED</div><div class="feature-card-desc">Maior luminosidade, menor consumo e vida útil muito superior às halógenas. Ideal para faróis, lanternas e luzes diurnas (DRL).</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#128161;</div><div class="feature-card-title">Lâmpadas Xenon (HID)</div><div class="feature-card-desc">Luz mais branca e potente. Excelente visibilidade noturna. Disponível para veículos que já possuem sistema xenon de fábrica.</div></div>
  </div>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Onde Trocamos as Lâmpadas</h2></div>
  <p class="reveal">Na Auto Peças Itatiaia, substituímos lâmpadas em todas as posições do veículo:</p>
  <ul class="reveal">
    <li><strong>Farol dianteiro (baixo e alto)</strong> — essencial para dirigir à noite e em dias chuvosos</li>
    <li><strong>Lanterna traseira</strong> — visibilidade para o veículo que vem atrás</li>
    <li><strong>Luz de freio</strong> — item de segurança obrigatório por lei</li>
    <li><strong>Setas (pisca-pisca)</strong> — indicação de mudança de direção</li>
    <li><strong>Luz de ré</strong> — iluminação ao engatar a marcha ré</li>
    <li><strong>Farol de milha (neblina)</strong> — visibilidade em condições adversas</li>
    <li><strong>Luz da placa</strong> — obrigatória e fiscalizada</li>
  </ul>
  <p class="reveal">Dirigir com lâmpadas queimadas em Itatiaia e região é <strong>infração média</strong> com multa de R$ 130,16 e 4 pontos na CNH. Mantenha todas as luzes funcionando — passe na nossa loja para uma verificação rápida.</p>
</div></section>`
  }
}));

// ── 9. PALHETAS ─────────────────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-palhetas.html', title: 'Troca de Palhetas em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de palhetas em Itatiaia com marcas Valeo e Bosch. Todos os tamanhos, instalação rápida. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-palhetas.html', h1: 'Troca de Palhetas em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Palhetas', loaderPhrase: 'Troca de Palhetas',
  serviceSchemaName: 'Troca de Palhetas', serviceSchemaDesc: 'Troca de palhetas de limpador de para-brisa em Itatiaia-RJ. Marcas Valeo e Bosch em todos os tamanhos.',
  faqs: [
    { q: 'De quanto em quanto tempo trocar as palhetas?', a: 'Recomendamos trocar as palhetas a cada 6 a 12 meses, ou quando começarem a apresentar falhas na limpeza, ruídos ou marcas no vidro.' },
    { q: 'Quais marcas de palheta vocês trabalham?', a: 'Trabalhamos com Valeo e Bosch, as duas marcas mais conceituadas do mercado de palhetas automotivas.' },
    { q: 'Vocês têm palhetas para todos os carros?', a: 'Sim! Temos palhetas em todos os tamanhos para veículos nacionais e importados. Se não tiver em estoque, encomendamos rapidamente.' },
    { q: 'A instalação está inclusa?', a: 'Sim! Na Auto Peças Itatiaia, a instalação das palhetas é gratuita e leva poucos minutos.' },
    { q: 'Palheta ruim pode arranhar o vidro?', a: 'Sim. Palhetas desgastadas podem riscar o para-brisa permanentemente, além de prejudicar a visibilidade em dias de chuva.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de palhetas</strong> com marcas <strong>Valeo e Bosch</strong>. Todos os tamanhos para veículos nacionais e importados. Instalação rápida e gratuita em <strong>Itatiaia, Resende, Penedo</strong> e região do Sul Fluminense.',
    marqueeItems: ['Palhetas', 'Valeo', 'Bosch', 'Todos os Tamanhos', 'Instalação Grátis', 'Itatiaia RJ', 'Visibilidade', 'Segurança'],
    faqTitle: 'Dúvidas Sobre<br>Troca de Palhetas em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Palhetas na Auto Peças Itatiaia</h2></div>
  <p class="reveal">As palhetas do limpador de para-brisa são essenciais para a <strong>visibilidade e segurança</strong> ao dirigir, especialmente em dias chuvosos. Na região de Itatiaia e Penedo, onde chuvas são frequentes nas épocas de verão, manter as palhetas em bom estado é ainda mais importante.</p>
  <p class="reveal">Na <strong>Auto Peças Itatiaia</strong>, oferecemos palhetas das marcas <strong>Valeo e Bosch</strong> em todos os tamanhos, com instalação gratuita na hora. Atendemos motoristas de Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis.</p>
  <ul class="reveal">
    <li>Palhetas em todos os tamanhos para carros nacionais e importados</li>
    <li>Verificação do braço e mecanismo do limpador</li>
    <li>Teste do esguicho e reservatório de água</li>
    <li>Instalação gratuita em poucos minutos</li>
  </ul>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Quando Trocar as Palhetas do Carro</h2></div>
  <p class="reveal">As palhetas têm vida útil de <strong>6 a 12 meses</strong>. A borracha resseca com o sol e o uso, perdendo eficiência. Troque quando notar:</p>
  <ul class="reveal">
    <li><strong>Faixas de água no vidro</strong> — a palheta não limpa uniformemente</li>
    <li><strong>Ruídos ao limpar</strong> — chiado ou batida indicam borracha ressecada</li>
    <li><strong>Marcas ou listras no para-brisa</strong> — a borracha endurecida arranha o vidro</li>
    <li><strong>Trepidação da palheta</strong> — pula ao invés de deslizar suavemente</li>
    <li><strong>Borracha visualmente desgastada</strong> — trincas, ondulações ou deformações</li>
  </ul>
  <p class="reveal">No clima do Sul Fluminense, a exposição constante ao sol e às chuvas acelera o desgaste das palhetas. Quem dirige pela Via Dutra entre Itatiaia e Resende precisa de palhetas em perfeito estado para enfrentar chuvas repentinas com segurança.</p>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Marcas de Palhetas Disponíveis</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#127783;&#65039;</div><div class="feature-card-title">Valeo</div><div class="feature-card-desc">Fabricante francês líder mundial em palhetas. Tecnologia de borracha premium com proteção UV, adaptação perfeita e limpeza silenciosa.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#127783;&#65039;</div><div class="feature-card-title">Bosch</div><div class="feature-card-desc">Referência em tecnologia automotiva. Palhetas com sistema de encaixe universal, borracha de alta durabilidade e design aerodinâmico.</div></div>
  </div>
</div></section>`
  }
}));

// ── 10. FLUIDO DE FREIO ─────────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-fluido-de-freio.html', title: 'Troca de Fluido de Freio em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de fluido de freio em Itatiaia com sangria completa. DOT 3 e DOT 4. Segurança garantida. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-fluido-de-freio.html', h1: 'Troca de Fluido de Freio em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Fluido de Freio', loaderPhrase: 'Fluido de Freio',
  serviceSchemaName: 'Troca de Fluido de Freio', serviceSchemaDesc: 'Troca de fluido de freio em Itatiaia-RJ com sangria completa. DOT 3 e DOT 4 disponíveis.',
  faqs: [
    { q: 'De quanto em quanto tempo trocar o fluido de freio?', a: 'Recomendamos trocar o fluido de freio a cada 20.000 km ou 2 anos, o que vier primeiro. Fluido velho absorve umidade e perde eficiência.' },
    { q: 'Qual a diferença entre DOT 3 e DOT 4?', a: 'DOT 4 tem ponto de ebulição mais alto que DOT 3, oferecendo melhor performance em frenagens intensas. DOT 4 é indicado para a maioria dos veículos modernos.' },
    { q: 'O que é sangria do sistema de freio?', a: 'Sangria é o processo de remover ar do sistema hidráulico de freio. Ar nas linhas causa pedal esponjoso e reduz a eficiência de frenagem.' },
    { q: 'Quanto custa trocar o fluido de freio em Itatiaia?', a: 'O valor varia conforme o veículo. Consulte pelo WhatsApp (24) 99309-9190 para um orçamento personalizado.' },
    { q: 'Fluido de freio velho é perigoso?', a: 'Sim. Fluido contaminado com umidade pode ferver durante frenagens intensas, causando perda total dos freios. É uma questão de segurança.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de fluido de freio</strong> com sangria completa do sistema. Fluidos <strong>DOT 3 e DOT 4</strong> de marcas premium. Item essencial para a <strong>segurança</strong> de motoristas em <strong>Itatiaia, Resende, Penedo</strong> e região.',
    marqueeItems: ['Fluido de Freio', 'DOT 3', 'DOT 4', 'Sangria Completa', 'Segurança', 'Itatiaia RJ', 'Sul Fluminense', 'Garantia'],
    faqTitle: 'Dúvidas Sobre<br>Fluido de Freio em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Fluido de Freio na Auto Peças Itatiaia</h2></div>
  <p class="reveal">O fluido de freio é o componente hidráulico que transmite a força do pedal até as rodas. Com o tempo, ele absorve umidade do ar e perde suas propriedades, comprometendo a <strong>eficiência de frenagem</strong> do veículo.</p>
  <p class="reveal">Na <strong>Auto Peças Itatiaia</strong>, realizamos a troca completa do fluido com <strong>sangria profissional</strong> em todas as rodas, garantindo que não fique ar no sistema. Trabalhamos com fluidos <strong>DOT 3 e DOT 4</strong> de marcas reconhecidas. Atendemos Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa e região.</p>
  <ul class="reveal">
    <li>Sangria completa do sistema de freio (4 rodas)</li>
    <li>Substituição total do fluido antigo por novo</li>
    <li>Verificação de vazamentos no sistema hidráulico</li>
    <li>Teste de pedal após o serviço</li>
    <li>Fluidos DOT 3 e DOT 4 disponíveis</li>
  </ul>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>DOT 3 vs DOT 4: Qual Usar no Seu Veículo</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#9888;&#65039;</div><div class="feature-card-title">Fluido DOT 3</div><div class="feature-card-desc">Ponto de ebulição seco de 205°C. Indicado para veículos mais simples e de menor exigência. Custo mais acessível, boa proteção para uso urbano em Itatiaia e região.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#9888;&#65039;</div><div class="feature-card-title">Fluido DOT 4</div><div class="feature-card-desc">Ponto de ebulição seco de 230°C. Indicado para a maioria dos veículos modernos. Melhor performance em frenagens intensas e uso em estradas como a Via Dutra.</div></div>
  </div>
  <p class="reveal" style="margin-top:var(--s-5);">Consulte o manual do seu veículo para saber qual especificação utilizar. Na Auto Peças Itatiaia, nossa equipe indica o fluido correto para seu modelo.</p>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Por Que Trocar o Fluido de Freio é Essencial</h2></div>
  <p class="reveal">O fluido de freio é <strong>higroscópico</strong> — absorve umidade do ar ao longo do tempo. Essa contaminação reduz o ponto de ebulição do fluido, criando um risco grave de segurança:</p>
  <ul class="reveal">
    <li><strong>Vapor lock</strong> — o fluido contaminado pode ferver durante frenagens intensas, criando bolhas de vapor que impedem a transmissão de força hidráulica</li>
    <li><strong>Pedal esponjoso</strong> — ar no sistema reduz a firmeza do pedal de freio</li>
    <li><strong>Corrosão interna</strong> — umidade no fluido corrói componentes metálicos do sistema de freio</li>
    <li><strong>Aumento da distância de frenagem</strong> — eficiência reduzida coloca em risco a segurança</li>
  </ul>
  <p class="reveal">Para quem dirige pela <strong>Via Dutra entre Itatiaia e Resende</strong>, com trechos de serra e frenagens constantes, manter o fluido de freio em dia é ainda mais importante. A recomendação é trocar a cada <strong>20.000 km ou 2 anos</strong>.</p>
</div></section>`
  }
}));

// ── 11. PASTILHAS DE FREIO ──────────────────────────────────
pages.push(genericServicePage({
  file: 'troca-de-pastilhas.html', title: 'Troca de Pastilhas de Freio em Itatiaia | Auto Peças Itatiaia',
  metaDesc: 'Troca de pastilhas de freio em Itatiaia. Marcas Cobreq, Ecopads, TRW e Frasle. Cerâmicas e convencionais. Auto Peças Itatiaia (24) 99309-9190.',
  canonical: 'troca-de-pastilhas.html', h1: 'Troca de Pastilhas de Freio em <span class="highlight">Itatiaia</span>',
  keyword: 'Troca de Pastilhas de Freio', loaderPhrase: 'Pastilhas de Freio',
  serviceSchemaName: 'Troca de Pastilhas de Freio', serviceSchemaDesc: 'Troca de pastilhas de freio em Itatiaia-RJ. Pastilhas cerâmicas e convencionais das marcas Cobreq, Ecopads, TRW e Frasle.',
  faqs: [
    { q: 'Quando devo trocar as pastilhas de freio?', a: 'Troque quando ouvir chiados ao frear, quando a luz de freio acender no painel, ou a cada 20.000 a 40.000 km. Nossa equipe inspeciona gratuitamente.' },
    { q: 'Qual a diferença entre pastilha cerâmica e convencional?', a: 'Pastilhas cerâmicas são mais silenciosas, produzem menos pó e duram mais. Convencionais têm custo menor e boa performance para uso diário.' },
    { q: 'Quais marcas de pastilha vocês trabalham?', a: 'Trabalhamos com Cobreq, Ecopads, TRW e Frasle. Todas são marcas reconhecidas com garantia de fábrica.' },
    { q: 'Quanto tempo leva para trocar as pastilhas?', a: 'A troca de pastilhas leva aproximadamente 30 a 40 minutos, dependendo do veículo. Atendemos por ordem de chegada.' },
    { q: 'Preciso trocar o disco junto com as pastilhas?', a: 'Nem sempre. Se o disco estiver na espessura mínima ou apresentar trincas, recomendamos a troca conjunta. Nossa equipe avalia cada caso.' }
  ],
  sections: {
    heroDesc: 'Serviço de <strong>troca de pastilhas de freio</strong> com pastilhas cerâmicas e convencionais. Marcas <strong>Cobreq, Ecopads, TRW e Frasle</strong> com garantia de fábrica. Segurança para motoristas de <strong>Itatiaia, Resende, Penedo</strong> e região.',
    marqueeItems: ['Pastilhas de Freio', 'Cobreq', 'Ecopads', 'TRW', 'Frasle', 'Cerâmica', 'Convencional', 'Itatiaia RJ'],
    faqTitle: 'Dúvidas Sobre<br>Pastilhas de Freio em Itatiaia',
    mainContent: `
<section class="content-section"><div class="container">
  <div class="reveal"><div class="sec-label">Serviço</div><h2>Troca de Pastilhas de Freio na Auto Peças Itatiaia</h2></div>
  <p class="reveal">As pastilhas de freio são componentes de desgaste natural que precisam ser substituídas periodicamente. Na <strong>Auto Peças Itatiaia</strong>, realizamos a troca com pastilhas das <strong>melhores marcas do mercado</strong>: Cobreq, Ecopads, TRW e Frasle, com garantia de fábrica.</p>
  <p class="reveal">O serviço inclui inspeção completa do sistema de freio, verificação dos discos e teste de frenagem após a instalação. Atendemos motoristas e mecânicos de <strong>Itatiaia, Resende, Penedo, Volta Redonda, Barra Mansa, Porto Real e Quatis</strong>.</p>
  <ul class="reveal">
    <li>Inspeção do sistema de frenagem completo</li>
    <li>Verificação da espessura dos discos</li>
    <li>Instalação profissional com torque correto</li>
    <li>Teste de frenagem após a troca</li>
    <li>Pastilhas com garantia de fábrica</li>
  </ul>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Tipos de Pastilhas de Freio</h2></div>
  <div class="feature-grid">
    <div class="feature-card reveal"><div class="feature-card-icon">&#128296;</div><div class="feature-card-title">Pastilhas Cerâmicas</div><div class="feature-card-desc">Frenagem mais silenciosa, menor produção de pó de freio e vida útil prolongada. Ideais para veículos de uso diário em Itatiaia e estradas da região.</div></div>
    <div class="feature-card reveal"><div class="feature-card-icon">&#128296;</div><div class="feature-card-title">Pastilhas Convencionais</div><div class="feature-card-desc">Boa performance, custo acessível e ampla disponibilidade. Opção econômica com qualidade aprovada para uso urbano e rodoviário.</div></div>
  </div>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Sinais de Pastilhas de Freio Desgastadas</h2></div>
  <p class="reveal">Fique atento a estes sinais que indicam necessidade de troca das pastilhas. O sistema de freio é o principal item de <strong>segurança do veículo</strong>:</p>
  <ul class="reveal">
    <li><strong>Chiado ou rangido ao frear</strong> — o indicador sonoro da pastilha está raspando no disco</li>
    <li><strong>Luz de freio no painel</strong> — sensor indica que as pastilhas chegaram ao limite de desgaste</li>
    <li><strong>Pedal de freio mais baixo</strong> — precisa pisar mais fundo para frear com eficiência</li>
    <li><strong>Aumento da distância de frenagem</strong> — o veículo demora mais para parar</li>
    <li><strong>Vibração ao frear</strong> — pode indicar desgaste irregular das pastilhas ou dos discos</li>
    <li><strong>Pó escuro nas rodas</strong> — excesso de pó de freio indica desgaste acelerado</li>
  </ul>
  <p class="reveal">A vida útil das pastilhas varia de <strong>20.000 a 40.000 km</strong>, dependendo do estilo de condução. Quem dirige muito pela Via Dutra ou pelas ruas íngremes de Penedo pode precisar trocar mais cedo.</p>
</div></section>
<section class="content-section"><div class="container">
  <div class="reveal"><h2>Marcas de Pastilhas em Itatiaia</h2></div>
  <p class="reveal">Trabalhamos com as marcas mais confiáveis de pastilhas de freio do mercado brasileiro:</p>
  <ul class="reveal">
    <li><strong>Cobreq</strong> — Maior fabricante de pastilhas de freio do Brasil. Cobertura para mais de 95% da frota nacional, qualidade aprovada por montadoras</li>
    <li><strong>Ecopads</strong> — Pastilhas ecológicas com baixa emissão de pó e metais pesados. Frenagem suave e silenciosa</li>
    <li><strong>TRW</strong> — Marca global do grupo ZF. Tecnologia premium, aprovação por montadoras e alta durabilidade</li>
    <li><strong>Frasle</strong> — Referência brasileira em materiais de fricção. Mais de 60 anos de experiência em freios automotivos</li>
  </ul>
  <p class="reveal">Consulte preços e disponibilidade para o seu veículo pelo <strong>WhatsApp (24) 99309-9190</strong>. Estamos na Av. dos Expedicionários, 275, Centro de Itatiaia.</p>
</div></section>`
  }
}));

// ══════════════════════════════════════════════════════════════
// GENERATE ALL FILES
// ══════════════════════════════════════════════════════════════

for (const page of pages) {
  const html = buildPage(page);
  const filePath = join(DIR, page.file);
  writeFileSync(filePath, html, 'utf-8');
  console.log(`Created: ${filePath}`);
}

console.log(`\nDone! ${pages.length} pages generated.`);
