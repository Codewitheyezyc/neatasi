'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General operational inquiry');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-16">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Contact Terminal</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">
          Get in Touch
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Operational, refining, and trade pipelines are fully active. Reach out to our regional offices for joint-ventures, trade procurements, or exploratory partnerships.
        </p>
      </section>

      {/* Grid: Details and Form */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 mb-1">
            Operational Coordinates
          </h2>

          {/* Email Card */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-amber-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide">Corporate Communication</h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wide mt-0.5">
                SECURE MAIL PIPELINE
              </p>
              <a
                href="mailto:info@neatasioilserve.com"
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-500 transition-colors block mt-2.5 break-all"
              >
                info@neatasioilserve.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-amber-500/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide">Hotline Coordinates</h3>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wide mt-0.5">
                24/7 TERMINAL HOTLINES
              </p>
              <div className="flex flex-col gap-1 mt-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <a href="tel:+2349134088796" className="hover:text-amber-500 transition-colors">
                  +234 913 408 8796
                </a>
                <a href="tel:+2347033985964" className="hover:text-amber-500 transition-colors">
                  +234 703 398 5964
                </a>
              </div>
            </div>
          </div>

          {/* Offices List Card */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex flex-col gap-4 hover:border-amber-500/20 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wide">Regional Terminals</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wide mt-0.5">
                  PHYSICAL DEPLOYMENTS
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4 mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <div>
                <span className="font-extrabold uppercase text-slate-800 dark:text-slate-200">Nigeria HQ Terminal:</span>
                <p className="mt-1">8b Akinola Adegunwa - Omole Phase 1, Lagos.</p>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
                <span className="font-extrabold uppercase text-slate-800 dark:text-slate-200">Dubai Trade Terminal:</span>
                <p className="mt-1">131VL08 Sharjah, United Arab Emirates.</p>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-3">
                <span className="font-extrabold uppercase text-slate-800 dark:text-slate-200">South Sudan Terminal:</span>
                <p className="mt-1">Melut Operations Base, Juba.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3">
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl relative min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 w-full"
                >
                  <h2 className="text-lg font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-4 mb-2">
                    Transmission Form
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Michelle Harmington"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs font-semibold"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                        Corporate Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. director@harmington.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs font-semibold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 7911 123456"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                        Assoc. Service Division
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs font-semibold dark:text-slate-100"
                      >
                        <option value="General operational inquiry">General operational inquiry</option>
                        <option value="Refining contracts (AGO/PMS)">Refining contracts (AGO/PMS)</option>
                        <option value="Procurement & supply partnerships">Procurement & supply partnerships</option>
                        <option value="Pipeline infrastructure collaboration">Pipeline infrastructure collaboration</option>
                        <option value="Onshore/Offshore Exploratory joint-ventures">Onshore/Offshore joint-ventures</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                      Transmission details <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline joint venture coordinates or crude procurement requirements..."
                      className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/20 dark:bg-slate-900/30 focus:outline-none focus:border-amber-500 transition-colors text-xs resize-none font-semibold"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 mt-2 rounded-xl bg-energy-gradient text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting telemetry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Transmit Operations Query
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center flex flex-col items-center gap-4 py-10"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
                  <h2 className="text-xl font-extrabold uppercase tracking-wide">
                    Transmission Complete!
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                    Telemetry successfully received. Our operations team in Sharjah or Lagos will reach out to your corporate coordinates within 12 standard pipeline hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 mt-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
