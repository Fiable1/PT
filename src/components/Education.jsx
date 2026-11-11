import React from 'react';
import { cvData } from '../data/cvData';
import { GraduationCap, Calendar, CheckCircle, Sparkles, Award } from 'lucide-react';
import Reveal from './Reveal';

export default function Education() {
  const { education } = cvData;

  const knowledgeAreas = [
    "Software Development & OOP",
    "Web Systems & Database Design",
    "Data Structures & Algorithms",
    "System Architecture & Git",
  ];

  return (
    <section id="education" className="py-20 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Education & <span className="orange-gradient-text">Certification</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <Reveal key={idx} direction="up" delay={100}>
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border-brand-500/30 glass-panel-hover gradient-border-card flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden group">

                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-500/20 transition-colors duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/30 shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{edu.degree}</h3>
                    <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold text-brand-400">{edu.institution}</h4>

                  <p className="text-zinc-300 text-sm leading-relaxed font-light pt-1">
                    {edu.details}
                  </p>

                  {/* Key Knowledge Areas */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    {knowledgeAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 group/item">
                        <CheckCircle className="w-4 h-4 text-brand-500 group-hover/item:scale-110 transition-transform" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3 text-[11px] font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-base border border-dark-border">
                      <Award className="w-3.5 h-3.5 text-amber-400" /> Diploma
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-base border border-dark-border">
                      <Sparkles className="w-3.5 h-3.5 text-brand-400" /> Software Development
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-base border border-dark-border">
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
