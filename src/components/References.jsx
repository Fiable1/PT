import React from 'react';
import { cvData } from '../data/cvData';
import { UserCheck, Phone, Mail, Building2, ShieldCheck, Quote } from 'lucide-react';
import Reveal from './Reveal';

export default function References() {
  const { references } = cvData;

  return (
    <section id="references" className="py-20 bg-dark-surface relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Verified Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Professional <span className="orange-gradient-text">References</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Trusted executives and senior engineers who can vouch for my engineering expertise, work ethic, and adaptability.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* References Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((ref, idx) => (
            <Reveal key={idx} delay={idx * 120} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className="glass-panel p-8 rounded-3xl glass-panel-hover gradient-border-card border-brand-500/20 flex flex-col justify-between space-y-6 relative overflow-hidden h-full group">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-500/10 group-hover:text-brand-500/20 transition-colors" />

                <div className="space-y-4 relative">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 bg-dark-base px-3 py-1 rounded-full border border-dark-border text-right">
                      {ref.relation}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">{ref.name}</h3>
                    <p className="text-sm font-semibold text-brand-400 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{ref.title} • {ref.company}</span>
                    </p>
                  </div>
                </div>

                {/* Direct Action Contacts */}
                <div className="pt-4 border-t border-dark-border space-y-2 font-mono text-xs">
                  <a
                    href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-base border border-dark-border hover:border-brand-500/40 hover:text-brand-400 text-zinc-300 hover:translate-x-1 transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-500" />
                    <span>{ref.phone}</span>
                  </a>

                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-dark-base border border-dark-border hover:border-brand-500/40 hover:text-brand-400 text-zinc-300 hover:translate-x-1 transition-all truncate"
                  >
                    <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="truncate">{ref.email}</span>
                  </a>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
