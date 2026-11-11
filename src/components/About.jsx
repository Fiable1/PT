import React from 'react';
import { cvData } from '../data/cvData';
import {
  User, Globe, HeartHandshake, Compass, BrainCircuit, Languages,
  Phone, Mail, MapPin, Quote, Sparkles
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Reveal from './Reveal';

export default function About() {
  const { personalInfo, languages } = cvData;
  const [langRef, langReached] = useIntersectionObserver({ threshold: 0.2 });

  const pillars = [
    {
      title: "Human-Centered Engineering",
      desc: "Solving complex technical problems by keeping user experience, accessibility, and real-world utility at the core.",
      icon: HeartHandshake,
      color: "from-brand-500 to-amber-500"
    },
    {
      title: "Technical Leadership",
      desc: "Leading architecture, delivery, and engineering standards as CTO while staying hands-on with the code.",
      icon: Compass,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI & Data Ambitions",
      desc: "Advancing robust full-stack systems into machine learning, AI assistance, and data-driven products.",
      icon: BrainCircuit,
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "Global Perspective",
      desc: "Bringing an innovative, multi-lingual mindset to collaborate with global teams and enterprise clients.",
      icon: Globe,
      color: "from-red-500 to-brand-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-base relative overflow-hidden">
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            About <span className="orange-gradient-text">Munezero Fiable</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* Top Grid: Bio Story + Quick Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Main Bio Card */}
          <Reveal direction="left" className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border-brand-500/20 gradient-border-card h-full">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Driven by technology, leadership & human impact
                  </h3>
                  <Quote className="w-8 h-8 text-brand-500/30 shrink-0" />
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
                  {personalInfo.about}
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm font-light">
                  Based in <strong className="text-white">Kigali, Rwanda</strong>, I build resilient web and mobile
                  applications, design RESTful APIs with <strong className="text-brand-400 font-mono">NestJS, Node.js & TypeScript</strong>,
                  and lead full-stack enterprise delivery. My approach merges technical rigor with thoughtful UI craftsmanship.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Full-Stack", "Mobile", "AI", "Database Admin", "Leadership"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-dark-base border border-dark-border text-[11px] font-mono text-zinc-300 hover:border-brand-500/50 hover:text-brand-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Contact Info Strip */}
              <div className="mt-8 pt-6 border-t border-dark-border grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Location</p>
                    <p className="text-xs font-semibold text-white">Kanombe, Kigali</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold text-white hover:text-brand-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold text-white hover:text-brand-400 transition-colors truncate block">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Language Proficiency Card with scroll-triggered animation */}
          <Reveal direction="right" delay={120} className="lg:col-span-5">
            <div ref={langRef} className="glass-panel p-8 rounded-3xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                      <Languages className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">Languages</h3>
                      <p className="text-xs text-zinc-400 font-mono">Communication Ability</p>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-brand-500/50" />
                </div>

                <div className="space-y-6">
                  {languages.map((lang, idx) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-white text-sm">{lang.name}</span>
                        <span className="text-brand-400 font-mono">{lang.level}</span>
                      </div>
                      <div className="w-full h-2.5 bg-dark-surface rounded-full overflow-hidden border border-dark-border">
                        <div
                          className="h-full bg-gradient-to-r from-brand-500 to-amber-400 rounded-full transition-all duration-1000 ease-out shadow-md shadow-brand-500/30"
                          style={{
                            width: langReached ? `${lang.percentage}%` : '0%',
                            transitionDelay: `${idx * 160}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-dark-surface/60 border border-dark-border text-xs text-zinc-400 font-mono flex items-center justify-between">
                <span>Ready for International Collaboration</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={idx} delay={idx * 110} direction="up">
                <div className="glass-panel p-6 rounded-2xl glass-panel-hover gradient-border-card flex flex-col justify-between space-y-4 h-full group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-3 text-white shadow-lg shadow-brand-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading mb-2">{pillar.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
