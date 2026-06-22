'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Layers, 
  Users, 
  Globe, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  FileText, 
  TrendingUp,
  Cpu,
  Droplet,
  Compass,
  Anchor,
  Wrench,
  CheckCircle2,
  Bookmark,
  Printer,
  Truck
} from 'lucide-react';

type Mode = 'slides' | 'report';

export default function RedesignedProfile() {
  const [viewMode, setViewMode] = useState<Mode>('slides');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Business divisions with metrics for professional presentation
  const divisions = [
    {
      title: 'Oil & Gas Exploration',
      desc: 'Conducting upstream oil and gas exploration across sub-Saharan Africa, leveraging advanced geological surveys and strategic partnerships to identify and develop viable hydrocarbon reserves.',
      capacity: 'Upstream Assets',
      stat: 'Muglad & Melut Basins',
      icon: Compass
    },
    {
      title: 'Gas Supply',
      desc: 'Supplying processed and piped natural gas to industrial, commercial, and governmental clients, ensuring reliable energy access across our operational territories.',
      capacity: 'Delivery Capacity',
      stat: '450 MMcf/day',
      icon: Droplet
    },
    {
      title: 'Pipeline Construction',
      desc: 'Our engineering division specialises in the design, construction, and maintenance of oil and gas pipeline infrastructure, adhering to international safety and quality standards.',
      capacity: 'Completed Pipelines',
      stat: 'Over 850 km',
      icon: Wrench
    },
    {
      title: 'Fuel Distribution',
      desc: 'Managing end-to-end fuel distribution networks, supplying refined petroleum products to downstream markets across Nigeria and South Sudan.',
      capacity: 'Logistics Fleet',
      stat: '120+ Tankers',
      icon: TrendingUp
    },
    {
      title: 'Crude Oil Trading',
      desc: 'Engaging in international crude oil trading, connecting producers with global refineries through transparent, efficient, and commercially sound trading operations.',
      capacity: 'Annual Trade Vol',
      stat: '24M Barrels',
      icon: Layers
    },
    {
      title: 'Drilling Services',
      desc: 'Our drilling operations support both exploration and production phases, employing modern rig technologies and experienced technical crews.',
      capacity: 'Active Rigs',
      stat: '4 Onshore Units',
      icon: Cpu
    },
    {
      title: 'Gold Mining & Trading',
      desc: 'Holding mining interests and conducting artisanal and large-scale gold mining operations, with an active gold trading desk serving local and international buyers.',
      capacity: 'Mining Licenses',
      stat: '3 Active Concessions',
      icon: Award
    },
    {
      title: 'Construction & Engineering',
      desc: 'From civil infrastructure to industrial facility development, our construction arm delivers turnkey projects on time and within budget.',
      capacity: 'turnkey Delivery',
      stat: 'ISO 9001 Compliant',
      icon: Building
    },
    {
      title: 'Dredging & Maritime',
      desc: 'Providing professional dredging services for waterway maintenance, land reclamation, and offshore construction — critical in Nigeria\'s Niger Delta and South Sudan\'s river systems.',
      capacity: 'Dredge Capacity',
      stat: '2,500 m³/hour',
      icon: Anchor
    },
    {
      title: 'Haulage & Logistics',
      desc: 'Managing end-to-end heavy-duty logistics and bulk haulage services, transporting heavy equipment, natural resources, and petroleum products across our operational corridors.',
      capacity: 'Haulage Fleet',
      stat: '50+ Heavy-Duty Trucks',
      icon: Truck
    }
  ];

  // Core values
  const coreValues = [
    { name: 'Integrity', desc: 'We operate with unwavering transparency and ethical standards in all our dealings.' },
    { name: 'Excellence', desc: 'We pursue the highest quality in every project, partnership, and deliverable.' },
    { name: 'Innovation', desc: 'We embrace technology and creative thinking to solve complex energy challenges.' },
    { name: 'Sustainability', desc: 'We are committed to responsible resource management and environmental stewardship.' },
    { name: 'Impact', desc: 'We measure our success by the positive change we create in communities and economies.' }
  ];

  // Leadership
  const leaders = [
    {
      name: 'Justin Campbell',
      role: 'Chief Executive Officer',
      bio: 'Mr. Justin Campbell provides strategic direction and executive oversight across Nea Tasi\'s business operations. With a results-driven philosophy, he champions global growth, operational excellence, and expansion across African and Middle Eastern markets.'
    },
    {
      name: 'Evangelist Dr. Kathy Woghiren',
      role: 'Board of Directors',
      bio: 'A distinguished member of the Board, Evangelist Dr. Kathy Woghiren brings a wealth of experience in governance, community development, and strategic advisory. Her counsel ensures that Nea Tasi operates with purpose and social responsibility.'
    },
    {
      name: 'Dr. Kennedy Woghiren',
      role: 'Board of Directors',
      bio: 'Dr. Kennedy Woghiren serves on the Board of Directors, contributing deep expertise in corporate strategy, resource management, and international business. His insights shape Nea Tasi\'s long-term vision.'
    },
    {
      name: 'Osikenyi OsisiOgu',
      role: 'Board Spokesman',
      bio: 'As Board Spokesman, Mr. Osikenyi OsisiOgu serves as the official voice of the Board, ensuring clear, consistent, and strategic communication with stakeholders, global partners, and the public.'
    }
  ];

  // Global footprints
  const locations = [
    {
      name: 'Nigeria — Headquarters',
      coords: 'Asese, Ogun State, Nigeria',
      focus: 'Upstream exploration coordination, regional fuel logistics, West African maritime portals.'
    },
    {
      name: 'United Arab Emirates',
      coords: '131VL08, Sharjah, UAE',
      focus: 'International crude trading desk, gold brokerage terminal, Middle East investment coordination.'
    },
    {
      name: 'South Sudan',
      coords: 'Juba, South Sudan',
      focus: 'Sovereign oil field developments, regional fuel distribution terminals, pipeline construction assets.'
    }
  ];

  const totalSlides = 5;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Advanced PDF Print Engine
  const handlePrint = () => {
    // Switch to report view mode to display full continuous document
    const originalMode = viewMode;
    setViewMode('report');
    
    // Allow state render to flush, then launch system print window
    setTimeout(() => {
      window.print();
      // Restore user's previous interactive state
      setViewMode(originalMode);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03050a] text-slate-800 dark:text-slate-100 transition-colors duration-500 pb-24 pt-28">
      
      {/* Dynamic Print CSS Overrides */}
      <style>{`
        @media print {
          /* Hide all general site layouts and non-print booklet elements */
          header, footer, .no-print, [role="banner"], [role="contentinfo"], .floating-simulator, button {
            display: none !important;
          }
          
          /* Expand printable canvas fully */
          body, html, main, #__next {
            background: white !important;
            color: #0f172a !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }

          /* Force section breaks to build the booklet structure page-by-page */
          .print-page-break {
            page-break-before: always !important;
            break-before: page !important;
            padding-top: 3rem !important;
          }

          /* Keep gorgeous corporate gold border trims visible in PDF */
          .print-gold-border {
            border-color: #d97706 !important; /* amber-600 */
          }

          /* Render visual cards clearly on print background */
          .print-card-bg {
            background: #f8fafc !important; /* slate-50 */
            border: 1px solid #e2e8f0 !important; /* slate-200 */
          }

          /* Darken text values to ensure razor-sharp readability on white paper */
          p, span, h1, h2, h3, h4, h5, h6 {
            color: #0f172a !important;
          }

          .text-amber-500, .text-amber-600, .text-yellow-500, .text-amber-700 {
            color: #b45309 !important; /* Darker print-optimized gold */
          }
          
          .border-slate-800, .border-slate-200 {
            border-color: #cbd5e1 !important; /* Slate-300 */
          }
        }
      `}</style>

      {/* Decorative Vector Accents */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none no-print" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none no-print" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none no-print" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER CONTROL PANEL: Mode Switchers & Print Export Triggers */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800/80 pb-6 mb-10 no-print">
          
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-extrabold tracking-widest text-amber-500 uppercase bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                Interactive Edition
              </span>
              <span className="text-[10px] font-extrabold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                ESTABLISHED 2024
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-sans">
              NEA TASI <span className="text-amber-500 font-bold">COMPANY PROFILE</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            
            {/* Design View Mode Selector */}
            <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center shadow-inner">
              <button
                onClick={() => setViewMode('slides')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  viewMode === 'slides'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-amber-500'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Slide Deck
              </button>
              <button
                onClick={() => setViewMode('report')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  viewMode === 'report'
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-slate-500 dark:text-slate-400 hover:text-amber-500'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Annual Report
              </button>
            </div>

            {/* Dynamic Export PDF Button (Generates exact layout matching report view) */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-energy-gradient hover:shadow-lg hover:shadow-amber-500/15 text-white text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Save Report as PDF
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: EXECUTIVE SLIDE DECK (Booklet Presentation) */}
        {/* ========================================================================= */}
        {viewMode === 'slides' && (
          <div className="flex flex-col gap-6 no-print">
            
            {/* Interactive Console Screen Frame */}
            <div className="relative rounded-3xl bg-white dark:bg-[#070b12] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden min-h-[580px] flex flex-col justify-between">
              
              {/* Telemetry Corner Borders */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500/30 rounded-bl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl pointer-events-none" />

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-900">
                <motion.div 
                  className="h-full bg-energy-gradient"
                  animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* SLIDES ROUTER CONTENT CONTAINER */}
              <div className="p-8 sm:p-12 flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    
                    {/* Slide 0: Executive Overview & Foundation */}
                    {currentSlide === 0 && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-5 text-left">
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Origin</span>
                          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
                            Powering Economies.<br />
                            <span className="text-amber-500">Driving Global Growth.</span>
                          </h2>
                          <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                            Nea Tasi Oil and Gas Services is a dynamic, forward-looking multinational corporation headquartered in Nigeria, with operations spanning the United Arab Emirates and South Sudan. Founded in 2024, Nea Tasi has rapidly positioned itself as a key player across Africa and the Middle East, offering a broad spectrum of energy, natural resources, and infrastructure solutions.
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal">
                            Operational Verticals: Upstream Exploration • Oil Refining • Pipeline Engineering • Gold Mining & Trading • Dredging Services • Haulage & Logistics.
                          </p>
                        </div>
                        
                        {/* Right Column: Mini Interactive Origin Card */}
                        <div className="lg:col-span-5">
                          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 shadow-md">
                            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">FOUNDING DIRECTIVE</span>
                            <div className="h-0.5 w-10 bg-amber-500" />
                            <div className="flex flex-col gap-2">
                              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                                "Our corporate mandate combines resource efficiency, structural safety, and sovereign energy security across developing sectors."
                              </span>
                              <span className="text-[10px] font-bold text-amber-500 uppercase mt-2">— Justin Campbell, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slide 1: Mission, Vision, and Values */}
                    {currentSlide === 1 && (
                      <div className="flex flex-col gap-8 text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Philosophy</span>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                            <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wide">Our Mission</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed mt-1">
                              To harness the full potential of natural resources through innovation, integrity, and strategic partnerships — delivering energy solutions and infrastructure that power communities and economies across Africa and beyond.
                            </p>
                          </div>
                          <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                            <h3 className="text-sm font-extrabold text-amber-500 uppercase tracking-wide">Our Vision</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed mt-1">
                              To be Africa\'s most trusted and diversified energy and resources company, recognised globally for excellence, sustainability, and transformative impact across the energy, mining, and construction sectors.
                            </p>
                          </div>
                        </div>

                        {/* Core Values Grid */}
                        <div className="flex flex-col gap-3 mt-2">
                          <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Core Foundations</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                            {coreValues.map((val) => (
                              <div key={val.name} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-[#0a0f18] text-center flex flex-col gap-1 shadow-sm">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">{val.name}</span>
                                <p className="text-[9px] text-slate-400 dark:text-slate-500 leading-relaxed">{val.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Slide 2: Business Verticals Infographics */}
                    {currentSlide === 2 && (
                      <div className="flex flex-col gap-6 text-left">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Asset Distribution</span>
                            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mt-1">Ten Strategic Business Verticals</h3>
                          </div>
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                            Full Value Chain Solutions
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto max-h-[360px] pr-2 scrollbar-thin">
                          {divisions.map((div, i) => {
                            const DivIcon = div.icon;
                            return (
                              <div 
                                key={div.title}
                                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#090e16]/60 border border-slate-200 dark:border-slate-800/80 flex flex-col gap-3 group hover:border-amber-500/25 hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                                    <DivIcon className="w-4 h-4" />
                                  </div>
                                  <span className="text-[10px] font-extrabold text-slate-400">0{i + 1}</span>
                                </div>
                                <div className="flex flex-col">
                                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                                    {div.title}
                                  </h4>
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                                    {div.desc}
                                  </p>
                                </div>
                                <div className="border-t border-slate-100 dark:border-slate-800/60 mt-auto pt-2.5 flex items-center justify-between text-[9px] text-slate-400 dark:text-slate-500">
                                  <span className="uppercase">{div.capacity}</span>
                                  <span className="font-bold text-amber-500/90">{div.stat}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Slide 3: Board of Directors & Governance */}
                    {currentSlide === 3 && (
                      <div className="flex flex-col gap-6 text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Governance & Leadership</span>
                        <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mt-1">Visionary Executive Board</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                          {leaders.map((leader) => (
                            <div 
                              key={leader.name}
                              className="p-5.5 rounded-2xl bg-slate-50/50 dark:bg-[#070b12] border border-slate-200 dark:border-slate-800/80 flex flex-col gap-2 hover:border-amber-500/20 transition-all duration-300"
                            >
                              <div className="flex flex-col">
                                <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">
                                  {leader.role}
                                </span>
                                <h4 className="text-sm font-bold uppercase tracking-wide mt-1 text-slate-900 dark:text-slate-100">
                                  {leader.name}
                                </h4>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                                {leader.bio}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Slide 4: Global Coordinates & Strategic Credentials */}
                    {currentSlide === 4 && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
                        
                        {/* Left: Global Office Terminals */}
                        <div className="lg:col-span-5 flex flex-col gap-5">
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Global Coordinates</span>
                          <div className="flex flex-col gap-4">
                            {locations.map((loc) => (
                              <div key={loc.name} className="flex gap-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                                  <MapPin className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                  <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-900 dark:text-slate-100">{loc.name}</h4>
                                  <span className="text-[10px] font-bold text-amber-500/80 uppercase">{loc.coords}</span>
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{loc.focus}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Gold Accreditation Seals */}
                        <div className="lg:col-span-7 flex flex-col gap-5">
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Sovereign Credentials</span>
                          
                          <div className="flex flex-col gap-4">
                            
                            {/* Certificate 1: Crude Association */}
                            <div className="p-4.5 rounded-2xl bg-gradient-to-r from-amber-500/5 to-transparent border border-slate-200 dark:border-amber-500/20 flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0 shadow-md">
                                <ShieldCheck className="w-5.5 h-5.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[9px] font-extrabold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded self-start">
                                  Registered Member
                                </span>
                                <h4 className="text-xs font-extrabold uppercase mt-2 text-slate-900 dark:text-slate-100">
                                  Crude Association of South Sudan
                                </h4>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                                  Nea Tasi is a registered member of the Crude Association of South Sudan, aligning operations with sovereign East African energy distribution directives.
                                </p>
                              </div>
                            </div>

                            {/* Certificate 2: Ministry Ongoing Agreement */}
                            <div className="p-4.5 rounded-2xl bg-gradient-to-r from-amber-500/5 to-transparent border border-slate-200 dark:border-amber-500/20 flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0 shadow-md">
                                <Award className="w-5.5 h-5.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[9px] font-extrabold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded self-start">
                                  Bilateral Agreement
                                </span>
                                <h4 className="text-xs font-extrabold uppercase mt-2 text-slate-900 dark:text-slate-100">
                                  Minister of Petroleum, South Sudan
                                </h4>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                                  Bilateral agreement is actively ongoing with the Minister of Petroleum in South Sudan to construct pipeline assets and explore block exploration.
                                </p>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* SLIDE CONTROL FOOTER BOARD */}
              <div className="border-t border-slate-200 dark:border-slate-800/80 p-5 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between">
                
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx
                          ? 'bg-amber-500 w-6 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                          : 'bg-slate-300 dark:bg-slate-800 hover:bg-amber-500/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-2 h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 flex items-center justify-center transition-colors dark:bg-[#080d15] cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </button>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Page 0{currentSlide + 1} / 0{totalSlides}
                  </span>
                  <button
                    onClick={nextSlide}
                    className="p-2 h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 flex items-center justify-center transition-colors dark:bg-[#080d15] cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </button>
                </div>
              </div>

            </div>

            {/* In booklet mode: Prompt to switch or Save Booklet */}
            <div className="mt-8 p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left flex flex-col gap-1">
                <h4 className="text-sm font-bold uppercase text-slate-900 dark:text-slate-100">Love the Continuous Report Layout?</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  You can print or save the beautifully formatted Annual Report layout directly to a high-quality PDF!
                </p>
              </div>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-energy-gradient hover:shadow-lg hover:shadow-amber-500/20 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-102 cursor-pointer shrink-0"
              >
                <Printer className="w-4 h-4" />
                Export Profile as PDF
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: CONTINUOUS ANNUAL REPORT (Executive Print Layout) */}
        {/* ========================================================================= */}
        {viewMode === 'report' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sticky Navigation Outline Bar */}
            <div className="lg:col-span-3 sticky top-24 hidden lg:flex flex-col gap-2 p-4 rounded-2xl bg-white dark:bg-[#070b12] border border-slate-200 dark:border-slate-800 no-print">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 mb-2 px-2">Report Outline</span>
              {[
                { id: 'about', label: '1. Corporate Origin' },
                { id: 'values', label: '2. Values & Mission' },
                { id: 'services', label: '3. Asset Verticals' },
                { id: 'board', label: '4. Executive Leadership' },
                { id: 'sovereign', label: '5. Sovereign Accreditations' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-3 py-2 text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase hover:text-amber-500 transition-colors border-l-2 border-transparent hover:border-amber-500/30"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />
              <button
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-energy-gradient text-white text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:scale-102 cursor-pointer shadow-md"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
            </div>

            {/* Continuous Corporate Ledger (Printed Element) */}
            <div className="lg:col-span-9 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#070b12] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-16 text-left print:p-0 print:border-none print:shadow-none">
              
              {/* Report Header Letterhead */}
              <div className="border-b border-slate-200 dark:border-slate-800/80 pb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 dark:bg-white/5 border border-amber-500/20 p-1.5 shrink-0 flex items-center justify-center">
                    <img src="/images/logo.png" alt="Nea Tasi Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Nea Tasi Oil and Gas Services</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">Corporate Register • Profile Booklet 2026</span>
                  </div>
                </div>
                <Bookmark className="w-5 h-5 text-amber-500 print:hidden" />
              </div>

              {/* Page 1: Corporate Origin */}
              <section id="about" className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-500">01</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide">Corporate Origin & Overview</h3>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800/80" />
                <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed mt-2">
                  Nea Tasi Oil and Gas Services is a dynamic, forward-looking multinational corporation headquartered in Nigeria, with operations spanning the United Arab Emirates and South Sudan. Founded in 2024, Nea Tasi has rapidly positioned itself as a key player across Africa and the Middle East, offering a broad spectrum of energy, natural resources, and infrastructure solutions.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                  With a leadership team of seasoned professionals and industry experts, Nea Tasi operates at the intersection of energy security, resource development, and sustainable infrastructure — bringing world-class expertise to emerging and established markets alike.
                </p>
              </section>

              {/* Page 2: Values & Mission */}
              <section id="values" className="flex flex-col gap-5 print-page-break">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-500">02</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide">Corporate DNA & Values</h3>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800/80" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 print-card-bg">
                    <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">MISSION DIRECTIVE</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                      To harness the full potential of natural resources through innovation, integrity, and strategic partnerships — delivering energy solutions and infrastructure that power communities and economies across Africa and beyond.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/60 print-card-bg">
                    <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">VISION DIRECTIVE</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                      To be Africa\'s most trusted and diversified energy and resources company, recognised globally for excellence, sustainability, and transformative impact across the energy, mining, and construction sectors.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Core Principles</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {coreValues.map((val) => (
                      <div key={val.name} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 print-card-bg">
                        <span className="text-xs font-bold text-amber-500 uppercase">{val.name}</span>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Page 3: Asset Verticals */}
              <section id="services" className="flex flex-col gap-5 print-page-break">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-500">03</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide">Ten Strategic Business Verticals</h3>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800/80" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 print:grid-cols-2">
                  {divisions.map((div, i) => (
                    <div 
                      key={div.title}
                      className="p-5 rounded-2xl bg-slate-50/40 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between min-h-[160px] print-card-bg"
                    >
                      <div className="flex flex-col">
                        <span className="text-[9px] font-extrabold text-slate-400">VERT. 0{i + 1}</span>
                        <h4 className="text-xs font-extrabold uppercase text-slate-900 dark:text-slate-100 mt-1">{div.title}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">{div.desc}</p>
                      </div>
                      <div className="border-t border-slate-100 dark:border-slate-800/60 mt-4 pt-2.5 flex items-center justify-between text-[9px] text-slate-400 dark:text-slate-500">
                        <span className="uppercase">{div.capacity}</span>
                        <span className="font-bold text-amber-500">{div.stat}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Page 4: Board & Leadership */}
              <section id="board" className="flex flex-col gap-5 print-page-break">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-500">04</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide">Governance & Leadership</h3>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800/80" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leaders.map((leader) => (
                    <div 
                      key={leader.name}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-950/20 print-card-bg"
                    >
                      <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">{leader.role}</span>
                      <h4 className="text-sm font-extrabold uppercase text-slate-900 dark:text-slate-100 mt-1">{leader.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-2">{leader.bio}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Page 5: Sovereign Credentials & Locations */}
              <section id="sovereign" className="flex flex-col gap-6 print-page-break">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-500">05</span>
                  <h3 className="text-lg font-bold uppercase tracking-wide">Sovereign Credentials & Global Coordinates</h3>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-800/80" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left: Certifications */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Registries & Bilateral Accords</h4>
                    
                    <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 print-gold-border flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        <h5 className="text-xs font-extrabold uppercase text-slate-900 dark:text-slate-100">Crude Association of South Sudan</h5>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                        Nea Tasi is a registered member of the Crude Association of South Sudan, aligning midstream trading assets with sovereign East African coordinates.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 print-gold-border flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        <h5 className="text-xs font-extrabold uppercase text-slate-900 dark:text-slate-100">Minister of Petroleum Bilateral Accord</h5>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                        Ongoing agreement with the Minister of Petroleum in South Sudan equips Nea Tasi for primary drilling infrastructure coordinates.
                      </p>
                    </div>
                  </div>

                  {/* Right: Coordinates */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Office Coordinate Registry</h4>
                    
                    <div className="flex flex-col gap-3">
                      {locations.map((loc) => (
                        <div key={loc.name} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 print-card-bg">
                          <h5 className="text-xs font-extrabold uppercase text-slate-900 dark:text-slate-100">{loc.name}</h5>
                          <span className="text-[9px] font-bold text-amber-500 uppercase mt-0.5 block">{loc.coords}</span>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal mt-1">{loc.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* Report Footer */}
              <div className="border-t border-slate-200 dark:border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400">
                <span>© {new Date().getFullYear()} Nea Tasi Oil and Gas Services. Technical Registry Booklet.</span>
                <span className="font-bold text-amber-500">ISO 9001 • HSE CERTIFIED STATUS</span>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
