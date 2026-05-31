'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects, Project } from '@/components/ProjectStore';
import { Compass, CheckCircle2, Clock, Calendar, Database, Filter, Activity } from 'lucide-react';

const CATEGORIES: ('All' | Project['category'])[] = ['All', 'Exploration', 'Refining', 'Infrastructure', 'Logistics'];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>('All');

  const loadProjects = () => {
    setProjects(getProjects());
  };

  useEffect(() => {
    loadProjects();
    const handleUpdate = () => {
      loadProjects();
    };
    window.addEventListener('neatasi-projects-updated', handleUpdate);
    return () => window.removeEventListener('neatasi-projects-updated', handleUpdate);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />;
      case 'Ongoing':
        return <ActivityIcon className="w-4 h-4 text-amber-500 shrink-0" />;
      case 'Upcoming':
        return <Clock className="w-4 h-4 text-sky-500 shrink-0" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Corporate Operations</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">
          Our Operational Pipelines
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Dynamic operations span complex refining setups, pipeline terminals, logistics distribution nodes, and structural explorations. Manage this pipeline live using the **Admin Simulator Panel**!
        </p>
      </section>

      {/* Filter Options Nav */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-slate-400 self-start sm:self-auto">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Filter Coordinates</span>
        </div>

        <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-energy-gradient text-white shadow-md'
                    : 'glass-card border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid Container */}
      <section className="min-h-[40vh]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1 md:col-span-3 text-center py-20 text-slate-500 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white/5 p-8"
              >
                <div className="max-w-md mx-auto flex flex-col items-center gap-4">
                  <Database className="w-12 h-12 text-amber-500/30 animate-bounce" />
                  <h3 className="font-bold text-slate-700 dark:text-slate-200 uppercase text-xs tracking-wider">No matching operations</h3>
                  <p className="text-xs text-slate-400">
                    There are currently no operations categorized under "{activeFilter}". Open the floating **Admin Simulator Panel** (bottom right) to add a new project under this category!
                  </p>
                </div>
              </motion.div>
            ) : (
              filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl glass-card overflow-hidden border border-slate-200 dark:border-slate-800 group hover:border-amber-500/30 flex flex-col h-full shadow-sm hover:shadow-md"
                >
                  {/* Category Backdrop */}
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
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-950/80 text-[9px] font-bold text-white border border-white/10 backdrop-blur-sm">
                      {getStatusIcon(proj.status)}
                      <span className="uppercase tracking-wider">{proj.status}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow gap-3 bg-white/5 dark:bg-slate-950/5">
                    <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      {proj.location}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed flex-grow font-medium">
                      {proj.description}
                    </p>

                    {/* Metadata footer */}
                    <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-2 flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        Date
                      </span>
                      <span>{proj.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

// Simple internal helper component for Ongoing pulse indicator
function ActivityIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Activity className="w-full h-full text-amber-500" />
      <span className="absolute inset-0 rounded-full border border-amber-500 animate-ping opacity-75" />
    </div>
  );
}
