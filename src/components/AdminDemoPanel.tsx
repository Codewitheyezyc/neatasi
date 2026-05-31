'use client';

import React, { useState, useEffect } from 'react';
import { getProjects, addProject, deleteProject, resetToDefaults, Project } from './ProjectStore';
import { Settings, Plus, Trash2, RotateCcw, X, Check, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDemoPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<'manage' | 'add'>('manage');

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Project['category']>('Exploration');
  const [status, setStatus] = useState<Project['status']>('Ongoing');
  const [location, setLocation] = useState('');
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState('/images/exploration.jpg'); // default fallback

  const [notif, setNotif] = useState<string | null>(null);

  const refreshProjects = () => {
    setProjects(getProjects());
  };

  useEffect(() => {
    refreshProjects();
    const handleUpdate = () => {
      refreshProjects();
    };
    window.addEventListener('neatasi-projects-updated', handleUpdate);
    return () => window.removeEventListener('neatasi-projects-updated', handleUpdate);
  }, []);

  const triggerNotification = (msg: string) => {
    setNotif(msg);
    setTimeout(() => setNotif(null), 3000);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !location) {
      triggerNotification('Please fill all required fields');
      return;
    }

    // Set matching image based on category
    let categoryImage = '/images/exploration_rig.png';
    if (category === 'Refining') categoryImage = '/images/refinery_hero.png';
    if (category === 'Infrastructure') categoryImage = '/images/energy_pipeline.png';
    if (category === 'Logistics') categoryImage = '/images/exploration_rig.png';

    addProject({
      title,
      description,
      category,
      status,
      location,
      featured,
      image: categoryImage,
      date: new Date().toISOString().split('T')[0]
    });

    // Reset Form
    setTitle('');
    setDescription('');
    setLocation('');
    setFeatured(false);
    triggerNotification('Project added to database!');
    setActiveTab('manage');
  };

  const handleDelete = (id: string) => {
    deleteProject(id);
    triggerNotification('Project deleted from database');
  };

  const handleReset = () => {
    if (confirm('Reset database to default Neatasi projects?')) {
      resetToDefaults();
      triggerNotification('Database reset to initial projects');
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-energy-gradient text-white flex items-center justify-center shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.6)] cursor-pointer transition-all duration-300 floating-widget group border border-amber-400/20"
        title="Admin Control Simulator"
      >
        <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-semibold">
          Admin Dashboard Simulator
        </span>
      </button>

      {/* Modal Backdrop and Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl max-h-[85vh] rounded-2xl glass-card border border-amber-500/20 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-100/50 dark:bg-slate-900/40">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-amber-500 animate-spin-slow" />
                  <div>
                    <h2 className="font-bold text-base tracking-wide uppercase">
                      Admin Dashboard Simulator
                    </h2>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wide">
                      NEATASI OIL & GAS • MARKETING SYNC
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('manage')}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'manage'
                      ? 'border-b-2 border-amber-500 text-amber-500 bg-amber-500/5'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  Manage Projects ({projects.length})
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === 'add'
                      ? 'border-b-2 border-amber-500 text-amber-500 bg-amber-500/5'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  Add Project
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === 'manage' ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate-400">Active Pipeline Database</span>
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-500 font-bold transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reset Defaults
                      </button>
                    </div>

                    {projects.length === 0 ? (
                      <div className="text-center py-12 text-slate-400">
                        No projects in local storage database. Click "Add Project" or "Reset Defaults".
                      </div>
                    ) : (
                      projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/20 hover:border-amber-500/30 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            {/* Dummy thumb indicator */}
                            <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-amber-500">
                                {proj.category.substring(0, 3).toUpperCase()}
                              </span>
                            </div>
                            <div className="overflow-hidden">
                              <h4 className="text-xs font-bold truncate pr-2">{proj.title}</h4>
                              <p className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                                <span className="font-semibold">{proj.location}</span>
                                <span>•</span>
                                <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-[9px] font-bold text-amber-500">
                                  {proj.status}
                                </span>
                                {proj.featured && (
                                  <span className="px-1.5 py-0.2 rounded bg-green-500/10 text-[9px] font-bold text-green-500">
                                    Featured
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(proj.id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 rounded hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                            title="Delete project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleAdd} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                        Project Title <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Melut Basin Refinery Expansion"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                        Project Description <span className="text-amber-500">*</span>
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Detailed outline of engineering and operation..."
                        className="w-full h-20 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs resize-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                          Category <span className="text-amber-500">*</span>
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as Project['category'])}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs dark:text-slate-100"
                        >
                          <option value="Exploration">Exploration</option>
                          <option value="Refining">Refining</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Logistics">Logistics</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                          Status <span className="text-amber-500">*</span>
                        </label>
                        <select
                          value={status}
                          onChange={(e) => setStatus(e.target.value as Project['status'])}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs dark:text-slate-100"
                        >
                          <option value="Ongoing">Ongoing</option>
                          <option value="Completed">Completed</option>
                          <option value="Upcoming">Upcoming</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                        Location Coordinates <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Muglad Basin, South Sudan"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-1 py-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/10 dark:bg-slate-900/10">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                      />
                      <label htmlFor="featured" className="text-xs font-bold uppercase tracking-wide select-none cursor-pointer">
                        Feature on Marketing Homepage
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 mt-2 rounded-xl bg-energy-gradient text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-lg hover:shadow-amber-500/25 transition-all cursor-pointer"
                    >
                      Commit to Project Pipeline
                    </button>
                  </form>
                )}
              </div>

              {/* Notification Banner */}
              <AnimatePresence>
                {notif && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="absolute bottom-4 left-4 right-4 bg-slate-900 border border-amber-500/30 text-white text-xs px-4 py-2.5 rounded-lg flex items-center justify-between shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="font-semibold">{notif}</span>
                    </div>
                    <button onClick={() => setNotif(null)} className="text-slate-400 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
