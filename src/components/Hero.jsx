import React from 'react';
import { cvData } from '../data/cvData';
import {
  ArrowRight, Mail, MapPin, Sparkles, Terminal, Cpu, Award, Shield,
  Smartphone, Briefcase, CheckCircle2
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import AnimatedCounter from './AnimatedCounter';
import Typewriter from './Typewriter';

const HERO_ROLES = [
  "Full-Stack Developer",
  "Chief Technology Officer",
  "Mobile App Engineer",
  "AI & Backend Developer",
  "Technical Project Leader",
];

export default function Hero() {
  const { personalInfo, stats } = cvData;
  const [statsRef, statsReached] = useIntersectionObserver({ threshold: 0.2 });

  const techBadges = [
    "React", "TypeScript", "NestJS", "Node.js", "Python", "Flutter",
    "Tailwind CSS", "PostgreSQL", "MongoDB", "AI / ML"
  ];

  const highlights = [
    { icon: Briefcase, label: "CTO @ Beacon Rwanda" },
    { icon: Smartphone, label: "Mobile Engineering" },
    { icon: Shield, label: "Full-Stack & APIs" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern bg-radial-gradient overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute top-20 -left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Availability Pill */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-surface border border-brand-500/30 text-brand-400 text-xs font-semibold shadow-inner shadow-brand-500/10 animate-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 animate-fade-up" style={{ animationDelay: '150ms' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
                Hi, I'm <span className="animated-gradient-text">{personalInfo.name}</span>
              </h1>

              <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl sm:text-2xl font-bold text-zinc-300 font-heading">
                <span className="text-brand-500 font-mono text-lg sm:text-xl">&lt;</span>
                <Typewriter
                  words={HERO_ROLES}
                  className="text-brand-400"
                />
                <span className="text-brand-500 font-mono text-lg sm:text-xl">/&gt;</span>
              </h2>
            </div>

            {/* Subtitle / Pitch */}
            <p
              className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              {personalInfo.about}
            </p>

            {/* Quick Tech Tag Badges */}
            <div
              className="flex flex-wrap items-center gap-2 pt-2 animate-fade-up"
              style={{ animationDelay: '330ms' }}
            >
              {techBadges.map((tech, i) => (
                <span
                  key={tech}
                  style={{ transitionDelay: `${i * 20}ms` }}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-surface border border-dark-border text-zinc-300 hover:border-brand-500/60 hover:text-brand-400 hover:-translate-y-0.5 hover:bg-dark-elevated transition-all duration-300 cursor-default"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto animate-fade-up"
              style={{ animationDelay: '420ms' }}
            >
              <a
                href="#projects"
                className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-red-600 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/45 hover:scale-[1.03] active:scale-[0.98] transition-all shine-sweep"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-surface border border-dark-border text-zinc-200 font-semibold text-sm hover:bg-dark-elevated hover:border-brand-500/50 hover:text-white hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Location & Quick Contact Info */}
            <div
              className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-mono animate-fade-up"
              style={{ animationDelay: '510ms' }}
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-brand-500" />
                <a href={`mailto:${personalInfo.email}`} className="link-underline hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Leadership highlights */}
            <div
              className="flex flex-wrap items-center gap-3 pt-2 animate-fade-up"
              style={{ animationDelay: '580ms' }}
            >
              {highlights.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <Icon className="w-3.5 h-3.5 text-brand-500" />
                  {label}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: User Photo & Floating Visual elements */}
          <div
            className="lg:col-span-5 flex justify-center items-center relative animate-scale-in"
            style={{ animationDelay: '300ms' }}
          >

            {/* Glowing Backdrop Circle */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-brand-600 to-amber-500 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
            <div className="absolute w-64 h-64 border border-brand-500/20 rounded-full animate-spin-slow" />
            <div className="absolute w-80 h-80 border border-dashed border-brand-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />

            {/* Profile Frame Container */}
            <div className="relative group">

              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-500 via-amber-500 to-red-600 opacity-80 blur-sm group-hover:opacity-100 group-hover:blur transition-all duration-500" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-dark-surface border border-dark-border p-3 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">

                {/* User CV Photo */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-dark-elevated to-dark-base w-72 h-96 sm:w-80 sm:h-[400px] flex items-center justify-center">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />

                  {/* Gradient Overlay for Sleek Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-80" />

                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-surface/90 backdrop-blur-md border border-dark-border flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white font-heading">{personalInfo.name}</h3>
                      <p className="text-[11px] text-brand-400 font-mono">{personalInfo.role}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 px-3 py-2 rounded-xl bg-dark-surface/95 border border-dark-border shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-zinc-200 animate-float">
                <Shield className="w-4 h-4 text-brand-400" />
                <span>NestJS & Node.js</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-dark-surface/95 border border-dark-border shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-zinc-200 animate-float" style={{ animationDelay: '1.5s' }}>
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Python & ML</span>
              </div>

              <div className="absolute top-1/3 -right-6 px-3 py-2 rounded-xl bg-dark-surface/95 border border-brand-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-zinc-200 animate-float-slow" style={{ animationDelay: '0.8s' }}>
                <Terminal className="w-4 h-4 text-brand-400" />
                <span>TypeScript</span>
              </div>

              <div className="absolute bottom-1/4 -left-6 px-3 py-2 rounded-xl bg-dark-surface/95 border border-dark-border shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-zinc-200 animate-float-slow" style={{ animationDelay: '2.2s' }}>
                <Award className="w-4 h-4 text-amber-400" />
                <span>CTO</span>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Grid with Animated Count-up when reached */}
        <div
          ref={statsRef}
          className="mt-16 pt-10 border-t border-dark-border/60 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className={`glass-panel p-5 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left glass-panel-hover ${
                statsReached ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } transition-all duration-700`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  trigger={statsReached}
                />
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-400 mt-1 font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quick credibility strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
            Beacon Rwanda LTD — CTO
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
            Isomero Tech — Mobile Engineer
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
            Solvify — Database Administrator
          </span>
        </div>

      </div>
    </section>
  );
}
