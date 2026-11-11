import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import {
  Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2,
  Download, ExternalLink, FileText
} from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  const { personalInfo } = cvData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(
      formData.subject || `Portfolio inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Open the visitor's email client with the message pre-filled
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-base relative overflow-hidden">
      {/* Background Radial Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-10 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Get in <span className="orange-gradient-text">Touch</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Have a project in mind, an open engineering role, or want to discuss a partnership? Let's build something remarkable together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-amber-500 rounded-full mt-2" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Details & WhatsApp Button */}
          <Reveal direction="left" className="lg:col-span-5 space-y-6">

            <div className="glass-panel p-8 rounded-3xl space-y-6 border-brand-500/20">
              <h3 className="text-2xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Feel free to reach out via phone, email, or a direct WhatsApp message. I typically respond within a few hours.
              </p>

              <div className="space-y-4 pt-2">

                {/* Email Box */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-surface border border-dark-border hover:border-brand-500/50 hover:bg-dark-elevated hover:translate-x-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Email Me</p>
                    <p className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone Box */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-surface border border-dark-border hover:border-brand-500/50 hover:bg-dark-elevated hover:translate-x-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Call Me</p>
                    <p className="text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Direct Chat */}
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-dark-surface border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-900/20 hover:translate-x-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono">WhatsApp Chat</p>
                    <p className="text-sm font-semibold text-white flex items-center gap-1">
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    </p>
                  </div>
                </a>

                {/* Location Badge */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-surface border border-dark-border">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono">Location</p>
                    <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </div>

              </div>

              {/* Timezone Status Card */}
              <div className="pt-4 border-t border-dark-border flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-500" />
                  <span>Timezone: CAT (UTC+2)</span>
                </span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Active
                </span>
              </div>
            </div>

            {/* CV Request Card */}
            <div className="glass-panel p-6 rounded-3xl flex items-center justify-between gap-4 border-brand-500/30 hover-lift">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">Curriculum Vitae</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">Full version on request</p>
                </div>
              </div>
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent('CV Request — Munezero Fiable')}`}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-xs shadow-md shadow-brand-500/25 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Request CV</span>
              </a>
            </div>

          </Reveal>

          {/* Right Column: Interactive Form */}
          <Reveal direction="right" delay={120} className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-brand-500/20 h-full">
              <h3 className="text-2xl font-bold text-white font-heading mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mb-8">
                Fill out the form below to leave a message, job offer, or collaboration idea.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-scale-in">
                  <div className="relative w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                    <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                    <CheckCircle2 className="w-8 h-8 relative" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-heading">Message Ready to Send!</h4>
                  <p className="text-sm text-zinc-300 max-w-md font-light">
                    Your email client should open with the message pre-filled. If it doesn't, write directly to{" "}
                    <a href={`mailto:${personalInfo.email}`} className="text-brand-400 hover:underline">
                      {personalInfo.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eric ISHIMWE"
                        className="w-full px-4 py-3 rounded-xl bg-dark-base border border-dark-border text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:-translate-y-0.5 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eric@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-base border border-dark-border text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:-translate-y-0.5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-dark-base border border-dark-border text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message details here..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-base border border-dark-border text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:-translate-y-0.5 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-4 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-red-600 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/45 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shine-sweep"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-center text-[11px] font-mono text-zinc-500">
                    Opens your email client with the message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
