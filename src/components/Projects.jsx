import React, { useState, useEffect, useMemo } from 'react';
import { cvData } from '../data/cvData';
import {
  FolderGit2, ExternalLink, Sparkles, X, ArrowRight, Layers,
  Briefcase, Calendar, CheckCircle2, Code2, Smartphone, BrainCircuit, Database
} from 'lucide-react';
import Reveal from './Reveal';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const categoryIcon = {
  'Full-Stack': Layers,
  'Mobile': Smartphone,
  'AI & ML': BrainCircuit,
  'Backend & Database': Database,
};

export default function Projects() {
  const { projects } = cvData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  // Modal: escape key + body scroll lock
  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-dark-base relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Featured <span className="orange-gradient-text">Projects & Work</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Full-stack platforms, mobile applications, AI experiments, and backend systems engineered across Beacon Rwanda, Isomero Tech, and independent projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        {/* Filter Badges */}
        <Reveal delay={80} className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/25 border border-brand-400/30 scale-105'
                    : 'bg-dark-surface border border-dark-border text-zinc-400 hover:text-white hover:border-brand-500/40 hover:-translate-y-0.5'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-[10px] ${filter === cat ? 'text-white/80' : 'text-zinc-500'}`}>
                  {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div key={filter} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = categoryIcon[project.category] || Code2;
            return (
              <div
                key={project.id}
                style={{ animationDelay: `${idx * 70}ms` }}
                className="glass-panel p-7 sm:p-8 rounded-3xl glass-panel-hover gradient-border-card flex flex-col justify-between border-brand-500/20 group relative overflow-hidden animate-fade-up"
              >
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-xl group-hover:bg-brand-500/15 transition-colors duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold">
                      <Icon className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-brand-400 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Role / org / period */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-500 mb-4">
                    {project.role && (
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-brand-500/80" />
                        {project.role}
                      </span>
                    )}
                    {project.period && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-500/80" />
                        {project.period}
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light mb-6">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-dark-base border border-dark-border text-[11px] font-mono text-zinc-400 hover:border-brand-500/40 hover:text-brand-400 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-dark-border flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 font-mono group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-dark-surface border border-dark-border text-zinc-300 hover:text-white hover:border-brand-500/50 hover:-translate-y-0.5 transition-all"
                        title="Source code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5 transition-all shadow-md"
                        title="Live preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Dialog */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="bg-dark-surface border border-brand-500/30 rounded-3xl max-w-2xl w-full relative shadow-2xl space-y-6 animate-scale-in max-h-[90vh] overflow-y-auto"
            >
              {/* Gradient header */}
              <div className="relative p-8 pb-6 border-b border-dark-border overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-dark-elevated border border-dark-border text-zinc-400 hover:text-white hover:rotate-90 transition-all duration-300"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold mb-4">
                  {selectedProject.category}
                </div>

                <h3 className="text-2xl font-bold text-white font-heading pr-10">{selectedProject.title}</h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-zinc-400 mt-3">
                  {selectedProject.organisation && <span>{selectedProject.organisation}</span>}
                  {selectedProject.role && <span className="text-brand-400">{selectedProject.role}</span>}
                  {selectedProject.period && <span>{selectedProject.period}</span>}
                </div>
              </div>

              <div className="px-8 pb-8 space-y-6">
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {selectedProject.highlights?.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase text-zinc-400">Key Contributions:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase text-zinc-400">Technologies Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-dark-base border border-dark-border text-xs font-mono text-brand-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-dark-border flex flex-wrap justify-end gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-elevated border border-dark-border text-zinc-300 text-xs font-semibold hover:text-white hover:border-brand-500/50 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-semibold shadow-lg shadow-brand-500/25 hover:scale-105 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Preview
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-dark-elevated border border-dark-border text-zinc-300 text-xs font-semibold hover:text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
