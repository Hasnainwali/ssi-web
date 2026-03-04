import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


// ─── Design Tokens — edit here to retheme ────────────
const C = {
  cyan: "#00f5ff",
  violet: "#7c3aed",
  rose: "#f43f5e",
  bg: "#050816",
  textPrimary: "#e2e8f0",
  textSecondary: "rgba(226,232,240,0.65)",
  textMuted: "rgba(226,232,240,0.35)",
  glassBg: "rgba(255,255,255,0.05)",
  glassBorder: "rgba(255,255,255,0.08)",
};

// ─── Static Data ──────────────────────────────────────
const TECH_STACK = ["React", "Flutter", "AI / ML", "Node.js", "Figma", "DevOps"];

const ORBIT_RINGS = [
  { size: 450, duration: "22s", reverse: false },
  { size: 340, duration: "15s", reverse: true },
  { size: 230, duration: "10s", reverse: false },
];

const FLOATING_CHIPS = [
  { label: "const future = AI()", top: "70px", left: "-20px", delay: "0s" },
  { label: "Web --cloud ✓", top: "30px", right: "-50px", delay: "1.5s" },
  { label: "ui.design(pixels)", bottom: "40px", left: "-50px", delay: "0.8s" },
  { label: "courses.build()", bottom: "100px", right: "-50px", delay: "0.3s" },
];

// ─── CSS Keyframes (injected once into <head>) ────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap');

  @keyframes ssi-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes ssi-float {
    0%, 100% { transform: translateY(0);     }
    50%      { transform: translateY(-14px); }
  }
  @keyframes ssi-shimmer {
    from { background-position: -200% center; }
    to   { background-position:  200% center; }
  }
  @keyframes ssi-orbit {
    to { transform: rotate(360deg); }
  }
  @keyframes ssi-scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1);    }
  }
  @keyframes ssi-bounce {
    0%, 100% { transform: translateX(-50%) translateY(0);    }
    50%      { transform: translateX(-50%) translateY(-8px); }
  }
  @keyframes ssi-blob {
    0%, 100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
    50%      { border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%; }
  }

  @media (max-width: 768px) {
    .ssi-orbital { display: none !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`;

// ─── Helper — build fadeUp inline style ──────────────
const fadeUp = (delayMs) => ({
  animation: `ssi-fadeUp 0.6s ease both`,
  animationDelay: `${delayMs}ms`,
});

// ─── Sub-components ───────────────────────────────────

function OrbitDot() {
  return (
    <span style={{
      position: "absolute", top: -4, left: "50%",
      transform: "translateX(-50%)",
      width: 8, height: 8, borderRadius: "50%",
      background: C.cyan,
      boxShadow: `0 0 8px ${C.cyan}, 0 0 16px rgba(0,245,255,0.5)`,
    }} />
  );
}

function OrbitRing({ size, duration, reverse }) {
  const opacity = 0.08 + (450 - size) / 1000;
  return (
    <div style={{
      position: "absolute",
      width: size, height: size,
      borderRadius: "50%",
      border: `1px solid rgba(0,245,255,${opacity.toFixed(2)})`,
      animation: `ssi-orbit ${duration} linear infinite`,
      animationDirection: reverse ? "reverse" : "normal",
      willChange: "transform",
    }}>
      <OrbitDot />
    </div>
  );
}

function FloatingChip({ label, top, bottom, left, right, delay }) {
  return (
    <div style={{
      position: "absolute", top, bottom, left, right,
      padding: "8px 16px",
      background: C.glassBg,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: `1px solid ${C.glassBorder}`,
      borderRadius: 12,
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      fontFamily: "monospace",
      fontSize: 12,
      color: C.cyan,
      whiteSpace: "nowrap",
      animation: "ssi-float 4s ease-in-out infinite",
      animationDelay: delay,
      willChange: "transform",
      zIndex: 10,
    }}>
      {label}
    </div>
  );
}

function OrbitalVisual() {
  return (
    <div className="ssi-orbital" style={{
      position: "relative", display: "flex",
      alignItems: "center", justifyContent: "center",
      width: 480, height: 480,
      animation: "ssi-scaleIn 0.8s ease both",
      animationDelay: "0.5s",
    }}>
      {ORBIT_RINGS.map((ring, i) => <OrbitRing key={i} {...ring} />)}

      {/* Center core */}
      <div style={{
        position: "relative", zIndex: 5,
        width: 144, height: 144, borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, rgba(124,58,237,0.6), rgba(0,245,255,0.25), rgba(5,8,22,0.8))",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 40px rgba(0,245,255,0.3), 0 0 80px rgba(124,58,237,0.2)",
      }}>
        <span style={{
          fontFamily: "Orbitron, sans-serif", fontWeight: 900, fontSize: 32,
          color: C.cyan, userSelect: "none",
          textShadow: `0 0 10px ${C.cyan}, 0 0 30px rgba(0,245,255,0.4)`,
        }}>
          SSI
        </span>
      </div>

      {FLOATING_CHIPS.map((chip) => <FloatingChip key={chip.label} {...chip} />)}
    </div>
  );
}

function TechBadge({ label }) {
  return (
    <span style={{
      padding: "5px 14px", borderRadius: 9999,
      fontSize: 12, fontFamily: "Rajdhani, sans-serif",
      fontWeight: 600, letterSpacing: "0.05em",
      color: C.textSecondary,
      background: C.glassBg,
      border: `1px solid ${C.glassBorder}`,
    }}>
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Web Development", "3D Modeling", "Graphic Design", "Digital Marketing"];

  useEffect(() => {
    // Typing effect logic
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(id);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{STYLES}</style>

      <section id="home" style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center",
        overflow: "hidden", padding: "120px 24px 80px",
        background: C.bg,
      }}>

        {/* Background blobs */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, left: -80, width: 500, height: 500, background: "rgba(124,58,237,0.15)", filter: "blur(100px)", animation: "ssi-blob 12s ease-in-out infinite", opacity: 0.3 }} />
          <div style={{ position: "absolute", bottom: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "rgba(0,245,255,0.08)", filter: "blur(120px)", animation: "ssi-blob 15s ease-in-out infinite reverse", opacity: 0.2 }} />
        </div>

        {/* Content grid */}
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: 1200, margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 64, alignItems: "center",
        }}>

          {/* ── Left: Copy ───────────────────────────── */}
          <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.4s" }}>

            {/* Badge */}
            <div style={{
              ...fadeUp(100),
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 16px", borderRadius: 9999, marginBottom: 24,
              background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)",
              fontSize: 11, fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: C.cyan,
            }}>
              <span>●</span> Welcome to the Future of Tech
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 900, lineHeight: 1.15, marginBottom: 24 }}>
              <span style={{ ...fadeUp(200), display: "block", fontSize: "clamp(28px,3vw,50px)", color: C.textPrimary }}>
                Transform Future With
              </span>
              <span style={{
                ...fadeUp(380),
                display: "block", fontSize: "clamp(32px,8vw,60px)",
                background: `linear-gradient(90deg, ${C.cyan} 0%, ${C.violet} 30%, ${C.rose} 55%, ${C.violet} 75%, ${C.cyan} 100%)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                animation: mounted ? "ssi-fadeUp 0.6s ease both, ssi-shimmer 3s linear infinite" : "none",
                animationDelay: "0.38s, 0s",
              }}>
                {rotatingTexts[textIndex]}
              </span>
              <span style={{ ...fadeUp(560), display: "block", fontSize: "clamp(32px,5vw,58px)", color: C.textPrimary }}>
                That Matter
              </span>
            </h1>

            {/* Subtext */}
            <p style={{
              ...fadeUp(680),
              fontFamily: "Rajdhani, sans-serif", fontSize: 18,
              color: C.textSecondary, lineHeight: 1.75,
              maxWidth: 480, marginBottom: 32,
            }}>
              SSI Bannu is Khyber Pakhtunkhwa's premier technology partner —
              crafting intelligent digital solutions that transform businesses
              and empower communities across Pakistan.
            </p>

            {/* CTA buttons */}
            <div style={{ ...fadeUp(800), display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
              <Button
                primary
                label="Explore Courses"
                onClick={() => navigate('/courses')}
              />
              <Button
                label="View Our Work"
                onClick={() => navigate('/portfolio')}
              />
            </div>

            {/* Tech stack */}
            <div style={{ ...fadeUp(920), display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TECH_STACK.map((t) => <TechBadge key={t} label={t} />)}
            </div>
          </div>

          {/* ── Right: Orbital visual ─────────────────── */}
          <OrbitalVisual />
        </div>

        {/* Scroll indicator */}
        <div aria-hidden="true" style={{
          position: "absolute", bottom: 32, left: "50%", fontSize: 24,
          color: C.textMuted, userSelect: "none",
          animation: "ssi-bounce 1.5s ease-in-out infinite",
        }}>
          ↓
        </div>
      </section>
    </>
  );
}

// ─── Button (primary / outline) ──────────────────────
function Button({ label, onClick, primary = false }) {
  const [hovered, setHovered] = useState(false);

  const base = {
    fontFamily: "Orbitron, sans-serif", fontWeight: primary ? 700 : 600,
    fontSize: 13, letterSpacing: "0.06em",
    padding: primary ? "12px 28px" : "11px 27px",
    borderRadius: 8, cursor: "pointer",
    transition: "all 0.2s ease",
    willChange: "transform",
  };

  const style = primary
    ? {
      ...base,
      background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`,
      border: "none", color: C.bg,
      boxShadow: hovered
        ? "0 0 30px rgba(0,245,255,0.5), 0 0 60px rgba(124,58,237,0.3)"
        : "0 0 20px rgba(0,245,255,0.3)",
      transform: hovered ? "translateY(-2px) scale(1.02)" : "none",
    }
    : {
      ...base,
      background: hovered ? "rgba(0,245,255,0.08)" : "transparent",
      border: `1px solid ${hovered ? C.cyan : "rgba(0,245,255,0.5)"}`,
      color: C.cyan,
      boxShadow: hovered ? "0 0 20px rgba(0,245,255,0.2)" : "none",
      transform: hovered ? "translateY(-2px)" : "none",
    };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
}