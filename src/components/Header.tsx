'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Profile', path: '/profile' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950/80 dark:bg-white/5 border border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 p-1.5 shrink-0">
              <img src="/images/logo.png" alt="Neatasi Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-amber-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold tracking-wider uppercase font-sans">
              Nea Tasi
              <span className="text-amber-500 font-extrabold text-sm ml-1 group-hover:animate-pulse">Oil & Gas</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 hover:text-amber-500"
                >
                  <span className={isActive ? 'text-amber-500 font-bold' : 'text-slate-600 dark:text-slate-300'}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-energy-gradient rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 h-10 w-10 rounded-lg glass-card flex items-center justify-center hover:text-amber-500 transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <Link
              href="/contact"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-energy-gradient text-white shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-102"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 h-9 w-9 rounded-lg glass-card flex items-center justify-center hover:text-amber-500 transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Burger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 h-9 w-9 rounded-lg glass-card flex items-center justify-center text-slate-700 dark:text-slate-200"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 max-w-full bg-slate-900/95 dark:bg-slate-950/98 backdrop-blur-lg border-l border-white/10 text-white z-50 flex flex-col p-6 md:hidden"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold tracking-wider uppercase text-amber-500">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex flex-col gap-5 flex-grow">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-lg font-semibold tracking-wide uppercase py-2 border-b border-white/5 hover:text-amber-500 transition-colors ${
                        isActive ? 'text-amber-500 pl-2 border-l-2 border-l-amber-500 border-b-0' : 'text-slate-300'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Drawer Call-to-Action */}
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="w-full text-center py-3 text-sm font-bold uppercase tracking-wider rounded-lg bg-energy-gradient text-white"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
