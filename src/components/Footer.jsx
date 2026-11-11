import React from 'react';
import { cvData } from '../data/cvData';
import { ArrowUp, Code2, Heart, Mail, MessageSquare, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Footer() {
  const { personalInfo } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    ['Home', '#home'],
    ['About Me', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Education', '#education'],
    ['Projects', '#projects'],
    ['References', '#references'],
    ['Contact', '#contact'],
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border/80 pt-16 pb-12 relative overflow-hidden">
      {/* Animated top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent animate-gradient-x" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-brand-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-dark-border/60">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Munezero<span className="text-brand-500">.dev</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Full-Stack Developer and CTO at Beacon Rwanda LTD, building high-performance web, mobile, and AI-powered
              systems with React, TypeScript, Node.js, Python, and modern UI engineering. Based in Kigali, Rwanda.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
              {navLinks.map(([name, href]) => (
                <a key={href} href={href} className="link-underline w-fit hover:text-brand-400 transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Direct Action */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Connect Directly
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-dark-base border border-dark-border flex items-center justify-center text-zinc-300 hover:text-brand-400 hover:border-brand-500/50 hover:-translate-y-1 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-base border border-dark-border flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:-translate-y-1 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-base border border-dark-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-brand-500/50 hover:-translate-y-1 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-dark-base border border-dark-border flex items-center justify-center text-zinc-300 hover:text-blue-400 hover:border-blue-500/50 hover:-translate-y-1 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 pt-1">
              Available for full-time roles, contracts, and partnerships.
            </p>
          </div>

        </Reveal>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Munezero Fiable. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            Built with React
            <Heart className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
            Tailwind CSS
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-base border border-dark-border text-zinc-300 hover:text-brand-400 hover:border-brand-500/50 hover:-translate-y-0.5 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
