'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-950/80 dark:bg-white/5 border border-amber-500/20 group-hover:border-amber-500/40 transition-colors p-1 shrink-0">
                <img src="/images/logo.png" alt="Neatasi Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold tracking-wider uppercase">
                Neatasi <span className="text-amber-500 font-extrabold text-xs">Oil & Gas</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Making energy accessible, reliable, and sustainable. Driving global industry power through cutting-edge, sustainable solutions in extraction, refining, and distribution.
            </p>
            <div className="mt-4">
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Founded July 8, 2024. Justin Campbell O., Founder.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Corporate Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">About History</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">Key Divisions</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-500 transition-colors">Active Operations</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact Terminals</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Contact Terminals
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <a href="mailto:info@neatasioilserve.com" className="hover:text-amber-500 transition-colors break-all">
                  info@neatasioilserve.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+2349134088796" className="hover:text-amber-500 transition-colors">
                    +234 913 408 8796
                  </a>
                  <a href="tel:+2347033985964" className="hover:text-amber-500 transition-colors">
                    +234 703 398 5964
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Global Operations Offices */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Global Coordinates
            </h3>
            <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">Nigeria Office:</span>
                  <br />
                  8b Akinola Adegunwa - Omole Phase 1, Lagos.
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">UAE Office:</span>
                  <br />
                  131VL08 Sharjah.
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">South Sudan:</span>
                  <br />
                  Melut Operations, Juba.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Nea Tasi Oil and Gas Services. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span className="hover:text-amber-500 cursor-pointer">Quality System ISO 9001</span>
            <span className="hover:text-amber-500 cursor-pointer">HSE Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
