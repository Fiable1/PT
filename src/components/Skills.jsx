import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import {
  Code2, Palette, Zap, Layout, Type, Smartphone,
  Server, Terminal, Database, Table, Network, Shield, HardDrive,
  Cpu, Layers, Cloud, GitBranch, CreditCard, CheckCircle2, Wrench, Sparkles
} from 'lucide-react';
import Reveal from './Reveal';

export default function Skills() {
  const { skills } = cvData;
  const [activeTab, setActiveTab] = useState('frontend');

  const iconMap = {
    Code2, Palette, Zap, Layout, Type, Smartphone,
    Server, Terminal, Database, Table, Network, Shield, HardDrive,
    Cpu, Layers, Cloud, GitBranch, CreditCard,
  };

  const tabs = [
    {
      id: 'frontend',
      label: 'Frontend',
      fullLabel: 'Frontend Development',
      icon: Code2,
      description: 'Modern interfaces built with React, TypeScript, and utility-first styling.',
      data: skills.frontend,
    },
    {
      id: 'backend',
      label: 'Backend & Database',
      fullLabel: 'Backend & Database',
      icon: Server,
      description: 'Scalable APIs, server architecture, and well-managed relational data.',
      data: skills.backend,
    },
    {
      id: 'advanced',
      label: 'Mobile, AI & DevOps',
      fullLabel: 'Mobile, AI & DevOps',
      icon: Cpu,
      description: 'Applied AI, mobile engineering, integrations, and delivery tooling.',
      data: skills.advanced,
    },
  ];

  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  const switchTab = (id) => {
    if (id !== activeTab) setActiveTab(id);
  };

  return (
    <section id="skills" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Subtle Orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Skills & <span className="orange-gradient-text">Tech Stack</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            A comprehensive overview of the technologies, frameworks, and methodologies I use to build robust enterprise software.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* Tab Selection Navigation */}
        <Reveal delay={80} className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-dark-base border border-dark-border max-w-full overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => switchTab(tab.id)}
                  aria-pressed={isActive}
                  className={`group relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 scale-[1.02]'
                      : 'text-zinc-400 hover:text-white hover:bg-dark-elevated'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category caption */}
        <div className="text-center mb-10 min-h-[24px]">
          <p key={`${activeTab}-caption`} className="text-xs sm:text-sm text-zinc-400 font-mono animate-fade-in">
            <span className="text-brand-400">{active.fullLabel}</span>
            <span className="text-zinc-600 mx-2">—</span>
            <span>{active.description}</span>
          </p>
        </div>

        {/* Skills Meter Grid — smoothly re-animated on every tab change */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {active.data.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="glass-panel p-6 rounded-2xl glass-panel-hover gradient-border-card flex flex-col justify-between animate-skill-in group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 transition-all duration-300 group-hover:bg-brand-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-white text-sm sm:text-base font-heading">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-dark-base rounded-full overflow-hidden border border-dark-border p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-brand-500 via-amber-500 to-orange-400 rounded-full shadow-md shadow-brand-500/30 skill-bar-fill"
                    style={{ '--bar-width': `${skill.level}%`, width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership & Soft Skills Box */}
        <Reveal direction="up" delay={100}>
          <div className="glass-panel p-8 rounded-3xl border-brand-500/20">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-500" />
                <span>Leadership & Soft Skills</span>
              </h3>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2.5 py-1 rounded-full">
                <Sparkles className="w-3 h-3" /> CTO-level ownership
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.softSkills.map((item, idx) => (
                <div
                  key={item}
                  style={{ transitionDelay: `${idx * 30}ms` }}
                  className="p-4 rounded-xl bg-dark-base border border-dark-border flex items-center gap-3 hover:border-brand-500/50 hover:-translate-y-0.5 hover:bg-dark-elevated transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
