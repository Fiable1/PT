import React from 'react';
import { cvData } from '../data/cvData';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience() {
  const { experience } = cvData;

  const companies = new Set(experience.map((item) => item.company)).size;

  return (
    <section id="experience" className="py-24 bg-dark-base relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Work <span className="orange-gradient-text">Experience</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Leadership and hands-on delivery across full-stack engineering, mobile development, backend systems, and database administration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* Quick career summary */}
        <Reveal delay={80} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {[
            { label: `${experience.length} Roles`, icon: Briefcase },
            { label: `${companies} Organisations`, icon: Building2 },
            { label: "CTO Leadership", icon: Sparkles },
          ].map(({ label, icon: Icon }) => (
            <span key={label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-dark-surface border border-dark-border text-[11px] font-mono text-zinc-300 hover:border-brand-500/40 transition-colors">
              <Icon className="w-3.5 h-3.5 text-brand-500" />
              {label}
            </span>
          ))}
        </Reveal>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-amber-500 to-dark-border -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const initials = item.company
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((word) => word[0])
                .join('')
                .toUpperCase();

              return (
                <div
                  key={`${item.company}-${item.role}`}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >

                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-dark-base border-2 border-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/50">
                    <span className="absolute w-full h-full rounded-full bg-brand-500/30 animate-pulse-ring" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                  </div>

                  {/* Experience Card */}
                  <Reveal
                    direction={isEven ? 'right' : 'left'}
                    delay={60}
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover gradient-border-card border-brand-500/20 group">

                      {/* Period Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-semibold mb-3 ${
                        isEven ? 'sm:ml-auto' : ''
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                        {item.current && (
                          <span className="ml-1 inline-flex items-center gap-1 text-[10px] text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center text-white text-xs font-bold font-heading shadow-lg shadow-brand-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          {initials}
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-tight">{item.role}</h3>
                          <h4 className="text-sm sm:text-base font-semibold text-brand-400">{item.company}</h4>
                        </div>
                      </div>

                      {/* Location & Type */}
                      <div className={`flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4 mt-3 font-mono ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-500" />
                          {item.location}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-300">{item.type}</span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-300 font-light">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-left group/li">
                            <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5 group-hover/li:translate-x-0.5 transition-transform" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-dark-base border border-dark-border text-[11px] font-mono text-zinc-300 hover:border-brand-500/50 hover:text-brand-400 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </Reveal>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
