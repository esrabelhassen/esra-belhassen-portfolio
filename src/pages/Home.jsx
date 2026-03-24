import { useState, useEffect, useRef } from "react";

const PHOTO_URL = "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=Esra";

/* ─── PALETTE ─────────────────────────────────────── */
const C = {
  bg:      "#0D0D14",
  surface: "#13131F",
  card:    "#18182A",
  border:  "#2A2A42",
  violet:  "#8B5CF6",
  pink:    "#EC4899",
  cyan:    "#06B6D4",
  emerald: "#10B981",
  amber:   "#F59E0B",
  white:   "#F1F0FF",
  muted:   "#9990BB",
  dimmed:  "#5C5880",
};

/* ─── HOOKS ───────────────────────────────────────── */
function useInView(ref, threshold = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return v;
}

function Reveal({ children, delay = 0, style = {} }) {
  const r = useRef(null);
  const v = useInView(r);
  return (
    <div ref={r} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── DATA ────────────────────────────────────────── */
const SKILLS = [
  { icon: "🐍", name: "Python",          sub: "Core language",       color: C.cyan    },
  { icon: "🧠", name: "LangChain",       sub: "LLM orchestration",   color: C.violet  },
  { icon: "⚡", name: "OpenAI API",      sub: "GPT integration",     color: C.emerald },
  { icon: "🔗", name: "RAG Pipelines",   sub: "Retrieval-augmented", color: C.pink    },
  { icon: "📊", name: "Data Analysis",   sub: "Pandas · NumPy",      color: C.amber   },
  { icon: "🔬", name: "TensorFlow",      sub: "Deep learning",       color: C.cyan    },
  { icon: "🏗️", name: "Odoo / ERP",      sub: "Business systems",    color: C.violet  },
  { icon: "🤖", name: "ML Libraries",    sub: "Scikit-learn & more", color: C.emerald },
  { icon: "👁️", name: "Computer Vision", sub: "OpenCV · YOLO",       color: C.pink    },
  { icon: "💻", name: "HTML / CSS",      sub: "Frontend",            color: C.amber   },
];

const CERTS = [
  {
    icon: "🤖",
    title: "Generative AI & LLM Engineering",
    org: "Udemy",
    desc: "Build and deploy 8 LLM apps — mastering Generative AI, RAG, LoRA and AI Agents.",
    color: C.violet,
  },
  {
    icon: "📊",
    title: "Data Science & ML Bootcamp",
    org: "Udemy",
    desc: "Complete data science and machine learning bootcamp covering the full pipeline from data wrangling to model deployment.",
    color: C.cyan,
  },
  {
    icon: "🔌",
    title: "Master SOAP & REST APIs",
    org: "Udemy",
    desc: "SOAP and REST API design, web development basics, and real-world integration projects.",
    color: C.emerald,
  },
];

const PROJECTS = [
  {
    emoji: "🏥", title: "MedDesk — Clinic ERP", badge: "Founder",
    desc: "A full-featured desktop ERP system built for medical clinics — appointment scheduling, patient records, billing, and complete clinic workflow automation.",
    github: null, glow: C.violet,
    gradient: `linear-gradient(135deg,${C.violet}22,${C.pink}22)`,
  },
  {
    emoji: "🧭", title: "Compass — Mental Health AI", badge: "AI Lead",
    desc: "Employee mental health platform leveraging AI to deliver personalized emotional support. I own the full AI pipeline — NLP, chatbot intelligence, and recommendation logic.",
    github: null, glow: C.cyan,
    gradient: `linear-gradient(135deg,${C.cyan}22,${C.emerald}22)`,
  },
  {
    emoji: "😷", title: "Face Mask Detector", badge: "CV",
    desc: "Real-time face mask detection using computer vision and deep learning — classifies mask/no-mask from live camera or image input.",
    github: "https://github.com/esrabelhassen/face-mask-detector", glow: C.pink,
    gradient: `linear-gradient(135deg,${C.pink}22,${C.violet}22)`,
  },
  {
    emoji: "🩺", title: "Diabetes Classifier", badge: "ML",
    desc: "End-to-end classification pipeline predicting diabetes likelihood from clinical parameters with high accuracy using ensemble methods.",
    github: "https://github.com/esrabelhassen/Diabetes-Classification-", glow: C.emerald,
    gradient: `linear-gradient(135deg,${C.emerald}22,${C.cyan}22)`,
  },
  {
    emoji: "🦠", title: "Cold vs COVID Classifier", badge: "ML",
    desc: "Symptom-based classification model distinguishing Cold from COVID-19 using clinical features and ML algorithms.",
    github: "https://github.com/esrabelhassen/Cold-COVID-classification", glow: C.pink,
    gradient: `linear-gradient(135deg,${C.pink}22,${C.violet}22)`,
  },
  {
    emoji: "🎬", title: "Movie Recommender (NLP)", badge: "NLP",
    desc: "NLP-powered recommendation engine suggesting movies and TV shows based on user preferences, genres, and viewing history.",
    github: "https://github.com/esrabelhassen/movie_recomm", glow: C.amber,
    gradient: `linear-gradient(135deg,${C.amber}22,${C.pink}22)`,
  },
  {
    emoji: "💳", title: "Loan Amount Predictor", badge: "Fintech",
    desc: "Regression model predicting loan amounts from financial and demographic data, bringing data-driven insights to lending decisions.",
    github: "https://github.com/esrabelhassen/LOAN_amount_predictions", glow: C.cyan,
    gradient: `linear-gradient(135deg,${C.cyan}22,${C.violet}22)`,
  },
  {
    emoji: "🚜", title: "Bulldozer Price Predictor", badge: "ML",
    desc: "Price prediction model for heavy machinery using historical auction data, feature engineering, and gradient boosting.",
    github: "https://github.com/esrabelhassen/Bulldozers_price_prediction", glow: C.emerald,
    gradient: `linear-gradient(135deg,${C.emerald}22,${C.amber}22)`,
  },
  {
    emoji: "❤️", title: "Heart Disease Classifier", badge: "Healthcare",
    desc: "Predictive model identifying heart disease risk from patient vitals and clinical markers using classification algorithms.",
    github: "https://github.com/esrabelhassen/heart_disease_classification", glow: C.pink,
    gradient: `linear-gradient(135deg,${C.pink}22,${C.amber}22)`,
  },
  {
    emoji: "🌡️", title: "Flu vs Allergy Classifier", badge: "ML",
    desc: "ML classifier distinguishing flu from allergy symptoms — helping users identify their condition from reported symptoms.",
    github: "https://github.com/esrabelhassen/Flu-Allergy-Classification", glow: C.violet,
    gradient: `linear-gradient(135deg,${C.violet}22,${C.cyan}22)`,
  },
  {
    emoji: "🎓", title: "University Chatbot", badge: "NLP",
    desc: "Conversational AI assistant for university queries — course info, schedules, campus resources — built with NLP and intent recognition.",
    github: "https://github.com/esrabelhassen/University-Chatbot", glow: C.amber,
    gradient: `linear-gradient(135deg,${C.amber}22,${C.violet}22)`,
  },
  {
    emoji: "🧘", title: "Mental Health Chatbot", badge: "AI",
    desc: "Empathetic chatbot providing mental wellness support through guided conversations, mood tracking, and coping strategy suggestions.",
    github: "https://github.com/esrabelhassen/Mental-Health-Chatbot", glow: C.cyan,
    gradient: `linear-gradient(135deg,${C.cyan}22,${C.emerald}22)`,
  },
];

const PARTICLE_DATA = Array.from({ length: 22 }, (_, i) => ({
  id: i, left: `${(i * 47 + 13) % 100}%`, top: `${(i * 31 + 7) % 100}%`,
  size: (i % 3) + 1.2, delay: (i * 0.4) % 8, duration: 6 + (i % 6),
  color: [C.violet, C.pink, C.cyan, C.emerald][i % 4],
}));

function Particles() {
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {PARTICLE_DATA.map(p => (
        <div key={p.id} style={{
          position:"absolute", left:p.left, top:p.top,
          width:p.size, height:p.size, borderRadius:"50%", background:p.color,
          animation:`floatP ${p.duration}s ease-in-out ${p.delay}s infinite`,
          filter:`blur(${p.size > 2.5 ? 1 : 0}px)`,
        }} />
      ))}
    </div>
  );
}

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const speed = del ? 40 : 90;
    const timer = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1600);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setIdx(i => i + 1); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, idx, words]);
  return <span style={{ color:C.cyan, borderRight:`2px solid ${C.cyan}`, paddingRight:3 }}>{text}</span>;
}

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const seen = useInView(ref);
  useEffect(() => {
    if (!seen) return;
    let cur = 0; const step = end / 40;
    const t = setInterval(() => {
      cur += step;
      if (cur >= end) { setVal(end); clearInterval(t); } else setVal(Math.floor(cur));
    }, 40);
    return () => clearInterval(t);
  }, [seen, end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function SectionHeader({ tag, color, accent, line1, line2 }) {
  return (
    <Reveal>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
        <div style={{ width:32, height:2, background:`linear-gradient(90deg,${color},${accent})`, borderRadius:2 }} />
        <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".78rem", color, letterSpacing:".15em", textTransform:"uppercase" }}>{tag}</span>
      </div>
      <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, marginBottom:48, lineHeight:1.1, color:C.white }}>
        {line1}<br /><span style={{ color:accent }}>{line2}</span>
      </h2>
    </Reveal>
  );
}

/* ─── HERO RIGHT: photo + code card stacked ──────── */
function HeroVisual() {
  return (
    <div style={{ position:"relative", width:340, flexShrink:0 }}>

      {/* ── PHOTO circle, top-center ── */}
      <div style={{ display:"flex", justifyContent:"center", marginBottom:-30, position:"relative", zIndex:2 }}>
        <div style={{ position:"relative", width:120, height:120 }}>
          {/* spinning ring */}
          <div style={{
            position:"absolute", inset:-3, borderRadius:"50%",
            background:`conic-gradient(${C.violet},${C.pink},${C.cyan},${C.emerald},${C.violet})`,
            animation:"spin-slow 5s linear infinite",
            filter:"blur(2px)",
          }} />
          <div style={{ position:"absolute", inset:3, borderRadius:"50%", background:C.bg }} />
          <img
            src={PHOTO_URL}
            alt="Esra Belhassen"
            style={{
              position:"absolute", inset:6, borderRadius:"50%",
              width:"calc(100% - 12px)", height:"calc(100% - 12px)",
              objectFit:"cover", objectPosition:"center top",
            }}
          />
        </div>
      </div>

      {/* ── CODE CARD ── */}
      <div style={{ position:"relative", zIndex:1 }}>
        {/* outer glow ring */}
        <div style={{
          position:"absolute", inset:-2, borderRadius:20,
          background:`conic-gradient(${C.violet},${C.pink},${C.cyan},${C.emerald},${C.violet})`,
          animation:"spin-slow 6s linear infinite",
          filter:"blur(2px)", zIndex:0,
        }} />
        <div style={{ position:"relative", zIndex:1, background:C.card, borderRadius:18, overflow:"hidden" }}>
          {/* terminal bar */}
          <div style={{ background:"#0F0F1A", padding:"10px 16px", display:"flex", alignItems:"center", gap:8, borderBottom:`1px solid ${C.border}` }}>
            {["#FF5F57","#FEBC2E","#28C840"].map(c => (
              <div key={c} style={{ width:12, height:12, borderRadius:"50%", background:c }} />
            ))}
            <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".73rem", color:C.dimmed, marginLeft:8 }}>esra.py</span>
          </div>
          {/* name badge inside card */}
          <div style={{ padding:"16px 24px 0", display:"flex", alignItems:"center", gap:12 }}>
            <div>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:".95rem", fontWeight:700, color:C.white }}>Esra Belhassen</div>
              <div style={{ fontFamily:"'Fira Code',monospace", fontSize:".7rem", color:C.violet }}>AI Engineer · Founder 🇹🇳</div>
            </div>
          </div>
          {/* code */}
          <div style={{ padding:"12px 24px 20px", fontFamily:"'Fira Code',monospace", fontSize:".8rem", lineHeight:1.9 }}>
            <div style={{ color:C.dimmed }}># about me</div>
            <div><span style={{ color:C.violet }}>class </span><span style={{ color:C.cyan }}>EsraBelhassen</span><span style={{ color:C.muted }}>:</span></div>
            <div style={{ color:C.muted }}>{"  "}role <span style={{ color:C.dimmed }}>=</span> <span style={{ color:C.emerald }}>"AI Engineer"</span></div>
            <div style={{ color:C.muted }}>{"  "}status <span style={{ color:C.dimmed }}>=</span> <span style={{ color:C.emerald }}>"building"</span></div>
            <div style={{ color:C.dimmed, marginTop:2 }}></div>
            <div><span style={{ color:C.violet }}>{"  "}def </span><span style={{ color:C.cyan }}>skills</span><span style={{ color:C.muted }}>(self):</span></div>
            <div style={{ color:C.muted }}>{"    "}return [</div>
            <div style={{ color:C.emerald }}>{"      "}"LangChain", "RAG",</div>
            <div style={{ color:C.emerald }}>{"      "}"OpenAI", "CV", "ERP"</div>
            <div style={{ color:C.muted }}>{"    "}]</div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div style={{
        position:"absolute", bottom:-12, left:-16, zIndex:3,
        background:C.card, border:`1px solid ${C.cyan}66`,
        borderRadius:12, padding:"8px 14px",
        display:"flex", alignItems:"center", gap:8,
        boxShadow:`0 4px 24px ${C.cyan}33`,
        animation:"badge-float 3s ease-in-out infinite",
      }}>
        <span style={{ width:7, height:7, borderRadius:"50%", background:C.emerald, display:"inline-block", boxShadow:`0 0 8px ${C.emerald}` }} />
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:".72rem", fontWeight:600, color:C.white }}>open to collaborate</span>
      </div>
    </div>
  );
}

/* ─── MAIN ────────────────────────────────────────── */
export default function Home() {
  const [active, setActive]     = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter]     = useState("All");

  const navLinks     = ["home", "about", "skills", "projects", "certifications", "contact"];
  const badgeFilters = ["All", "Founder", "AI Lead", "CV", "ML", "NLP", "Healthcare", "Fintech", "AI"];

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  useEffect(() => {
    const handle = () => {
      const found = navLinks.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom > 100;
      });
      if (found) setActive(found);
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.badge === filter);

  return (
    <div style={{ background:C.bg, color:C.white, fontFamily:"'Inter','Segoe UI',sans-serif", minHeight:"100vh", overflowX:"hidden", position:"relative" }}>
      {/* TEMPORARY DEBUG: Add visible content */}
      <div style={{ background: 'red', color: 'white', padding: '20px', fontSize: '24px', position: 'fixed', top: '10px', left: '10px', zIndex: 9999 }}>
        DEBUG: React is working! If you see this, the app is mounting.
      </div>
      <Particles />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.violet};border-radius:3px}
        @keyframes floatP{0%,100%{transform:translateY(0) scale(1);opacity:.25}50%{transform:translateY(-28px) scale(1.2);opacity:.6}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes gradient-shift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes badge-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .nav-lnk{cursor:pointer;font-family:'Space Grotesk',sans-serif;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:${C.muted};transition:color .3s;position:relative;padding:4px 0}
        .nav-lnk::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,${C.violet},${C.cyan});transition:width .3s;border-radius:2px}
        .nav-lnk:hover,.nav-lnk.active{color:${C.white}}
        .nav-lnk:hover::after,.nav-lnk.active::after{width:100%}
        .skill-card{transition:transform .3s,box-shadow .3s,border-color .3s}
        .project-card{transition:transform .35s,box-shadow .35s,border-color .35s}
        .project-card:hover{transform:translateY(-8px)}
        .glow-btn{transition:all .3s;cursor:pointer}
        .glow-btn:hover{transform:translateY(-2px)}
        .filter-btn{transition:all .25s;cursor:pointer}
        .filter-btn:hover{transform:translateY(-1px)}
        .cert-card{transition:transform .3s,border-color .3s,box-shadow .3s}
        .cert-card:hover{transform:translateY(-5px)}
        .social-btn{transition:all .3s}
        .social-btn:hover{transform:translateY(-3px)}
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-mob{display:flex!important}
          .hero-flex{flex-direction:column!important;align-items:center!important}
          .projects-grid{grid-template-columns:1fr!important}
          .skills-grid{grid-template-columns:repeat(2,1fr)!important}
          .stats-row{flex-direction:column!important;gap:24px!important}
          .certs-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:`${C.bg}D0`, backdropFilter:"blur(18px)", borderBottom:`1px solid ${C.border}`, padding:"0 5%" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <span onClick={() => scrollTo("home")} style={{ cursor:"pointer", fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.2rem", fontWeight:700, background:`linear-gradient(90deg,${C.violet},${C.cyan})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            esra.dev
          </span>
          <div className="nav-desktop" style={{ display:"flex", gap:28 }}>
            {navLinks.map(l => <span key={l} className={`nav-lnk ${active===l?"active":""}`} onClick={() => scrollTo(l)}>{l}</span>)}
          </div>
          <button className="nav-mob" onClick={() => setMenuOpen(!menuOpen)} style={{ display:"none", background:"none", border:`1px solid ${C.border}`, color:C.white, padding:"6px 10px", borderRadius:6, cursor:"pointer", fontSize:"1.1rem" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding:"16px 5% 24px", borderTop:`1px solid ${C.border}`, display:"flex", flexDirection:"column", gap:20 }}>
            {navLinks.map(l => <span key={l} className={`nav-lnk ${active===l?"active":""}`} onClick={() => scrollTo(l)} style={{ fontSize:".95rem" }}>{l}</span>)}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"100px 5% 80px", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:64, flexWrap:"wrap" }} className="hero-flex">

          {/* TEXT */}
          <div style={{ flex:"1 1 420px" }}>
            <Reveal delay={0}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:`${C.violet}18`, border:`1px solid ${C.violet}44`, padding:"6px 16px", borderRadius:20, marginBottom:24 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:C.emerald, display:"inline-block", boxShadow:`0 0 8px ${C.emerald}` }} />
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".76rem", color:C.muted, letterSpacing:".08em" }}>open to collaboration</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2.8rem,6vw,5rem)", fontWeight:700, lineHeight:1.05, marginBottom:4, color:C.white }}>Hi, I'm</h1>
              <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2.8rem,6vw,5rem)", fontWeight:700, lineHeight:1.05, background:`linear-gradient(90deg,${C.violet},${C.pink},${C.cyan})`, backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradient-shift 4s ease infinite", marginBottom:16 }}>
                Esra Belhassen
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(1rem,2.2vw,1.4rem)", color:C.muted, fontWeight:400, marginBottom:28, minHeight:40, display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                I build&nbsp;<Typewriter words={["AI systems 🤖", "clinic software 🏥", "computer vision 👁️", "NLP pipelines 🧠", "real solutions 🚀"]} />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"1rem", lineHeight:1.85, color:C.muted, maxWidth:480, fontWeight:300, marginBottom:40 }}>
                AI engineer & founder turning complex problems into elegant software. From medical ERP to mental health AI — I build systems that actually make a difference.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <button className="glow-btn" onClick={() => scrollTo("projects")} style={{ background:`linear-gradient(90deg,${C.violet},${C.pink})`, color:"white", border:"none", padding:"13px 28px", fontFamily:"'Space Grotesk',sans-serif", fontSize:".85rem", fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", borderRadius:8 }}>
                  View Projects →
                </button>
                <a href="https://github.com/esrabelhassen" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                  <button className="glow-btn" style={{ background:"transparent", color:C.white, border:`1px solid ${C.border}`, padding:"13px 28px", fontFamily:"'Space Grotesk',sans-serif", fontSize:".85rem", fontWeight:500, borderRadius:8, cursor:"pointer" }}>
                    GitHub ↗
                  </button>
                </a>
              </div>
            </Reveal>
          </div>

          {/* VISUAL: photo + code card */}
          <Reveal delay={180} style={{ display:"flex", justifyContent:"center", paddingTop:40 }}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ background:C.surface, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:"40px 5%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:32 }} className="stats-row">
          {[
            { n:12, s:"+", label:"Projects Built", color:C.violet  },
            { n:2,  s:"",  label:"Startups",        color:C.pink    },
            { n:3,  s:"+", label:"Years Building",  color:C.cyan    },
            { n:3,  s:"",  label:"Certifications",  color:C.emerald },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"2.8rem", fontWeight:700, color:s.color, lineHeight:1 }}>
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:".78rem", color:C.dimmed, letterSpacing:".1em", textTransform:"uppercase", marginTop:6 }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding:"110px 5%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader tag="about_me.json" color={C.violet} accent={C.cyan} line1="Builder by nature," line2="problem-solver by choice." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24 }}>
            {[
              { icon:"🤖", title:"AI Engineer",        text:"I craft intelligent systems using LangChain, OpenAI, RAG pipelines, and ML frameworks — turning complex AI into tools people actually use.", color:C.violet },
              { icon:"🏥", title:"Clinic ERP Founder", text:"Built MedDesk from scratch — a desktop clinic management system for appointments, patient records, billing, and full clinic workflows.", color:C.cyan },
              { icon:"🧭", title:"Startup AI Lead",    text:"At Compass, I lead the AI layer of an employee mental health platform — NLP-driven chatbots, sentiment analysis, and personalized support systems.", color:C.pink },
              { icon:"🎓", title:"CS Graduate",        text:"Bachelor's degree in Software Engineering and Information Systems. 3 Udemy certifications in AI, ML, and APIs. Self-driven learner who codes more than she sleeps.", color:C.emerald },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:28, height:"100%", position:"relative", overflow:"hidden", transition:"border-color .3s,box-shadow .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 0 28px ${item.color}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ position:"absolute", top:-20, right:-20, fontSize:"5rem", opacity:.05 }}>{item.icon}</div>
                  <div style={{ fontSize:"1.8rem", marginBottom:16 }}>{item.icon}</div>
                  <div style={{ width:32, height:2, background:item.color, borderRadius:2, marginBottom:14 }} />
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.05rem", fontWeight:600, color:C.white, marginBottom:10 }}>{item.title}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:".87rem", lineHeight:1.75, color:C.muted, fontWeight:300 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding:"110px 5%", background:C.surface, position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader tag="skills.map()" color={C.pink} accent={C.violet} line1="Tech stack &" line2="expertise." />
          <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(175px,1fr))", gap:18 }}>
            {SKILLS.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="skill-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:"22px 18px", textAlign:"center" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 0 20px ${s.color}33`; e.currentTarget.style.transform = "translateY(-6px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ fontSize:"2rem", marginBottom:10 }}>{s.icon}</div>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:".87rem", fontWeight:600, color:C.white, marginBottom:4 }}>{s.name}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:".73rem", color:C.dimmed }}>{s.sub}</div>
                  <div style={{ width:24, height:2, background:s.color, borderRadius:2, margin:"12px auto 0" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding:"110px 5%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader tag="projects.filter()" color={C.cyan} accent={C.emerald} line1="Things I've" line2="built." />
          <Reveal delay={60}>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:48, marginTop:-24 }}>
              {badgeFilters.map(f => (
                <button key={f} className="filter-btn" onClick={() => setFilter(f)} style={{
                  background: filter===f ? `linear-gradient(90deg,${C.violet},${C.cyan})` : "transparent",
                  color: filter===f ? "white" : C.muted,
                  border:`1px solid ${filter===f ? "transparent" : C.border}`,
                  padding:"7px 18px", borderRadius:20,
                  fontFamily:"'Space Grotesk',sans-serif", fontSize:".76rem", fontWeight:500, letterSpacing:".06em",
                }}>
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="projects-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(310px,1fr))", gap:24 }}>
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={i * 55}>
                <div className="project-card" style={{ background:C.card, border:`1px solid ${p.glow}33`, borderRadius:16, padding:28, height:"100%", position:"relative", overflow:"hidden", backgroundImage:p.gradient }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 48px ${p.glow}25`; e.currentTarget.style.borderColor = `${p.glow}77`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = `${p.glow}33`; }}>
                  <div style={{ position:"absolute", top:-16, right:-16, fontSize:"5.5rem", opacity:.06 }}>{p.emoji}</div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 }}>
                    <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".7rem", letterSpacing:".1em", textTransform:"uppercase", color:p.glow, background:`${p.glow}18`, padding:"4px 10px", borderRadius:4 }}>{p.badge}</span>
                    <span style={{ fontSize:"1.6rem" }}>{p.emoji}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.05rem", fontWeight:700, color:C.white, marginBottom:8, lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:".83rem", color:C.muted, lineHeight:1.7, fontWeight:300, marginBottom:20, minHeight:60 }}>{p.desc}</p>
                  <div style={{ borderTop:`1px solid ${p.glow}22`, paddingTop:16 }}>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                        <span style={{ display:"inline-flex", alignItems:"center", gap:7, fontFamily:"'Space Grotesk',sans-serif", fontSize:".8rem", fontWeight:500, color:p.glow, letterSpacing:".05em", transition:"gap .2s,opacity .2s", cursor:"pointer" }}
                          onMouseEnter={e => { e.currentTarget.style.gap="12px"; e.currentTarget.style.opacity=".8"; }}
                          onMouseLeave={e => { e.currentTarget.style.gap="7px"; e.currentTarget.style.opacity="1"; }}>
                          ⌨️ View on GitHub →
                        </span>
                      </a>
                    ) : (
                      <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".74rem", color:C.dimmed }}>🔒 private repo</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" style={{ padding:"110px 5%", background:C.surface, position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <SectionHeader tag="certifications[]" color={C.amber} accent={C.pink} line1="Continuous" line2="learning." />
          <div className="certs-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))", gap:24 }}>
            {CERTS.map((cert, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="cert-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:28, position:"relative", overflow:"hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.boxShadow = `0 0 28px ${cert.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ position:"absolute", top:-16, right:-16, fontSize:"5rem", opacity:.05 }}>{cert.icon}</div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
                    <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".68rem", letterSpacing:".1em", textTransform:"uppercase", color:cert.color, background:`${cert.color}18`, padding:"4px 10px", borderRadius:4 }}>
                      {cert.org} · Certified
                    </span>
                    <span style={{ fontSize:"1.5rem" }}>{cert.icon}</span>
                  </div>
                  <div style={{ width:32, height:2, background:cert.color, borderRadius:2, marginBottom:14 }} />
                  <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1rem", fontWeight:700, color:C.white, marginBottom:10, lineHeight:1.35 }}>{cert.title}</h3>
                  <p style={{ fontFamily:"'Inter',sans-serif", fontSize:".84rem", color:C.muted, lineHeight:1.7, fontWeight:300 }}>{cert.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:"110px 5%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:680, margin:"0 auto", textAlign:"center" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:12 }}>
              <div style={{ width:32, height:2, background:`linear-gradient(90deg,${C.violet},${C.pink})`, borderRadius:2 }} />
              <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".78rem", color:C.violet, letterSpacing:".15em", textTransform:"uppercase" }}>contact.init()</span>
              <div style={{ width:32, height:2, background:`linear-gradient(90deg,${C.pink},${C.violet})`, borderRadius:2 }} />
            </div>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, marginBottom:20, lineHeight:1.1, color:C.white }}>
              Let's build something<br />
              <span style={{ background:`linear-gradient(90deg,${C.violet},${C.cyan})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>great together.</span>
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:".98rem", lineHeight:1.85, color:C.muted, fontWeight:300, marginBottom:48 }}>
              Open to collaborations, freelance projects, or just a conversation about AI. I reply fast.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:40 }}>
              <a href="mailto:esrabelhassenn@gmail.com" style={{ textDecoration:"none", display:"block", marginBottom:28 }}>
                <div style={{ background:`${C.violet}12`, border:`1px solid ${C.violet}33`, borderRadius:12, padding:20, transition:"all .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.violet; e.currentTarget.style.boxShadow = `0 0 24px ${C.violet}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.violet}33`; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontFamily:"'Fira Code',monospace", fontSize:".73rem", color:C.dimmed, marginBottom:6 }}>// reach me at</div>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.1rem", fontWeight:600, color:C.white }}>
                    esrabelhassenn@gmail.com ✉️
                  </div>
                </div>
              </a>
              <div style={{ display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap" }}>
                {[
                  { label:"GitHub",   href:"https://github.com/esrabelhassen",              icon:"⌨️" },
                { label:"LinkedIn", href:"https://www.linkedin.com/in/esra-belhassen-7a2480202/",    icon:"💼" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                    <div className="social-btn" style={{ background:`${C.border}88`, border:`1px solid ${C.border}`, borderRadius:10, padding:"14px 24px", display:"flex", alignItems:"center", gap:10, transition:"all .3s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.violet; e.currentTarget.style.boxShadow = `0 0 16px ${C.violet}22`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = "none"; }}>
                      <span style={{ fontSize:"1.2rem" }}>{s.icon}</span>
                      <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:".85rem", fontWeight:500, color:C.white }}>{s.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:C.bg, borderTop:`1px solid ${C.border}`, padding:"28px 5%", position:"relative", zIndex:1 }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:".9rem", fontWeight:700, background:`linear-gradient(90deg,${C.violet},${C.cyan})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>esra.dev</span>
          <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".73rem", color:C.dimmed }}>© {new Date().getFullYear()} Esra Belhassen · Built with ♥</span>
          <span style={{ fontFamily:"'Fira Code',monospace", fontSize:".73rem", color:C.dimmed }}>Tunisia 🇹🇳</span>
        </div>
      </footer>
    </div>
  );
}
