// src/CV.jsx
import React, { useState } from "react";

/* ========================================================================
   CV — v4.1 Final: Ajustes de Íconos y Contenido
   - Corregido el recorte del ícono de GitHub centrando el SVG en su contenedor.
   - Añadido nuevo enlace "CV - Web" en la sección de contacto.
   - Creado un nuevo ícono de "documento" para el nuevo enlace.
   ======================================================================== */

export default function CVRainbow() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 print:bg-white transition-colors duration-300">
        <style>{`
          /* ... (Los estilos CSS no cambian, se omiten por brevedad, pero deben estar aquí) ... */
          :root { --bg-sutil: #f8fafc; --bg-content: #ffffff; --primary-color: #1e3a8a; --text-primary: #1e293b; --text-secondary: #475569; --border-color: #e2e8f0; --tag-bg: #e2e8f0; }
          .dark { --bg-sutil: #1e293b; --bg-content: #0f172a; --primary-color: #60a5fa; --text-primary: #f1f5f9; --text-secondary: #94a3b8; --border-color: #334155; --tag-bg: #334155; }
          body { background-color: var(--bg-sutil); }
          main { background-color: var(--bg-content); color: var(--text-primary); }
          h1, h2, h3, h4 { color: var(--text-primary); }
          h3 { border-color: var(--border-color); color: var(--primary-color); }
          p, li, span, a { color: var(--text-secondary); }
          article { border-color: var(--border-color); }
          .tag-item { background-color: var(--tag-bg); }
          .contact-item svg { color: var(--text-secondary); }
          .contact-item:hover svg, .contact-item:hover span { color: var(--primary-color); }
          aside { background-color: var(--bg-sutil); }
          @keyframes rainbowShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
          .rainbow-line { background: linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa, #9333ea); background-size: 400% 400%; animation: rainbowShift 8s linear infinite; }
          .dark .rainbow-line { background: linear-gradient(90deg, #3b82f6, #60a5fa, #9333ea, #ec4899); background-size: 400% 400%; }
          @page { size: A4; margin: 9mm; }
          @media print {
            html, body { background: #fff !important; font-family: 'Helvetica', 'Arial', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .print-grid-container { display: grid !important; grid-template-columns: 220px 1fr !important; gap: 18px !important; }
            h1 { font-size: 20px !important; margin: 0 0 2px !important; color: #1e3a8a !important; letter-spacing: -0.5px; }
            h2 { font-size: 13px !important; color: #1e293b !important; }
            h3 { font-size: 11px !important; color: #1e3a8a !important; border-bottom: 1px solid #e2e8f0 !important; padding-bottom: 2px !important; margin-bottom: 6px !important; letter-spacing: 0.5px; text-transform: uppercase; }
            h4 { font-size: 10px !important; margin-bottom: 1px !important; color: #1e293b !important; }
            p, li, span, a { font-size: 8.5px !important; line-height: 1.35 !important; color: #475569 !important; }
            a { text-decoration: none !important; color: #1e3a8a !important; }
            .print-section { margin-bottom: 10px !important; }
            .print-avoid { break-inside: avoid; page-break-inside: avoid; }
            .print-hide { display: none !important; }
            .print-show { display: block !important; }
            .static-gradient-bar { height: 2px !important; background: linear-gradient(90deg, #1e3a8a, #3b82f6, #60a5fa, #9333ea) !important; }
          }
        `}</style>
        
        <div className="max-w-5xl mx-auto p-4 sm:p-8 relative">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <CVFinalOnly />
        </div>
      </div>
    </div>
  );
}


/* =============================
   CV — Componente Principal
   ============================= */
function CVFinalOnly() {
  const data = {
    name: "Francisco Emmanuel Arias López",
    role: "Full-Stack Developer (React & Node.js)",
    location: "Monterrey, NL",
    email: "emmanuel.arias1998@gmail.com",
    phone: "+52 81 3412 1519",
    website: "https://animarex.xyz",
    // NUEVO DATO AÑADIDO
    cvweb: "https://boutiquest.shop/", 
    github: "https://github.com/FranciscoEmmanuel1998",
    summary: "Desarrollador Full-Stack especializado en dashboards y sistemas en tiempo real con React, TypeScript y Node.js. Experto en integración de APIs y automatización de flujos para optimizar procesos empresariales y fiscales (CONTPAQi, CFDI 4.0).",
    experience: [ /* ... (sin cambios) ... */ ],
    projects: [ /* ... (sin cambios) ... */ ],
    skills: { /* ... (sin cambios) ... */ },
    education: [ /* ... (sin cambios) ... */ ]
  };

  // El resto del objeto 'data' se mantiene igual
  data.experience = [
        {
            company: "Asesorías Limac S.A. de C.V.",
            title: "Asesor de Implementación y Soporte CONTPAQi",
            period: "06/2023 – 06/2025",
            bullets: [
                "Implementación, configuración y soporte de sistemas CONTPAQi (Comercial, Contabilidad, Nóminas).",
                "Asesoría en CFDI 4.0, REP 2.0 y Carta Porte; gestión de nómina y reportes para el SUA.",
                "Capacitación a usuarios y resolución de +2,000 tickets/año, incluyendo corrección de errores en SQL.",
                "Instalación en red, configuración de escritorios virtuales y soporte remoto.",
            ],
        },
    ];
  data.projects = [
        {
            name: "Portafolio Web",
            live: "https://animarex.xyz",
            repo: "https://github.com/FranciscoEmmanuel1998/Portafolio-DIST",
            desc: "Portafolio con React 18, TypeScript y Vite. Incluye chatbot, sistema de notas y un videojuego en desarrollo.",
        },
        {
            name: "TradingIA",
            live: "https://trading.animarex.xyz",
            repo: "https://github.com/FranciscoEmmanuel1998/TradingIA",
            desc: "Plataforma de monitoreo de mercados en tiempo real (Binance, Coinbase) con React, Node.js y Socket.IO.",
        },
        {
            name: "Museo Matemático",
            live: "https://museo.animarex.xyz",
            repo: "https://github.com/FranciscoEmmanuel1998/Animaci-n",
            desc: "Simulaciones visuales (Game of Life, Lorenz 3D) con React, TypeScript y HTML5 Canvas.",
        },
        {
            name: "CV-WEB",
            live: "https://boutiquest.shop/",
            repo: "https://github.com/FranciscoEmmanuel1998/CV-WEB-",
            desc: "CV web limpio y accesible desarrollado con React 18, Vite, Tailwind CSS y Node.js.",
        },
    ];
  data.skills = {
        "Core": ["React 18", "Next.js", "TypeScript", "Node.js (Express)", "Tailwind CSS", "Socket.IO", "REST APIs"],
        "Data & Infra": ["MySQL", "SQL Server", "Apache Cassandra", "Redes", "Cloudflare", "Hostinger"],
        "Dominio de Negocio": ["CONTPAQi Suite", "CFDI 4.0", "REP 2.0", "Carta Porte"],
        "Tooling & Fundamentos": ["Git", "GitHub", "C", "C++", "C#", "Java"],
    };
  data.education = [
        { title: "Lic. en Multimedia y Animación Digital", school: "UANL" },
        { title: "Bachillerato Tecnológico en TIC", school: "EPW" }
    ];

  return (
    <main className="shadow-2xl print:shadow-none rounded-lg overflow-hidden transition-colors duration-300">
      <div className="md:grid md:grid-cols-[280px_1fr] print-grid-container">
        {/* === Columna Izquierda === */}
        <aside className="p-6 space-y-6 transition-colors duration-300">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">{data.name}</h1>
            <h2 className="mt-1 text-md">{data.role}</h2>
          </div>
          <div className="h-1.5 rainbow-line rounded-full print-hide" />

          <Section title="Contacto">
            <div className="space-y-2 text-sm">
              <ContactItem icon={<LocationIcon />} label={data.location} />
              <ContactItem icon={<MailIcon />} label={data.email} href={`mailto:${data.email}`} />
              <ContactItem icon={<PhoneIcon />} label={data.phone} href={`tel:${data.phone.replace(/\s+/g, "")}`} />
              <ContactItem icon={<LinkIcon />} label="Portafolio web" href={data.website} />
              {/* NUEVO ENLACE AÑADIDO AQUÍ */}
              <ContactItem icon={<FileIcon />} label="CV - Web" href={data.cvweb} />
              <ContactItem icon={<GithubIcon />} label={finalCleanURL(data.github)} href={data.github} />
            </div>
          </Section>

           <Section title="Habilidades">
            { /* ... (sin cambios en la estructura JSX) ... */ }
             <div className="space-y-4">
              {Object.entries(data.skills).map(([group, items]) => (
                <div key={group} className="print-avoid">
                  <p className="text-xs font-bold tracking-wide mb-1.5">{group}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => <Tag key={skill} label={skill} />)}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </aside>

        {/* === Columna Derecha === */}
        <section className="p-6 space-y-6">
            { /* ... (sin cambios en la estructura JSX) ... */ }
            <div className="hidden print-show static-gradient-bar mb-4"></div>
            <Section title="Resumen"><p className="text-sm leading-relaxed">{data.summary}</p></Section>
            <Section title="Experiencia Profesional">{data.experience.map((exp, i) => ( <div key={i} className="print-avoid mb-4 last:mb-0"> <div className="flex justify-between items-baseline"> <h4 className="text-md font-bold">{exp.title}</h4> <span className="text-xs font-medium">{exp.period}</span> </div> <p className="text-sm font-semibold mb-1" style={{color: 'var(--primary-color)'}}>{exp.company}</p> <ul className="list-disc pl-4 space-y-1 text-sm"> {exp.bullets.map((b, j) => <li key={j}>{b}</li>)} </ul> </div> ))}</Section>
            <Section title="Proyectos Destacados"><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{data.projects.map((p, i) => ( <article key={i} className="rounded-lg p-3 print-avoid hover:shadow-lg hover:-translate-y-1 transition-all duration-300"> <div className="flex items-center justify-between"> <h4 className="text-sm font-bold">{p.name}</h4> <div className="flex items-center gap-3"> <a href={p.live} target="_blank" rel="noopener noreferrer" title="Ver en vivo" className="contact-item"><LiveIcon /></a> <a href={p.repo} target="_blank" rel="noopener noreferrer" title="Ver repositorio" className="contact-item"><GithubIcon /></a> </div> </div> <p className="mt-1 text-xs">{p.desc}</p> </article> ))}</div></Section>
            <Section title="Educación"><div className="space-y-3">{data.education.map((ed) => ( <div key={ed.title} className="print-avoid"> <p className="text-sm font-semibold">{ed.title}</p> <p className="text-xs">{ed.school}</p> </div> ))}</div></Section>
            <div className="text-center pt-4 print-hide"><ExportButton /></div>
        </section>
      </div>
    </main>
  );
}

/* =============================
   Componentes de UI y Ayudantes
   ============================= */

function finalCleanURL(url) { return url.replace(/^https?:\/\//, "").replace(/^www\./, ""); }

function Section({ title, children }) {
  return (
    <section className="print-avoid print-section">
      <h3 className="text-lg font-bold border-b-2 pb-1 mb-3 transition-colors duration-300">{title}</h3>
      {children}
    </section>
  );
}

function ContactItem({ icon, label, href }) {
  const content = (
    <div className="flex items-center gap-3 contact-item transition-colors duration-300">
      {/* CORRECCIÓN APLICADA AQUÍ: Ícono perfectamente centrado */}
      <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}

function Tag({ label }) { /* ... (sin cambios) ... */ return <span className="inline-block px-2 py-0.5 text-xs rounded-full tag-item transition-colors duration-300">{label}</span>; }
function ThemeToggle({ isDarkMode, setIsDarkMode }) { /* ... (sin cambios) ... */ return ( <button onClick={() => setIsDarkMode(!isDarkMode)} className="print-hide absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900 ring-primary transition-all duration-300" title={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}> {isDarkMode ? <SunIcon /> : <MoonIcon />} </button> );}
function ExportButton() { /* ... (sin cambios) ... */ return ( <button onClick={() => window.print()} className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"> <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span> <span className="relative flex items-center gap-2"> <DownloadIcon /> Exportar a PDF </span> </button> );}


/* =============================
   Íconos SVG (16x16 y 24x24)
   ============================= */
function MailIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>; }
function PhoneIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" /></svg>; }
function LinkIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-2v0h2v2h-3a5 5 0 0 1-5-5zm7-1h2v2h-2v-2zm3.1-4h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 1 0 0-6h-3V7z" /></svg>; }
// REEMPLAZA LA FUNCIÓN GithubIcon() COMPLETA CON ESTA:
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21V19.25C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.83,16.41C14.16,16.72 14.5,17.33 14.5,18.26V21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
    </svg>
  );
}
function LocationIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>; }
function LiveIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" /></svg>;}
function SunIcon() { return <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zm-9-7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 14c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zM5.64 6.36c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.36 4.22c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l.7.7zm12.72 12.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.7-.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l.7.7zM6.36 18.36c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.7-.7c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-.7.7zm12.02-12.02c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-.7.7c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.7-.7z"/></svg>; }
function MoonIcon() { return <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>; }
function DownloadIcon() { return <svg viewBox="0 <strong>0 24 24</strong>" width="16" height="16" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>; }

{/* NUEVO ÍCONO AÑADIDO */}
function FileIcon() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path></svg>; }