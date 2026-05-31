'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldAlert, Award, Shield, Cpu, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-20">
      {/* 1. Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Origin</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">
          About Neatasi Oil & Gas
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Formed on July 8, 2024, by pioneer developer Justin Campbell O., Neatasi has engineered deep solutions for refining, supply, and drilling globally.
        </p>
      </section>

      {/* 2. Global Operational Locations */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            country: 'Nigeria',
            role: 'Corporate HQ & West African Port',
            address: '8b Akinola Adegunwa - Omole Phase 1, Lagos.',
            desc: 'Serving as the primary administrative coordinates and West African operations hub, overseeing major maritime loading and distribution channels.'
          },
          {
            country: 'United Arab Emirates',
            role: 'Global Trade & Logistics Coordinates',
            address: '131VL08 Sharjah.',
            desc: 'Our strategic gateway for international financial trades, chartering tankers, and global commercial partnerships across Asian and European markets.'
          },
          {
            country: 'South Sudan',
            role: 'Extraction Operations & Pipeline Field',
            address: 'Melut Basin, Juba.',
            desc: 'Developing major structural drilling fields, pipeline infrastructure, and regional logistics blocks in the oil-rich Muglad and Melut basins.'
          }
        ].map((loc, i) => (
          <motion.div
            key={loc.country}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-amber-500/20 hover:shadow-lg transition-all duration-300 flex flex-col gap-3"
          >
            <span className="px-3 py-1 rounded bg-amber-500/10 text-[10px] font-bold text-amber-500 uppercase tracking-widest self-start border border-amber-500/20">
              {loc.country}
            </span>
            <h3 className="text-base font-bold uppercase tracking-wide mt-2">{loc.role}</h3>
            <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 leading-normal">
              {loc.address}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
              {loc.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* 2.5 Leadership & Human Capital Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Professional Portrait image with technical tags */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative w-full aspect-square max-w-[400px] mx-auto lg:max-w-none group"
        >
          {/* Tech Frame border */}
          <div className="absolute inset-0 rounded-3xl border border-amber-500/20 dark:border-amber-500/10 bg-slate-900/10 dark:bg-slate-950/20 backdrop-blur-sm p-3 shadow-xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
              <img
                src="/images/black_engineer.png"
                alt="Neatasi Lead Petroleum Engineer"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Cyberpunk Telemetry Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg glass-card border border-amber-500/20 flex flex-col gap-1 backdrop-blur-md">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">HSE CHIEF COORDINATOR</span>
                <span className="text-[11px] font-extrabold text-slate-100 uppercase tracking-wide mt-0.5">Justin Campbell O. Team</span>
              </div>
            </div>
          </div>

          {/* Glowing corners */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-amber-500 rounded-tl-xl pointer-events-none" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-amber-500 rounded-br-xl pointer-events-none" />
        </motion.div>

        {/* Right: Visionary Bio details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-5 text-left"
        >
          <div className="h-1 w-16 bg-energy-gradient rounded" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Human Capital</span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight leading-snug">
            Empowering Local Talent & Global Expertise
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
            Neatasi is driven by a highly skilled, diverse team of petroleum engineers, safety managers, and energy logistics professionals. Founded on July 8, 2024, our corporation strongly champions the development of native technology skills in our fields of operation.
          </p>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
            By training and empowering local talent in Nigeria and South Sudan, we ensure deep community engagement while securing extreme precision across our drilling, refining, and pipeline networks. Our engineers utilize real-time diagnostic scada panels, thermal cataloging, and precise geological telemetry to keep global supply routes fully functional and 100% compliant with HSE safety standards.
          </p>
        </motion.div>
      </section>

      {/* 3. Interactive History Timeline */}
      <section className="flex flex-col gap-12">
        <div className="text-center flex flex-col gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">Our Operational Timeline</h2>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-8 flex flex-col gap-10">
          {[
            {
              date: 'July 8, 2024',
              title: 'Incorporation & First Procurement Block',
              desc: 'Justin Campbell O. founded Neatasi Oil and Gas Services in Lagos, Nigeria, establishing the initial crude procurement corridors.'
            },
            {
              date: 'December 2024',
              title: 'Global Trade Hub UAE Established',
              desc: 'Opened the Sharjah (UAE) branch to coordinate global petroleum shipments and manage Middle-Eastern refining partnerships.'
            },
            {
              date: 'August 2025',
              title: 'South Sudan Exploration Operations',
              desc: 'Initiated primary onshore exploration permissions in Juba, South Sudan, partnering with local entities to construct high-pressure pipeline assets.'
            },
            {
              date: '2026 & Beyond',
              title: 'Digital Clean Refining Integration',
              desc: 'Integrating AI-driven digital flow telemetry and lower-emission modular refineries to expand accessibility globally.'
            }
          ].map((item, i) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-12 top-1.5 w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-amber-500 flex items-center justify-center shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-extrabold text-amber-500 uppercase tracking-widest">
                  {item.date}
                </span>
                <h3 className="text-base font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Strategic Engineering Pillars */}
      <section className="bg-slate-50 dark:bg-slate-900/40 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="text-center flex flex-col gap-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate DNA</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">Our Operational Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality Specifications',
              desc: 'Rigorous laboratory assays ensure all delivered crude and petroleum derivatives match international standards (including ASTM, EN-590).',
              icon: Award
            },
            {
              title: 'Rigorous HSE Policies',
              desc: 'Safety is non-negotiable. We maintain a zero-spill directive, carrying out safety compliance checkups weekly across all terminals.',
              icon: Shield
            },
            {
              title: 'Eco-Sustainability',
              desc: 'Developing energy solutions that focus on efficiency, smart distribution networks, and carbon offsets to keep global supply sustainable.',
              icon: Leaf
            }
          ].map((pil) => (
            <div key={pil.title} className="flex flex-col gap-4 text-center items-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                {React.createElement(pil.icon, { className: 'w-6 h-6' })}
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide mt-2">{pil.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                {pil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
