'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects, Project } from '@/components/ProjectStore';
import { ArrowRight, Shield, Activity, Award, CheckCircle, Quote, Compass } from 'lucide-react';

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  const loadProjects = () => {
    const all = getProjects();
    setFeaturedProjects(all.filter((p) => p.featured));
  };

  useEffect(() => {
    loadProjects();
    const handleUpdate = () => {
      loadProjects();
    };
    window.addEventListener('neatasi-projects-updated', handleUpdate);
    return () => window.removeEventListener('neatasi-projects-updated', handleUpdate);
  }, []);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center py-20 px-4 sm:px-6 lg:px-8">
        {/* Sleek Grid Backdrop & Glowing Orb */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 dark:bg-orange-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        {/* Hero Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Headline & Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 rounded-full glass-card border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
            >
              <Shield className="w-3.5 h-3.5 animate-pulse" />
              ISO 9001 & HSE Certified System
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans"
            >
              Making Energy <br />
              <span className="text-gradient uppercase">Accessible, Reliable</span> <br />
              & Sustainable
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium"
            >
              We are committed to powering industries and communities through innovative oil and gas solutions. Neatasi Oil and Gas Services specializes in high-end oil refining, global petroleum supply, and energy infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-xl bg-energy-gradient text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.45)] hover:scale-102 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Operations Pipeline
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Operational Inquiry
              </Link>
            </motion.div>
          </div>

          {/* Right: Premium Refinery Graphic with Telemetry Markers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[450px] mx-auto lg:max-w-none group"
          >
            {/* Tech Frame border */}
            <div className="absolute inset-0 rounded-3xl border border-amber-500/20 dark:border-amber-500/10 bg-slate-900/10 dark:bg-slate-950/20 backdrop-blur-sm p-3 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                <img
                  src="/images/refinery_hero.png"
                  alt="Neatasi Refinery"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Cyberpunk Telemetry Overlay */}
                <div className="absolute top-4 left-4 p-3 rounded-lg glass-card border border-amber-500/20 flex flex-col gap-1 backdrop-blur-md">
                  <span className="text-[8px] font-bold text-amber-500 uppercase tracking-widest">REFINING PIPELINE 01</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-bold font-mono text-slate-200">98.4% CAP</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 p-3 rounded-lg glass-card border border-amber-500/20 flex flex-col gap-1 backdrop-blur-md text-right">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">FLOW TELEMETRY</span>
                  <span className="text-[10px] font-extrabold font-mono text-amber-500 mt-0.5">5,240 BBL / HR</span>
                </div>
              </div>
            </div>

            {/* Glowing corner highlights */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-amber-500 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-amber-500 rounded-br-xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center"
        >
          <div className="flex flex-col gap-1">
            <span className="text-3xl sm:text-5xl font-extrabold text-amber-500 font-sans">2+</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Years of Excellence</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800">
            <span className="text-3xl sm:text-5xl font-extrabold text-amber-500 font-sans">3+</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Global Markets</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800">
            <span className="text-3xl sm:text-5xl font-extrabold text-amber-500 font-sans">15+</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">Global Operations</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800">
            <span className="text-3xl sm:text-5xl font-extrabold text-amber-500 font-sans">100%</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">HSE Safety Compliance</span>
          </div>
        </motion.div>
      </section>

      {/* 3. History Bio & About Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="h-1 w-20 bg-energy-gradient rounded" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Global Energy Excellence Built on Trust and Innovation
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Founded on July 8, 2024, by visionary energy expert Justin Campbell O., Neatasi has rapidly grown into a prominent global force in energy resources. Operating dynamically across Nigeria, Dubai (UAE), and South Sudan, our operations span key value chains in oil refining, crude procurement, pipeline engineering, and advanced explorations.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Our guiding mission is simple: drive energy excellence through extreme technological innovation, rigorous environmental safeguards, and absolute reliability for all global partners.
          </p>
          <div className="mt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors group"
            >
              Our History and Founders
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden glass-card p-8 border border-slate-200 dark:border-slate-800 flex flex-col gap-6"
        >
          {/* Subtle overlay decorative designs */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />

          <h3 className="text-lg font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Core Values
          </h3>

          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide">Absolute Quality</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  We adhere to stringent international standards (ISO 9001) for oil refining, distribution, and pipeline engineering.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide">Extreme Safety First</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Ensuring zero incidents through meticulous, strict industrial safety protocols for handling and extraction.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide">Global Sustainability</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Driving eco-conscious refining methodologies to offset carbon footprints while maximizing output reliability.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Core Divisions Section */}
      <section className="bg-slate-100/40 dark:bg-slate-950/40 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Global Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Our Core Divisions</h2>
            <p className="max-w-2xl text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-medium">
              Specialized systems constructed to provide optimal results across major energy sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Oil Refining',
                desc: 'Deploying cutting-edge molecular refining complexes to secure pure, ultra-clean high-grade petroleum fuels.',
                icon: Activity
              },
              {
                title: 'Petroleum Supply',
                desc: 'Strategic raw crude procurement and robust refined products trading channels globally.',
                icon: Compass
              },
              {
                title: 'Infrastructure',
                desc: 'Architecting dynamic oil storage terminals, structural pipelines, and digital distribution centers.',
                icon: Award
              },
              {
                title: 'Offshore & Onshore',
                desc: 'Executing highly precise geological deep-drilling explorations across global oil fields.',
                icon: Shield
              }
            ].map((div, i) => (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl glass-card border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center group-hover:bg-energy-gradient group-hover:text-slate-950 transition-all duration-300">
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <div className="w-5 h-5">
                      <div className="w-full h-full text-center flex items-center justify-center">
                        <div className="w-5 h-5 flex items-center justify-center shrink-0">
                          <div className="w-5 h-5 shrink-0 flex items-center justify-center text-center">
                            {React.createElement(div.icon, { className: 'w-5 h-5' })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide mt-2 text-slate-900 dark:text-white">{div.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed flex-grow font-medium">
                  {div.desc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-wider group/link mt-2"
                >
                  Technical Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects (Synchronized with Admin panel) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Operational Grid</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl leading-relaxed">
              Active engineering pipelines and completed operations. You can add or delete featured projects live using the floating **Admin Simulator Panel**.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2 group shrink-0"
          >
            All Active Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {featuredProjects.length === 0 ? (
              <div className="col-span-3 text-center py-12 text-slate-500 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 bg-white/5">
                No projects are marked as "featured" in the database. Open the floating **Admin Simulator Panel** on the bottom right and toggle "Feature on Marketing Homepage" to display them!
              </div>
            ) : (
              featuredProjects.slice(0, 3).map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-amber-500/30 flex flex-col h-full"
                >
                  {/* Decorative Header with Category Tag */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10 pointer-events-none" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded bg-amber-500/85 text-[9px] font-bold text-white uppercase tracking-widest backdrop-blur-sm shadow border border-amber-400/20">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded bg-slate-950/80 text-[9px] font-bold text-white uppercase tracking-widest backdrop-blur-sm border border-white/10">
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow gap-3 bg-white/5 dark:bg-slate-950/5">
                    <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      {proj.location}
                    </span>
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed flex-grow font-medium">
                      {proj.description}
                    </p>
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-2 flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      <span>Deployment Date</span>
                      <span>{proj.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Premium Testimonial Slider */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-16 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6">
          <Quote className="w-12 h-12 text-amber-500/25 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
            Partnership Endorsement
          </h2>
          <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative w-full">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 italic leading-relaxed">
              "Neatasi Oil and Gas has been an absolutely reliable partner in global energy procurement. Their refining specifications and logistics distribution operations are top-notch, maintaining stellar safety standards even under complex market constraints."
            </p>
            <div className="mt-6 flex flex-col items-center">
              <span className="font-bold text-slate-900 dark:text-slate-100 uppercase text-xs tracking-widest">
                Michelle Harmington
              </span>
              <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider mt-1">
                Global Operations Director, Harmington Resources Ltd
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
