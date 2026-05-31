'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Award, Compass, ChevronDown, Check } from 'lucide-react';

const SERVICES = [
  {
    id: 'refining',
    title: 'Oil Refining Division',
    icon: Activity,
    short: 'State-of-the-art molecular refining complexes delivering high-grade clean fuels.',
    desc: 'Our refining processes utilize next-generation catalyst cracking and digital telemetry to separate crude feeds into pure, industry-standard distillates. We are fully capable of custom-refining to strict European EN-590 diesel parameters and low-sulfur premium marine fuels.',
    specs: [
      'Ultra-Low Sulfur Diesel (ULSD) production capabilities',
      'Intelligent thermal catalytic cracking and reforming',
      'ASTM-compliant laboratory quality testing',
      'Modular refinery deployment and operations'
    ]
  },
  {
    id: 'supply',
    title: 'Petroleum Supply & Trading',
    icon: Compass,
    short: 'Global crude procurement corridors and international tanker logistics channels.',
    desc: 'Through robust logistics agreements and trading nodes in Sharjah, Lagos, and Juba, we coordinate full cargo chartering and seamless bunkering operations. We connect sovereign fields to refineries, securing continuous, uncompromised energy supplies for large-scale industrial complexes.',
    specs: [
      'Crude oil procurement and shipping cargo logistics',
      'Refined petroleum products trading (AGO, PMS, DPK, Fuel Oil)',
      'Bunkering services and maritime vessel coordination',
      'Multi-port loading manifolds management'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Energy Infrastructure Development',
    icon: Award,
    short: 'Architecting high-pressure steel pipelines, structural terminals, and tank farms.',
    desc: 'We engineer durable pipelines, multi-million-barrel storage tank facilities, and loading gantries that form the backbone of regional distribution. Our engineering assets utilize digital pipeline telemetry and fiber-optic leaks scanning to maintain absolute logistics safety.',
    specs: [
      'High-pressure crude transport steel pipelines installation',
      'Deepwater tanker terminals and floating production storage structures',
      'Multi-barrel industrial tank farms construction',
      'Scada telemetry systems integration'
    ]
  },
  {
    id: 'exploration',
    title: 'Offshore & Onshore Exploration',
    icon: Shield,
    short: 'Geological seismic analytics and advanced drilling technologies.',
    desc: 'Employing highly precise horizontal drilling, three-dimensional seismic modeling, and environmentally responsible extraction procedures to discover and unlock reserves across East Africa and the Gulf of Guinea with minimal ecological impact.',
    specs: [
      'Three-dimensional seismic data analytics and geological modeling',
      'High-pressure horizontal onshore drilling operations',
      'Offshore deepwater rig deployment coordination',
      'Strict environmental eco-impact offset models'
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('refining');

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-16">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Core Services</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">
          What We Do
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Operational divisions executing premium energy logistics, high-grade molecular refining, robust transport infrastructure, and technical geological explorations.
        </p>
      </section>

      {/* Tabs & Content Panel */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Tabs Nav */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {SERVICES.map((serv) => {
            const isActive = activeTab === serv.id;
            return (
              <button
                key={serv.id}
                onClick={() => setActiveTab(serv.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'glass-card border-amber-500/40 shadow-md text-amber-500'
                    : 'border-slate-200 dark:border-slate-800 hover:border-amber-500/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-energy-gradient text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-500 group-hover:text-amber-500 transition-colors'
                  }`}>
                    {React.createElement(serv.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider">{serv.title}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[200px]">
                      {serv.short}
                    </p>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-90 text-amber-500' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Active Content Display */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-energy-gradient text-white flex items-center justify-center shadow-lg">
                  {React.createElement(activeService.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
                    {activeService.title}
                  </h2>
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-0.5 block">
                    NEATASI ENERGY division
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base border-t border-slate-200 dark:border-slate-800 pt-6 mt-2">
                {activeService.desc}
              </p>

              {/* Technical Specifications */}
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Division Capabilities & Specs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/10 dark:bg-slate-900/10 hover:border-amber-500/10 transition-colors"
                    >
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-normal">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Standards Certification Banner */}
      <section className="p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-base font-bold uppercase tracking-wide">Looking for Custom Refining Specifications?</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
            We offer modular, tailor-made laboratory-cracking specifications matching your strict local industrial requirements. Reach out to our operational team to request our product assay records.
          </p>
        </div>
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl bg-energy-gradient text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-102 transition-all cursor-pointer whitespace-nowrap"
        >
          Operational Enquiry
        </a>
      </section>
    </div>
  );
}
